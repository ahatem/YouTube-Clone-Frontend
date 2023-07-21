<script setup lang="ts">
import MainHeader from '@/components/MainHeader.vue'
import MainSidebar from '@/components/MainSidebar.vue'
import { ref } from 'vue'

const props = withDefaults(defineProps<{ minimizeSidebar?: boolean }>(), {
  minimizeSidebar: false
})
const minimizedSidebar = ref(props.minimizeSidebar)
</script>

<template>
  <div class="layout">
    <MainHeader class="header" @onMenuClick="minimizedSidebar = !minimizedSidebar" />
    <section>
      <MainSidebar class="sidebar" :minimized="minimizedSidebar" />
      <div class="main" :class="!minimizedSidebar ? 'dimmed-background' : ''">
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<style scoped>
.layout {
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.layout section {
  display: flex;
  height: 100%;
  min-height: 0;
}

.sidebar {
  flex: 0 0 auto;
  max-width: 225px;
}

.main {
  background-color: var(--primary-background-color);
  flex: 1 1 auto;
  overflow-x: hidden;
  overflow-y: scroll;
  transition: color var(--default-transition-time), background-color var(--default-transition-time),
    border-color var(--default-transition-time);
  position: relative;

  /* background: linear-gradient(
    -35deg,
    rgba(var(--login-auth-background-color-rgb), 0.02),
    rgba(var(--primary-color-rgb), 0.035)
  ); */
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  .dimmed-background::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
    pointer-events: none;
    user-select: none;
  }
}
</style>
