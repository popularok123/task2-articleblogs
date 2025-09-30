'use server'
import { ArticleService } from "@/services/ArticleService"
import { Article } from "@/lib/modetypes";

export async function insertArticle(title: string, content: string) {
   const artd = await ArticleService.createArticle({
    title,
    content,
    slug:'new-features-in-react-18',
    created_at: new Date().toISOString(),
    author_id:'1378d07b-d2ec-4497-95fc-915b969bfdb2'
  })
  console.log(artd)
}

export async function updateArticle(post:Article,
  formData: FormData,
) {
  await ArticleService.updateArticleBySlug(post.slug, {
    title: formData.get('title') as string,
    content: formData.get('content') as string,
  })
}