<template>
  <div class="p-5 w-full h-full grid grid-cols-4 gap-5">
    <DisciplinaBlock
      v-for="disciplina in disciplinas"
      :disciplina="disciplina"
      />
  </div>
</template>

<script setup>
const disciplinas = ref([
  {
    codigo: 'DCC060',
    nome: 'Banco de Dados',
    nomeProfessor: 'Jairo',
    emailProfessor: 'jairo@ufjf.br',
  },
  {
    codigo: 'DCC061',
    nome: 'Engenharia de Software',
    nomeProfessor: 'Alessandreia',
    emailProfessor: 'alessandreia@ufjf.br',
  },
  {
    codigo: 'DCC062',
    nome: 'Inteligência Artificial',
    nomeProfessor: 'Saulo',
    emailProfessor: 'saulo@ufjf.br',
  },
  {
    codigo: 'DCC062',
    nome: 'Inteligência Artificial',
    nomeProfessor: 'Saulo',
    emailProfessor: 'saulo@ufjf.br',
  },
  {
    codigo: 'DCC062',
    nome: 'Inteligência Artificial',
    nomeProfessor: 'Saulo',
    emailProfessor: 'saulo@ufjf.br',
  },
])
</script>