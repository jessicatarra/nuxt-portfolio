<template>
    <div class="wrapper">
        <div class="relative md:pt-24 p-18 pb-24 flex flex-col justify-center space-y-8">
            <h2 class="text-left text-2xl md:text-3xl font-bold font-inter z-10">The work I do, <br> and business I help.</h2>
            <div>
                <div class="overflow-hidden pt-8">
                    <a href="https://dadoslegais.com/" target="_blank" class="cursor flex p-8 lg:p-16 rounded-md border bg-gradient-to-l from-blue-300 to-blue-600 ">
                        <div class="pr-2 lg:pr-18">
                            <h4 class="text-3xl md:text-4xl font-inter font-bold mb-4 leading-none">Dados Legais Website</h4>
                            <p class="leading-loose mr-4 text-lg mb-6">Legal Data is a platform that helps public and private institutions in compliance with the General Data Protection Law - LGPD.<br> Technologies: Vanilla Javascript, Sass and Grunt js.</p>
                        </div>
                        <div class="hidden xl:block w-3/6 flex-shrink-0 relative">
                            <img class="website-img absolute rounded max-w-max block" src="../assets/images/dadoslegais-website.png" alt="">
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="overflow-hidden pt-8">
                    <a href="#" target="_blank" class="cursor flex p-8 lg:p-16 rounded-md border bg-gradient-to-r from-orange-500 to-white">
                        <div class="pr-2 lg:pr-18">
                            <h4 class="text-3xl md:text-4xl font-inter font-bold mb-4 leading-none">Miss 2.0</h4>
                            <p class="leading-loose mr-4 text-lg mb-6">MISS2.0 is the first entirely digital competition organised for young Cotê d'Ivoire women.<br> Technologies: Wordpress and PHP.</p>
                        </div>
                        <div class="hidden xl:block w-3/6 flex-shrink-0 relative">
                            <img class="website-img absolute rounded max-w-max block" src="../assets/images/miss-website.png" alt="">
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <div class="overflow-hidden pt-8">
                    <a href="https://gapasset.com.br/" target="_blank" class="cursor flex p-8 lg:p-16 rounded-md border bg-gradient-to-r from-green-400 to-blue-500">
                        <div class="pr-2 lg:pr-18">
                            <h4 class="text-3xl md:text-4xl font-inter font-bold mb-4 leading-none">Gap Asset</h4>
                            <p class="leading-loose mr-4 text-lg mb-6">Founded in 1996, Gap Asset is a pioneer in the independent management market. <br>Technologies: Nextjs, Typescript, AWS and headless CMS (Strapi).</p>
                        </div>
                        <div class="hidden xl:block w-3/6 flex-shrink-0 relative">
                            <img class="website-img absolute rounded max-w-max block" src="../assets/images/gapasset-website.png" alt="">
                        </div>
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    a {
        color: #fff;
    }
    a:hover, a:active {
        color: #fff;
    }
    .website-img {
        top:-6rem;
        left:65px;
    }
</style>