<script setup lang="ts">
import type { VideoChannelDetails } from '@/models/Models'
import VideoGridItem from './VideoGridItem.vue'

defineProps<{ videos: VideoChannelDetails[] }>()
</script>

<template>
  <section class="videos">
    <VideoGridItem v-for="video of videos" v-bind:key="video.video_id" :video="video" />
  </section>
</template>

<style scoped>
.videos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 1em;
  row-gap: 2em;
  overflow-y: auto;
}
</style>
