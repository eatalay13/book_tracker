import { getUserFromDb } from "@/data/userRepo";
import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

declare module "next-auth" {
  interface User {
    username: string;
    firstname?: string | null;
    lastname?: string | null;
    phone?: string | null;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: "/login",
    signOut: "/logout",
    newUser: "/register",
  },
  providers: [
    credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to verify if the user exists
        user = await getUserFromDb(
          credentials.username as string,
          credentials.password as string,
        );

        if (!user) {
          throw new Error("User not found.");
        }

        return {
          id: user.id.toString(),
          email: "test@gmail.com",
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          phone: user.phone,
        };
      },
    }),
  ],
});
