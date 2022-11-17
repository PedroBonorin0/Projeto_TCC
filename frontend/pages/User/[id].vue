<template>
  <div>
    <UIBack />
    <div class="h-screen flex justify-center items-center">
      <div class="w-full flex justify-evenly items-center">
        <template v-if="!isProfessor">
          <UserAlunoLeft/>
          <UserAlunoRight/>
        </template>
        <template v-else>
          <UserProfessorLeft/>
          <UserProfessorRight/>
        </template>
        </div>
      </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user.js';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { getUserInfo } = storeToRefs(userStore);

const isProfessor = getUserInfo.value.Professor? true : false;
</script>