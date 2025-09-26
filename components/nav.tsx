import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function Nav() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          博客系统
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            首页
          </Link>
          <Link href="/categories" className="text-muted-foreground hover:text-foreground">
            分类
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground">
            关于
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="搜索文章..." className="w-[200px] pl-8" />
          </div>
          <Link href="/login">
            <Button variant="outline">登录</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}