import { PrismaClient, Rooms } from "@prisma/client";

class RoomsController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<Rooms, 'id'>) {
        try {
            return this.prisma.rooms.create({
                data: {
                    ...data,
                }
            });
        } catch (e) {
            return e;
        }
    }
}
export default RoomsController;