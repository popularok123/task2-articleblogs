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

  static async getArticleByPage(page: number): Promise<Article[]> {
    const supabase = await createClient()
    const { data, error } = await supabase
      .from('articles').select()
      .select('id, title, slug, created_at,content, author_id')
      .order('created_at', { ascending: false })
      .range((page - 1) * ArticleService.ITEMS_PER_PAGE, page * ArticleService.ITEMS_PER_PAGE - 1)

    if (error) throw new Error(error.message)
    
       return data || []
  }

  static ITEMS_PER_PAGE: number = 3

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

  static async getArticlePages(): Promise<number> {
    const supabase = await createClient()
    const { count, error } = await supabase
      .from('articles')
      .select('*', { count: 'exact' })

    if (error) throw new Error(error.message)
    if (count === null) return 1;
    return Math.ceil(count / ArticleService.ITEMS_PER_PAGE)
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

  static async deleteArticleBySlug(slug: string) {
      const supabase = await createClient()
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('slug', slug)

    if (error) throw new Error(error.message)
    return true
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
