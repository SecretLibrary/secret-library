const mongoose = require('mongoose')
import { dbUrl } from '@/helpers/env'

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch(e => {
    console.error(e)
  })
