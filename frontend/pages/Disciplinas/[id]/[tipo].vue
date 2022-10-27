<template>
  <div class="h-screen flex justify-center">
    <UIBack />
    <div class="w-[85%] md:w-[70%] xl:w-[60%] mt-5">
      <div class="mb-2">
        <h1 class="mt-12 text-2xl">{{ tipoFinal }}</h1>
        <hr class="h-[1px] border-none text-black bg-black"/>
      </div>
      <div>
        <DisciplinaMaterial />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const tipoFinal = computed(() => {
  let tipo = route.params.tipo;

  console.log(tipo)

  if(tipo === 'conteudo')
    return 'Conteúdo';

  if(tipo === 'atividades')
    return 'Atividades';

  if(tipo === 'documentos')
    return 'Documentos';
});
</script>