-- CreateTable
CREATE TABLE `Rooms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` ENUM('SINGLE_ROOM', 'DOUBLE_ROOM', 'KING_DOUBLE_ROOM', 'LUXURY_DOUBLE_ROOM') NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `Rooms_type_key`(`type`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
