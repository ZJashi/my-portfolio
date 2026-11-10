import { NextResponse } from "next/server";
import { notesEnabled } from "@/lib/notes-visibility";

export function middleware() {
  if (notesEnabled) return NextResponse.next();

  // Stop before rendering: a layout-only 404 can still serialize child content.
  return new NextResponse("This page could not be found.", {
    status: 404,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });
}

export const config = { matcher: ["/notes/:path*"] };
