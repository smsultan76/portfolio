import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message, turnstileToken } = await request.json();
        if (!turnstileToken) {
            return Response.json(
                { error: 'Security verification is required.' },
                { status: 400 }
            )
        }

        if (!name || !email || !message) {
            return Response.json(
                { error: 'Name, email and message are required.' },
                { status: 400 }
            );
        }
        const turnstileResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                secret: process.env.TURNSTILE_SECRET_KEY,
                response: turnstileToken,
                remoteip: request.headers.get('x-forwarded-for') || '',
            }),
        });
        const turnstileResult = await turnstileResponse.json();
        if (!turnstileResult.success) {
            console.error(
                'Turnstile verification failed:',
                turnstileResult
            );
            return Response.json(
                { error: 'Security verification failed. Please try again.' },
                { status: 403 },
            );
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.EMAIL,
            replyTo: email,
            subject: subject || `Portfolio message from ${name}`,
            text: `Name: ${name}
                    Email: ${email}
                    Subject: ${subject || 'No subject'}
                    Message: ${message}`,
        });

        return Response.json({
            success: true,
            message: 'Message sent successfully.',
        });
    } catch (error) {
        console.error('Contact form error: ', error);
        return Response.json(
            { error: 'Failed to send email.' },
            { status: 500 }
        );
    }
}