<template>
  <div class="mt-5 p-5 w-full h-full grid grid-cols-4 gap-5">
    <DisciplinaBlock
      v-for="disciplina in allDisciplinas"
      :disciplina="disciplina"
      />
  </div>
</template>

<script setup>
import { useDisciplinaStore } from '@/store/disciplinas.js';
import { storeToRefs } from 'pinia';

const disciplinasStore = useDisciplinaStore();
const { allDisciplinas } = storeToRefs(disciplinasStore);

</script>