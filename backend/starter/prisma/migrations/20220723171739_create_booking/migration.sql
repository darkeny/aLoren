-- CreateTable
CREATE TABLE `Booking` (
    `id` VARCHAR(191) NOT NULL,
    `room_number` INTEGER NOT NULL,
    `startDate` TIMESTAMP NOT NULL,
    `endDate` TIMESTAMP NOT NULL,
    `userId` VARCHAR(191) NULL,
    `roomsId` VARCHAR(191) NULL,

    UNIQUE INDEX `Booking_room_number_key`(`room_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_roomsId_fkey` FOREIGN KEY (`roomsId`) REFERENCES `Rooms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
