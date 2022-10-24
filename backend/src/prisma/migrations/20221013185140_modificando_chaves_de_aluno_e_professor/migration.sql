/*
  Warnings:

  - The primary key for the `Aluno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `alunoMatricula` on the `AlunoDisciplina` table. All the data in the column will be lost.
  - You are about to drop the column `professorSiape` on the `Aviso` table. All the data in the column will be lost.
  - You are about to drop the column `toAlunos` on the `Aviso` table. All the data in the column will be lost.
  - You are about to drop the column `toProfessores` on the `Aviso` table. All the data in the column will be lost.
  - You are about to drop the column `professorSiape` on the `Disciplina` table. All the data in the column will be lost.
  - The primary key for the `Professor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `professorUserId` to the `Aviso` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AlunoDisciplina" DROP CONSTRAINT "AlunoDisciplina_alunoMatricula_fkey";

-- DropForeignKey
ALTER TABLE "Aviso" DROP CONSTRAINT "Aviso_professorSiape_fkey";

-- DropForeignKey
ALTER TABLE "Disciplina" DROP CONSTRAINT "Disciplina_professorSiape_fkey";

-- AlterTable
ALTER TABLE "Aluno" DROP CONSTRAINT "Aluno_pkey",
ADD CONSTRAINT "Aluno_pkey" PRIMARY KEY ("userId");

-- AlterTable
ALTER TABLE "AlunoDisciplina" DROP COLUMN "alunoMatricula",
ADD COLUMN     "alunoUserId" TEXT;

-- AlterTable
ALTER TABLE "Aviso" DROP COLUMN "professorSiape",
DROP COLUMN "toAlunos",
DROP COLUMN "toProfessores",
ADD COLUMN     "professorUserId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Disciplina" DROP COLUMN "professorSiape",
ADD COLUMN     "professorUserId" TEXT;

-- AlterTable
ALTER TABLE "Professor" DROP CONSTRAINT "Professor_pkey",
ADD CONSTRAINT "Professor_pkey" PRIMARY KEY ("userId");

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_professorUserId_fkey" FOREIGN KEY ("professorUserId") REFERENCES "Professor"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoDisciplina" ADD CONSTRAINT "AlunoDisciplina_alunoUserId_fkey" FOREIGN KEY ("alunoUserId") REFERENCES "Aluno"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aviso" ADD CONSTRAINT "Aviso_professorUserId_fkey" FOREIGN KEY ("professorUserId") REFERENCES "Professor"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
