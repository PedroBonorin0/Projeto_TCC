<template>
  <aside class="sticky top-0 bg-zinc-200 min-w-[60px] border-r border-black/75 
  flex flex-col items-center justify-between py-4 h-screen">
    <!-- <Bars3Icon class="h-10 hover:bg-zinc-300 cursor-pointer rounded"/> -->
    <Icon icon="humbleicons:bars" class="text-4xl hover:bg-zinc-300 cursor-pointer rounded"/>
    <!-- Lista de Disciplinas -->
    
    <!-- Opcoes -->
    <SidebarOptions />

</aside>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>
