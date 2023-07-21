import { withAuth, NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

const middleware = (req: NextRequestWithAuth) => {
  if (
    req.nextUrl.pathname.startsWith('/users') &&
    req.nextauth.token?.role !== 'admin'
  ) {
    return NextResponse.rewrite(new URL('/404', req.url));
  }
};

export default withAuth(middleware, { callbacks: {
  authorized: ({ req, token }) => {
    if (token || req.nextUrl.pathname === '/') {
      return true;
    }

    return false;
  }
}});
