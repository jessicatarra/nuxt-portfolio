<template>
    <div class="menu absolute w-full z-10">
        <ul class="flex flex-col space-y-4 mx-8 sm:mt-4 sm:py-1 mt-24 py-2 mb-12">
            <li class="menu-item flex flex-row justify-start space-x-4"
            >
                <IconHome/>
                <a class="font-bold tracking-tight" href="#">Home</a>
            </li>
            <li class="menu-item flex flex-row justify-start space-x-4"
            >
                <IconAbout />
                <a class="font-bold tracking-tight" href="#">About</a>
            </li>
            <li class="menu-item flex flex-row justify-start space-x-4"
            >
                <IconServices />
                <a class="font-bold tracking-tight" href="#services">Services</a>
            </li>
            <li class="menu-item flex flex-row justify-start space-x-4"
            >
                <IconCases />
                <a class="font-bold tracking-tight" href="#cases">Cases</a>
            </li>
            <li class="menu-item flex flex-row justify-start space-x-4"
            >
                <IconExperience />
                <a class="font-bold tracking-tight" href="#open-source">Experience</a>

            </li>
            <li class="menu-item flex flex-row justify-start space-x-4"
            >
                <IconBlog />
                <a class="font-bold tracking-tight" href="#">Blog</a>
            </li>
            <li class="menu-item flex flex-row justify-start space-x-4"
            >
                <IconContact />
                <a class="font-bold tracking-tight" href="#">Contact</a>
            
            </li>
        </ul>
    </div>
</template>

<script>
import IconHome from '@/assets/icons/home.svg?inline'
import IconAbout from '@/assets/icons/about.svg?inline'
import IconServices from '@/assets/icons/services.svg?inline'
import IconExperience from '@/assets/icons/experience.svg?inline'
import IconCases from '@/assets/icons/cases.svg?inline'
import IconBlog from '@/assets/icons/blog.svg?inline'
import IconContact from '@/assets/icons/contact.svg?inline'

export default {
    
    components: {
        IconHome,
        IconAbout,
        IconServices,
        IconExperience,
        IconCases,
        IconBlog,
        IconContact,
    },
   data() {
        return  { 

        }
    }

}
</script>

<style scoped>
.menu {
    background-color: var(--bg);
}
.svg-inline--fa {
    cursor: pointer;
}

.menu-item:hover> *, .menu-item:active> *{
    color: var(--color-primary);
    transition: 0.3s;
}
</style>