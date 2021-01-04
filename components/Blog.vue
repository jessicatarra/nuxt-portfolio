<template>
    <section id="services" class="wrapper">
        <div class="md:pt-24 p-18 pb-24 flex flex-col justify-center space-y-8">
           <div class="flex md:flex-col overflow-hidden relative bg-gradient-to-t from-blue-400 md:from-blue-500 to-purple-200 rounded-lg p-8 md:p-16">
                <div class="flex flex-col justify-center lg:w-3/6 md:mr-32">
                    <h2 class="font-bold font-inter text-2xl text-white md:mr-10 mb-4 leading-tight">Blog</h2>
                </div>
                <div class="relative lg:absolute right-0 top-0 lg:-mt-96 lg:-mr-32 hidden lg:inline-block">
                    <ComingSoon  class="absolute"/>
                </div>
           </div>
        </div>
    </section>
</template>

<script>
    import ComingSoon from '@/assets/icons/coming-soon.svg?inline'

export default {
    components: {
        ComingSoon
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>

</style>