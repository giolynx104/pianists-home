import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const config = {
  providers: [GitHub],
  pages: {
    signIn: "/login",
  },
};

export const { signIn, signOut, handlers, auth } = NextAuth(config);
