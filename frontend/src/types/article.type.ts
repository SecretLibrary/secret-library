import { Nullable } from '@/types/base.type'

export declare namespace Article {
  interface Book {
    datetime: Date;
    thumbnail: string;
    contents: string;
    price: number;
    isbn: string;
    publisher: string;
    title: string;
    url: string;
    authors: string[];
  }

  interface Question {
    title: string;
    text: string;
    order: 0;
  }

  interface UserInfo {
    userName: string;
    userId: string;
    profileImage: string;
  }

  interface Likey {
    userInfo: UserInfo;
  }

  interface Comment {
    userInfo: UserInfo;
    text: string;
    createdAt: Date;
  }

  interface Article {
    _id?: string,
    imageUrlList: string[];
    articleItems: Question[];
    bookInfo: Book;
    userInfo?: UserInfo;
    createAt?: Date;
    likey?: Likey[];
    comment?: Comment[];
    meetingKey?: Nullable<string>;
  }
}
