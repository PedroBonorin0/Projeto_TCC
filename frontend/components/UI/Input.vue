<template>
  <div>
    <label v-if="props.label"
      class="block mb-1 text-sm font-medium text-gray-700"
    >{{ props.label }}</label>
    <input :type="props.type" :value="props.modelValue"
      @input="event => emits('update:modelValue', event.target.value)"
      class="block px-2 mb-2 w-full h-8 text-sm bg-zinc-200"
      :placeholder="props.placeholder"
    >
  </div>
</template>

<script setup>
const emits = defineEmits([
  'update:modelValue'
]);

const props = defineProps({
  modelValue: { type: String, required: true },
  label: { type: String, default: null },
  placeholder: { type: String, default: '' },
  type: { type: String, default: 'text' },
});

</script>