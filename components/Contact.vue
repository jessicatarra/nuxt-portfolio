<template>
    <section id="contact" class="wrapper">
        <div class="md:pt-24 pt-18 pb-40 flex flex-col justify-center space-y-8 max-w-xl mx-auto">
           <h2 class="text-left sm:text-center text-3xl md:text-4xl font-bold font-inter z-10">Let me know if you want to talk about a potential collaboration. I’m available for freelance work.</h2>
           <a href="mailto:hi@tarralva.com" class="cursor-pointer flex flex-row justify-center">
               <div>
                   <h2 class="underline text-left sm:text-center text-3xl md:text-4xl font-bold font-inter z-10 transition duration-700 ease-in-out">Let's build your idea</h2>
               </div>
                <div>
                    <Arrow class="z-10 transition duration-700 ease-in-out"/>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
    import Arrow from '@/assets/icons/arrow.svg?inline'

export default {
    components: {
        Arrow
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>

</style>