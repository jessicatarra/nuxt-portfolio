<template>
    <div class="relative">
        <IconCircleLeft class="absolute top-0 left-0"/>
        <div class="wrapper">
            <div class="md:pt-24 p-18 pb-24 flex flex-col justify-center space-y-8">
                <h2 class="text-left text-2xl md:text-3xl font-bold font-inter z-10">OSS Contributions</h2>
                <p class="leading-loose text-lg mb-12 md:w-112 z-10">A compilation of my Open Source projects on GitHub. Vuejs, Reactjs and Vanilla Javascript.</p>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <a target="_blank" href="https://github.com/jessicatarra/react-game" class="card-grid focus:outline-none rounded-md px-6 py-5 transition duration-200 ease-in-out z-10">
                        <span class="inline-block font-inter font-bold text-lg mb-2">React Game</span>
                        <p class="leading-loose">Front End Mentor's Challenge</p>
                    </a>
                    <a target="_blank" href="https://github.com/jessicatarra/REST-Countries-API" class="card-grid focus:outline-none rounded-md px-6 py-5 transition duration-200 ease-in-out z-10">
                        <span class="inline-block font-inter font-bold text-lg mb-2">REST Countries API</span>
                        <p class="leading-loose">Front End Mentor's Challenge</p>
                    </a>
                    <a target="_blank" href="https://github.com/jessicatarra/dashboard-react" class="card-grid focus:outline-none rounded-md px-6 py-5 transition duration-200 ease-in-out z-10">
                        <span class="inline-block font-inter font-bold text-lg mb-2">Dashboard React</span>
                        <p class="leading-loose">Front End Mentor's Challenge</p>
                    </a>
                    <a target="_blank" href="https://github.com/jessicatarra/ninja-smoothies" class="card-grid focus:outline-none rounded-md px-6 py-5 transition duration-200 ease-in-out z-10">
                        <span class="inline-block font-inter font-bold text-lg mb-2">Ninja Smoothies</span>
                        <p class="leading-loose">Vuejs, firebase and cypress for testing.</p>
                    </a>
                    <a target="_blank" href="https://github.com/jessicatarra/live-chat-vue" class="card-grid focus:outline-none rounded-md px-6 py-5 transition duration-200 ease-in-out z-10">
                        <span class="inline-block font-inter font-bold text-lg mb-2">React Game</span>
                        <p class="leading-loose">Vuejs, firebase and cypress for testing.</p>
                    </a>
                    <a target="_blank" href="https://github.com/jessicatarra" class="card-grid focus:outline-none rounded-md px-6 py-5 transition duration-200 ease-in-out z-10">
                        <span class="inline-block font-inter font-bold text-lg mb-2">See More</span>
                        <span class="leading-loose">...</span>
                    </a>
                </div>
            </div>
        </div>
        <IconCircleRight class="absolute xl:flex hidden top-0 right-0"/>
    </div>

</template>

<script>
  import IconCircleLeft from '@/assets/icons/circle-bg-left.svg?inline'
  import IconCircleRight from '@/assets/icons/circle-bg-right.svg?inline'

  export default {
  components: {
    IconCircleLeft,
    IconCircleRight
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
    .card-grid {
        background-color: var(--bg-secondary);
    }
    .circle {
        color: var(--border-color);
    }
</style>