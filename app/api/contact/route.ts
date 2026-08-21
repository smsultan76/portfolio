import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const { name, email, subject, message } = await request.json();

        if (!name || !email || !message) {
            return Response.json(
                { error: 'Name, email and message are required.' },
                { status: 400 }
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
            message: 'Email sent successfully.',
        });
    } catch (error) {
        console.error('Contact form error: ', error);
        return Response.json(
            { error: 'Failed to send email.' },
            { status: 500 }
        );
    }
}