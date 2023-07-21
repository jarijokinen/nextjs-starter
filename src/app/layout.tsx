import '@/styles/globals.scss';

import type { Metadata } from 'next';
import { getAuthSession } from '@/lib/auth';
import Header from '@/components/Header';

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
  const session = await getAuthSession();
  const userEmail = session?.user?.email;

  return (
    <html lang="en">
      <body>
        <Header email={userEmail} />
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  );
}
