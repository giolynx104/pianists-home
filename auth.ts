import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const config = {
  providers: [GitHub, Google],
  pages: {
    signIn: "/login",
  },
};

export const { signIn, signOut, handlers, auth } = NextAuth(config);
