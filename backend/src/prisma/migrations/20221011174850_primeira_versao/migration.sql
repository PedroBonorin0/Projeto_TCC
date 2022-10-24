-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nomeCompleto" TEXT NOT NULL,
    "nomeUsuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "fotoUrl" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aluno" (
    "matricula" TEXT NOT NULL,
    "exibeNome" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Aluno_pkey" PRIMARY KEY ("userId","matricula")
);

-- CreateTable
CREATE TABLE "Professor" (
    "siape" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("userId","siape")
);

-- CreateTable
CREATE TABLE "Disciplina" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fotoUrl" TEXT NOT NULL,
    "professorSiape" TEXT,

    CONSTRAINT "Disciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rank" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fotoUrl" TEXT NOT NULL,
    "alunoDisciplinaId" TEXT NOT NULL,

    CONSTRAINT "Rank_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AlunoDisciplina" (
    "id" TEXT NOT NULL,
    "alunoMatricula" TEXT,
    "disciplinaId" TEXT,
    "rankId" TEXT NOT NULL,

    CONSTRAINT "AlunoDisciplina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Aviso" (
    "id" TEXT NOT NULL,
    "toAlunos" BOOLEAN NOT NULL,
    "toProfessores" BOOLEAN NOT NULL,
    "mensagem" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "professorSiape" TEXT,

    CONSTRAINT "Aviso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "arquivoUrl" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT NOT NULL,
    "userId" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_matricula_key" ON "Aluno"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_userId_key" ON "Aluno"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_siape_key" ON "Professor"("siape");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_userId_key" ON "Professor"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Rank_alunoDisciplinaId_key" ON "Rank"("alunoDisciplinaId");

-- AddForeignKey
ALTER TABLE "Aluno" ADD CONSTRAINT "Aluno_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Disciplina" ADD CONSTRAINT "Disciplina_professorSiape_fkey" FOREIGN KEY ("professorSiape") REFERENCES "Professor"("siape") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rank" ADD CONSTRAINT "Rank_alunoDisciplinaId_fkey" FOREIGN KEY ("alunoDisciplinaId") REFERENCES "AlunoDisciplina"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoDisciplina" ADD CONSTRAINT "AlunoDisciplina_alunoMatricula_fkey" FOREIGN KEY ("alunoMatricula") REFERENCES "Aluno"("matricula") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AlunoDisciplina" ADD CONSTRAINT "AlunoDisciplina_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aviso" ADD CONSTRAINT "Aviso_professorSiape_fkey" FOREIGN KEY ("professorSiape") REFERENCES "Professor"("siape") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
