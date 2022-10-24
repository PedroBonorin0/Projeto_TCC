<template>
  <div 
    class="rounded-lg cursor-pointer flex justify-center items-center"
    :class="finalCSS"  
  >
    <Icon :icon="props.icon" :class="props.txtSize"/>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  icon: { type: String, required: true },
  txtSize: { type: String, defualt: '' },
  bgZinc: { type: Boolean, default: false },
  size: { type: Number, default: 8 },
});

const finalCSS = computed(() => {
  let final = '';

  final += props.bgZinc? 'bg-zinc-400 hover:bg-zinc-500/80' : ''

  final += ` w-${props.size} h-${props.size}`;
  return final;
});

</script>