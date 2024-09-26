import { createUserInDb } from "@/data/userRepo";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // Get the user object from the request body
  const { username, password } = await request.json();

  // Create the user in your database
  await createUserInDb({ username, password });

  // Return the user object
  return Response.json({ username });
}
