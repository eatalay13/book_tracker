import { prisma } from "@/lib/prisma";
import { SavePageDto } from "@/lib/types";

export async function savePage(page: SavePageDto) {
  const pageResult = await prisma.pageCount.create({
    data: {
      userId: page.userId,
      count: page.count,
      createdAt: new Date(),
    },
  });

  return pageResult;
}
