<template>
    <div class="px-8 pt-24 pb-8 flex flex-col justify-center space-y-8">
        <h1 class="text-center text-2xl md:text-3xl">Hi, I'm Jessica Tarra 👋</h1>
        <vue-typer  class="h-22 md:h-48 text-4xl md:text-6xl font-bold text-center" text='Hello World! I was registered locally!'></vue-typer>
        <h1 class="text-center text-xl md:text-2xl">I'm a <strong class="font-bold">Front-end Developer </strong>from Cartagena, Colombia and currently living in Rio de Janeiro, Brazil.</h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style>
    .vue-typer .custom.char.typed {
    color: var(--color);
    }
</style>

