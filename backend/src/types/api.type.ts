export declare namespace API {
  export interface Response<T> {
    message: string | null
    success: boolean
    status: number
    result?: T
  }
}
