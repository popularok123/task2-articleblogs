'use client';


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

// import { useState } from "react";
import {updateArticle} from "@/lib/actions"
import { Article } from "@/lib/modetypes";


export default function EditBlogPost({ post}: { post: Article }) {
  //  const [title, setTitle] = useState('');
  //  const [content, setContent] = useState('');
 const updateInvoiceWithId = updateArticle.bind(null, post);
   return (
        <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>编辑新文章</CardTitle>
        </CardHeader>
        <form action={updateInvoiceWithId}>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">标题</Label>
              <Input
                id="title"
                name ="title"
                defaultValue={post.title}
                // onChange={(e) => setTitle(e.target.value)}
                placeholder="输入文章标题"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">内容</Label>
              <Textarea
                id="content"
                name="content"
                defaultValue={post.content!}
                // onChange={(e) => setContent(e.target.value)}
                placeholder="输入文章内容..."
                rows={12}
                // defaultValue={post.content!}
                required
              />
            </div>
          </CardContent>
          <div>
 <Button type="submit">编辑博客</Button>
          </div>
           
        </form>
      </Card>
    </div>
   )
}