<script setup lang="ts">
import type { VideoChannelDetails } from '@/models/Models'
import ChannelAvatar from './ChannelAvatar.vue'
import { formatDate, formatTime, formatViews } from '@/utils/utils'
defineProps<{ video: VideoChannelDetails }>()
</script>

<template>
  <div class="video">
    <RouterLink
      class="thumbnail"
      :to="{ name: 'watch', query: { v: video.video_id } }"
      :data-time="formatTime(video.length)"
    >
      <img :src="video.thumbnail_url" alt="" />
    </RouterLink>
    <div class="details">
      <ChannelAvatar :user-id="video.channel.channel_id" :src="video.channel.avatar" :size="36" />
      <div class="info">
        <RouterLink class="title" :to="{ name: 'watch', query: { v: video.video_id } }">
          <h3>{{ video.title }}</h3>
        </RouterLink>
        <div class="metadata">
          <RouterLink
            :to="{ name: 'channel', params: { channelId: `${video.channel.channel_id}` } }"
            class="channel-name"
          >
            <p>{{ video.channel.title }}</p>
            <span v-if="video.channel.is_verified" class="material-symbols-sharp">check_circle</span>
          </RouterLink>
          <p class="views">{{ formatViews(video.views_count) }} views • {{ formatDate(video.upload_date) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video {
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}

.video .thumbnail {
  position: relative;
  /* max-height: 190px; */
}

.video .thumbnail::after {
  content: attr(data-time);
  position: absolute;
  bottom: 8px;
  right: 5px;
  font-size: small;
  background-color: var(--video-duration-background-color);
  color: white;
  padding: 0.2em 0.5em;
  border-radius: var(--border-radius-1);
}

.video .thumbnail img {
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  border-radius: var(--border-radius-2);
}

.video .details {
  display: flex;
  gap: 0.8em;
}

.video .details .info .title {
  font-weight: normal;
  text-decoration: none;
  color: inherit;
}
.video .details .info .title h3 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  font-weight: normal;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.video .details .info .metadata {
  display: flex;
  flex-direction: column;

  font-size: 0.875rem;
  color: var(--secondary-text-color);
  gap: 0.1em;
}

.video .details .info .metadata .channel-name {
  font-size: 0.875rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 0.2em;
}

.video .details .info .metadata .channel-name span {
  font-size: initial;
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
</style>
