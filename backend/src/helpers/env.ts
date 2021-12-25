import path from 'path'
import dotenv from 'dotenv'

const nodeEnv = process.env.NODE_ENV || 'development'
dotenv.config({ path: path.join(__dirname, `../../.env.${nodeEnv}`) })

const dbUrl = process.env.MONGODB_URL

export {
  dbUrl
}
