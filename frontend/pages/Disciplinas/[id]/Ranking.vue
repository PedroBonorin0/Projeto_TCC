<template>
  <div class="h-screen flex justify-center">
    <UIBack />
    <div class="w-[85%] md:w-[70%] xl:w-[60%] mt-5">
      <div class="mb-2">
        <h1 class="mt-12 text-2xl">Ranking</h1>
        <hr class="h-[1px] border-none text-black bg-black"/>
      </div>
      <div class="mt-8">
        <DisciplinaRankingTable :alunos="alunos" />
      </div>
    </div>
  </div>
</template>

<script setup>
const alunos = [
  {
    nome: 'Aluno 1',
    aproveitamento: '10%',
    exibeRank: true
  },
  {
    nome: 'Aluno 2',
    aproveitamento: '14%',
    exibeRank: false
  },
  {
    nome: 'Aluno 3',
    aproveitamento: '56%',
    exibeRank: true
  },
  {
    nome: 'Aluno 4',
    aproveitamento: '40%',
    exibeRank: true
  },
  {
    nome: 'Aluno 5',
    aproveitamento: '59%',
    exibeRank: false
  },
  {
    nome: 'Aluno 6',
    aproveitamento: '81%',
    exibeRank: true
  },
  {
    nome: 'Aluno 7',
    aproveitamento: '97%',
    exibeRank: true
  },
  {
    nome: 'Aluno 8',
    aproveitamento: '82%',
    exibeRank: true
  },
  {
    nome: 'Aluno 9',
    aproveitamento: '76%',
    exibeRank: true
  },
  {
    nome: 'Aluno 10',
    aproveitamento: '69%',
    exibeRank: true
  },
  {
    nome: 'Aluno 11',
    aproveitamento: '75%',
    exibeRank: true
  },
];

</script>