import { Booking, PrismaClient } from "@prisma/client";

class BookingController{
    private prisma: PrismaClient;

    constructor(){
        this.prisma = new PrismaClient();
    }

    async create(data: Omit<Booking, 'id'>){
        try {
            return this.prisma.booking.create({
                data: {
                    ...data,
                }
            });
        } catch (e) {
            return e;
        }

    }
}