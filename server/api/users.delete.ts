// import { PrismaClient } from "prisma/prisma-client/index.js";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let user = null;
  let error = null;
  if (body.id)
    user = await prisma.users.delete({
      where: {
        id: body.id
      }
    }).then((response) => {
      user = response
    }).catch(async(e) => {
      error = e 
    })

    if(error) return createError({statusCode: 500, statusMessage: "server error"})



  return user;
})