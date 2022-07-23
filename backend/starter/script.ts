import { PrismaClient, Role, Sexo } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
/*CreateUser
const user = await prisma.user.create({
  data: {
    name: "Darken Paulo Machava",
    sexo: Sexo.MALE,
    email: "darkenmachava@gmail.com"
  },
})
*/


/*UpdateUsers
const update = await prisma.user.update({
  where: {
    id: 1,
  },
  data:{
    email: "darkenmachava@gmail.com",
  }
})
*/
  
/*FindUsers
const user = await prisma.user.findMany()
console.log(user)
*/

/*Delete
const deleteUser = await prisma.user.delete({
  where: {
    email: "aunetaguambe009@gmail.com"
  }
})
*/
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
