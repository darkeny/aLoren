import { Role, Sexo, Stamps } from "@prisma/client";
import UserController from "./controllers/UserController";

async function main(){
    const userController = new UserController;

   const user = await userController.create({
        name: "Auneta",
        sexo: Sexo.FEMALE,
        email: "aunetaguambe@gmail.com",
        role: Role.USER,
        verified: Stamps.UNVERIFIED
    });
    console.log(user)
}
main();