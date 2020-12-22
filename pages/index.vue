<template>
  <div>
    <Navbar/>
    <Sidebar/>
        <main class="pt-16 sm:pl-64">
          <Hero />
          <OpenSource />
        </main>
    <Footer data-aos="fade-up"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Hero from '@/components/Hero'
import OpenSource from '@/components/OpenSource'
import Footer from '@/components/Footer'


export default {
  components: {
    Navbar,
    Sidebar,
    Hero,
    OpenSource,
    Footer
  },
}
</script>

<style>

</style>
