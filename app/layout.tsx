// app/layout.tsx
'use client';
import { ToastProvider } from './components/ToastProvider';
import { ThemeProvider } from './context/ThemeContext';
import './globals.css';

const themeScript = `
  (function () {
    try {
      const theme = localStorage.getItem('theme');

      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript}}/>
      </head>
      <body>
        <ThemeProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}