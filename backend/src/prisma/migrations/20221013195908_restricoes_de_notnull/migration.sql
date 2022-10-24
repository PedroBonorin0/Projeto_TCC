/*
  Warnings:

  - Made the column `disciplinaId` on table `AlunoDisciplina` required. This step will fail if there are existing NULL values in that column.
  - Made the column `alunoUserId` on table `AlunoDisciplina` required. This step will fail if there are existing NULL values in that column.
  - Made the column `professorUserId` on table `Disciplina` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "AlunoDisciplina" DROP CONSTRAINT "AlunoDisciplina_alunoUserId_fkey";

-- DropForeignKey
ALTER TABLE "AlunoDisciplina" DROP CONSTRAINT "AlunoDisciplina_disciplinaId_fkey";

-- DropForeignKey
ALTER TABLE "Disciplina" DROP CONSTRAINT "Disciplina_professorUserId_fkey";

-- AlterTable
ALTER TABLE "AlunoDisciplina" ALTER COLUMN "disciplinaId" SET NOT NULL,
ALTER COLUMN "alunoUserId" SET NOT NULL;

-- AlterTable
ALTER TABLE "Disciplina" ALTER COLUMN "professorUserId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_professorUserId_fkey" FOREIGN KEY ("professorUserId") REFERENCES "Professor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoDisciplina" ADD CONSTRAINT "AlunoDisciplina_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoDisciplina" ADD CONSTRAINT "AlunoDisciplina_alunoUserId_fkey" FOREIGN KEY ("alunoUserId") REFERENCES "Aluno"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
