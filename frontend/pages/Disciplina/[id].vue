<template>
  <div>
    <DisciplinaBanner class="xs:max-w-[90%] sm:max-w-[70%] xl:max-w-[60%]"/>
    <div class="m-auto xs:max-w-[90%] sm:max-w-[70%] xl:max-w-[60%]
      flex justify-between mt-5">
      <div class="w-[25%] lg:w-[20%]">
        <NuxtLink 
          v-for="link in links" 
          :to="link.route"
          class="border border-black/30 font-semibold flex items-center 
          justify-center bg-zinc-300 rounded-lg h-10 mb-2 cursor-pointer"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      <div class="w-[70%] lg:w-[75%]">
        <DisciplinaCreatePost />
        <!-- <DisciplinaPost />
        <DisciplinaPost />
        <DisciplinaPost />
        <DisciplinaPost /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
  const links = reactive([
    { route: '#', name: 'Conteúdo' },
    { route: '#', name: 'Atividades' },
    { route: '#', name: 'Documentos' },
    { route: '#', name: 'Notas' },
  ])
</script>