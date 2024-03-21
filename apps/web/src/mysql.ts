/**
 * Instantiates a single instance PrismaClient and save it on the global object.
 * @link https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices
 */
import { PrismaClient } from "@repo/database"

const prismaGlobal = global as typeof global & {
  prisma?: PrismaClient
}

export const mysql: PrismaClient = prismaGlobal.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== "production") {
  prismaGlobal.prisma = mysql
}
