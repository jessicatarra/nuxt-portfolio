<template>
    <div>
        <aside class="hidden pt-16 w-64 fixed inset-y-0 overflow-x-hidden overflow-y-auto sm:block">
            <div class="p-4 min-h-full">
                <!-- Extract: user_info blade partial -->
                <div class="px-6 pb-6 flex items-center border-b border-100 sm:flex-col">
                    <div class="profile-name hidden px-3 text-base rounded-full border sm:block">Jessica Tarra</div>
                    <div class="profile-image-container mr-auto flex-shrink-0 flex justify-center items-center rounded-full border-4 sm:mt-4 sm:mx-auto">
                        <img class="profile-image" src="../assets/images/jessica.jpg" alt="Jessica Tarra">
                    </div>

                </div>

                <!-- Extract: menu_items -->
                <!-- <div class="mt-4"> -->
                    <!-- TODO: add group here and group-hover to the shevron icon to show it only when the group is hovered -->
                    <!-- <a v-for="i in Array(8).keys()" href="#" class="px-10 py-2 flex items-center text-xl text-gray-100 hover:text-orange-500 sm:px-4 sm:text-base">
                        <svg class="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 71">
                            <path d="M28.559 5.848c2.665-6.75 12.217-6.75 14.882 0l.691 1.751a8 8 0 009.784 4.712l1.8-.551c6.938-2.125 12.895 5.343 9.279 11.635l-.938 1.632a8 8 0 002.416 10.587l1.553 1.063c5.988 4.1 3.862 13.413-3.311 14.51l-1.86.284a8 8 0 00-6.771 8.49l.136 1.877c.528 7.238-8.079 11.382-13.408 6.457l-1.382-1.277a8 8 0 00-10.86 0l-1.382 1.277c-5.33 4.925-13.936.78-13.408-6.457l.136-1.877a8 8 0 00-6.77-8.49l-1.86-.285c-7.174-1.096-9.3-10.409-3.312-14.509l1.553-1.063a8 8 0 002.416-10.587l-.938-1.632c-3.616-6.292 2.34-13.76 9.28-11.635l1.799.55a8 8 0 009.784-4.71l.69-1.752z" fill="none" /></svg>
                        <div class="ml-6 flex-1 sm:ml-4">Item #{{ i+1 }}</div>

                        <svg class="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M9.3 8.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l3.29-3.3-3.3-3.3z" /></svg>
                    </a>
                </div> -->
            </div>
        </aside>  
    </div>
</template>

<script>
export default {

   data() {
        return
    }

}
</script>

<style>
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
</style>