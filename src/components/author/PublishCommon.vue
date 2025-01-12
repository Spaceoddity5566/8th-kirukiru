<template>
  <div>
    <!-- 排序方式 -->
    <div
      v-if="publishCommon.length !== 0"
      class="flex justify-end items-center mb-6 text-sm text-myBrown md:mb-12"
    >
      <span class="px-2 border-r-2 border-r-myBrown">排序方式</span>
      <button
        type="button"
        class="px-2 font-semibold"
        @click="defaultSort = !defaultSort"
      >
        {{ defaultSort ? '新 → 舊' : '舊 → 新' }}
      </button>
    </div>
    <!-- 發布的一般文章列表 -->
    <ul>
      <transition-group
        mode="out-in"
        enter-active-class="transition duration-300 ease-out delay-300"
        enter-from-class="transform opacity-0 translate-x-48"
        enter-to-class="transform opacity-100 translate-x-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="transform opacity-100 translate-x-0"
        leave-to-class="transform opacity-0 -translate-x-48"
      >
        <CommonSearchItem
          v-for="content in sortHandler"
          v-bind="content"
          :key="content.artId"
          :is-show-author="false"
        ></CommonSearchItem>
      </transition-group>
    </ul>
    <!-- Pagination -->
    <div class="flex justify-center py-4">
      <ElPagination
        v-model:currentPage="paginationVm.currentPage"
        :style="[paginationStyle]"
        layout="prev, pager, next"
        :page-size="paginationVm.pageSize"
        :pager-count="7"
        :total="paginationVm.total"
        :hide-on-single-page="true"
      ></ElPagination>
    </div>
    <!-- 若沒有文章 -->
    <div
      v-if="publishCommon.length === 0 && !isLoading"
      class="text-lg text-center text-myBrown/40"
    >
      此作者尚未發布文章
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { ElPagination } from 'element-plus'
import CommonSearchItem from '@/components/article/utils/CommonSearchItem.vue'
import {
  getAuthorPublishCommon,
} from '@api'

export default {
  name: 'PublishCommon',
  components: {
    ElPagination,
    CommonSearchItem,
  },
  props: {
    type: {
      type: String,
      default: 'publish-common',
    },
  },
  emits: ['is-loading'],
  data() {
    return {
      publishCommon: [],
      paginationVm: {
        currentPage: 1,
        pageSize: 10,
        total: 0,
      },
      paginationStyle: {
        '--el-pagination-bg-color': '#ededeb',
        '--el-pagination-button-disabled-bg-color': '#ededeb',
        '--el-pagination-hover-color': '#FF7F24'
      },
      defaultSort: true,
      isLoading: false,
    }
  },
  computed: {
    sortHandler() {
      let sortList = []
      if (this.defaultSort) {
        sortList = [...this.publishCommon].sort((a, b) => {
          return dayjs(b.artInitDate).format('x') - dayjs(a.artInitDate).format('x')
        })
      } else {
        sortList = [...this.publishCommon].sort((a, b) => {
          return dayjs(a.artInitDate).format('x') - dayjs(b.artInitDate).format('x')
        })
      }

      return sortList
    },
  },
  watch: {
    'paginationVm.currentPage': {
      handler(newPage) {
        this.getAuthorPublishCommonHandler(newPage)
      },
    },
  },
  mounted() {
    this.getAuthorPublishCommonHandler(this.paginationVm.currentPage)
  },
  methods: {
    getAuthorPublishCommonHandler(currentPage) {
      this.$emit('is-loading', true)
      this.isLoading = true
      getAuthorPublishCommon({
        username: this.$route.params.authorId,
        nowpage: currentPage,
        showcount: this.paginationVm.pageSize
      }).then(res => {
        this.$emit('is-loading', false)
        console.log('取得作者一般文章: ', res)
        if (res.data.success) {
          this.publishCommon = res.data.data
        } else {
          this.$notify({
            group: 'error',
            title: '作者發布的一般文章取得失敗',
          })
          this.publishCommon = []
        }
        this.isLoading = false
      }).catch(error => console.error(error))
    },
  },
}
</script>