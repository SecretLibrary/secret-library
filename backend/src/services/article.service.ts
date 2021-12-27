import { ArticleModel } from '@/models/article.model'
import { Article } from '@/types/article.type'

export async function addArticle (article: Article.Article) {
  const articleModel = new ArticleModel(article)
  const result = await articleModel.save()

  return result
}

export async function removeArticle (articleId: string) {
  await ArticleModel.findOneAndRemove({ _id: articleId })
}
