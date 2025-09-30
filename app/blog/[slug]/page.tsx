import { ArticleService } from "@/services/ArticleService";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function Page(props: { params: Promise<{ slug: string }> }) {
      const params = await props.params;
  const slug = params.slug;
   const post = await ArticleService.getArticleBySlug(slug);

   return (
    <>
         <h1 className="text-3xl font-bold">{post!.title}</h1>
      <p className="text-gray-500">{new Date(post!.created_at).toLocaleString()}</p>
      <div className="prose mt-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post!.content}</ReactMarkdown>
      </div>
    </>
)
}