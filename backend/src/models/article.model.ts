import { model } from 'mongoose'
import { ArticleSchema } from '@/schema/article.schema'
import { Article } from '@/types/article.type'

export const ArticleModel = model<Article.Article>('Article', ArticleSchema)
