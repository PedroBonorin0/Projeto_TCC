/*
  Warnings:

  - The primary key for the `Rank` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Rank` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `rankId` on the `AlunoDisciplina` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "AlunoDisciplina" DROP CONSTRAINT "AlunoDisciplina_rankId_fkey";

-- AlterTable
ALTER TABLE "AlunoDisciplina" DROP COLUMN "rankId",
ADD COLUMN     "rankId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Rank" DROP CONSTRAINT "Rank_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Rank_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "AlunoDisciplina" ADD CONSTRAINT "AlunoDisciplina_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
