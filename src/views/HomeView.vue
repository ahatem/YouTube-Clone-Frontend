<script setup lang="ts">
import MainLayout from '@/components/MainLayout.vue'
import CategoriesList from '@/components/CategoriesList.vue'
import VideosGrid from '@/components/VideosGrid.vue'
import UserService from '@/services/UserService'
import { computed, ref } from 'vue'

const userService = UserService.getInstance()

const { categories, videos } = userService.getHomePageFeeds()

const categoryRef = ref({ category_id: 'all', name: '' })
const filteredVideos = computed(() => {
  if (categoryRef.value.category_id === 'all') return videos
  return videos.filter((v) => v.categories.includes(categoryRef.value.category_id))
})

const isMobile = window.matchMedia('(min-width: 320px) and (max-width: 480px)').matches
</script>

<template>
  <MainLayout :minimize-sidebar="isMobile">
    <section class="container">
      <CategoriesList class="categories-list" :categories="categories" @on-category-click="(c) => (categoryRef = c)" />
      <VideosGrid class="videos-grid" :videos="filteredVideos" />
    </section>
  </MainLayout>
</template>

<style scoped>
.container {
  max-width: 1366px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}

.categories-list {
  position: sticky;
  top: 0;
  margin: 0.5em;
  padding: 0.5em;
}

.videos-grid {
  overflow-x: hidden;
  overflow-y: auto;
  padding: 1em;
}
</style>
