
export declare namespace Auth {
  type SocialType = |
    'KAKAO'

  type Auth = |
    'ADMIN' |
    'USER'

  interface User {
    userId: string;
    userName: string;
    email: string;
    completed: boolean;
    socialType: SocialType;
    rules: Array<string>;
    auth: Auth;
    profileImage?: String;
  }
}
