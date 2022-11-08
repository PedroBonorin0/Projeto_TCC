<template>
  <table class="table w-[70%] mx-auto">
    <thead class="bg-yellow-100 p-1 border-b border-black">
      <th class="w-[20%] border-r border-black">Data</th>
      <th class="w-[55%] border-r border-black">Atividade</th>
      <th class="w-[25%]">Aproveitamento</th>
    </thead>
    <tbody class="border-b border-black">
      <tr v-for="obj in props.values" class="even:bg-zinc-200">
        <td class="border-r border-black text-center">{{ obj.data }}</td>
        <td class="border-r border-black px-2">{{ obj.atividade }}</td>
        <td class="text-center">{{ obj.aproveitamento }}</td>
      </tr>
    </tbody>
    <tfoot class="bg-yellow-100 border border-black">
      <tr>
        <th class="w-[20%]">Total</th>
        <td class="w-[55%] border-r border-black"></td>
        <td class="w-[25%] text-center">55%</td>
      </tr>
    </tfoot>
  </table>
</template>

<script setup> 
const props = defineProps({
  values: { type: Array, required: true },
});

</script>