<script setup lang="ts">
defineProps<{ userId: string; src: string; size: number }>()
</script>

<template>
  <RouterLink :to="{ name: 'channel', params: { channelId: `${userId}` } }" class="avatar">
    <img :src="src" alt="User Avatar" :width="size" :height="size" />
  </RouterLink>
</template>

<style scoped>
a.avatar {
  display: flex;
  /* align-items: center; */
}

img {
  border-radius: 50%;
}
</style>
