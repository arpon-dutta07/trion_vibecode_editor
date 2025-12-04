import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  db: PrismaClient
}

export const db = globalForPrisma.db || new PrismaClient({
  datasources: {
    db: {
      url: process.env.MONGODB_URI,
    },
  },
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.db = db
