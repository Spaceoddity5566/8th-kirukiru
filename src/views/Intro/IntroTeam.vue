<template>
  <div class="mx-auto">
    <div class="flex flex-col gap-16 justify-start items-center mb-8 md:flex-row md:gap-24 md:justify-center md:items-start">
      <!-- 阿努 -->
      <div class="flex flex-col gap-8 items-center max-w-[160px] border-b border-black/20 md:border-none">
        <div class="relative max-w-[160px] select-none">
          <img
            class="w-full h-full"
            src="@img/team-partner1.png"
            alt="team partner uiux"
          >
          <div class="flex absolute bottom-6 -left-4 flex-col py-1.5 px-2 font-semibold text-myBrown bg-myYellow border border-myBrown">
            <span>UI/UX</span>
            <span>介面設計</span>
          </div>
          <span class="absolute -right-4 bottom-4 py-1 px-3 font-semibold text-myBrown bg-gray-100 border border-myBrown">彥儒</span>
        </div>
        <p class="px-2 pb-12 font-semibold text-black/80">
          我希望首頁有那個的感覺。<br>
          幫我弄個噗拉噗拉的感覺。
        </p>
      </div>
      <!-- Tim -->
      <div class="flex flex-col gap-8 items-center max-w-[160px] border-b border-black/20 md:border-none">
        <div class="relative max-w-[160px] select-none">
          <img
            class="w-full h-full"
            src="@img/team-partner2.png"
            alt="team partner uiux"
          >
          <div class="flex absolute bottom-6 -left-4 flex-col items-end py-1.5 px-2 w-[180px] font-semibold text-myBrown bg-myYellow border border-myBrown">
            <span>Front-End Developer</span>
            <span>前端開發</span>
          </div>
          <span class="absolute bottom-4 -left-8 py-1 px-3 font-semibold text-myBrown bg-gray-100 border border-myBrown">Tim</span>
        </div>
        <p class="px-2 pb-12 font-semibold text-black/80">
          專題時程剩三週 ?<br>
          <br>
          只要不睡覺，<br>
          你就還有六週。
        </p>
      </div>
      <!-- 阿努 -->
      <div class="flex flex-col gap-8 items-center max-w-[160px]">
        <div class="relative max-w-[160px] select-none">
          <img
            class="w-full h-full"
            src="@img/team-partner3.png"
            alt="team partner uiux"
          >
          <div class="flex absolute bottom-6 -left-4 flex-col py-1.5 px-2 w-24 font-semibold text-myBrown bg-myYellow border border-myBrown">
            <span>Front-End Developer</span>
            <span>後端開發</span>
          </div>
          <span class="absolute -right-4 bottom-4 py-1 px-3 font-semibold text-myBrown bg-gray-100 border border-myBrown">彥融</span>
        </div>
        <p class="px-2 pb-12 font-semibold text-black/80">
          好code爛code，<br>
          先跑再說。<br>
          不管你要幾隻 API，<br>
          我都開給你。
        </p>
      </div>
    </div>
    <div>
      <a
        href="https://www.facebook.com/search/top?q=%E7%81%AB%E7%AE%AD%E9%9A%8A%E5%9F%B9%E8%A8%93%E7%87%9F"
        target="_blank"
        class="flex gap-2 justify-center mx-auto max-w-[120px] font-medium text-black/70 hover:text-black/90 transition-all"
      >
        <img
          class="w-6"
          src="@img/icon-meta.png"
          alt="meta icon"
        >
        <span>火箭隊</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroTeam',
}
</script>