/*
  Warnings:

  - Added the required column `disciplinaId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "disciplinaId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Comentario" (
    "id" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Atividade" (
    "id" TEXT NOT NULL,
    "nota" DECIMAL(65,30),
    "prazo" TIMESTAMP(3) NOT NULL,
    "postId" TEXT NOT NULL,

    CONSTRAINT "Atividade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EnvioAtividade" (
    "id" TEXT NOT NULL,
    "alunoUserId" TEXT NOT NULL,
    "atividadeId" TEXT NOT NULL,

    CONSTRAINT "EnvioAtividade_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Atividade_postId_key" ON "Atividade"("postId");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atividade" ADD CONSTRAINT "Atividade_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvioAtividade" ADD CONSTRAINT "EnvioAtividade_atividadeId_fkey" FOREIGN KEY ("atividadeId") REFERENCES "Atividade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EnvioAtividade" ADD CONSTRAINT "EnvioAtividade_alunoUserId_fkey" FOREIGN KEY ("alunoUserId") REFERENCES "Aluno"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
