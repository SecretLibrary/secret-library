import { model } from 'mongoose'
import { HelloSchema } from '@/schema/hello.schema'

export const Hello = model('Hello', HelloSchema)
