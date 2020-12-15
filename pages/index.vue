<template>
  <div>
    <Navbar />
        <main class="pt-16 sm:pl-64">
            <div class="p-4">
                <h1 class="text-xs uppercase tracking-wider">Content</h1>

                <div v-for="i in Array(15).keys()" class="cards mt-4 p-4 rounded shadow font-semibold text-center hover:shadow-md">
                    Match #{{ i }}
                </div>
            </div>
        </main>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'


export default {
  components: {
    Navbar,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  padding: 0 var(--wrapperSpace);
  max-width: calc(1115px + 1.5em);
  margin: auto;
  width: 100%;
  box-sizing: border-box;
}

.cards {
  background-color: var(--bg-secondary);
}
</style>
