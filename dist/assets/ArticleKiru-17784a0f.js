var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,l=(t,s,a)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,o=(e,t)=>{for(var s in t||(t={}))r.call(t,s)&&l(e,s,t[s]);if(a)for(var s of a(t))i.call(t,s)&&l(e,s,t[s]);return e},n=(e,a)=>t(e,s(a));/* empty css             */import{_ as c,a as d,b as u,c as m,u as h}from"./user-origin-cd640e06.js";import{_ as g}from"./DynamicTextarea-e3d0a7ba.js";import{_ as p}from"./KiruCard-bca45134.js";import{_ as f,o as b,p as y,q as v,r as w,s as x,t as I,v as k}from"./index-4165e28f.js";import{o as M,c as A,d as S,F as V,f as L,t as P,ai as j,l as B,s as D,a as C,aj as R,m as T,C as $,K as O,r as H,aI as K,e as N,D as F,h as E,w as _,E as U,aw as q,x as z}from"./vendor-358810ac.js";import"./AddLove-5b23f283.js";import"./tippy.esm-6c7ac1c0.js";import"./index-922e8a91.js";const Y={name:"KiruMission",props:{missions:{type:Array,default:()=>[]}},methods:{missionUrlParser(e){let t;return t=/https?:\/\//.test(e)?e:`http://${e}`,t}}},G={class:"p-4 mb-12"},W=S("div",{class:"flex gap-12 justify-between mb-2"},[S("div",{class:"myArticlePartTitle myArticlePartTitleBg"},[S("h2",null,"附屬切切")]),S("div",{class:"hidden before:absolute relative before:top-1/2 grow w-1/5 before:w-full before:h-px before:bg-myBrown md:block"})],-1),J={class:"py-8 px-12"},Q={class:"grid grid-cols-2 grid-flow-row gap-4"},X=["href"],Z={class:"text-myBrown line-clamp-1"},ee={class:"text-sm text-gray-900 line-clamp-1"};var te=f(Y,[["render",function(e,t,s,a,r,i){return M(),A("div",G,[W,S("div",J,[S("ul",Q,[(M(!0),A(V,null,L(s.missions,(e=>(M(),A("li",{key:e.fId},[S("a",{href:i.missionUrlParser(e.auxiliarymain),target:"_blank",class:"flex flex-col gap-1 justify-center p-4 border border-myBrown"},[S("span",Z,P(e.auxiliary),1),S("span",ee,P(e.auxiliarymain),1)],8,X)])))),128))])])])}]]);const se={class:"p-4 mb-20"},ae={class:"flex border border-myBrown/20"},re={class:"flex justify-center items-center w-16"},ie={class:"text-4xl font-bold text-myBrown -translate-y-1.5 md:text-5xl"},le=["innerHTML"],oe={key:0,class:"w-64 h-64 border-l border-myBrown/20"},ne={class:"object-cover w-full h-full load",alt:""};var ce=f({name:"KiruContent",props:{content:{type:Array,default:()=>[]}},computed:{}},[["render",function(e,t,s,a,r,i){const l=j("src");return M(),A("ul",se,[(M(!0),A(V,null,L(s.content,((e,t)=>(M(),A("li",{key:e.mId,class:"mb-4"},[S("div",ae,[S("div",re,[S("span",ie,P(t+1<10?`0${t+1}`:t+1),1)]),S("div",{class:B(["flex grow items-center px-6 border-l border-myBrown/20",{"py-8":"."===e.thirdPhoto}])},[S("p",{innerHTML:e.main},null,8,le)],2),"."!==e.thirdPhoto?(M(),A("div",oe,[D(S("img",ne,null,512),[[l,`https://kirukiru.rocket-coding.com/Pic/${e.thirdPhoto}`]])])):C("",!0)])])))),128))])}]]);const de={name:"KiruTools",props:{tools:{type:Array,default:()=>[]}}},ue={class:"p-4 mb-24"},me=R('<div class="mb-7"><div class="flex gap-12 justify-between mb-2"><div class="myArticlePartTitle myArticlePartTitleBg"><h2 class="whitespace-nowrap"> 預備工具 </h2></div><div class="hidden before:absolute relative before:top-1/2 grow w-2/3 before:w-full before:h-px before:bg-myBrown md:block"></div></div><p class="text-sm text-myBrown"> 此篇切切會用到的物品、工具、材料、環境...等 </p></div>',1),he={class:"grid grid-cols-2 grid-flow-row gap-x-2 gap-y-6"},ge={key:0,class:"shrink-0 w-full border-b border-myBrown/60 aspect-w-16 aspect-h-9 md:w-1/2 md:border-r md:border-b-0 md:aspect-w-12 md:aspect-h-4"},pe={class:"object-cover absolute tools load",alt:""};var fe=f(de,[["render",function(e,t,s,a,r,i){const l=j("src");return M(),A("div",ue,[me,S("ul",he,[(M(!0),A(V,null,L(s.tools,(e=>(M(),A("li",{key:e.fId,class:"flex flex-col justify-between border border-myBrown/20 md:flex-row md:justify-start md:items-center"},["."!==e.secPhoto?(M(),A("div",ge,[D(S("img",pe,null,512),[[l,`https://kirukiru.rocket-coding.com/Pic/${e.secPhoto}`]])])):C("",!0),S("p",{class:B(["px-2 font-bold text-myBrown line-clamp-3",{"py-2":"."===e.secPhoto}])},P(e.mission),3)])))),128))])])}]]);const be={name:"ArticleKiru",components:{KiruAuthor:c,KiruInfo:d,KiruTools:fe,KiruContent:ce,KiruMission:te,KiruCard:p,KiruReply:u,SubscribeView:m,DynamicTextarea:g},beforeRouteUpdate(e,t){e.params.articleId!==t.params.articleId&&this.$store.commit("SHOW_OVERLAY_LOADING"),this.getArticleInfo(this.articleId)},props:{articleId:{type:[String,Number],default:""},loveCount:{type:[String,Number],default:0},isAddLove:{type:Boolean,default:!1},isCollect:{type:Boolean,default:!1}},emits:["author-info","add-love","add-collection","is-add-love"],data:()=>({articleVm:{},authorInfo:{},relatedArticleVm:{nowpage:1,showcount:2},relatedArticle:[],userMessageVm:"",messagePagination:{nowpage:1,showcount:9999},messageSettings:{pageSize:5,currentPage:1,loadCount:5,total:0,topNewDate:!0},articleMessage:[],sortMessage:[],messageTotal:0,userDefaultAvatar:h,isArticleVmLoading:!1,checkSubResult:!1,isSendingMessage:!1}),computed:n(o(o({},T(["userInfo","userAddLoveList","userKiruCollections","userSubscribeList","checkUserSubscribeStatus"])),$(["userSignInStatus"])),{loadMessage(){const e=this.messageSettings;let t=[];t=e.topNewDate?[...this.articleMessage].sort(((e,t)=>O(t.messageInitDate).format("x")-O(e.messageInitDate).format("x"))):[...this.articleMessage].sort(((e,t)=>O(e.messageInitDate).format("x")-O(t.messageInitDate).format("x")));const s=(e.currentPage-1)*e.loadCount;return t.slice(0,e.pageSize+s)},showLoadMessageBtn(){return this.articleMessage.length>this.messageSettings.pageSize&&this.loadMessage.length<this.articleMessage.length},articleAuthor(){const{author:e,authorPic:t,username:s}=this.articleVm;return{author:e,authorPic:t,username:s}},articleInfo(){const{title:e,firstPhoto:t,introduction:s,articlecategoryId:a,artArtlog:r,ArtInitDate:i}=this.articleVm;return{title:e,firstPhoto:t,introduction:s,articlecategoryId:a,artArtlog:r,artInitDate:i}}}),watch:{"articleVm.articlecategoryId":{handler(e){e&&this.getRelatedArticle(e)}},userSubscribeList:{handler(){this.checkSubResult=this.checkSub(this.articleVm.username)},deep:!0}},mounted(){this.getArticleInfo(this.articleId)},methods:{checkSub(e){const t=this.userSubscribeList.some((t=>t.Author===e)),s=this.$store.state.userInfo.Username===e;return t||s},async getArticleInfo(e){await b(e).then((e=>{var t;if(e.data.success){if(this.checkSub(e.data.data.username)&&(this.checkSubResult=!0),!e.data.data.isPush&&e.data.data.username!==(null==(t=this.userInfo)?void 0:t.Username))return void this.$router.replace({name:"NotFound",query:{message:"此文章尚未發布"}});this.articleVm=e.data.data,this.isArticleVmLoading=!0}else this.$router.replace({name:"NotFound",query:{message:e.data.message||"查無此文章"}})})).catch((e=>{})),await y(this.articleVm.username).then((e=>{e.data.success?(this.authorInfo=e.data.data,this.$emit("author-info",n(o({},this.authorInfo),{loveCount:this.articleVm.lovecount,isAddLove:this.isAddLove})),this.checkAddLoveStatus()):this.$notify({group:"error",title:"作者資訊取得失敗"})}));const t=o({artId:this.articleId},this.messagePagination);await v(t).then((e=>{e.data.success?(this.articleMessage=e.data.data,this.messageTotal=e.data.total||this.articleMessage.length):this.articleMessage=[]})).catch((e=>{})),this.$store.commit("HIDE_OVERLAY_LOADING")},getRelatedArticle(e){w(o({articlecategoryId:e},this.relatedArticleVm)).then((e=>{if(e.data.success){const t=e.data.data.filter((e=>Number(this.articleId)!==e.artId));this.relatedArticle=t}else this.$notify({group:"error",title:"相關文章資料取得失敗"})})).catch((e=>{}))},checkAddLoveStatus(){-1!==this.userAddLoveList.findIndex((e=>e.articleId===this.articleId))&&this.$emit("is-add-love",!0)},addLoveHandler(e){this.$emit("add-love",e)},addCollectionHandler(){this.$emit("add-collection")},async sendMessageHandler(){if(""===this.userMessageVm||this.isSendingMessage)return;this.isSendingMessage=!0;const e={artId:this.articleId,Main:this.userMessageVm};await x(e).then((e=>{this.userMessageVm="",this.isSendingMessage=!1})).catch((e=>{this.isSendingMessage=!1}));const t=o({artId:this.articleId},this.messagePagination);await v(t).then((e=>{if(e.data.success){const t=e.data.data;this.updateMessage(t),this.messageTotal=e.data.total||this.articleMessage.length}else this.$notify({group:"error",title:"留言內容取得失敗"})})).catch((e=>{}))},updateMessage(e){this.articleMessage=e},async replyHandler(e){try{I(e).then((e=>{})).catch((e=>{}));const t=o({artId:this.articleId},this.messagePagination),s=await k(e.messageId),a=await v(t);if(s.data.success)if(a.data.success){this.updateMessage(a.data.data);const t=this.articleMessage.findIndex((t=>t.messageId===e.messageId)),r=this.articleMessage[t].reMessageData.map((e=>e.reMessageId)),i=s.data.data;i.filter((e=>-1===r.indexOf(e.reMessageId))).forEach((e=>{this.articleMessage[t].reMessageData.push(e)}))}else this.$notify({group:"error",title:"留言內容取得失敗"});else this.$notify({group:"error",title:"回覆內容取得失敗"})}catch(t){}}}},ye={key:2},ve=R('<div class="mb-7"><div class="flex gap-12 justify-between px-4 mb-2 md:px-0"><div class="myArticlePartTitle myArticlePartTitleBg"><h2>附註<span class="hidden md:inline-block">補充</span></h2></div><div class="hidden before:absolute relative before:top-1/2 grow w-1/5 before:w-full before:h-px before:bg-myBrown md:block"></div></div></div>',1),we={class:"px-16 mb-16 text-myBrown"},xe=["innerHTML"],Ie=S("div",{class:"flex gap-12 justify-between mb-4"},[S("div",{class:"py-2"},[S("h2",{class:"text-2xl font-bold text-myBrown"}," 相關切切 ")])],-1),ke={class:"px-4 mb-32 md:px-0"},Me={key:0,class:"grid grid-cols-1 grid-flow-row gap-6 md:grid-cols-2"},Ae={key:1,class:"py-2"},Se=[S("p",{class:"text-center text-myBrown/60"}," 沒有相關的切切 ",-1)],Ve={key:4,"element-loading-background":"rgba(0, 0, 0, 0.5)","element-loading-text":"正在送出留言...",class:"flex overflow-hidden gap-8 justify-between py-4 px-6 mb-12 rounded-lg"},Le={class:"overflow-hidden w-16 h-16 rounded-full"},Pe={alt:"",class:"object-cover w-full h-full scale-[102%] load"},je={class:"flex flex-col grow gap-3 justify-between items-end md:flex-row"},Be=[S("span",{class:"inline-block text-lg md:-translate-y-1 material-icons"},"reply",-1),S("span",{class:"text-sm whitespace-nowrap md:-translate-y-1"},"送出",-1)],De={key:5,class:"mb-12"},Ce={class:"flex justify-center items-center py-6 bg-myYellow/20"},Re=z(" 登入後留言 "),Te={key:6,id:"article-replies",class:"mb-16"},$e={class:"flex justify-between px-6"},Oe={class:"text-black/60"},He={key:0},Ke={key:1,class:"px-6"},Ne={key:7,class:"mx-auto max-w-[80%]"};var Fe=f(be,[["render",function(e,t,s,a,r,i){var l,o,n;const h=c,f=d,b=fe,y=ce,v=te,w=p,x=g,I=H("router-link"),k=u,B=m,R=j("src"),T=K;return M(),A(V,null,[N(h,F(i.articleAuthor,{"love-count":s.loveCount,"is-add-love":s.isAddLove,"replies-count":r.messageTotal,"is-collect":s.isCollect,"article-type":"kiru",onAddLove:i.addLoveHandler,onAddCollection:i.addCollectionHandler}),null,16,["love-count","is-add-love","replies-count","is-collect","onAddLove","onAddCollection"]),N(f,F({class:"p-4 mb-16 w-full"},i.articleInfo,{"show-kiru-count":!0,"kiru-count":null==(l=r.articleVm.mArrayList)?void 0:l.length}),null,16,["kiru-count"]),0!==(null==(o=r.articleVm.fArrayList)?void 0:o.length)&&(r.articleVm.isFree||r.checkSubResult)?(M(),E(b,{key:0,tools:r.articleVm.fArrayList},null,8,["tools"])):C("",!0),r.articleVm.isFree||r.checkSubResult?(M(),E(y,{key:1,content:r.articleVm.mArrayList},null,8,["content"])):C("",!0),""!==r.articleVm.final&&(r.articleVm.isFree||r.checkSubResult)?(M(),A("div",ye,[ve,S("div",we,[S("p",{innerHTML:r.articleVm.final},null,8,xe)])])):C("",!0),0!==(null==(n=r.articleVm.fMissionList)?void 0:n.length)&&(r.articleVm.isFree||r.checkSubResult)?(M(),E(v,{key:3,missions:r.articleVm.fMissionList},null,8,["missions"])):C("",!0),Ie,S("div",ke,[0!==r.relatedArticle.length?(M(),A("div",Me,[(M(!0),A(V,null,L(r.relatedArticle,(e=>(M(),E(w,F(e,{key:e.artId}),null,16)))),128))])):(M(),A("div",Ae,Se))]),e.userSignInStatus&&(r.articleVm.isFree||r.checkSubResult)?D((M(),A("div",Ve,[S("div",Le,[D(S("img",Pe,null,512),[[R,e.userInfo.Userpic?"https://kirukiru.rocket-coding.com/Pic/"+e.userInfo.Userpic:r.userDefaultAvatar]])]),S("div",je,[N(x,{modelValue:r.userMessageVm,"onUpdate:modelValue":t[0]||(t[0]=e=>r.userMessageVm=e),modelModifiers:{trim:!0},class:"w-full h-full",placeholder:"我要留言",onEnterExact:i.sendMessageHandler},null,8,["modelValue","onEnterExact"]),S("button",{type:"button",class:"flex gap-1 justify-center items-center py-1 px-4 text-white bg-myBrown md:flex-col md:py-0 md:px-2 md:h-full md:transition-all",onClick:t[1]||(t[1]=(...e)=>i.sendMessageHandler&&i.sendMessageHandler(...e))},Be)])])),[[T,r.isSendingMessage]]):C("",!0),e.userSignInStatus||!r.articleVm.isFree&&!r.checkSubResult?C("",!0):(M(),A("div",De,[S("div",Ce,[N(I,{class:"block text-myBrown underline decoration-myBrown/60 underline-offset-4 transition-all",to:{name:"SignIn"}},{default:_((()=>[Re])),_:1})])])),r.articleVm.isFree||r.checkSubResult?(M(),A("div",Te,[S("div",$e,[S("span",Oe,"此文共有 "+P(r.messageTotal)+" 筆留言",1),S("button",{type:"button",class:"text-sm text-myBrown/40 hover:text-myBrown/60",onClick:t[2]||(t[2]=e=>r.messageSettings.topNewDate=!r.messageSettings.topNewDate)},P(r.messageSettings.topNewDate?"留言時間 新 → 舊":"留言時間 舊 → 新"),1)]),0!==r.articleMessage.length?(M(),A("ul",He,[(M(!0),A(V,null,L(i.loadMessage,(e=>(M(),E(k,F(e,{key:e.messageId,"article-username":r.articleVm.username,onReplyInner:i.replyHandler}),null,16,["article-username","onReplyInner"])))),128))])):C("",!0),i.showLoadMessageBtn?(M(),A("div",Ke,[S("button",{type:"button",class:"block py-4 mx-auto w-1/2 text-sm text-myBrown bg-myOrange/20 hover:bg-myOrange/40 rounded-xl transition-all",onClick:t[3]||(t[3]=e=>r.messageSettings.currentPage+=1)}," 查看更多留言 ("+P(r.articleMessage.length-i.loadMessage.length)+") ",1)])):C("",!0)])):C("",!0),r.articleVm.isFree||r.checkSubResult||!r.isArticleVmLoading?C("",!0):(M(),A("div",Ne,[N(B,U(q(r.authorInfo)),null,16)]))],64)}]]);export{Fe as default};
