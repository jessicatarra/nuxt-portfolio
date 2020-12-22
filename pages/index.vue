<template>
  <div>
    <Navbar/>
    <Sidebar/>
        <main class="pt-16 sm:pl-64">
          <Hero />
          <Cases />
          <OpenSource />
        </main>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Hero from '@/components/Hero'
import Cases from '@/components/Cases'
import OpenSource from '@/components/OpenSource'
import Footer from '@/components/Footer'


export default {
  components: {
    Navbar,
    Sidebar,
    Hero,
    Cases,
    OpenSource,
    Footer
  },
}
</script>

<style>

</style>
