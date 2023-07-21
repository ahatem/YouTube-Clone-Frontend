<script setup lang="ts">
import MainFooter from './MainFooter.vue'
import SidebarItem from './SidebarItem.vue'

defineProps<{ minimized: boolean }>()
</script>

<template>
  <aside :class="minimized ? 'mini' : ''">
    <section class="sections">
      <section class="section">
        <ul class="links">
          <SidebarItem icon="home" text="Home" active :minimized="minimized" />
          <SidebarItem icon="subscriptions" text="Subscriptions" :minimized="minimized" />
        </ul>
      </section>

      <section class="section">
        <ul class="links">
          <SidebarItem icon="video_library" text="Library" :minimized="minimized" />
          <SidebarItem icon="history" text="History" :minimized="minimized" />
        </ul>
      </section>

      <section class="section">
        <h3>Explore</h3>
        <ul class="links">
          <SidebarItem icon="trending_up" text="Trending" :minimized="minimized" />
          <SidebarItem icon="music_video" text="Music" :minimized="minimized" />
          <SidebarItem icon="live_tv" text="Live" :minimized="minimized" />
          <SidebarItem icon="sports_esports" text="Gaming" :minimized="minimized" />
          <SidebarItem icon="sports_soccer" text="Sports" :minimized="minimized" />
        </ul>
      </section>

      <section class="section">
        <ul class="links">
          <SidebarItem icon="add_circle" text="Browse channels" :minimized="minimized" />
        </ul>
      </section>

      <section class="section">
        <ul class="links">
          <SidebarItem icon="settings" text="Settings" :minimized="minimized" />
          <SidebarItem icon="flag" text="Report history" :minimized="minimized" />
          <SidebarItem icon="help" text="Help" :minimized="minimized" />
          <SidebarItem icon="feedback" text="Send feedback" :minimized="minimized" />
        </ul>
      </section>

      <MainFooter />
    </section>
  </aside>
</template>

<style scoped>
aside {
  background-color: var(--alt-background-color);
  border-right: 1px solid var(--primary-border-color);
  overflow-y: hidden;
  overflow-x: hidden;
  scrollbar-gutter: stable;
  transition: color var(--default-transition-time), background-color var(--default-transition-time),
    border-color var(--default-transition-time);
}
aside:hover {
  overflow-y: auto;
}

aside .sections {
  display: flex;
  flex-direction: column;
}

aside .sections .section {
  display: flex;
  flex-direction: column;
  padding: 0.8em 0;
  border-bottom: 1px solid var(--primary-border-color);
  padding-bottom: 0.8em;
  font-size: 0.875rem;
}

aside .sections .section h3 {
  font-size: 0.9rem;
  font-weight: 400;
  padding: 0.3em 0.5em;
  border-radius: var(--border-radius-1);
  margin-right: auto;
  margin-left: 0.8em;
}

aside .sections .section .links {
  display: flex;
  flex-direction: column;
  gap: 0.1em;
  padding: 0 0.8em;
  list-style-type: none;
}

aside.mini {
  scrollbar-gutter: unset;
  overflow-y: unset;
  overflow-x: unset;
}

aside.mini::-webkit-scrollbar {
  display: none;
}

aside.mini .sections .section h3 {
  display: none;
}

aside.mini footer {
  display: none;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  aside {
    position: absolute;
    left: 0;
    z-index: 99999;
    overflow: visible;
  }

  aside.mini {
    position: initial;
    width: 0%;
    z-index: -99999;
  }
}
</style>
