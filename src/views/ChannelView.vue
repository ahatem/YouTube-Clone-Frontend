<script setup lang="ts">
import ChannelDetails from '@/components/ChannelDetails.vue'
import MainLayout from '@/components/MainLayout.vue'
import ChannelService from '@/services/ChannelService'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const channel = computed(() => ChannelService.getInstance().findById(route.params.channelId as string))
</script>

<template>
  <MainLayout>
    <section class="container">
      <ChannelDetails :channel="channel" />
    </section>
  </MainLayout>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
</style>
