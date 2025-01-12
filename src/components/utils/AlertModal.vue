<template>
  <TransitionRoot
    appear
    :show="showAlert"
    as="template"
  >
    <Dialog
      as="div"
      @close="closeModal"
    >
      <div class="overflow-y-auto fixed inset-0 z-50">
        <div class="px-4 min-h-screen text-center">
          <span
            class="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block overflow-hidden z-50 my-8 w-[75vw] text-left align-middle bg-white rounded-b-2xl ring-2 ring-myBrown shadow-xl transition-all sm:w-[60vw] md:max-w-sm"
            >
              <DialogTitle
                as="h2"
                class="relative py-3 text-center bg-myYellow border-b-2 border-myBrown"
              >
                <span
                  v-show="showTitle"
                  class="text-xl font-bold leading-6 text-myBrown md:text-2xl"
                >{{ titleText }}</span>
                <button
                  v-if="showClose"
                  type="button"
                  class="group absolute top-1/2 right-2 p-4 -translate-y-1/2"
                  @click="cancelHandler"
                >
                  <span class="transition-all md:group-hover:scale-125 material-icons">close</span>
                </button>
              </DialogTitle>
              <!-- alert 內容 -->
              <div class="flex flex-col gap-3 items-center py-6 md:py-8">
                <div class="py-4">
                  <span
                    :class="[messageClass]"
                  >
                    {{ message }}
                  </span>
                </div>
                <div class="flex flex-col gap-3 justify-evenly items-center">
                  <!-- 確認按鈕 -->
                  <button
                    v-if="showConfirm"
                    type="button"
                    class="text-myBrown rounded-lg button-md myButtonValid myButtonValidHover"
                    @click="confirmHandler"
                  >
                    <span class="font-bold">{{ confirmText }}</span>
                  </button>
                  <!-- 取消按鈕 -->
                  <button
                    v-if="showCancel"
                    type="button"
                    class="py-1 rounded-lg button-md myButtonValidReverse myButtonValidHover"
                    @click="cancelHandler"
                  >
                    <span class="font-bold">{{ cancelText }}</span>
                  </button>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogTitle,
} from '@headlessui/vue'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'AlertModal',
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogTitle,
  },
  props: {
    // showAlert: {
    //   type: Boolean,
    //   default: false,
    // },
    showTitle: {
      type: Boolean,
      default: false,
    },
    showClose: {
      type: Boolean,
      default: false,
    },
    showConfirm: {
      type: Boolean,
      default: true,
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    titleText: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    messageClass: {
      type: String,
      default: 'text-2xl font-bold text-myBrown md:text-3xl line-clamp-2',
    },
    confirmText: {
      type: String,
      default: '確認',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    // nothing | replace | push
    confirmMode: {
      type: String,
      default: 'nothing',
    },
    confirmTodo: {
      type: [String, Object, Function],
      default: '',
    },
    // nothing | anchor | replace | push
    cancelMode: {
      type: String,
      default: 'nothing',
    },
    cancelTodo: {
      type: [String, Object],
      default: ''
    },
  },
  emits: ['alert-confirm', 'alert-cancel'],
  data() {
    return {
    }
  },
  computed: {
    ...mapState([
      'showAlert',
    ]),
  },
  watch: {
    showAlert(show) {
      if (show) {
        this.SET_MASK({ allowDrop: false, isShow: true })
      } else {
        this.CLOSE_MASK()
      }
    },
  },
  methods: {
    ...mapMutations([
      'SET_MASK',
      'CLOSE_MASK',
      'SHOW_ALERT',
      'CLOSE_ALERT',
    ]),
    closeModal() {
      this.CLOSE_MASK()
    },
    confirmHandler() {
      this.CLOSE_MASK()
      this.CLOSE_ALERT()
      this.$emit('alert-confirm', this.confirmTodo)
      switch (this.confirmMode) {
        case 'function':
          this.confirmTodo()
          break
        case 'replace':
          this.$router.replace(this.confirmTodo)
          break
        case 'push':
          this.$router.push(this.confirmTodo)
          break
        case 'nothing':
        default:
          break
      }
    },
    cancelHandler() {
      this.CLOSE_MASK()
      this.CLOSE_ALERT()
      this.$emit('alert-cancel', this.cancelTodo)
      switch (this.cancelMode) {
        case 'nothing':
          break
        case 'anchor':
          console.log(this.cancelTodo)
          this.$router.push(this.cancelTodo)
          break
        case 'replace':
          this.$router.replace(this.cancelTodo)
          break
        case 'push':
          this.$router.push(this.cancelTodo)
          break
        default:
          break
      }
    },
  }
}
</script>