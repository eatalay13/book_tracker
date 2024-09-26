import { prisma } from "@/lib/prisma";
import { SavePageDto } from "@/lib/types";
import { PageCount } from "@prisma/client";

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

export async function hasTodayData(userId: number): Promise<PageCount | null> {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const pageCount = await prisma.pageCount.findFirst({
    where: {
      userId,
      createdAt: {
        gte: today,
      },
    },
  });

  return pageCount;
}
