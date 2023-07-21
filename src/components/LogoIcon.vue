<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  showCountryCode: {
    type: Boolean,
    default: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const countryCode = ref('EG')
</script>

<template>
  <h1 class="logo" :data-country="showCountryCode ? countryCode : ''">
    <RouterLink class="link" :to="{ name: 'home' }">
      <span>You</span><span class="colored" :class="loading ? 'pulse' : ''">tube</span>
    </RouterLink>
  </h1>
</template>

<style scoped>
h1.logo {
  border-radius: var(--border-radius-1);
  padding: 0.2em;
  text-decoration: none;
  font-size: 1.3em;
  display: inline-block;
  position: relative;
  color: var(--primary-text-color);
  user-select: none;
}

h1.logo .link {
  text-decoration: none;
  color: inherit;
  letter-spacing: -1px;
}

h1.logo span.colored {
  background-color: var(--primary-color);
  color: white;
  border-radius: 4px;
  padding: 0.1em 0.2em;
}

h1.logo::after {
  content: attr(data-country);
  font-weight: 500;
  text-transform: uppercase;
  position: absolute;
  top: -7px;
  right: -14px;
  color: var(--secondary-text-color);
  border-radius: 50%;
  padding: 0.3em;
  font-size: 0.5em;
  transition: color var(--default-transition-time), background-color var(--default-transition-time),
    border-color var(--default-transition-time);
}

.link section {
  display: flex;
  align-items: center;
}
.link section svg {
  width: 100%;
  height: 100%;
}

.pulse {
  display: inline-block;
  border-radius: 4px;
  background: var(--primary-color);
  box-shadow: 0 0 0 0 rgba(var(--primary-color-rgb), 0.1);
  animation: pulse-animation 1.5s infinite linear;
  position: relative;
  transform: translateX(5px);
}

.pulse:before,
.pulse:after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: 0 0 0 0 rgba(var(--primary-color-rgb), 0.2);
  animation: inherit;
  animation-delay: -0.5s;
}

.pulse:after {
  animation-delay: -1s;
}

@keyframes pulse-animation {
  100% {
    box-shadow: 0 0 0 2.8rem #0000;
  }
}
</style>
