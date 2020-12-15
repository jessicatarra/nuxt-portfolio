<template>
    <div>
        <aside class="hidden pt-16 w-64 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block">
            <div class="p-4 min-h-full">

                <div class="px-6 pb-6 flex items-center border-b border-100 sm:flex-col">
                    <div class="profile-name hidden px-3 text-xl rounded-full border sm:block font-medium">Jessica Tarra</div>
                    <div class="profile-image-container mr-auto flex-shrink-0 flex justify-center items-center rounded-full border-4 sm:mt-4 sm:mx-auto">
                        <img class="profile-image" src="../assets/images/jessica.jpg" alt="Jessica Tarra">
                    </div>

                </div>

                <ColorModePicker />

                <div class="mt-4">
                    <ul class="flex flex-col space-y-4 mx-8">
                        <li class="menu-item flex flex-row justify-start space-x-4"
                        >
                            <IconHome/>
                            <a href="#">Home</a>
                        </li>
                        <li class="menu-item flex flex-row justify-start space-x-4"
                        >
                            <IconAbout />
                            <a href="#">About</a>
                        </li>
                        <li class="menu-item flex flex-row justify-start space-x-4"
                        >
                            <IconServices />
                            <a href="#">Services</a>
                        </li>
                        <li class="menu-item flex flex-row justify-start space-x-4"
                        >
                            <IconExperience />
                            <a href="#">Experience</a>

                        </li>
                        <li class="menu-item flex flex-row justify-start space-x-4"
                        >
                            <IconCases />
                            <a href="#">Cases</a>
                        </li>
                        <li class="menu-item flex flex-row justify-start space-x-4"
                        >
                            <IconBlog />
                            <a href="#">Blog</a>
                        </li>
                        <li class="menu-item flex flex-row justify-start space-x-4"
                        >
                            <IconContact />
                            <a href="#">Contact</a>
                        
                        </li>
                    </ul>
                </div>
            </div>
        </aside>  
    </div>
</template>

<script>
import ColorModePicker from '@/components/ColorModePicker'
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
        ColorModePicker,
    },
   data() {
        return  
    }

}
</script>

<style scoped>
aside {
    background-color: var(--bg);
    color: var(--color);
    border-right: 2px solid var(--border-color);
}
.border-b {
    border-bottom-color: var(--border-color) !important;
}
.profile-name, .profile-image-container {
    border-color: var(--border-color) !important;
}
.profile-image-container .profile-image {
    border-radius: 50%;
    object-fit: cover;
    width: 10rem;
    height: 10rem;
}

.svg-inline--fa {
    cursor: pointer;
}

.menu-item:hover> *, .menu-item:active> *{
    color: var(--color-primary);
    transition: 0.3s;
}

.menu-item a {
    font-weight: 500;
    letter-spacing: 2px;
}

@media screen and (min-width: 639px ){
  .dark-mode-container {
    display: none;
  }
}
</style>