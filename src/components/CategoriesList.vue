<script setup lang="ts">
import type { Category } from '@/models/Models'
import CategoryItem from './CategoryItem.vue'
import { reactive, ref, type Ref } from 'vue'

defineProps<{ categories: Category[] }>()

const emit = defineEmits<{ (e: 'onCategoryClick', category: Category): void }>()

const categoriesList: Ref<HTMLDivElement | null> = ref(null)

const activeArrows = reactive({ left: false, right: true })
const manageIcons = () => {
  if (!categoriesList.value) return

  activeArrows.left = categoriesList.value?.scrollLeft > 20

  const maxScroll = categoriesList.value.scrollWidth - categoriesList.value.clientWidth - 20
  activeArrows.right = categoriesList.value.scrollLeft < maxScroll
}

const scroll = (value: number) => {
  if (!categoriesList.value) return

  categoriesList.value.scrollLeft += value
  manageIcons()
}

const dragging = ref(false)
const drag = (e: MouseEvent) => {
  if (!categoriesList.value) return
  if (!dragging.value) return
  scroll(-e.movementX)
}

const activeCategory = ref('all')
const onCategoryClick = (category: Category) => {
  if (dragging.value) return
  activeCategory.value = category.category_id
  emit('onCategoryClick', category)
}
</script>

<template>
  <div ref="" class="categories-container">
    <div @click="scroll(-200)" class="left-arrow" :class="activeArrows.left ? 'active' : ''">
      <span class="material-symbols-sharp">chevron_left</span>
    </div>
    <section
      ref="categoriesList"
      class="categories"
      :style="`scroll-behavior: ${dragging ? 'auto' : 'smooth'}`"
      @scroll="manageIcons"
      @mousedown="dragging = true"
      @mousemove="drag"
      @mouseup="dragging = false"
    >
      <CategoryItem
        @click="onCategoryClick({ category_id: 'all', name: '' })"
        name="All"
        :active="activeCategory === 'all'"
      />
      <CategoryItem
        v-for="category in categories"
        :key="category.category_id"
        :name="category.name"
        @click="onCategoryClick(category)"
        :active="activeCategory === category.category_id"
      />
    </section>
    <div @click="scroll(200)" class="right-arrow" :class="activeArrows.right ? 'active' : ''">
      <span class="material-symbols-sharp">chevron_right</span>
    </div>
  </div>
</template>

<style scoped>
.categories-container {
  transition: color var(--default-transition-time), background-color var(--default-transition-time);
  background-color: var(--primary-background-color);
  position: relative;
  overflow: hidden;
  z-index: 99;
}

.categories {
  white-space: nowrap;
  overflow-x: scroll;
  display: flex;
  gap: 0.45em;
}

.categories::-webkit-scrollbar {
  display: none;
}

.right-arrow,
.left-arrow {
  align-items: center;
  position: absolute;
  user-select: none;
  cursor: pointer;
  display: none;
  height: 100%;
  width: 100px;
  top: 0;
}

.right-arrow.active,
.left-arrow.active {
  display: flex;
}

.right-arrow {
  background: linear-gradient(to left, var(--primary-background-color) 50%, transparent);
  color: var(--primary-text-color);
  justify-content: flex-end;
  right: 0;
}

.left-arrow {
  background: linear-gradient(to right, var(--primary-background-color) 50%, transparent);
  color: var(--primary-text-color);
}

.right-arrow span,
.left-arrow span {
  transition: background-color var(--default-transition-time);
  border-radius: 50%;
  padding: 0.2em;
}

.right-arrow span:hover,
.left-arrow span:hover {
  background-color: var(--hover-20);
}
</style>
