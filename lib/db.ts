import { PrismaClient } from "@prisma/client"
// imported prisma

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient
}


export const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: {
    db: {
      url: process.env.MONGODB_URI,
    },
  },
})


if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma 


// export const prisma = new PrismaClient()
