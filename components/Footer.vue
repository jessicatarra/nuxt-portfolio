<template>
    <footer class="relative icons-container sm:pl-64 z-10 pt-4 pb-4">  
        <div class="wrapper flex flex-col">
            <div class="pt-12 pb-8 flex flex-row justify-between">
                <div class="flex flex-row space-x-4 my-auto ">
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
                    <a class="text-bold text-xl" href="/">hi@jesta.dev</a>
                </div>            
            </div>
            <div class="flex justify-center text-center">
                <small class="hidden md:flex">© 2020 Jessica Tarra - Made with ❤️ in Rio de Janeiro, Brazil</small>
                <small class="flex md:hidden">© 2020 Jessica Tarra <br> Made with ❤️ in Rio de Janeiro, Brazil</small>
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
        IconTwitter
    },

   data() {
       return {

       }
        
    }
}
</script>

<style scoped>
footer{
    background-color: var(--bg);
}

.icons-container{
    border-top: 2px solid var(--border-color);
}
</style>