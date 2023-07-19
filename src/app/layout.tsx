import '@/styles/globals.css';

import type { Metadata } from 'next';

import Header from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'Next.js Starter',
    template: '%s | Next.js Starter'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
