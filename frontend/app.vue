<template>
  <div class="flex">
    <Sidebar v-if="$route.fullPath !== '/login'"/>
    <main class="w-full">
      <RouterView class="flex-1" />
    </main>
  </div>
</template>
