import { getUserFromDb } from "@/data/userRepo";
import { saltAndHashPassword } from "@/utils/password";
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
  providers: [
    credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        // logic to salt and hash password
        const pwHash = await saltAndHashPassword(
          credentials.password as string,
        );

        // logic to verify if the user exists
        user = await getUserFromDb(credentials.username as string, pwHash);

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
