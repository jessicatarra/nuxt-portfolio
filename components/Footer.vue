<template>
    <footer class="relative footer-1 bg-gray-100 py-8 sm:py-12 z-50 w-full">  
        <div>
            <div class="fixed bottom-0 inset-x-0 z-50 bg-gray-300 flex justify-between items-center shadow-lg">
                <a href="#">
                    <IconLinkedin />
                </a>
                <a href="#">
                    <IconGithub />
                </a>
                <a href="#">
                    <IconInstagram />
                </a>
                <a href="#">
                    <IconTwitter />
                </a>

            </div>
            <div class="ml-16 p-8 sm:w-64 flex justify-center flex-row align-middle">
                <a href="#" class="block mx-auto text-orange-500 hover:text-yellow-500">
                    <IconEmail />
                </a>
                <a class="email block text-lg pt-1 align-text-middle mx-auto tracking-wide text-orange-500 hover:text-yellow-500" href="#">hi@jesta.dev</a>
            </div>            
        </div>
        <div class="bg-gray-300 flex flex-row">
            
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

<style>

</style>