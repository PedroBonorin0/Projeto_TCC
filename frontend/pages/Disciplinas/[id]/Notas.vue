<template>
  <div class="h-screen flex justify-center">
    <UIBack />
    <div class="w-[85%] md:w-[70%] xl:w-[60%] mt-5">
      <div class="mb-2">
        <h1 class="mt-12 text-2xl">Notas</h1>
        <hr class="h-[1px] border-none text-black bg-black"/>
      </div>
      <div class="mt-8">
        <DisciplinaNotasTable :values="notasAluno" />
      </div>
    </div>
  </div>
</template>

<script setup>
const notasAluno = [
  {
    data: '01/02',
    atividade: 'Atividade 1',
    aproveitamento: '80%'
  },
  {
    data: '02/02',
    atividade: 'Atividade 2',
    aproveitamento: '80%'
  },
  {
    data: '03/02',
    atividade: 'Atividade 3',
    aproveitamento: '80%'
  },
  {
    data: '04/02',
    atividade: 'Atividade 4',
    aproveitamento: '80%'
  },
  {
    data: '05/02',
    atividade: 'Atividade 5',
    aproveitamento: '80%'
  },
  {
    data: '06/02',
    atividade: 'Atividade 6',
    aproveitamento: '80%'
  },
  {
    data: '07/02',
    atividade: 'Atividade 7',
    aproveitamento: '80%'
  },
];

</script>