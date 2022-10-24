<template>
  <div class="flex flex-col items-center">
    <!-- <div class="bg-zinc-400 rounded-lg cursor-pointer w-8 h-8 flex justify-center items-center m-2 hover:bg-zinc-500/80" title="Ranking">
      <Icon icon="mdi:crown" class="text-lg"/>
    </div>
    <div class="bg-zinc-400 rounded-lg cursor-pointer w-8 h-8 flex justify-center items-center m-2 hover:bg-zinc-500/80" title="Avisos">
      <Icon icon="mdi:bell" class="text-lg"/>
    </div>
    <div class="bg-zinc-400 rounded-lg cursor-pointer w-8 h-8 flex justify-center items-center m-2 hover:bg-zinc-500/80" title="Perfil">
      <Icon icon="ph:user-fill" class="text-lg"/>
    </div> -->
    <UIIcon class="m-2" icon="mdi:crown" :bgZinc="true" txtSize="text-lg" title="Ranking"/>
    <UIIcon class="m-2" icon="mdi:bell" :bgZinc="true" txtSize="text-lg" title="Notificações"/>
    <UIIcon class="m-2" icon="ph:user-fill" :bgZinc="true" textSize="text-lg" title="Perfil"/>
  </div>
</template>

<script setup>
</script> 