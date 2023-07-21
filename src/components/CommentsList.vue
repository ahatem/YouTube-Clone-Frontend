<script setup lang="ts">
import { ref, watch } from 'vue'
import ChannelAvatar from './ChannelAvatar.vue'

const comments = ref([
  {
    username: 'User123',
    comment: 'Great video! I learned so much.',
    likes: 25,
    dislikes: 2,
    replies: 7,
    date: '1 year ago'
  },
  {
    username: 'MusicLover27',
    comment: 'Love the song choice in this video!',
    likes: 42,
    dislikes: 1,
    replies: 12,
    date: '11 months ago'
  },
  {
    username: 'FitnessFanatic',
    comment: 'Awesome workout routine. Going to try it out!',
    likes: 38,
    dislikes: 4,
    replies: 9,
    date: '10 months ago'
  },
  {
    username: 'FunnyGuy87',
    comment: 'This video had me in stitches. Hilarious!',
    likes: 63,
    dislikes: 0,
    replies: 3,
    date: '9 months ago'
  },
  {
    username: 'TravelBug',
    comment: 'Makes me want to pack my bags and explore!',
    likes: 50,
    dislikes: 1,
    replies: 18,
    date: '8 months ago'
  },
  {
    username: 'CookingAddict',
    comment: "Yummy recipe! Can't wait to try it.",
    likes: 70,
    dislikes: 3,
    replies: 15,
    date: '7 months ago'
  },
  {
    username: 'TechGeek123',
    comment: 'Incredible technology. Mind blown!',
    likes: 90,
    dislikes: 10,
    replies: 25,
    date: '6 months ago'
  },
  {
    username: 'ArtEnthusiast',
    comment: 'Such talent! The painting looks amazing.',
    likes: 55,
    dislikes: 2,
    replies: 11,
    date: '5 months ago'
  },
  {
    username: 'GamingGuru',
    comment: 'The graphics in this game are insane!',
    likes: 80,
    dislikes: 5,
    replies: 22,
    date: '4 months ago'
  },
  {
    username: 'Bookworm89',
    comment: 'Fantastic book review. Adding it to my reading list.',
    likes: 47,
    dislikes: 0,
    replies: 8,
    date: '3 months ago'
  },
  {
    username: 'SportsFan1',
    comment: 'Unbelievable goal! Best match of the season.',
    likes: 67,
    dislikes: 1,
    replies: 14,
    date: '2 months ago'
  },
  {
    username: 'DIYQueen',
    comment: 'You make it look so easy. Going to try this DIY project.',
    likes: 53,
    dislikes: 3,
    replies: 10,
    date: '1 month ago'
  },
  {
    username: 'MovieBuff',
    comment: 'This movie is a must-watch. Highly recommended!',
    likes: 75,
    dislikes: 2,
    replies: 16,
    date: '3 weeks ago'
  },
  {
    username: 'NatureLover22',
    comment: 'Breathtaking scenery. I wish I was there!',
    likes: 62,
    dislikes: 0,
    replies: 13,
    date: '2 weeks ago'
  },
  {
    username: 'Fashionista',
    comment: 'Love the outfit. So stylish!',
    likes: 48,
    dislikes: 1,
    replies: 9,
    date: '1 week ago'
  }
])

const newComment = ref('')
watch
const addComment = () => {
  comments.value.unshift({
    username: 'AhmedHatem',
    comment: newComment.value,
    likes: 0,
    dislikes: 0,
    replies: 5,
    date: '1 second ago'
  })
}
</script>

<template>
  <section class="comments">
    <section class="comment-input">
      <ChannelAvatar user-id="AhmedHatem" :src="`https://i.pravatar.cc/40`" :size="40" />
      <section class="input-container">
        <input type="text" name="comment" placeholder="Enter new comment ..." v-model="newComment" />
        <section class="comment-actions-container">
          <section class="start">
            <section class="comment-input-actions">
              <div class="comment-input-action-btn">
                <span class="material-symbols-sharp icon">format_bold</span>
              </div>
              <div class="comment-input-action-btn">
                <span class="material-symbols-sharp icon">format_italic</span>
              </div>
            </section>
            <section class="comment-input-actions">
              <div class="comment-input-action-btn">
                <span class="material-symbols-sharp icon">Mood</span>
              </div>
            </section>
          </section>
          <section class="end">
            <section class="comment-input-actions" :class="!newComment ? 'disabled' : ''">
              <div class="comment-input-action-btn">
                <span class="text">Cancel</span>
              </div>
              <div class="comment-input-action-btn bold">
                <span class="text" @click="addComment">Comment</span>
              </div>
            </section>
          </section>
        </section>
      </section>
    </section>
    <section v-for="comment in comments" v-bind:key="comment.username" class="comment">
      <ChannelAvatar user-id="AhmedHatem" :src="`https://i.pravatar.cc/40?u=${comment.username}`" :size="40" />
      <section class="comment-details">
        <section class="comment-top">
          <h5>@{{ comment.username }}</h5>
          <h5>{{ comment.date }}</h5>
        </section>
        <section class="comment-middle">
          {{ comment.comment }}
        </section>
        <section class="comment-bottom">
          <section class="comment-actions">
            <div class="comment-action-btn">
              <span @click="comment.likes++" class="material-symbols-sharp icon">thumb_up</span>
              <span v-if="comment.likes > 0" class="text">{{ comment.likes }}</span>
            </div>
            <div class="comment-action-btn">
              <span class="material-symbols-sharp icon">thumb_down</span>
            </div>
          </section>
          <section class="comment-actions">
            <div class="comment-action-btn">
              <span class="material-symbols-sharp icon">reply</span>
              <span class="text">Reply</span>
            </div>
          </section>
        </section>
      </section>
      <div class="more-actions-btn">
        <span class="material-symbols-sharp icon">more_vert</span>
      </div>
    </section>
  </section>
</template>

<style scoped>
.bold {
  font-weight: bold;
}

section.comments {
  display: flex;
  flex-direction: column;
  margin-top: 0.6em;
  border-radius: var(--border-radius-3);
}

section.comment-input {
  display: flex;
  gap: 0.8em;
}

.input-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 0.3em;
}

.input-container input {
  width: 100%;
  outline: none;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  border-end-end-radius: var(--border-radius-1);
  border-end-start-radius: var(--border-radius-1);
  padding: 0.5em 0.5em;
  background-color: var(--surface-background-color);
  font-family: inherit;
  transition: background-color var(--default-transition-time);
  resize: none;
  font-size: 0.9em;
}

.input-container input:focus {
  background-color: var(--hover-10);
  border: 1px solid var(--primary-border-color);
}

section.comment-actions-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875em;
}

section.comment-actions-container .start,
section.comment-actions-container .end {
  display: flex;
  gap: 0.6em;
}

section.comment-input-actions {
  display: flex;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  border-start-end-radius: var(--border-radius-1);
  border-start-start-radius: var(--border-radius-1);
  background-color: var(--surface-background-color);
  align-items: stretch;
}

section.comment-input-actions.disabled {
  color: gray;
  pointer-events: none;
}

.comment-input-action-btn {
  display: flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.4em 0.6em;
  cursor: pointer;
  font-size: 1em;
  position: relative;
  user-select: none;

  transition: background-color var(--default-transition-time);
}

.comment-input-action-btn:hover {
  background-color: var(--hover-05);
}

section.comment-input-actions > :not(:first-child)::after {
  content: '';
  top: 10%;
  position: absolute;
  left: 0;
  width: 1px;
  height: 80%;
  background-color: var(--primary-border-color);
}

.comment-input-action-btn span.text {
  font-size: inherit;
}

.comment-input-action-btn span.icon {
  font-size: larger;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}

section.comment {
  display: flex;
  gap: 0.8em;
  /* border-bottom: 1px solid var(--primary-border-color); */
  padding: 1.15em 0;
}

section.comments > :first-child {
  padding-top: 0.6em;
  padding-bottom: 0.85em;
}

section.comment:hover .more-actions-btn {
  opacity: 1;
}

section.comment-details {
  flex-grow: 1;
  font-size: 0.875em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.comment-top {
  display: flex;
  gap: 0.6em;
}

.comment-top h5 {
  font-weight: 400;
}

.comment-top > :nth-child(2) {
  color: var(--secondary-text-color);
}

section.comment-bottom {
  display: flex;
  gap: 0.6em;
}

section.comment-actions {
  display: flex;
  align-self: start;
  border: 1px solid transparent;
  border-radius: var(--border-radius-2);
  background-color: var(--surface-background-color);
}

section.comment-actions > :first-child {
  border-start-start-radius: var(--border-radius-2);
  border-end-start-radius: var(--border-radius-2);
}

section.comment-actions > :last-child {
  border-start-end-radius: var(--border-radius-2);
  border-end-end-radius: var(--border-radius-2);
}

.comment-action-btn {
  display: flex;
  align-items: center;
  gap: 0.6em;
  padding: 0.4em 0.6em;
  cursor: pointer;
  font-size: 1em;
  position: relative;
  user-select: none;

  transition: background-color var(--default-transition-time);
}

.comment-action-btn:hover {
  background-color: var(--hover-05);
}

section.comment-actions > :not(:first-child)::after {
  content: '';
  top: 10%;
  position: absolute;
  left: 0;
  width: 1px;
  height: 80%;
  background-color: var(--primary-border-color);
}

.comment-action-btn span.text {
  font-size: inherit;
}

.comment-action-btn span.icon {
  font-size: larger;
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}

.more-actions-btn {
  align-self: flex-start;
  padding: 0.4em 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-2);
  cursor: pointer;
  user-select: none;
  opacity: 0;
  transition: background-color var(--default-transition-time), opacity var(--default-transition-time);
}

.more-actions-btn:hover {
  background-color: var(--hover-10);
}

.more-actions-btn span.icon {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}

@media only screen and (min-width: 320px) and (max-width: 480px) {
  section.start > section:nth-child(2) {
    display: none;
  }

  .comment .comment-details .more-actions-btn {
    display: none;
  }
}
</style>
