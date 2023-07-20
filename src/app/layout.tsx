import '@/styles/globals.scss';

import type { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

import Header from '@/components/Header';
import AuthProvider from '@/app/context/providers';

export const metadata: Metadata = {
  title: {
    default: 'Next.js Starter',
    template: '%s | Next.js Starter'
  }
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <AuthProvider session={session}>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
