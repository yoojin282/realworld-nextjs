import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "아이디",
          type: "text",
          placeholder: "아이디를 입력하세요.",
        },
        password: { label: "비밀번호", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch("/endpoint", {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      //   if (user) {
      //     token.accessToken = user.access_token;
      //   }
      return Promise.resolve(token);
    },
    session: async ({ session, token }) => {
      //   session.accessToken = token.accessToken;
      return Promise.resolve(session);
    },
  },
});

export { handler as GET, handler as POST };
