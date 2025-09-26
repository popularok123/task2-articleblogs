import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types'

export const supabase = createClient<Database>(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

export type Article = Database["public"]["Tables"]["articles"]["Row"]
export type NewArticle = Database["public"]["Tables"]["articles"]["Insert"]
export type UpdateArticle = Database["public"]["Tables"]["articles"]["Update"]