<script setup lang="ts">
const props = defineProps<{ icon: string; text: string; active?: boolean; minimized: boolean }>()

const classes = () => {
  let result = ''
  if (props.minimized) result += 'mini '
  if (props.active) result += 'active '
  return result
}
</script>

<template>
  <li>
    <RouterLink :to="`/${text.toLowerCase()}`" class="link" :class="classes()" :data-tooltip="text">
      <span class="material-symbols-sharp">{{ icon }}</span>
      <span class="name">{{ text }}</span>
    </RouterLink>
  </li>
</template>

<style scoped>
.link {
  display: flex;
  text-decoration: none;
  color: inherit;
  font-weight: 400;
  align-items: center;
  padding: 0.5em 2em 0.5em 0.5em;
  gap: 1.6em;
  border-radius: var(--border-radius-2);
  white-space: nowrap;
  transition: color var(--default-transition-time), background-color var(--default-transition-time);
}

.link.active,
.link:hover {
  background-color: var(--hover-05);
}
.link.active {
  font-weight: bold;
}
.link.active span {
  font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}

.link.mini {
  padding: 0.5em;
  justify-content: center;
  position: relative;
}

.link.mini::after {
  position: absolute;
  content: attr(data-tooltip);
  left: 110%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  background-color: rgba(18, 18, 18, 0.65);
  color: white;
  backdrop-filter: blur(10px);
  padding: 0.5em 0.8em;
  opacity: 0;
  z-index: -1;
  transition: opacity var(--default-transition-time);
}

.link.mini:hover::after {
  opacity: 1;
  z-index: 1000;
}

.link.mini span.name {
  display: none;
}
</style>
