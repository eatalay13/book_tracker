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
  providers: [
    credentials({
      credentials: {
        username: {
          label: "Kullanıcı Adı",
          placeholder: "Kullanıcı adınızı girin",
          type: "text",
          maxLength: 50,
        },
        password: {
          label: "Şifre",
          placeholder: "Şifrenizi girin",
          type: "password",
          maxLength: 50,
        },
      },
      authorize: async (credentials) => {
        let user = null;

        user = await getUserFromDb(
          credentials.username as string,
          credentials.password as string,
        );

        if (!user) {
          return null;
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
