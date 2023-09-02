// import { PrismaClient } from "prisma/prisma-client/index.js";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    return await prisma.users.findMany();
})