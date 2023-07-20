<script setup lang="ts">
import type { Channel } from '@/models/Models'
import ChannelAvatar from './ChannelAvatar.vue'
import { formatDate, formatTime, formatViews } from '@/utils/utils'
import VideoService from '@/services/VideoService'

const props = defineProps<{ channel: Channel }>()

const videos = props.channel.videos.map((video) => VideoService.getInstance().findById(video))
</script>

<template>
  <section class="channel-details">
    <section class="cover">
      <img v-if="channel.cover" :src="channel.cover" alt="" />
      <!-- <div
        v-if="channel.cover"
        class="cover-image"
        :style="`background-image: url(${channel.cover});`"
      ></div> -->
      <div v-else class="cover-placeholder">
        <p>{{ channel.title }}</p>
      </div>
    </section>
    <section class="channel-details-container">
      <section class="channel-info">
        <ChannelAvatar class="avatar" :user-id="channel.channel_id" :src="channel.avatar" :size="110" />
        <section class="info">
          <h4 class="channel-title">
            {{ channel.title }}
            <span v-if="channel.is_verified" class="material-symbols-sharp">check_circle</span>
          </h4>
          <section class="sub-info">
            <p>@{{ channel.channel_id }}</p>
            <p>{{ formatViews(channel.subscribers.length) }} subscribers</p>
            <p>{{ formatViews(channel.videos.length) }} videos</p>
          </section>
        </section>
        <section class="actions">
          <div class="action-btn"><span class="text">Subscribe</span></div>
          <div class="action-btn">
            <span class="material-symbols-sharp icon">keyboard_arrow_down</span>
          </div>
        </section>
      </section>
    </section>
    <section class="channel-details-container options">
      <section class="tabs">
        <div class="left-arrow"><span class="material-symbols-sharp"> chevron_left </span></div>
        <ul>
          <li class="active">Videos</li>
          <li>Live</li>
          <li>Playlists</li>
          <li>Community</li>
          <li>Channels</li>
          <li>About</li>
        </ul>
        <div class="right-arrow">
          <span class="material-symbols-sharp"> chevron_right </span>
        </div>
      </section>
      <section class="bottom">
        <section class="actions">
          <div class="action-btn active"><span class="text">Latest</span></div>
          <div class="action-btn"><span class="text">Popular</span></div>
          <div class="action-btn"><span class="text">Recommendations</span></div>
          <div class="action-btn"><span class="text">Oldest</span></div>
        </section>
        <div class="search-bar">
          <input type="text" name="search" placeholder="Search ..." />
          <span class="btn-search material-symbols-sharp" role="button" tabindex="1">search</span>
        </div>
      </section>
    </section>
    <section class="channel-details-container channel-videos">
      <section class="channel-video" v-for="video in videos" :key="video?.video_id">
        <RouterLink
          class="thumbnail"
          :to="{ name: 'watch', query: { v: video.video_id } }"
          :data-time="formatTime(video.length)"
        >
          <img :src="video.thumbnail_url" alt="" />
        </RouterLink>
        <div class="details">
          <div class="info">
            <RouterLink :to="{ name: 'watch', query: { v: video.video_id } }" class="title" href="#">
              <h3>{{ video.title }}</h3>
            </RouterLink>
            <div class="metadata">
              <p class="views">{{ formatViews(video.views_count) }} views • {{ formatDate(video.upload_date) }}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<style scoped>
section.channel-details {
  margin: 1em 2em;
}

.cover {
  /* height: calc((100vw - 240px) / 6.2 - 1px); */
  height: calc(100vw / 6.2);
}

.cover img {
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-3);
  object-fit: cover;
}

.cover .cover-image {
  border-radius: var(--border-radius-3);
  height: calc(100vw / 6.2);
  min-height: 100%;
  min-width: 100%;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}

.cover .cover-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5em;
  color: var(--secondary-text-color);
  background-color: var(--surface-background-color);
  height: 100%;
  border-radius: var(--border-radius-3);
  user-select: none;
}

section.channel-details-container {
  max-width: 1366px;
  padding: 0 4em;
  margin: 0 auto;
}

section.channel-info {
  display: flex;
  gap: 1em;
  align-items: flex-end;
  margin-top: -2.5em;
}

.avatar {
  background-color: var(--primary-background-color);
  box-shadow: 0 0 0 0.4em var(--primary-background-color);
  border-radius: 50%;
}

section.info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.4em;
  margin-bottom: 0.5em;
}

h4.channel-title {
  font-weight: 400;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  gap: 0.2em;
}

h4.channel-title span {
  font-size: smaller;
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}

section.sub-info {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4em;
  color: var(--secondary-text-color);
  font-size: 0.875em;
}

section.sub-info > :first-child {
  font-weight: bold;
}

section.sub-info p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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

.options {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 1.5em;
}

.tabs {
  margin-top: 1.5em;
  background-color: var(--surface-background-color);
  border-radius: var(--border-radius-2);
  overflow-x: scroll;
  position: relative;
  align-self: stretch;
}

.right-arrow,
.left-arrow {
  position: absolute;
  height: 100%;
  width: 100px;
  top: 0;
  display: none;
  align-items: center;
  cursor: pointer;
  user-select: none;
}

.right-arrow.active,
.left-arrow.active {
  display: flex;
}

.right-arrow {
  right: 0;
  background: linear-gradient(to left, var(--hover-05) 50%, transparent);
  color: var(--primary-text-color);
  justify-content: flex-end;
}

.left-arrow {
  background: linear-gradient(to right, var(--hover-05) 50%, transparent);
  color: var(--primary-text-color);
}

.right-arrow span,
.left-arrow span {
  padding: 0.2em;
  border-radius: 50%;
  transition: background-color var(--default-transition-time);
}

.right-arrow span:hover,
.left-arrow span:hover {
  background-color: var(--hover-20);
}

.tabs::-webkit-scrollbar {
  display: none;
}

.tabs ul {
  list-style-type: none;
  display: flex;
}

.tabs ul li {
  padding: 0.75em 0em;
  flex-grow: 1;
  cursor: pointer;
  text-align: center;
  font-size: 0.875em;
  transition: color var(--default-transition-time), background-color var(--default-transition-time);
}

.tabs ul li:hover,
.tabs ul li.active {
  background-color: var(--hover-10);
}

.options .actions {
  font-size: 0.875em;
}

.options .actions .action-btn.active {
  background-color: var(--hover-10);
}

.options .bottom {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.6em;
}

.search-bar {
  font-size: 1em;
  display: flex;
  min-height: 1.8em;
  align-items: center;
  border: 1px solid transparent;
  background-color: var(--surface-background-color);
  border-radius: var(--border-radius-2);
  padding-left: 0.575em;
  transition: color var(--default-transition-time), background-color var(--default-transition-time),
    border-color var(--default-transition-time);
}

.search-bar:focus-within {
  background-color: var(--hover-10);
}

.search-bar input[type='text'] {
  border: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: inherit;
  flex-grow: 1;
  background-color: transparent;
}

.search-bar .btn-search {
  font-size: larger;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0em 0.3em;
  border-top-right-radius: var(--border-radius-2);
  border-bottom-right-radius: var(--border-radius-2);
  border: 1px solid transparent;
  border-left-color: var(--primary-border-color);
  cursor: pointer;
  user-select: none;
  transition: background-color 125ms, box-shadow 125ms;
}

.search-bar .btn-search:active,
.search-bar .btn-search:focus-visible {
  background-color: var(--hover-05);
  box-shadow: 0 0 0 0.25rem var(--shadow-color-1);
}

.channel-videos {
  margin-top: 0.8em !important;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 1em;
  row-gap: 2em;
  overflow-y: auto;
}

.channel-video {
  display: flex;
  flex-direction: column;
  gap: 0.6em;
}

.channel-video .thumbnail {
  position: relative;
  /* max-height: 160px; */
}

.channel-video .thumbnail::after {
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

.channel-video .thumbnail img {
  object-fit: cover;
  width: 100%;
  max-height: 100%;
  border-radius: var(--border-radius-2);
}

.channel-video .details {
  display: flex;
  gap: 0.8em;
}

.channel-video .details .info .title {
  font-weight: normal;
  text-decoration: none;
  color: inherit;
}
.channel-video .details .info .title h3 {
  font-size: 0.875em;
  margin-bottom: 0.25rem;
  font-weight: normal;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.channel-video .details .info .metadata {
  display: flex;
  flex-direction: column;

  font-size: 0.875rem;
  color: var(--secondary-text-color);
  gap: 0.1em;
}
</style>
