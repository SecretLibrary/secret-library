import { Response } from 'express'
import { API } from '@/types/api.type'

const defaultSuccessResponse: API.Response<any> = {
  status: 200,
  success: true,
  message: 'success'
} 

const defaultErrorResponse: API.Response<any> = {
  status: 400,
  success: false,
  result: null,
  message: 'Error'
}

export function success <T> (res: Response, result: T, successResponse: Partial<API.Response<T>> = {}) {
  const response: API.Response<T> = {
    ...defaultSuccessResponse,
    ...successResponse,
    result
  }

  return res.status(200).json(response)
}

export function failed <T> (res: Response, errorResponse: Partial<API.Response<T>> = {}) {
  const response: API.Response<T> = {
    ...defaultErrorResponse,
    ...errorResponse
  }

  return res.status(response.status).json(response)
}
