<template>
  <!-- Mask -->
  <transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="transform opacity-100"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="transform opacity-100"
    leave-to-class="transform opacity-0"
  >
    <div
      v-if="showNavbar"
      class="fixed inset-0 z-20 bg-black/30 backdrop-blur-sm transition-all duration-300"
      @click="dropToggle"
    ></div>
  </transition>
  <!-- Mobile Nav -->
  <div
    class="overflow-x-hidden overflow-y-auto fixed z-30 shadow-xl transition-all duration-200 md:hidden"
    :class="[ showNavbar ? 'translate-x-0' : '-translate-x-full' ]"
  >
    <div class="flex flex-col justify-between max-w-xs h-[calc(100vh-56px)] bg-gray-200">
      <ul class="flex flex-col">
        <li>
          <router-link
            :to="{
              name: 'CategoryContent',
              params: { searchType: 'kiru' },
              query: { categoryId: 1 },
            }"
            class="block relative before:absolute before:bottom-0 before:left-1/2 py-6 px-10 before:w-10/12 before:h-[2px] text-xl font-bold text-myBrown before:bg-myYellow bg-transparent focus:bg-myYellow/20 transition-all before:-translate-x-1/2"
            aria-current="page"
          >
            切切分類
          </router-link>
        </li>
        <li>
          <button
            type="button"
            class="block relative before:absolute before:bottom-0 before:left-1/2 py-6 px-10 w-full before:w-10/12 before:h-[2px] text-xl font-bold text-left text-myBrown before:bg-myYellow bg-transparent focus:bg-myYellow/20 transition-all before:-translate-x-1/2"
            aria-current="page"
            @click="openSearch"
          >
            搜尋切切
          </button>
        </li>
        <li>
          <a
            href="#"
            class="block relative before:absolute before:bottom-0 before:left-1/2 py-6 px-10 before:w-10/12 before:h-[2px] text-xl font-bold text-myBrown before:bg-myYellow bg-transparent focus:bg-myYellow/20 transition-all before:-translate-x-1/2"
            aria-current="page"
          >編輯精選</a>
        </li>
        <li>
          <router-link
            :to="{ name: 'About' }"
            class="block relative before:absolute before:bottom-0 before:left-1/2 py-6 px-10 before:w-10/12 before:h-[2px] text-xl font-bold text-myBrown before:bg-myYellow bg-transparent focus:bg-myYellow/20 transition-all before:-translate-x-1/2"
            aria-current="page"
          >
            關於切切
          </router-link>
        </li>
      </ul>
      <div class="flex flex-col py-6 px-10">
        <div class="mx-auto mb-4">
          <img
            src="@img/Logo-Simple-white.svg"
            alt="Mobile navbar footer logo"
          >
        </div>
        <p class="text-xs text-myBrown">
          &copy; 2022 白洞白色的明天有限公司 版權所有
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  props: {
    showNavbar: {
      type: Boolean,
      default: false,
    }
  },
  emits: ['drop-close'],
  computed: {
    ...mapState([
      'showSearch',
    ]),
  },
  watch: {
    // 'showNavbar': {
    //   handler(newVal) {
    //     if (newVal) {
    //       document.querySelector('html').classList.add('overflow-y-hidden')
    //     } else {
    //       document.querySelector('html').classList.remove('overflow-y-hidden')
    //     }
    //   },
    //   immediate: true,
    // }
  },
  methods: {
    ...mapMutations([
      'SHOW_SEARCH',
      'CLOSE_MASK'
    ]),
    dropToggle() {
      this.$emit('drop-close', false)
    },
    openSearch() {
      this.dropToggle()
      if (this.showSearch) return
      else {
        this.$nextTick(() => {
          this.SHOW_SEARCH()
        })
      }
    },
  },
}
</script>