<template>
  <UICard class="flex flex-col justify-center p-4 bg-white h-full w-96">
    <UserAlunoRightDisciplina v-for="turma in turmas" :disciplinaInfo="turma"/>
  </UICard>
</template>

<script setup>
const turmas = ref([
  {
    nomeDisciplina: 'Banco de Dados',
    nomeProfessor: 'Jairo'
  },
  {
    nomeDisciplina: 'Engenharia de Software',
    nomeProfessor: 'Alessandreia'
  },
  {
    nomeDisciplina: 'Inteligência Artificial',
    nomeProfessor: 'Saulo'
  },
])
</script>