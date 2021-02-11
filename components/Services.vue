<template>
  <section id="services" class="wrapper">
    <div class="md:pt-24 pt-18 pb-24 flex flex-col justify-center space-y-8">
      <h2 class="text-left text-3xl md:text-4xl font-bold font-inter z-10">
        Services
      </h2>
      <div class="grid md:grid-cols-4 lg:grid-cols-3 gap-10 pt-8">
        <div
          class="cursor-pointer transition duration-700 ease-in-out services-card md:col-span-2 lg:col-span-1 flex flex-col justify-center text-center py-8 xl:py-16 px-4 xl:px-8 rounded-md focus:outline-none"
        >
          <div
            class="bg-green-500 w-20 h-20 p-4 rounded-2xl flex justify-center align-middle mx-auto mb-8"
          >
            <WebDev width="6rem" />
          </div>
          <span class="inline-block text-lg font-bold mb-2"
            >Web Development</span
          >
          <p class="leading-loose dark:text-gray-300"></p>
        </div>
        <div
          class="cursor-pointer transition duration-700 ease-in-out services-card md:col-span-2 lg:col-span-1 flex flex-col justify-center text-center py-8 xl:py-16 px-4 xl:px-8 rounded-md focus:outline-none"
        >
          <div
            class="bg-yellow-500 w-20 h-20 p-4 rounded-2xl flex justify-center align-middle mx-auto mb-8"
          >
            <App width="6rem" />
          </div>
          <span class="inline-block text-lg font-bold mb-2"
            >App Development</span
          >
          <p class="leading-loose dark:text-gray-300"></p>
        </div>
        <div
          class="cursor-pointer transition duration-700 ease-in-out services-card md:col-span-2 lg:col-span-1 flex flex-col justify-center text-center py-8 xl:py-16 px-4 xl:px-8 rounded-md focus:outline-none"
        >
          <div
            class="bg-red-500 w-20 h-20 p-4 rounded-2xl flex justify-center align-middle mx-auto mb-8"
          >
            <Test width="6rem" />
          </div>
          <span class="inline-block text-lg font-bold mb-2">QA Testing</span>
          <p class="leading-loose dark:text-gray-300"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import WebDev from '@/assets/icons/web-dev.svg?inline'
import Test from '@/assets/icons/test.svg?inline'
import App from '@/assets/icons/app.svg?inline'

export default {
  components: {
    WebDev,
    Test,
    App,
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.services-card {
  background-color: var(--bg-secondary);
}
.services-card:hover {
  background-color: var(--bg-hover);
}
</style>
