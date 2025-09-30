
import { NextResponse } from "next/server"
import { insertArticle } from "@/lib/actions";

export async function POST(request: Request) {
   const body = await request.json();
   const { title, content } = body;
  if (!title || !content) {
    return NextResponse.json({ error: "Missing title or content" }, { status: 400 });
  }
  await insertArticle(title as string, content as string);
  return NextResponse.json({ message: "Article created successfully"});
}