import { ArticleModel } from '@/models/article.model'
import { pick } from '@/helpers/object'

import { Nullable } from '@/types/base.type'
import { Article } from '@/types/article.type'
import { Auth } from '@/types/auth.type'

import Question = Article.Question
import Book = Article.Book
import User = Auth.User

export async function addArticle (
  user: User,
  bookInfo: Book,
  articleItems: Question[],
  imageUrlList: [],
  meetingKey: Nullable<String> = null
) {
  const articleModel = new ArticleModel({
    imageUrlList,
    articleItems,
    bookInfo,
    userInfo: pick(user, ['userId', 'userName', 'profileImage']),
    createAt: new Date(),
    likey: [],
    comment: [],
    meetingKey
  })

  const result = await articleModel.save()
  return result
}

export async function getArticleList () {
  const articleList: Article.Article[] = await ArticleModel.find()
  return articleList
}

export async function getArticle (articleId: string) {
  const article: Article.Article = await ArticleModel.findById(articleId)
  return article
}

export async function removeArticle (articleId: string) {
  await ArticleModel.findOneAndRemove({ _id: articleId })
}

export default {
  addArticle,
  getArticleList,
  getArticle,
  removeArticle
}
