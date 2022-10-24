-- DropForeignKey
ALTER TABLE "Rank" DROP CONSTRAINT "Rank_alunoDisciplinaId_fkey";

-- DropIndex
DROP INDEX "Rank_alunoDisciplinaId_key";

-- AddForeignKey
ALTER TABLE "AlunoDisciplina" ADD CONSTRAINT "AlunoDisciplina_rankId_fkey" FOREIGN KEY ("rankId") REFERENCES "Rank"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
