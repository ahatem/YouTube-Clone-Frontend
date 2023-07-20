import { defineStore } from 'pinia'
import { ref } from 'vue'

type CurrentUser = {
  username: string
  displayName: string
  avatar: string
}

/**
 * @return currentUser undefined => still loading, null => no user logged in
 */
export const useCurrentUserStore = defineStore('currentUser', () => {
  const currentUser = ref<CurrentUser | null | undefined>(undefined)

  const loadCurrentUser = async () => {
    console.log('Loading current user ...')
    await new Promise((r) => setTimeout(r, 2000))
    currentUser.value = {
      username: 'ahmedhatem',
      displayName: 'Ahmed Hatem',
      avatar: 'https://api.dicebear.com/6.x/initials/svg?seed=Ahmed+Hatem'
    }
    console.log('User Loaded Successfully!!')
  }
  if (currentUser.value === undefined) {
    loadCurrentUser()
  }

  return { currentUser }
})
