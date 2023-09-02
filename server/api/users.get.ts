import { PrismaClient } from "prisma/prisma-client/index.js";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
    return await prisma.users.findMany();
})