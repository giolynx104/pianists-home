import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import type { Provider } from "next-auth/providers";
import Google from "next-auth/providers/google";
import prisma from "./lib/db";

const providers: Provider[] = [GitHub, Google];

export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider();
    return { id: providerData.id, name: providerData.name };
  } else {
    return { id: provider.id, name: provider.name };
  }
});

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const userEmail = user.email ?? "";
      const userName = user.name ?? "";

      if (userEmail !== null) {
        const existingUser = await prisma.user.findUnique({
          where: {
            email: userEmail,
          },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: userEmail,
              slug: userEmail.substring(0, userEmail.indexOf("@")),
              name: userName,
              role: "student",
            },
          });
        }
      }

      return true;
    },
  },
});
