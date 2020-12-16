<template>
  <div>
    <Navbar />
    <Sidebar />
        <main class="pt-16 sm:pl-64">
          <Hero />
        </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'


export default {
  components: {
    Navbar,
    Sidebar,
    Hero,
    Footer
  },
}
</script>

<style>

</style>
