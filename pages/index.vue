<template>
  <div>
    <Navbar />
    <Sidebar />
    <main class="pt-16 md:pl-64">
      <Hero />
      <Services />
      <Cases />
      <Blog />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Cases from '@/components/Cases'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Sidebar,
    Hero,
    Services,
    Cases,
    Blog,
    Contact,
    Footer,
  },

  data() {
    return {
      keyBuffer: [],
    }
  },

  mounted() {
    window.addEventListener('keydown', this.handleKeyEgg)
  },

  beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeyEgg)
  },

  methods: {
    handleKeyEgg(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      this.keyBuffer.push(e.key.toLowerCase())
      this.keyBuffer = this.keyBuffer.slice(-3)
      if (this.keyBuffer.join('') === 'run') {
        this.$router.push('/training-plan')
      }
    },
  },
}
</script>

<style></style>
