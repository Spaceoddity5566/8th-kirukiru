<template>
  <div class="flex flex-col items-center">
    <!-- 說明 -->
    <div class="flex flex-col gap-8 items-center mb-16">
      <h2 class="font-bold tracking-wider text-center text-myYellow">
        生活是你的原料，想法是一把刀。<br>
        準備你切好的材料，現在就將好菜端上桌!
      </h2>
      <p class="max-w-md text-sm text-center text-myBrown">
        <span class="font-bold">切切 KiruKiru</span> 是幫你專注在切分步驟的文章分享網站，從換燈泡到寫程式，都可以透過網站的寫作引導下完成。
      </p>
      <div class="max-w-[232px]">
        <img
          src="@img/Logo-Full-outline.svg"
          alt="關於切切說明頁logo"
        >
      </div>
      <p class="max-w-md text-sm text-center text-myBrown">
        現代人生活緊湊，時間切分非常細，但也很容易在無形之中讓時間流走。
        透過步驟寫作，記錄下你完成一件事的過程，<br class="hidden md:inline-block">也可以看看網友們是如何切分同一件事的步驟，<br class="hidden md:inline-block">讓你的生活 / 工作 / 娛樂，都充滿對時間的知覺。
      </p>
    </div>
    <!-- 列表 -->
    <ul class="flex flex-col gap-16 items-center mb-12 md:gap-24">
      <li class="flex flex-col items-center">
        <h2 class="py-0.5 mb-6 w-full max-w-xs font-bold text-center text-myBrown rounded-lg border border-myBrown">
          書寫生活的片段
        </h2>
        <p class="text-sm leading-6 text-center text-myBrown">
          分享你的生活步驟也是種成就與教學哦！<br>
          不一定是技能的專家也可以使用 ! 也可以當成是紀錄生活的工具：<br>
          如何 WFH 度過一天？<br>
          如何閱讀與吸收一本書？<br>
          如何一個人去開刀？<br>
          如何在廟裡拜拜？<br>
          如何走完喪禮的流程？
        </p>
      </li>
      <li class="flex flex-col items-center">
        <h2 class="py-0.5 mb-6 w-full max-w-xs font-bold text-center text-myBrown rounded-lg border border-myBrown">
          切切裡面黑白切
        </h2>
        <p class="text-sm leading-6 text-center text-myBrown">
          切切是以「步驟型文章」為主題的分享平台， 
          你可以在上面撰寫：<br>
          如何微波冷凍食物、如何安排工作甘特圖、<br>
          如何安裝水龍頭、如何用水果刀清除魚腸、<br>
          如何使用外送點餐、如何在 Mac 環境安裝 nvm、<br>
          精靈與螢火意志如何通關第9章劇情、 如何裝水...<br>
          -<br>
          舉凡家庭五金、工作事項、科技使用、旅遊安排，
          都可以在切切找到各自的步驟專家！
        </p>
      </li>
      <li class="flex flex-col items-center">
        <h2 class="py-0.5 mb-6 w-full max-w-xs font-bold text-center text-myBrown rounded-lg border border-myBrown">
          切切特色報你知
        </h2>
        <div class="flex flex-col gap-6">
          <div class="text-center text-myBrown">
            <h3 class="mb-2 font-bold">
              步驟型的統一寫作格式 –
            </h3>
            <p class="max-w-md text-sm leading-6">
              撰寫者只需跟著引導放上步驟資訊、圖片，閱讀者就能透過統一的文章格式閱讀！ 雙編輯模式也能讓你自由選擇，想自製或制式都能達成。
            </p>
          </div>
          <div class="text-center text-myBrown">
            <h3 class="mb-2 font-bold">
              編輯精選的切切主題 –
            </h3>
            <p class="max-w-md text-sm leading-6">
              職場步驟、生活步驟、閱讀步驟、運動步驟、廢到笑步驟... 跟隨著主題切分、撰寫與發覺你所喜歡的切切 !
            </p>
          </div>
        </div>
      </li>
    </ul>
    <!-- 加入切切 -->
    <div class="flex flex-col items-center w-full">
      <div>
        <img
          src="@img/about-ok.svg"
          alt="about ok"
        >
      </div>
      <router-link
        v-if="!userSignInStatus"
        :to="{ name: 'SignUp' }"
        class="block py-2 min-w-[192px] font-bold text-center text-myBrown bg-myYellow rounded-lg transition-all md:hover:-translate-x-0.5 md:hover:-translate-y-0.5"
      >
        加入切切
      </router-link>
      <router-link
        v-else
        :to="{ name: 'UserDetail', params: { userId: userInfo.Username } }"
        class="block py-2 min-w-[192px] font-bold text-center text-myBrown bg-myYellow rounded-lg transition-all md:hover:-translate-x-0.5 md:hover:-translate-y-0.5"
      >
        我的主頁
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'IntroAbout',
  computed: {
    ...mapState([
      'userInfo',
    ]),
    ...mapGetters([
      'userSignInStatus',
    ]),
  },
}
</script>