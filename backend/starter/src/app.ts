import { Prisma, prisma, Role, Sexo, Stamps, TypeRoom } from "@prisma/client";
import BookingController from "./controllers/BookingController";
import RoomsController from "./controllers/RoomController";
import UserController from "./controllers/UserController";


async function main() {
    const userController = new UserController;
    const roomController = new RoomsController;
    const bookingController = new BookingController;
    
     /*  const user = await userController.create({
            name: "Auneta",
            sexo: Sexo.FEMALE,
            email: "aunetaguambe@gmail.com",
            role: Role.USER,
            verified: Stamps.UNVERIFIED
        });
        /*
    
        const room = await roomController.create({
            type: TypeRoom.DOUBLE_ROOM,
            description: "dsd",
            price: new Prisma.Decimal(110),
        });
        */
       /*
    const booking = await bookingController.create({
        room_number: 1,
        startDate: new Date(),
        endDate: new Date("2022-07-13"),
        roomsId: "9cbe4050-eab3-4d35-8952-9a804a35304f",
        userId: "3a364b51-2020-4fb3-a5d2-6c93606b6d16",
    });
    */
  const users = await userController.update();

    console.log(users)
}
main();
