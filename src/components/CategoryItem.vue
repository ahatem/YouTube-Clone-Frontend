<script setup lang="ts">
defineProps<{ name: string; active?: boolean }>()
</script>

<template>
  <span class="category" :class="active ? 'active' : ''">{{ name }}</span>
</template>

<style scoped>
.category {
  transition: color var(--default-transition-time), background-color var(--default-transition-time),
    border-color var(--default-transition-time);
  background-color: var(--category-background-color);
  border-radius: var(--border-radius-1);
  color: var(--category-text-color);
  display: inline-block;
  padding: 0.5em 1em;
  font-size: smaller;
  user-select: none;
  cursor: pointer;
}

.category:hover {
  background-color: var(--category-background-color-hover);
}

.category.active {
  background-color: var(--category-background-color-active);
  color: var(--category-text-color-active);
}
</style>
