import { prisma } from "@/lib/prisma";
import { CreateUserDto } from "@/lib/types";
import { User } from "@prisma/client";

export async function getUserFromDb(
  username: string,
  password: string,
): Promise<User | null> {
  const user = await prisma.user.findUnique({
    where: {
      username,
      password,
    },
  });

  return user;
}

/**
 * Kullanıcıyı veritabanına kaydeder
 * @param userDto Kaydedilecek kullanıcı bilgileri
 * @returns
 */
export async function createUserInDb(userDto: CreateUserDto): Promise<User> {
  const user = await prisma.user.create({
    data: {
      username: userDto.username,
      password: userDto.password,
      firstname: userDto.firstname,
      lastname: userDto.lastname,
    },
  });

  return user;
}
