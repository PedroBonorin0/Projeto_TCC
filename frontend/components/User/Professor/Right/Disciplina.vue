<template>
  <UICard class="flex justify-between items-center pr-4 pl-2 py-2 my-4 relative">
    <div class="flex flex-col">
      <h1 class="font-semibold text-xl pl-1">{{ props.disciplinaInfo.nomeDisciplina }}</h1>
      <div class="h-6 flex items-center">
        <UIIcon icon="mdi:user" class="m-0 w-6 h-6"/>
        <span class="text-zinc-400 text-sm">{{ props.disciplinaInfo.quantidadeAlunos }} alunos</span>
      </div>
    </div>
    <UICard class="w-8 h-8 flex justify-center items-center hover:bg-zinc-100" @click="showModal = true">
      <UIIcon icon="ion:trash" txtSize="text-md"/>
    </UICard>
  </UICard>
  <!-- Modal -->
  <Teleport to="body">
    <UIModal
      :show="showModal" @close="showModal = false" :hasBody="true"
      :title="textoExcluirDisciplina" :destaque="destaque"
    >
      Ao confirmar, a disciplina será excluída e todos os dados da mesma.
    </UIModal>
  </Teleport>
</template>

<script setup>
const showModal = ref(false);
const destaque = ref('Banco de Dados');

const props = defineProps({
  disciplinaInfo: { type: Object, required: true }
});

const textoExcluirDisciplina = computed(() => {
  return `Deseja excluir disciplina`
});

</script>
