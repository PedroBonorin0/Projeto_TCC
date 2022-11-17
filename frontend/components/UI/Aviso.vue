<template>
  <div class="fixed bottom-12 right-12 max-w-[400px]">
    <div class="relative top-0 left-4 h-full bg-zinc-300 w-[70px] 
    rounded-tl-full text-center border-b border-zinc-400 shadow">
      <h1 class="translate-x-[2px]">Avisos</h1>
    </div>
    <div class="bg-zinc-300 p-2 text-xs min-h-[200px]">
      <p 
        v-for="aviso in avisos"
        :key="aviso.id"
      ><strong>{{ aviso.autor }}:</strong> {{ aviso.mensagem }}</p>
    </div>
  </div>
</template>

<script setup>
const avisos = ref([
  {
    id: Date.now(),
    autor: 'Alessandreia',
    mensagem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis recusandae numquam sit eum distinctio vitae mollitia ab nemo adipisci?'
  },
  {
    id: Date.now(),
    autor: 'Alessandreia',
    mensagem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis recusandae numquam sit eum distinctio vitae mollitia ab nemo adipisci?'
  },
  {
    id: Date.now(),
    autor: 'Alessandreia',
    mensagem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis recusandae numquam sit eum distinctio vitae mollitia ab nemo adipisci?'
  },
  {
    id: Date.now(),
    autor: 'Alessandreia',
    mensagem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis recusandae numquam sit eum distinctio vitae mollitia ab nemo adipisci?'
  },
  {
    id: Date.now(),
    autor: 'Alessandreia',
    mensagem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis recusandae numquam sit eum distinctio vitae mollitia ab nemo adipisci?'
  },
  {
    id: Date.now(),
    autor: 'Alessandreia',
    mensagem: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus debitis recusandae numquam sit eum distinctio vitae mollitia ab nemo adipisci?'
  },
])
</script>