/*
  Warnings:

  - You are about to drop the column `data` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "data",
ADD COLUMN     "dataDisponibilidade" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
