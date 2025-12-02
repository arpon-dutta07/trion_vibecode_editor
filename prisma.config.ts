import dotenv from 'dotenv'

dotenv.config()

export default {
  datasource: {
    url: process.env.MONGODB_URI,
  },
}
