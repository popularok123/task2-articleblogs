
import Form  from "./editForm";
import { ArticleService } from "@/services/ArticleService";
export default async function EditBlog(props: { params: Promise<{ slug: string }> }) {
       const params = await props.params;
    const slug = params.slug;
     const post = await ArticleService.getArticleBySlug(slug);
  
    return <Form post={post} />
}