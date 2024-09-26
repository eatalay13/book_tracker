"use server";

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { prisma } from "../prisma";

export async function savePage(count: number) {
  const session = await auth();

  if (!session?.user) return null;

  await prisma.pageCount.create({
    data: {
      userId: Number(session.user.id),
      count: count,
      createdAt: new Date(),
    },
  });

  revalidatePath("/leaderboard");
}
