'use server'
import { revalidatePath } from 'next/cache';
import {redirect} from 'next/navigation';
import { ArticleService } from "@/services/ArticleService"

export async function insertArticle(title: string, content: string) {
   const artd = await ArticleService.createArticle({
    title,
    content,
    slug:'new-features-in-react-18',
    created_at: new Date().toISOString(),
    author_id:'1378d07b-d2ec-4497-95fc-915b969bfdb2'
  })
  console.log(artd)

  revalidatePath('/blog');
  redirect('/blog');
}