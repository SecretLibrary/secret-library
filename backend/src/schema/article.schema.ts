import { Schema } from 'mongoose'
import { Article } from '@/types/article.type'

export const UserInfoSchema = new Schema<Article.UserInfo>({
  userName: String,
  userId: String,
  profileImage: String
})


export const BookSchema = new Schema<Article.Book>({
  datetime: Date,
  thumbnail: String,
  contents: String,
  price: Number,
  isbn: String,
  publisher: String,
  title: String,
  url: String,
  authors: [{ type: String }]
})

export const QuestionSchema = new Schema<Article.Question>({
  title: String,
  text: String,
  order: Number
})

export const CommentSchema = new Schema<Article.Comment>({
  userInfo: {
    type: UserInfoSchema,
    required: true
  },
  text: String,
  createdAt: Date
})

export const LikeySchema = new Schema<Article.Likey>({
  userInfo: {
    type: UserInfoSchema,
    required: true
  }
})

export const ArticleSchema = new Schema<Article.Article>({
  imageUrlList: [{
    type: String
  }],
  articleItems: [{
    title: String,
    text: String,
    order: Number
  }],
  userInfo: {
    type: UserInfoSchema,
    required: true
  },
  bookInfo: {
    type: BookSchema,
    required: true
  },
  createAt: Date,
  likey: [{ type: LikeySchema }],
  comment: [{ type: CommentSchema }],
  meetingKey: String
})
