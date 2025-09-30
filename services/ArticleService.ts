import { Article,NewArticle,UpdateArticle  } from '@/lib/modetypes';
import { createClient } from '@/utils/supabase/server';

export class ArticleService {
  static async getArticles(): Promise<Article[]> {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('articles').select()
      .select('id, title, slug, created_at,content, author_id')
      .order('created_at', { ascending: false })

    if (error) throw new Error(error.message)
    return data || []
  }

  static async getArticleBySlug(slug: string): Promise<Article> {
      const supabase = await createClient()
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw new Error(error.message)
    return data
  }

  static async createArticle(articleData: Partial<NewArticle>): Promise<Article> { 
      const supabase = await createClient()
    const { data, error } = await supabase
      .from('articles')
      .insert([articleData])
      .select()
      .single()

    if (error) throw new Error(error.message)
    return data
  }

   static async updateArticleBySlug(slug: string,  updateData: Partial<UpdateArticle>) {
      const supabase = await createClient()
    const { data, error } = await supabase
      .from('articles')
      .update(updateData)
      .eq('slug', slug)
      .select()
      .single()

    if (error) throw new Error(error.message)
    return data
  }

  static async updateArticle(id: number,  updateData: Partial<UpdateArticle>) {
      const supabase = await createClient()
    const { data, error } = await supabase
      .from('articles')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) throw new Error(error.message)
    return data
  }

  static async deleteArticle(id: number) {
      const supabase = await createClient()
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id)

    if (error) throw new Error(error.message)
    return true
  }
}
