<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, requiredIf, email, minLength, helpers } from '@vuelidate/validators'

import LogoIcon from '@/components/LogoIcon.vue'

const inputsData = reactive({
  username: '',
  displayName: '',
  email: '',
  password: ''
})

const isPasswordShowed = ref(false)

const isRegistering = ref(false)
const showRegister = (show: boolean) => {
  isRegistering.value = show
  resetInputs()
}

const rules = {
  displayName: {
    requiredIf: helpers.withMessage('Please enter a display name', requiredIf(isRegistering))
  },
  username: {
    requiredIf: helpers.withMessage('Please enter a username', requiredIf(isRegistering)),
    minLength: helpers.withMessage('Username must be at least 5 characters', minLength(5)),
    noSpaces: helpers.withMessage('Username cannot contain spaces', (value: string) => /^[^\s]+$/.test(value))
  },
  email: {
    required: helpers.withMessage('Please enter an email address', required),
    email: helpers.withMessage('Please enter a valid email address', email)
  },
  password: {
    required: helpers.withMessage('Please enter a password', required),
    minLength: helpers.withMessage('Password must be at least 6 characters', minLength(6))
  }
}

const v$ = useVuelidate(rules, inputsData)

const resetInputs = () => {
  v$.value.$reset()
  inputsData.username = ''
  inputsData.displayName = ''
  inputsData.email = ''
  inputsData.password = ''
}

const handleFormSubmit = () => {
  v$.value.$validate()
  if (v$.value.$error) {
    console.log(v$.value.$errors)
    return
  }
  if (isRegistering.value) register()
  else login()
}

const register = () => {
  console.log('register data: ', inputsData)
}
const login = () => {
  console.log('login data: ', inputsData)
}
</script>

<template>
  <div class="wrapper">
    <main>
      <section class="auth-container">
        <section class="start">
          <LogoIcon />
          <div class="intro">
            <h1>YouTube - Your Ultimate Video Destination</h1>
            <p>
              Welcome to YouTube, where you can explore and discover a vast collection of videos from creators all
              around the world. Start watching now and find your next favorite video!
            </p>
          </div>
        </section>
        <section class="end">
          <header>
            <h1>{{ isRegistering ? 'Register' : 'Login' }}</h1>
            <p>{{ isRegistering ? 'Create a new account' : 'Login to your account to continue' }}</p>
          </header>
          <form @submit.prevent="handleFormSubmit">
            <div v-if="isRegistering" class="input-group">
              <label for="displayname"> Display Name: </label>
              <input
                type="text"
                name="displayname"
                id="displayname"
                placeholder="Enter your name"
                v-model="inputsData.displayName"
                :class="v$.displayName.$error ? 'error' : ''"
              />
              <span v-if="v$.displayName.$error" class="form-error">{{ v$.displayName.$errors[0].$message }}</span>
            </div>

            <div v-if="isRegistering" class="input-group">
              <label for="username"> User Name: </label>
              <input
                type="text"
                autocomplete="username"
                name="username"
                id="username"
                placeholder="Enter a unique username ex: johnsmith123"
                v-model="inputsData.username"
                :class="v$.username.$error ? 'error' : ''"
              />
              <span v-if="v$.username.$error" class="form-error">{{ v$.username.$errors[0].$message }}</span>
            </div>

            <div class="input-group">
              <label for="email"> Email </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="myemail@mail.com"
                v-model="inputsData.email"
                :class="v$.email.$error ? 'error' : ''"
              />
              <span v-if="v$.email.$error" class="form-error">{{ v$.email.$errors[0].$message }}</span>
            </div>

            <div class="input-group">
              <span>
                <label for="password"> Password </label>
                <span class="link forget-password" v-if="!isRegistering">Forget password?</span>
              </span>
              <div class="input-with-icon">
                <input
                  :type="isPasswordShowed ? 'text' : 'password'"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  v-model="inputsData.password"
                  :class="v$.password.$error ? 'error' : ''"
                />
                <span class="icon material-symbols-sharp filled" @click="isPasswordShowed = !isPasswordShowed">
                  {{ isPasswordShowed ? 'visibility_off' : 'visibility' }}
                </span>
              </div>

              <span v-if="v$.password.$error" class="form-error">{{ v$.password.$errors[0].$message }}</span>
            </div>
            <button>{{ isRegistering ? 'Register' : 'Login' }}</button>
          </form>
          <footer>
            <span v-if="!isRegistering" class="register-toggler">
              <span class="register">Don't have account?</span>
              <span class="link create-account" @click="showRegister(true)">Create account</span>
            </span>
            <span v-else class="register-toggler">
              <span class="register">Already have an account?</span>
              <span class="link create-account" @click="showRegister(false)">Login now</span>
            </span>
          </footer>
        </section>
      </section>
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  background: linear-gradient(
    -35deg,
    var(--gradient-background-color-1) 0%,
    var(--gradient-background-color-2) 25%,
    var(--gradient-background-color-1) 50%,
    var(--gradient-background-color-2) 75%,
    var(--gradient-background-color-1) 100%
  );
}
main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-y: auto;
  max-width: 1366px;
  margin: 0 auto;
  position: relative;
}

.auth-container {
  display: flex;
  flex-wrap: wrap;
  background-color: var(--hover-01);
  min-width: 50%;
  max-width: 60%;
  border-radius: 4px;

  padding: 1.5em 1em;

  background: linear-gradient(
    145deg,
    rgba(var(--login-auth-background-color-rgb), 0.02) 0%,
    rgba(var(--primary-color-rgb), 0.035) 25%,
    rgba(var(--login-auth-background-color-rgb), 0.02) 50%,
    rgba(var(--primary-color-rgb), 0.035) 75%,
    rgba(var(--login-auth-background-color-rgb), 0.02) 100%
  );

  border: 1px solid rgb(220, 38, 38, 0.15);

  backdrop-filter: blur(100px);

  box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 8px -2px;
}

.start {
  flex: 45% 1 0;
  padding-inline-end: 1em;
  margin-inline-end: 1em;
  display: flex;
  justify-content: center;
  border-inline-end: 1px solid rgb(220, 38, 38, 0.15);
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.start .intro {
  display: flex;
  flex-direction: column;
  margin-top: 1.65em;
  gap: 0.55em;
}

.start .intro h1 {
  font-size: 1.1rem;
  font-weight: 300;
  white-space: nowrap;
}

.start .intro p {
  font-size: 0.75rem;
  color: var(--secondary-text-color);
  line-height: 1.3;
  text-align-last: center;
}

.link {
  color: var(--primary-color-400);
  font-weight: 600;
}

.link:hover {
  text-decoration: underline;
  cursor: pointer;
}

.end {
  flex: 45% 1 0;

  display: flex;
  flex-direction: column;
  gap: 1.5em;
}

.end header {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.end header p {
  color: #838383;
  font-size: 0.875em;
}

.end form {
  justify-content: center;

  display: flex;
  flex-direction: column;
  gap: 0.75em;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.input-group span {
  display: flex;
  justify-content: space-between;
}

.forget-password {
  font-size: smaller;
}

.input-group label {
  font-size: 0.875rem;
  color: var(--secondary-text-color);
}
.input-group input {
  width: 100%;
  outline: none;
  background-color: rgba(var(--hover-rgb), 0.03);
  border: 1px solid rgba(248, 114, 114, 0.15);
  padding: 0.45em 0.4em;
  border-radius: 4px;
  font-size: 0.875rem;
  font-family: 'Roboto', 'Arial', sans-serif;

  transition: background-color var(--default-transition-time), border-color var(--default-transition-time);
  position: relative;
}

.input-group input.error {
  border: 1px solid var(--primary-color-600);
  box-shadow: 0 0 0 0.25rem rgb(220 38 38 / 15%);
}

.input-group input:focus {
  /* background-color: rgba(var(--hover-rgb), 0.075); */
  border-color: var(--primary-color-400);
}

.input-group .input-with-icon {
  position: relative;
}

.input-group .input-with-icon .icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: rgba(var(--hover-rgb), 0.35);
  cursor: pointer;
  user-select: none;

  transition: color var(--default-transition-time);
}

.input-group .input-with-icon .icon:hover {
  color: rgba(var(--hover-rgb), 0.75);
}

.input-group .form-error {
  color: var(--primary-color-600);
  font-size: smaller;
  font-weight: 500;
  font-style: italic;
  padding: 0.3em 0.2em;
  margin: 0.2em 0 0 0;
  padding-top: 0;
  border-radius: var(--border-radius-1);
}

form button {
  outline: none;
  align-self: flex-start;
  padding: 0.5em;
  margin-top: 0.5rem;
  cursor: pointer;
  width: 35%;
  font-size: 0.875rem;
  border: 1px solid transparent;
  border-radius: 4px;
  font-family: inherit;
  background-color: var(--primary-color-600);
  color: white;
  transition: background-color var(--default-transition-time) ease;
}

form button:hover {
  background-color: var(--primary-color-700);
}

form button:active {
  background-color: var(--primary-color-800);
}

.end footer {
  display: flex;
  align-items: flex-end;
  gap: 0.2em;
  margin-top: 2.5rem;
  flex-grow: 1;
}

.end footer .register-toggler {
  display: flex;
  align-items: center;
  gap: 0.2em;
}

.end footer .register {
  font-size: 0.875rem;
  color: var(--secondary-text-color);
}

.create-account {
  font-size: 0.8rem;
}

@media only screen and (max-width: 425px) {
  main {
    align-items: stretch;
  }
  .auth-container {
    min-width: initial;
    max-width: none;
    width: 100%;
    border: none;
  }
}

@media only screen and (max-width: 1055px) {
  .auth-container {
    flex-direction: column;
  }

  .start {
    flex-basis: 25%;

    border-inline-end: none;
    border-block-end: 1px solid rgb(220, 38, 38, 0.15);

    padding: 0;
    margin: 0;

    padding-block-end: 1em;
    margin-block-end: 1em;
  }
  .start .intro {
    display: none;
  }

  .end {
    flex-basis: 70%;
    /* gap: 2.5em; */
  }
}
</style>
