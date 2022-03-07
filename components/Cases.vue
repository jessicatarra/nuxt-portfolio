<template>
  <section id="cases" class="wrapper">
    <div
      class="
        relative
        md:pt-24
        pt-18
        pb-24
        flex flex-col
        justify-center
        space-y-4
      "
    >
      <h2 class="text-left text-3xl md:text-4xl font-bold font-inter z-10">
        The work I do, <br />
        and business I help.
      </h2>
      <div>
        <div v-for="item in items" :key="item.id" class="overflow-hidden pt-16">
          <a
            :href="item.url"
            target="_blank"
            class="cursor flex p-8 lg:p-16 rounded-md border bg-gradient-to-l"
            :class="item.color"
          >
            <div class="flex flex-col justify-between pr-2 lg:pr-18 space-y-6">
              <h4
                class="text-3xl md:text-4xl font-inter font-bold leading-none"
              >
                {{ item.title }}
              </h4>
              <p class="leading-loose mr-4 text-lg">
                {{ item.description }} <br />
                Technologies: {{ item.stack }}
              </p>
            </div>
            <div
              class="
                hidden
                xl:block
                w-3/6
                flex-shrink-0
                relative
                hover:-translate-y-6
                transform
                transition
                duration-500
                ease-in-out
              "
            >
              <img
                class="website-img absolute rounded max-w-max block"
                :src="require('@/assets/images/' + item.image)"
                :alt="item.alt"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          color: 'from-green-400 to-purple-400',
          url: 'https://app.helpmefeed.org/',
          title: 'Help Me Feed Foundation',
          description:
            'Not-for-profit foundation that supports the health of babies and parents globally.',
          stack: 'React, React Native, Typescript and AWS',
          image: 'hmf.png',
          alt: 'Help Me Feed Foundation',
        },
        {
          id: 1,
          color: 'from-pink-400 to-yellow-400',
          url: 'https://www.youtomorrow.com/',
          title: 'You Tomorrow',
          description:
            'You Tomorrow supports clinicians to bridge the gap between face-to-face visits by providing secure communication tools and a library of resources.',
          stack: 'React, React Native, Typescript and AWS',
          image: 'youtomorrow.png',
          alt: 'You Tomorrow',
        },
        {
          id: 2,
          color: 'from-blue-300 to-blue-600',
          url: 'https://dadoslegais.com/',
          title: 'Dados Legais Website',
          description:
            ' Datos legais is a platform that helps public and private institutions in compliance with the General Data Protection Law - LGPD.',
          stack: 'Vanilla Javascript, Sass and Grunt js.',
          image: 'dadoslegais-website.png',
          alt: 'Dados Legais Website',
        },
        {
          id: 3,
          color: 'from-orange-500 to-pink-400',
          url: '',
          title: 'Miss 2.0',
          description:
            'MISS2.0 is the first entirely digital competition organised for young Cotê d' +
            "'" +
            'Ivoire women.',
          stack: 'Wordpress and PHP.',
          image: 'miss-website.png',
          alt: 'Miss 2.0',
        },
        {
          id: 4,
          color: 'from-gray-800 to-blue-500',
          url: 'https://gapasset.com.br/',
          title: 'Gap Asset',
          description:
            'Founded in 1996, Gap Asset is a pioneer in the independent management market.',
          stack: 'Nextjs, Typescript, AWS and headless CMS (Strapi).',
          image: 'gapasset-website.png',
          alt: 'Gap Asset',
        },
      ],
    }
  },
}
</script>

<style scoped>
a {
  color: #fff;
}
a:hover,
a:active {
  color: #fff;
}
.website-img {
  top: -6rem;
  left: 65px;
}
</style>
