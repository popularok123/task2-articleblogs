import { supabase } from '../lib/supabaseClient'

/**
 * ArticleService - 文章管理服务类
 * 功能：获取、创建、更新、删除文章
 */
export class ArticleService {
  /**
   * 获取文章列表
   * @returns {Promise<Array>} 文章数组
   */
  static async getArticles() {
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, created_at, author_id')
      .order('created_at', { ascending: false })

    if (error) throw new Error(`Failed to fetch articles: ${error.message}`)
    return data
  }

  /**
   * 获取单篇文章
   * @param {string} slug - 文章的唯一标识（slug）
   * @returns {Promise<Object>} 文章对象
   */
  static async getArticleBySlug(slug) {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw new Error(`Failed to fetch article: ${error.message}`)
    return data
  }

  /**
   * 创建文章
   * @param {Object} articleData - 文章内容 { title, slug, content }
   * @returns {Promise<Object>} 创建的文章对象
   */
  static async createArticle(articleData) {
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    if (userError) throw new Error(`Failed to get user: ${userError.message}`)
    if (!user) throw new Error('No authenticated user')

    const { data, error } = await supabase
      .from('articles')
      .insert([{
        ...articleData,
        author_id: user.id
      }])
      .select()
      .single()

    if (error) throw new Error(`Failed to create article: ${error.message}`)
    return data
  }

  /**
   * 更新文章
   * @param {number} id - 文章ID
   * @param {Object} updateData - 更新的数据 { title, content, slug }
   * @returns {Promise<Object>} 更新后的文章对象
   */
  static async updateArticle(id, updateData) {
    const { data, error } = await supabase
      .from('articles')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) throw new Error(`Failed to update article: ${error.message}`)
    return data
  }

  /**
   * 删除文章
   * @param {number} id - 文章ID
   * @returns {Promise<boolean>} 删除是否成功
   */
  static async deleteArticle(id) {
    const { error } = await supabase
      .from('articles')
      .delete()
      .eq('id', id)

    if (error) throw new Error(`Failed to delete article: ${error.message}`)
    return true
  }
}
