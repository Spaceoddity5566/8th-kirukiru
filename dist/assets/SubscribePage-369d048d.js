var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(e,a,r)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;import{_ as i,M as n,R as d}from"./index-d8506044.js";import{m as u,ai as c,o as h,c as m,d as p,a as b,s as f,t as y}from"./vendor-385d4c3c.js";const x={name:"SubscribePage",props:{authorId:{type:String,default:""}},data:()=>({authorPlan:null,payType:"CREDIT",payData:[],tradeInfoValue:"",tradeShaValue:"",isPaying:!1,isLoading:!0}),computed:(v=((t,e)=>{for(var a in e||(e={}))s.call(e,a)&&l(t,a,e[a]);if(r)for(var a of r(e))o.call(e,a)&&l(t,a,e[a]);return t})({},u(["userSubscribeList"])),g={returnUrl:()=>"index.html"},e(v,a(g))),created(){this.getAuthorPlanHandler()},methods:{getAuthorPlanHandler(){this.isLoading=!0,n(this.authorId).then((t=>{t.data.success?this.authorPlan=t.data.data:this.$notify({group:"error",title:"取得方案內容失敗"}),this.isLoading=!1})).catch((t=>{}))},paySubscribeHandler(){if(this.checkSub(this.authorId)||this.isPaying)return;this.isPaying=!0,this.$store.commit("SHOW_OVERLAY_LOADING");const t={main:this.authorId,payType:this.payType};d(t).then((t=>{t.data.Status?(this.tradeInfoValue=t.data.PayData.find((t=>"TradeInfo"===t.Key)).Value,this.tradeShaValue=t.data.PayData.find((t=>"TradeSha"===t.Key)).Value,this.$refs.tradeInfo.value=this.tradeInfoValue,this.$refs.tradeSha.value=this.tradeShaValue,this.$refs.subscribeSubmit.submit()):(this.$notify({group:"error",title:"連接失敗"}),this.isPaying=!1,this.$store.commit("HIDE_OVERLAY_LOADING"))})).catch((t=>{}))},checkSub(t){return this.userSubscribeList.some((e=>e.Author===t))},formatThousand:t=>String(t).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")}};var v,g;const w={class:"px-4 pt-8 pb-11 mx-auto max-w-[816px] min-h-[calc(100vh-56px-64px)] md:px-0 md:pt-16"},S={class:"mx-auto max-w-[600px] rounded-2xl border-t-8 border-t-myYellow shadow-md md:rounded-t-none md:rounded-b-2xl md:border md:border-myBrown"},P=p("div",{class:"hidden h-4 bg-myYellow md:block"},null,-1),I={key:0,class:"p-8 md:py-10 md:px-16"},O={class:"flex gap-4 items-center py-4 border-b border-myBrown"},j={class:"overflow-hidden shrink-0 w-16 h-16 rounded-full"},V={class:"object-cover object-center w-full h-full rounded-lg load",alt:""},L={class:"text-xl text-myBrown"},T={class:"py-8 mb-4"},k={class:"text-sm text-black/80 whitespace-pre-wrap"},D={class:"flex flex-col gap-8 justify-between items-center md:flex-row"},A={class:"flex relative flex-col items-center text-myBrown md:items-start"},H=p("span",{class:"absolute -top-0.5 py-1 px-2 text-xs font-bold text-white bg-red-500 rounded-lg -translate-y-full md:left-0"},"50% OFF",-1),$={class:"text-3xl font-bold"},B=p("p",{class:"text-xs"}," 每月自動扣款，僅限信用卡支付 ",-1),_={class:"grow w-full md:w-auto"},E=["disabled"],M={ref:"subscribeSubmit",class:"hidden",name:"form",action:"https://ccore.spgateway.com/MPG/mpg_gateway",method:"post"},R=p("input",{name:"MerchantID",value:"MS132153993"},null,-1),Y={ref:"tradeInfo",name:"TradeInfo"},G={ref:"tradeSha",name:"TradeSha"},C=p("input",{name:"Version",value:"1.5"},null,-1),F=p("input",{type:"submit",value:"Submit"},null,-1);var K=i(x,[["render",function(t,e,a,r,s,o){var l,i,n,d;const u=c("my-src");return h(),m("div",w,[p("div",S,[P,s.isLoading?b("v-if",!0):(h(),m("div",I,[b(" 作者資訊 "),p("div",O,[p("div",j,[f(p("img",V,null,512),[[u,{name:null==(l=s.authorPlan)?void 0:l.authorPic,folder:"Pic"}]])]),p("h2",L,y(null==(i=s.authorPlan)?void 0:i.author),1)]),b(" 方案介紹 "),p("div",T,[p("p",k,y(null==(n=s.authorPlan)?void 0:n.info),1)]),b(" 訂閱方案 "),p("div",D,[p("div",A,[H,p("p",$,y(o.formatThousand(null==(d=s.authorPlan)?void 0:d.amount))+"元 / 月 ",1),B]),p("div",_,[p("button",{type:"button",class:"w-full userPageButton",disabled:o.checkSub(a.authorId),onClick:e[0]||(e[0]=(...t)=>o.paySubscribeHandler&&o.paySubscribeHandler(...t))},y(o.checkSub(a.authorId)?"您已訂閱該作者":"確認訂閱"),9,E)])])]))]),b(" 金流 "),p("form",M,[R,p("input",Y,null,512),p("input",G,null,512),C,F],512)])}]]);export{K as default};