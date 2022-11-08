<template>
  <table class="table w-[70%] mx-auto">
    <thead class="bg-yellow-100 p-1 border-b border-black">
      <th class="w-[20%] border-r border-black">Posição</th>
      <th class="w-[55%] border-r border-black">Aluno</th>
      <th class="w-[25%]">Aproveitamento</th>
    </thead>
    <tbody class="border-b border-black">
      <tr v-for="aluno, index in alunosOrdenados" class="even:bg-zinc-200">
        <td class="border-r border-black text-center font-semibold">{{ index+1 }}°</td>
        <td v-if="aluno.exibeRank" class="border-r border-black px-2">{{ aluno.nome }}</td>
        <td v-else class="border-r border-black px-2">xxxxxxxxxxxxxxxxxxx</td>
        <td class="text-center">{{ aluno.aproveitamento }}</td>
      </tr>
    </tbody>
    <tfoot class="bg-yellow-100 border border-black">
      <tr>
        <th class="w-[20%] border-r border-black">12°</th>
        <td class="w-[55%] border-r border-black px-2">Pedro Bonorino</td>
        <td class="w-[25%] text-center">8%</td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup> 
const props = defineProps({
  alunos: { type: Array, required: true }
});

const alunosOrdenados = computed(() => {
  return props.alunos.sort((a,b) => (a.aproveitamento > b.aproveitamento) ? -1 : ((b.aproveitamento > a.aproveitamento) ? 1 : 0))
  .slice(0, 10);
})
</script>