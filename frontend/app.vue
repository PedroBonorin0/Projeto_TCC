<template>
  <div class="flex min-h-screen min-w-full">
    <Sidebar v-if="$route.fullPath !== '/login'"/>
    <RouterView class="flex-1" />
  </div>
</template>
