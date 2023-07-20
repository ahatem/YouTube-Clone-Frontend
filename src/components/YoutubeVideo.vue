<script setup lang="ts">
import CommentsList from './CommentsList.vue'
import ChannelAvatar from './ChannelAvatar.vue'
import type { VideoChannelDetails } from '@/models/Models'
import { formatViews } from '@/utils/utils'

defineProps<{ video: VideoChannelDetails }>()

function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }
  return new Date(dateString).toLocaleDateString('en-US', options)
}
</script>

<template>
  <section class="video">
    <iframe
      width="829"
      height="466"
      :src="`https://www.youtube.com/embed/${video.video_id}?autoplay=0`"
      title="I programmed in TypeScript like in Haskell (Lazy Evaluation)"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      autoplay
    ></iframe>
    <section class="details">
      <h3 class="title">{{ video.title }}</h3>
      <section class="top-row">
        <section class="owner">
          <section class="channel">
            <ChannelAvatar :user-id="video.channel.channel_id" :src="video.channel.avatar" :size="40" />
            <section class="profile">
              <RouterLink
                :to="{ name: 'channel', params: { channelId: `${video.channel.channel_id}` } }"
                class="channel-name"
              >
                <h5>{{ video.channel.title }}</h5>
                <span v-if="video.channel.is_verified" class="material-symbols-sharp"> check_circle </span>
              </RouterLink>
              <p class="subscribers">20.6K subscribers</p>
            </section>
          </section>
          <section class="actions">
            <div class="action-btn"><span class="text">Subscribe</span></div>
            <div class="action-btn">
              <span class="material-symbols-sharp icon">keyboard_arrow_down</span>
            </div>
          </section>
        </section>
        <section class="actions-container">
          <section class="actions">
            <div class="action-btn">
              <span class="material-symbols-sharp icon">thumb_up</span>
              <span class="text">{{ formatViews(video.likes_count) }}</span>
            </div>
            <div class="action-btn">
              <span class="material-symbols-sharp icon">thumb_down</span>
            </div>
          </section>
          <section class="actions">
            <div class="action-btn">
              <span class="material-symbols-sharp icon">share</span><span class="text">Share</span>
            </div>
            <div class="action-btn">
              <span class="material-symbols-sharp icon">more_horiz</span>
            </div>
          </section>
        </section>
      </section>
      <section class="bottom-row">
        <section class="top">
          <h5>{{ video.views_count.toLocaleString('en-US') }} views</h5>
          <h5>{{ formatDate(video.upload_date) }}</h5>
        </section>
        <section class="description">
          <pre>{{ video.description }}</pre>
        </section>
        <section class="bottom">
          <div class="read-more-btn">Read more</div>
        </section>
      </section>
      <CommentsList />
    </section>
  </section>
</template>

<style scoped>
iframe {
  border-radius: var(--border-radius-4);
  width: 100%;
  position: relative;
  /* box-shadow: 0 0 115px 16px var(--hover-05); */
}

iframe:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

section.details {
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}

h3.title {
  color: var(--primary-text-color);
  font-weight: 600;
  font-size: 1em;
  margin-top: 0.4em;
}
section.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

section.owner {
  display: flex;
  align-items: center;
  gap: 2em;
  flex-basis: 50%;
}

section.channel {
  display: flex;
  gap: 0.6em;
  align-items: center;
}

section.profile {
  display: flex;
  flex-direction: column;
  gap: 0.1em;
}

.channel-name {
  display: flex;
  text-decoration: none;
  align-items: center;
  gap: 0.2em;
  color: var(--primary-text-color);
}

p.subscribers {
  font-size: smaller;
  color: var(--secondary-text-color);
}

.channel-name h5 {
  font-size: 1em;
  font-weight: 500;
  white-space: nowrap;
}

.channel-name span {
  font-size: 1em;
  font-variation-settings: 'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 48;
}

section.actions-container {
  display: flex;
  gap: 0.6em;
}

section.actions {
  display: flex;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  background-color: var(--surface-background-color);
}

section.actions > :first-child {
  border-start-start-radius: var(--border-radius-2);
  border-end-start-radius: var(--border-radius-2);
}

section.actions > :last-child {
  border-start-end-radius: var(--border-radius-2);
  border-end-end-radius: var(--border-radius-2);
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.4em 0.6em;
  cursor: pointer;
  font-size: 1em;
  position: relative;
  user-select: none;
  transition: background-color var(--default-transition-time);
}

.action-btn:hover {
  background-color: var(--hover-05);
}

section.actions > :not(:first-child)::after {
  content: '';
  top: 10%;
  position: absolute;
  left: 0;
  width: 1px;
  height: 80%;
  background-color: var(--primary-border-color);
}

.action-btn span.text {
  font-size: inherit;
}

.action-btn span.icon {
  font-size: larger;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}

section.bottom-row {
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  margin-top: 0.8em;
  background-color: var(--surface-background-color);
  padding: 0.75em;
  border-radius: var(--border-radius-3);
  font-size: 0.875em;
}

section.top {
  display: flex;
  gap: 0.6em;
}

section.description {
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
}

section.bottom-row .description pre {
  font: inherit;
  white-space: pre-wrap;
}

.read-more-btn {
  background-color: var(--surface-background-color);
  padding: 0.6em;
  text-align: center;
  border-radius: var(--border-radius-2);
  cursor: pointer;
  user-select: none;
  font-weight: 500;
  transition: background-color var(--default-transition-time);
}

.read-more-btn:hover {
  background-color: var(--hover-10);
}
</style>
