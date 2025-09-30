import { NextResponse } from "next/server";
import { deleteArticle } from "@/lib/actions";
export async function DELETE(request: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const error  = await deleteArticle(slug);
  if (error) return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ success: true });
}