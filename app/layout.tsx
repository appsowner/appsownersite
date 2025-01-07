import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AppsOwner - AI Automation Services',
  description: 'Transforming businesses through intelligent automation solutions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  <html lang="en">
      <head>
        {/* Configuración del favicon */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logo.png" />
        <title>AppsOwner - AI Automation Services</title>
        <meta name="description" content="Transforming businesses through intelligent automation solutions" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
