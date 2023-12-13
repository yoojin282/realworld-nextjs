import NextAuth, { AuthError } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: '이메일',
          type: 'text',
          placeholder: '이메일을 입력하세요.',
        },
        password: { label: '비밀번호', type: 'password' },
      },
      async authorize(credentials) {
        const res = await fetch(`${process.env.BASE_API_URL}/users/login`, {
          method: 'POST',
          body: JSON.stringify({
            user: credentials,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.status === 403) return null;

        const { user } = await res.json();
        if (res.ok && user) {
          return {
            id: user.email,
            email: user.email,
            name: user.username,
            bio: user.bio,
            image: user.image,
            token: user.token,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.token;
      }

      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      session.accessToken = token.accessToken;
      return Promise.resolve(session);
    },
  },
});
