<script setup lang="ts"></script>

<template>
  <div class="search-bar">
    <input type="text" name="search" placeholder="Search ..." />
    <span class="btn-search material-symbols-sharp" role="button" tabindex="1">search</span>
  </div>
</template>

<style scoped>
.search-bar {
  flex-grow: 1;
  display: flex;
  align-items: center;
  border: 1px solid var(--primary-border-color);
  border-radius: var(--border-radius-2);
  padding-left: 0.575em;
  transition: color var(--default-transition-time), background-color var(--default-transition-time),
    border-color var(--default-transition-time);
}

.search-bar:focus-within {
  background-color: var(--hover-05);
}

.search-bar input[type='text'] {
  border: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-size: 1.15em;
  flex-grow: 1;
  background-color: transparent;
}

.search-bar .btn-search {
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
</style>
