import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    token: string;
    bio: string;
  }

  interface Session {
    accessToken: string | unknown;
  }
}
