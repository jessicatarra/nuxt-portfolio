<template>
  <section id="hero" class="wrapper">
    <div
      class="pt-8 md:pt-48 pb-24 flex flex-col justify-center space-y-8 md:space-y-16"
    >
      <h1 class="text-center text-2xl md:text-4xl">Hi, I'm Jessica Tarra 👋</h1>
      <vue-typer
        class="text-5xl md:text-8xl font-bold text-center"
        text="Building awesome software experiences!"
      ></vue-typer>
      <h2 class="text-center text-2xl md:text-4xl">
        I'm a <strong class="font-bold">Software Developer </strong>from
        Cartagena, Colombia and currently living in Rio de Janeiro, Brazil.
      </h2>
      <button
        class="h-10 w-40 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-full focus:shadow-outline hover:bg-indigo-800 m-auto"
        onclick="location.href='/#contact';"
      >
        Hire me
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style>
.vue-typer .custom.char.typed {
  color: var(--color);
}
</style>
