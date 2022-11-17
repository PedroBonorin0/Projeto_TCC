<template>
  <UICard class="flex justify-between items-center pr-4 pl-2 py-2 my-4 relative">
    <div class="flex flex-col">
      <h1 class="font-semibold text-xl pl-1">{{ props.disciplinaInfo.nomeDisciplina }}</h1>
      <div class="h-6 flex items-center">
        <UIIcon icon="mdi:user" class="m-0 w-6 h-6"/>
        <span class="text-zinc-400 text-sm">{{ props.disciplinaInfo.nomeProfessor }}</span>
      </div>
    </div>
    <UICard class="w-8 h-8 flex justify-center items-center hover:bg-zinc-100" @click="showModal = true">
      <UIIcon icon="ion:trash" txtSize="text-md"/>
    </UICard>
    <img src="@/assets/gamer.jfif" alt="Rank"
      class="h-9 absolute -top-6 -right-2" title="gamer" />
  </UICard>
  <!-- Modal -->
  <Teleport to="body">
    <UIModal
      :show="showModal" @close="showModal = false" 
      :title="textoSairDisciplina" :destaque="destaque"
    >
      Teste de Modal
    </UIModal>
  </Teleport>
</template>

<script setup>
const showModal = ref(false);
const destaque = ref('Banco de Dados');

const props = defineProps({
  disciplinaInfo: { type: Object, required: true }
});

const textoSairDisciplina = computed(() => {
  return `Deseja sair da disciplina`
});

</script>
