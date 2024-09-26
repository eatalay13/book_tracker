import { auth } from "@/auth";
import { savePage } from "@/data/pageRepo";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const session = await auth();

  if (!session?.user) return Response.error();

  const { count } = await request.json();

  await savePage({
    count,
    userId: parseInt(session?.user.id ?? "0", 0),
  });

  // Return the user object
  return Response.json({ count });
}
