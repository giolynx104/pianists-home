import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const config = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
};

export const { signIn, signOut, handlers, auth } = NextAuth(config);
