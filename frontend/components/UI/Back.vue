<template>
  <NuxtLink 
    :to="backPage" 
    class="h-auto absolute top-4 left-[70px]"
    title="Voltar"
  >
    <Icon 
      icon="ic:baseline-keyboard-double-arrow-left"
      class="text-4xl"
    />
  </NuxtLink>
</template>

<script setup>
import { Icon } from '@iconify/vue';

const props = defineProps({
  beforeRoute: { type: String, default: '' }
});

const backPage = computed(() => {
  return props.beforeRoute? '/' + props.beforeRoute : '/';
})
</script>
