<script setup lang="ts">
import MainHeaderButton from './MainHeaderButton.vue'
import LogoIcon from './LogoIcon.vue'
import HeaderSearchBar from './HeaderSearchBar.vue'
import { ref } from 'vue'

defineEmits<{ (e: 'onMenuClick'): void }>()

const isDarkMode = ref(localStorage.getItem('theme') === 'dark')

function toggleDarkMode() {
  let newTheme = isDarkMode.value ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
  isDarkMode.value = !isDarkMode.value
}
</script>

<template>
  <header>
    <section class="start">
      <MainHeaderButton icon="menu" id="mini-menu-toggler" @click="$emit('onMenuClick')" />
      <LogoIcon />
    </section>
    <section class="middle">
      <HeaderSearchBar />
      <MainHeaderButton icon="keyboard_voice" />
    </section>
    <section class="end">
      <MainHeaderButton :icon="isDarkMode ? 'dark_mode' : 'light_mode'" @click="toggleDarkMode()" />
      <!-- <MainHeaderButton icon="video_call" /> -->
      <!-- <MainHeaderButton icon="notifications" /> -->
      <MainHeaderButton icon="account_circle" text="Login" id="login-btn" @click="$router.push({ name: `auth` })" />
      <!-- <MainHeaderButton img-src="https://api.dicebear.com/6.x/initials/svg?seed=Ahmed+Hatem" text="User Avatar" /> -->
    </section>
  </header>
</template>

<style scoped>
header {
  background-color: var(--alt-background-color);
  border-bottom: 1px solid var(--primary-border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4em 1em;
  transition: color var(--default-transition-time), background-color var(--default-transition-time),
    border-color var(--default-transition-time);
  position: relative;
}

header .start {
  display: flex;
  align-items: center;
  gap: 1em;
}

header .middle {
  align-self: stretch;
  margin: 0 auto;
  display: flex;
  flex-basis: 37%;
  gap: 0.2em;

  /* center searchbar not matter what surround it  */
  position: absolute;
  margin: 0 auto;
  right: 50%;
  transform: translateX(50%);
  width: 35%;
}

header .end {
  display: flex;
  align-items: center;
  gap: 0.3em;
}

#login-btn {
  padding: 0.3em 0.6em;
  color: rgb(59, 130, 246);
  border: 1px solid;
  font-weight: 500;
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  header .middle {
    display: none;
  }
}
</style>
