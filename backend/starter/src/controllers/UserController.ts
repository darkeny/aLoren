import { PrismaClient, Role, Sexo, Stamps, User } from "@prisma/client";

class UserController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<User, 'id'>) {
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

    async findAll() {
        try {
            return this.prisma.user.findMany({
                //#Algoritmo
            })
        } catch (e) {
            return e;
        }
    }

    async delete() {
        try {
            //# Algoritmo
        } catch (e) {
            return e;
        }
    }

    async update() {
        try {
            return this.prisma.user.update({
                where: {
                    id: "757f4c67-99ab-4ee2-ac53-2e6fdc79fd80",
                },
                data:{
                   role: Role.USER,
                   verified: Stamps.VERIFIED
                }
                
            })
        } catch (e) {
            return e;
        }
    }

}
export default UserController;