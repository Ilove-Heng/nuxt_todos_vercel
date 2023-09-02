import { PrismaClient } from "prisma/prisma-client"
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {

  const body = await readBody(event);
  const id: number = body.id;
  const name: string = body.name;

  if(!(id && name)) return createError({statusCode: 400, statusMessage: "Missing id or name"})

  let user

  if (id && name)
    user = prisma.users.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      }
    })

  return user;

})