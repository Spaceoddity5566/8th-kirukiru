<template>
  <div class="min-h-[calc(100vh-64px-56px)]">
    <div class="py-4 mx-auto max-w-[816px] md:py-12">
      <!-- 選擇切切 / 一般 -->
      <SearchArticleType
        :search-type="searchType"
        @article-type="articleTypeChange"
      ></SearchArticleType>
      <div class="flex justify-between items-center p-4 border-b border-black/10 md:items-end md:px-0 md:pt-8 md:pb-4">
        <h2 class="text-sm tracking-wide text-myBrown md:text-base">
          關鍵字搜尋結果，共 {{ resultCount }} 筆
        </h2>
        <div class="flex gap-3 items-center">
          <span class="text-sm text-black/40">1 頁顯示</span>
          <select
            v-model.number="paginationCount"
            name="pagination-count"
            class="py-1 pr-8 text-sm bg-myGray rounded-lg form-select"
          >
            <option
              v-for="n in 5"
              :key="n"
              :value="n * 10"
            >
              {{ n * 10 }}
            </option>
          </select>
          <span class="text-sm text-black/40">筆</span>
        </div>
      </div>
      <!-- 列表 -->
      <div class="relative p-4 min-h-[720px] rounded-lg md:py-8 md:px-0">
        <router-view
          :key="keywords"
          :name="searchType"
          :keywords="keywords"
          :pagination-count="paginationCount"
          @is-loading="isLoading = $event"
          @result-count="resultCount = $event"
        ></router-view>
        <!-- 局部 Loading -->
        <Loading
          v-model:active="isLoading"
          :is-full-page="false"
          background-color="#EDEDEB"
        >
          <GlobalLoading
            class="la-2x"
            :show="isLoading"
          ></GlobalLoading>
        </Loading>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import SearchArticleType from '@/components/search/SearchArticleType.vue'
// import {
//   searchKiru,
//   searchNormal,
// } from '@api'

export default {
  name: 'SearchPage',
  components: {
    Loading,
    SearchArticleType,
  },
  props: {
    searchType: {
      type: String,
      default: '',
    },
    keywords: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // articleType: 'kiru',
      isLoading: false,
      paginationCount: 10,
      resultCount: 0,
      // kiruSearchResult: [],
      // commonSearchResult: [],
    }
  },
  computed: {
    
  },
  watch: {

  },
  methods: {
    articleTypeChange(type) {
      // this.articleType = type
      this.$router.push({
        name: 'SearchContent',
        params: { searchType: type },
        query: { keywords: this.keywords },
      })
    },
  },
}
</script>