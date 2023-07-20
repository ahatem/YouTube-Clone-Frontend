<script setup lang="ts">
import type { VideoChannelDetails } from '@/models/Models'
import VideoListItem from './VideoListItem.vue'
defineProps<{ videos: VideoChannelDetails[] }>()
</script>

<template>
  <section class="video-list">
    <VideoListItem v-for="video of videos" :key="video.video_id" :video="video" />
  </section>
</template>

<style scoped>
section.video-list {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}
</style>
