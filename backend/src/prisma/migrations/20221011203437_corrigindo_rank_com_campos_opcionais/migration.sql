-- DropForeignKey
ALTER TABLE "Rank" DROP CONSTRAINT "Rank_alunoDisciplinaId_fkey";

-- AlterTable
ALTER TABLE "Rank" ALTER COLUMN "alunoDisciplinaId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Rank" ADD CONSTRAINT "Rank_alunoDisciplinaId_fkey" FOREIGN KEY ("alunoDisciplinaId") REFERENCES "AlunoDisciplina"("id") ON DELETE SET NULL ON UPDATE CASCADE;
