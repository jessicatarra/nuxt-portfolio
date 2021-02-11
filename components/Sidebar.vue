<template>
  <div>
    <aside
      class="hidden pt-16 w-64 fixed inset-y-0 overflow-x-hidden overflow-y-auto md:block z-20"
    >
      <div class="p-4 min-h-full">
        <div
          class="px-6 pb-6 flex items-center border-b border-100 md:flex-col"
        >
          <div
            class="profile-image-container mr-auto flex-shrink-0 flex justify-center items-center rounded-full border-4 md:mt-4 md:mx-auto"
          >
            <img
              class="profile-image"
              src="../assets/images/jessica.jpg"
              alt="Jessica Tarra"
            />
          </div>
        </div>
        <Menu />
      </div>
    </aside>
  </div>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  components: {
    Menu,
  },
  data() {
    return {}
  },
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
.profile-name,
.profile-image-container {
  border-color: var(--border-color) !important;
}
.profile-image-container .profile-image {
  border-radius: 50%;
  object-fit: cover;
  width: 10rem;
  height: 10rem;
}
</style>
