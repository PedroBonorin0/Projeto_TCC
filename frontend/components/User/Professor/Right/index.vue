<template>
  <UICard class="flex flex-col justify-center p-4 bg-white h-full w-96 relative">
    <UserProfessorRightDisciplina v-for="turma in turmas" :disciplinaInfo="turma"/>
    <UIIcon icon="ic:round-plus" txtSize="text-9xl" 
      class="bg-black text-white rounded-full absolute -top-4 right-0"
    />
  </UICard>
</template>

<script setup>
const turmas = ref([
  {
    nomeDisciplina: 'Banco de Dados',
    quantidadeAlunos: 26
  },
  {
    nomeDisciplina: 'Engenharia de Software',
    quantidadeAlunos: 22
  },
  {
    nomeDisciplina: 'Inteligência Artificial',
    quantidadeAlunos: 23
  },
])
</script>