import { Schema } from 'mongoose'
import { Article } from '@/types/article.type'

const UserInfo = {
  userName: String,
  userId: String,
  profileImage: String
}

export const ArticleSchema = new Schema<Article.Article>({
  imageUrlList: [{
    type: String
  }],
  userId: { type: String, required: true },
  articleItems: [{
    title: String,
    text: String,
    order: Number
  }],
  userInfo: UserInfo,
  createAt: Date,
  likey: [{
    userInfo: UserInfo
  }],
  comment: [{
    userInfo: UserInfo,
    text: String,
    createdAt: Date
  }],
  meetingKey: String
})
