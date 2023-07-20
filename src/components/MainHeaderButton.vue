<script setup lang="ts">
const props = defineProps<{ icon?: string; imgSrc?: string; text?: string }>()
</script>

<template>
  <span class="btn">
    <span v-if="icon" class="text-with-icon">
      <span class="material-symbols-sharp">{{ props.icon }} </span> <span v-if="text">{{ text }}</span>
    </span>
    <img v-if="imgSrc" :src="imgSrc" :alt="text" />
  </span>
</template>

<style scoped>
.btn {
  padding: 0.4em;
  border-radius: var(--border-radius-2);
  cursor: pointer;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
  transition: background-color var(--default-transition-time);
}

.btn .text-with-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
}

.btn:has(img) {
  padding: 0.3em;
}
.btn img {
  width: 28px;
  height: 100%;
  border-radius: var(--border-radius-1);
  border-radius: 50%;

  object-fit: contain;
}

.btn:hover {
  background-color: var(--hover-10);
}
</style>
