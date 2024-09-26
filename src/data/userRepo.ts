import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";

import bcrypt from "bcrypt";

export async function getUserFromDb(
  username: string,
  password: string,
): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return null;
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return null;
  }

  return user;
}
