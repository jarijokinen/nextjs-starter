import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ req, token }) => {
      if (token || req.nextUrl.pathname === '/') {
        return true;
      }

      return false;
    }
  }
});
