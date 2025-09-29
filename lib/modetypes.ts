import { Database } from './database.types'

export type Article = Database["public"]["Tables"]["articles"]["Row"]
export type NewArticle = Database["public"]["Tables"]["articles"]["Insert"]
export type UpdateArticle = Database["public"]["Tables"]["articles"]["Update"]


export interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  author: string
  slug: string
}
