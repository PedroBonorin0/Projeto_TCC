<template>
  <form @submit.prevent="handleSubmit" class="mt-4">
    <UIInput modelValue="Pedro Bonorino" label="Usuário" v-model="userInfo.usuario"/>
    <UIInput modelValue="pepebonorinobraga@estudante.ufjf.br" label="Email" type="email" v-model="userInfo.email"/>
    <div>
      <div>Exibir informações no ranking?</div>
      <input v-model="userInfo.exibeRank" type="checkbox"/>
    </div>
    <UIInput modelValue="123123" label="Nova Senha" type="password" v-model="userInfo.senha"/>
    <UIInput modelValue="123123" label="Confirmar Nova Senha" type="password" v-model="userInfo.confirmaSenha"/>
    <div class="mt-4 text-center">
      <button
        type="submit"
        class="h-8 w-24 rounded-md bg-zinc-200 hover:bg-zinc-300"
      >Salvar</button>
    </div>
  </form>
</template>

<script setup>
const userInfo = reactive({
  usuario: '',
  email: '',
  exibeRank: true,
  senha: '',
  confirmaSenha: '',
});
</script>