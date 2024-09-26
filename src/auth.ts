import { getUserFromDb } from "@/data/userRepo";
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id?: string;
    username: string;
    firstname?: string | null;
    lastname?: string | null;
    phone?: string | null;
  }

  interface Session {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    email?: string | null | undefined;
    username: string;
    firstname?: string | null;
    lastname?: string | null;
    phone?: string | null;
  }
}

// NextAuth konfigürasyonu
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
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
        let dbUser = await getUserFromDb(
          credentials.username as string,
          credentials.password as string,
        );

        if (!dbUser) {
          return null;
        }

        const user: User = {
          id: dbUser.id.toString(),
          name: dbUser.username,
          email: "test@gmail.com", // Email'i veritabanınızdan çekin veya dummy olarak bırakın
          firstname: dbUser.firstname,
          lastname: dbUser.lastname,
          username: dbUser.username,
          phone: dbUser.phone,
        };

        return user;
      },
    }),
  ],

  callbacks: {
    // Kullanıcı session'ına ek verileri dahil etmek için session callback
    async session({ session, token, user }) {
      if (session.user) {
        session.user.id = token.id ?? "";
        session.user.username = token.username;
        session.user.firstname = token.firstname;
        session.user.lastname = token.lastname;
        session.user.phone = token.phone;
      }

      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.firstname = user.firstname;
        token.lastname = user.lastname;
        token.phone = user.phone;
      }

      return token;
    },
  },

  session: {
    strategy: "jwt",
  },
});
