import { PrismaClient, User } from "@prisma/client";

class UserController{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<User, 'id'>){
        try {
            return this.prisma.user.create({
                data: {
                    ...data,
                }
            })
        } catch (e) {
            return e;
        }
    }
}
export default UserController;