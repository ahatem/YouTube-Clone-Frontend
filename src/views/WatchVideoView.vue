<script setup lang="ts">
import MainLayout from '@/components/MainLayout.vue'
import CategoriesList from '@/components/CategoriesList.vue'
import { useRoute } from 'vue-router'
import VideoService from '@/services/VideoService'
import YoutubeVideo from '@/components/YoutubeVideo.vue'
import { computed, ref } from 'vue'
import UserService from '@/services/UserService'
import VideoList from '@/components/VideoList.vue'

const route = useRoute()
const video = computed(() => VideoService.getInstance().findByIdWithChannel(route.query.v as string))

const recommendations = computed(() => UserService.getInstance().getRecommendations(video.value))

const categoryRef = ref({ category_id: 'all', name: '' })

const filteredVideos = computed(() => {
  if (categoryRef.value.category_id === 'all') return recommendations.value.videos
  return recommendations.value.videos.filter((v) => v.categories.includes(categoryRef.value.category_id))
})
</script>

<template>
  <MainLayout minimize-sidebar>
    <section class="container">
      <!-- Video And Comments -->
      <section class="video-container">
        <YoutubeVideo :video="video" />
      </section>
      <!-- Categories and suggested videos -->
      <section class="recommendations">
        <CategoriesList
          class="categories-list"
          :categories="recommendations.categories"
          @on-category-click="(c) => (categoryRef = c)"
        />
        <VideoList :videos="filteredVideos" />
      </section>
    </section>
  </MainLayout>
</template>

<style scoped>
.container {
  max-width: 1366px;
  margin: 0 auto;
  display: flex;
  padding: 0 1em;
  gap: 1em;
  flex-wrap: wrap;
}

section.video-container {
  padding: 1em 0;
  flex-basis: 63%;
  flex-grow: 1000;
}

section.recommendations {
  overflow: hidden;
  flex-basis: 35%;
  flex-grow: 1;
}

.categories-list {
  padding: 1em 0;
  background-color: transparent !important;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  section.video-container {
    max-width: 100%;
  }
}
</style>
