import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/markdown";

export async function GET() {
  const posts = await getAllPosts();
  return NextResponse.json(posts);
}
