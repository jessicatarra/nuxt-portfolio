<template>
  <header>
    <nav
      class="relative md:fixed top-0 w-full h-16 text-indigo-100 bg-indigo-700 flex justify-between items-center shadow-lg z-50"
    >
      <div class="icon p-8 sm:w-64 flex justify-center flex-row align-middle">
        <a href="/" class="hidden md:block mx-auto text-white hover:text-white">
          <IconEmail />
        </a>
        <a
          class="email block text-lg pt-1 align-text-middle mx-auto tracking-wide text-white hover:text-white ml-0 sm:ml-10"
          href="/"
          >jessica@tarralva.com</a
        >
      </div>
      <div class="w-16 h-16 flex justify-center items-center sm:hidden">
        <button class="p-1" @click="isMenuOpen = !isMenuOpen">
          <svg
            class="fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
            />
            <path
              v-else
              d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z"
            />
          </svg>
        </button>
      </div>
      <ColorModePicker class="p-8 hidden sm:block" />
    </nav>
    <Menu :class="isMenuOpen ? 'block' : 'hidden'" />
  </header>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'
import Menu from '@/components/Menu'
import IconEmail from '@/assets/icons/email.svg?inline'

export default {
  components: {
    ColorModePicker,
    Menu,
    IconEmail,
  },

  data() {
    return {
      isMenuOpen: false,
    }
  },
}
</script>

<style>
/* The hack for Safari */
.h-screen {
  height: 100vh;
  height: -webkit-fill-available;
}
.min-h-screen {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}
.max-h-screen {
  max-height: 100vh;
  max-height: -webkit-fill-available;
}
.icon {
  margin-left: 7rem;
}
@media (max-width: 768px) {
  .icon {
    margin-left: 0;
  }
}
</style>
