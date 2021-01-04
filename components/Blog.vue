<template>
    <section id="blog" class="wrapper">
        <div class="md:pt-24 pt-18 pb-24 ">
           <div class="relative z-10 flex p-8 lg:p-16 rounded-md border bg-gradient-to-t from-blue-400 md:from-blue-500 to-purple-200">
                <div class="flex flex-col justify-between pr-2 lg:pr-18 space-y-6">
                    <h2 class="text-3xl md:text-4xl text-white font-inter font-bold leading-none">Blog</h2>
                    <span class="span cursor-pointer line-through inline-flex items-center text-white font-semibold tracking-wide">
                        <span class="mr-2">Coming Soon</span>
                        <ArrowRight />
                    </span>
                </div>
                <div class="hidden xl:block w-3/6 flex-shrink-0 relative hover:-translate-y-6 transform transition duration-500 ease-in-out">
                    <ComingSoon class="coming-svg hidden xl:block absolute rounded max-w-max block" />
                </div>
           </div>
        </div>
    </section>
</template>

<script>
    import ComingSoon from '@/assets/icons/coming-soon.svg?inline'
    import ArrowRight from '@/assets/icons/arrow-right.svg?inline'

export default {
    components: {
        ComingSoon,
        ArrowRight
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .span {
        border-bottom-color: transparent;
        border-bottom-width: 2px;
    }
    .span:hover {
        color: var(--color-primary);
        border-bottom-color: var(--color-primary);
    }
    .coming-svg {
        width: 90rem;
        height: 25rem;
        top:-8rem;
        left:-4rem;
    }
</style>