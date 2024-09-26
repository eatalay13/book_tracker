import { MiddlewareConfig } from "next/server";
import { auth } from "./auth";

export default auth((req) => {
  if (!req.auth) {
    return Response.redirect(new URL("/api/auth/signin", req.url));
  }
});

export const config: MiddlewareConfig = {
  matcher: ["/", "/report", "/profile", "/leaderboard"],
};
