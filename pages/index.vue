<template>
  <div>
    <Navbar />
    <Sidebar />
    <main class="pt-16 md:pl-64">
      <Hero />
      <Services />
      <Cases />
      <OpenSource />
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
import OpenSource from '@/components/OpenSource'
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
    OpenSource,
    Blog,
    Contact,
    Footer,
  },
}
</script>

<style></style>
