<template>
  <footer
    class="relative icons-container sm:pl-64 z-10 pt-4 pb-4"
    :class="{ 'easter-egg-pulse': tapped }"
    @click="handleTap"
  >
    <div class="wrapper flex flex-col">
      <div class="pt-12 pb-8 flex flex-row justify-between">
        <div class="flex flex-row space-x-4 my-auto">
          <a href="https://linkedin.com/in/jessicatarra" target="_blank">
            <IconLinkedin />
          </a>
          <a href="https://github.com/jessicatarra" target="_blank">
            <IconGithub />
          </a>
          <a href="https://instagram.com/jessicatarra" target="_blank">
            <IconInstagram />
          </a>
          <a href="https://twitter.com/jessicatarra" target="_blank">
            <IconTwitter />
          </a>
        </div>
        <div class="flex flex-row space-x-8 my-auto">
          <a href="/" class="hidden sm:block mt-1">
            <IconEmail width="25px" height="25px" />
          </a>
          <a class="text-bold text-l" href="/videoplayback.mp4" download>jessica@tarralva.com</a>
        </div>
      </div>
      <div class="flex justify-center text-center">
        <small class="hidden md:flex"
          >© 2020 Jessica Tarra - Made with ❤️ in 🇧🇷</small
        >
        <small class="flex md:hidden"
          >© 2020 Jessica Tarra <br />
          Made with ❤️ in 🇧🇷</small
        >
      </div>
    </div>
  </footer>
</template>

<script>
import IconEmail from '@/assets/icons/email.svg?inline'
import IconGithub from '@/assets/icons/github.svg?inline'
import IconInstagram from '@/assets/icons/instagram.svg?inline'
import IconLinkedin from '@/assets/icons/linkedin.svg?inline'
import IconTwitter from '@/assets/icons/twitter.svg?inline'

export default {
  components: {
    IconEmail,
    IconGithub,
    IconInstagram,
    IconLinkedin,
    IconTwitter,
  },

  data() {
    return {
      tapCount: 0,
      tapTimer: null,
      tapped: false,
    }
  },

  methods: {
    handleTap() {
      this.tapCount++
      this.tapped = true
      setTimeout(() => { this.tapped = false }, 300)

      if (this.tapTimer) clearTimeout(this.tapTimer)
      this.tapTimer = setTimeout(() => { this.tapCount = 0 }, 2000)

      if (this.tapCount >= 5) {
        this.tapCount = 0
        clearTimeout(this.tapTimer)
        this.$router.push('/training-plan')
      }
    },
  },
}
</script>

<style scoped>
footer {
  background-color: var(--bg);
  cursor: default;
}

.icons-container {
  border-top: 2px solid var(--border-color);
}

@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.6); }
  100% { box-shadow: 0 0 0 12px rgba(99, 102, 241, 0); }
}

.easter-egg-pulse {
  animation: pulse-ring 0.3s ease-out;
}
</style>
