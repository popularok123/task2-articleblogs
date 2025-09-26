import { BlogPostCard } from "@/components/blog-post-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// 模拟博客文章数据
const posts = [
  {
    id: 1,
    title: "开始使用 Next.js 构建现代网站",
    excerpt:
      "Next.js 是一个强大的 React 框架，它使构建现代网站变得简单而高效。在本文中，我们将探讨如何开始使用 Next.js...",
    date: "2023-04-18",
    author: "张明",
    slug: "getting-started-with-nextjs",
  },
  {
    id: 2,
    title: "使用 Tailwind CSS 加速你的开发流程",
    excerpt: "Tailwind CSS 是一个实用优先的 CSS 框架，它可以帮助你快速构建现代网站，而无需离开你的 HTML...",
    date: "2023-04-15",
    author: "李华",
    slug: "speed-up-development-with-tailwind",
  },
  {
    id: 3,
    title: "React 18 中的新特性",
    excerpt: "React 18 带来了许多令人兴奋的新特性和改进，包括并发渲染、自动批处理等...",
    date: "2023-04-10",
    author: "王芳",
    slug: "new-features-in-react-18",
  },
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">我的博客</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">分享关于 Web 开发、设计和技术的见解和教程</p>
        </div>

        <div className="flex justify-center mb-8">
          <Link href="/blog/create">
            <Button size="lg">创建新文章</Button>
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">最新文章</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}