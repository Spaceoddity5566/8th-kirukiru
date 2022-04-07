var e=Object.defineProperty,t=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(t,i,o)=>i in t?e(t,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[i]=o;import{_ as s}from"./AlertModal-25b4f360.js";import{_ as n,h as m,i as d,e as c,j as u,k as f}from"./index-f2480ff4.js";import{o as h,c as p,d as g,_ as b,e as y,t as x,ap as v,aq as w,ar as I,v as k,r as C,w as V,F as A,f as L,E as M,aw as P,l as B,h as $,D as H}from"./vendor-358810ac.js";import{_ as j,a as O,b as _}from"./EditNavbar-44016cd6.js";import{_ as E}from"./CoverUpload-f5fbf75f.js";import{_ as S}from"./FormInputSelect-93f9dc7f.js";import"./tippy.esm-6c7ac1c0.js";const F={name:"MissionItem",props:{uuid:{type:String,required:!0},auxiliary:{type:String,default:""},auxiliarymain:{type:String,default:""},editMode:{type:Boolean,default:!1}},emits:["remove-item","update:title","update:link"],data(){return{title:this.auxiliary,link:this.auxiliarymain}},methods:{removeItem(){this.$emit("remove-item",this.uuid)},titleHandler(e){this.title=e.target.value,this.$emit("update:title",e.target.value)},linkHandler(e){this.link=e.target.value,this.$emit("update:link",e.target.value)}}},U={class:"flex flex-col gap-4 items-center mb-8 md:flex-row md:justify-between"},T={class:"flex flex-col gap-1 w-full sm:w-72"},D=g("span",{class:"inline-block font-bold text-center text-myBrown align-middle md:text-left"},"任務標題",-1),R=["value"],K={class:"flex flex-col flex-1 gap-1 w-full sm:w-72"},Y=g("div",{class:"text-center translate-x-4 md:text-left md:translate-x-0"},[g("span",{class:"inline-block font-bold text-center text-myBrown align-middle md:text-left"},"任務連結"),g("span",{class:"inline-block ml-2 text-myBrown align-middle material-icons"},"link")],-1),W=["value"],N={class:"flex justify-center self-stretch py-4 w-full sm:w-auto md:self-center md:bg-transparent"},G=[g("span",{class:"text-myBrown material-icons"},"delete_sweep",-1),g("span",{class:"text-myBrown md:hidden"},"移除欄位",-1)];var q=n(F,[["render",function(e,t,i,o,r,a){return h(),p("div",U,[g("div",T,[D,g("input",{type:"text",placeholder:"請輸入任務標題",class:"w-full placeholder:text-gray-400 bg-transparent rounded-lg border-2 border-myBrown focus:border-myYellow focus:ring-1 focus:ring-myYellow form-input",value:r.title,onInput:t[0]||(t[0]=(...e)=>a.titleHandler&&a.titleHandler(...e))},null,40,R)]),g("div",K,[Y,g("input",{type:"text",placeholder:"請貼上任務連結",class:"w-full placeholder:text-gray-400 bg-transparent rounded-lg border-2 border-myBrown focus:border-myYellow focus:ring-1 focus:ring-myYellow form-input",value:r.link,onInput:t[1]||(t[1]=(...e)=>a.linkHandler&&a.linkHandler(...e))},null,40,W)]),g("div",N,[g("button",{type:"button",class:"flex gap-3 justify-center p-2 w-2/3 bg-gray-200 hover:bg-gray-300 rounded-lg md:gap-0 md:my-0 md:w-full",onClick:t[2]||(t[2]=(...e)=>a.removeItem&&a.removeItem(...e))},G)])])}]]);const z={name:"KiruItem",components:{CoverUpload:E,TipTap:j},props:{uuid:{type:String,required:!0},origImage:{type:String,default:""},editMode:{type:Boolean,default:!1},origMain:{type:String,default:""}},emits:["remove-item","kiru-img-upload","kiru-content"],data:()=>({image:null,content:"",kiruCount:0}),watch:{content(e){e&&this.$emit("kiru-content",e)},origMain:{handler(e){e&&(this.content=e)},immediate:!0}},methods:{removeItem(){this.$emit("remove-item",this.uuid)},imageChange(e){this.image=null==e?void 0:e.file},imageConfirm(){this.sendImage(this.image.name)},imageCancel(){this.image=null},sendImage(e){const t=new FormData;t.append("photo",this.image),m(t).then((t=>{t.data.success?this.$emit("kiru-img-upload",t.data.picname):(this.$notify({group:"error",title:"上傳圖片失敗 !"}),this.$emit("kiru-img-upload",e)),this.image=null})).catch((e=>{}))},kiruCountHandler:b.throttle((function(e){this.kiruCount=e}),500)}},J={class:"flex flex-col gap-3 items-center mb-12 md:flex-row md:gap-0 md:justify-between"},Q={class:"relative w-full md:w-1/2"},X={class:"inline-block absolute right-0 bottom-0 py-0.5 px-1 text-xs text-myBrown rounded translate-y-full"},Z={class:"flex justify-center self-stretch py-4 w-full sm:w-auto md:self-center md:bg-transparent"},ee=[g("span",{class:"text-myBrown material-icons"},"delete_sweep",-1),g("span",{class:"text-myBrown md:hidden"},"移除欄位",-1)];var te=n(z,[["render",function(e,t,i,o,r,a){const l=E,s=j;return h(),p("div",J,[y(l,{name:"kiru",class:"w-full sm:w-[256px]","upload-bg":"bg-upload-image","upload-container":"w-full","orig-image":i.origImage,"aspect-width":1,"aspect-height":1,"upload-class":"aspect-w-1 aspect-h-1","edit-mode":i.editMode,onFileChange:a.imageChange,onFileConfirm:a.imageConfirm,onFileCancel:a.imageCancel},null,8,["orig-image","edit-mode","onFileChange","onFileConfirm","onFileCancel"]),g("div",Q,[y(s,{modelValue:r.content,"onUpdate:modelValue":t[0]||(t[0]=e=>r.content=e),placeholder:"簡述一下這篇切切的內容吧 _","custom-class":"min-h-[6rem]","word-limit":"100",onWordCount:a.kiruCountHandler},null,8,["modelValue","onWordCount"]),g("span",X,"字數 : "+x(r.kiruCount),1)]),g("div",Z,[g("button",{type:"button",class:"flex gap-3 justify-center p-2 w-2/3 bg-gray-200 hover:bg-gray-300 rounded-lg md:gap-0 md:my-0 md:w-full",onClick:t[1]||(t[1]=(...e)=>a.removeItem&&a.removeItem(...e))},ee)])])}]]);const ie={name:"PrepareTool",components:{CoverUpload:E},props:{uuid:{type:String,required:!0},mission:{type:String,default:""},secPhoto:{type:String,default:""},editMode:{type:Boolean,default:!1}},emits:["update:tool","remove-item","tool-img-upload"],data:()=>({image:null}),watch:{},methods:{removeItem(){this.$emit("remove-item",this.uuid)},imageChange(e){this.image=null==e?void 0:e.file},imageConfirm(){this.sendImage(this.image.name)},imageCancel(){this.image=null},sendImage(e){const t=new FormData;t.append("photo",this.image),m(t).then((t=>{t.data.success?this.$emit("tool-img-upload",t.data.picname):(this.$notify({group:"error",title:"上傳圖片失敗 !"}),this.$emit("tool-img-upload",e)),this.image=null})).catch((e=>{}))}}},oe={class:"flex flex-col gap-3 items-center mb-8 md:flex-row md:gap-0 md:justify-between"},re={class:"flex flex-col gap-1 w-full sm:w-72 md:-translate-y-3"},ae=g("span",{class:"inline-block font-bold text-center text-myBrown align-middle md:text-left"},"工具",-1),le=["value"],se={class:"flex justify-center self-stretch py-4 w-full sm:w-auto md:self-center md:bg-transparent"},ne=[g("span",{class:"text-myBrown material-icons"},"delete_sweep",-1),g("span",{class:"text-myBrown md:hidden"},"移除欄位",-1)];var me=n(ie,[["render",function(e,t,i,o,r,a){const l=E;return h(),p("div",oe,[y(l,{name:"tool",class:"w-full sm:w-[256px]","upload-bg":"bg-upload-image","upload-container":"w-full","orig-image":"."===i.secPhoto?"":i.secPhoto,"edit-mode":i.editMode,onFileChange:a.imageChange,onFileConfirm:a.imageConfirm,onFileCancel:a.imageCancel},null,8,["orig-image","edit-mode","onFileChange","onFileConfirm","onFileCancel"]),g("div",re,[ae,g("input",{value:i.mission,type:"text",placeholder:"請輸入工具內容",class:"p-2 w-full bg-transparent rounded-lg border-2 border-myBrown focus:border-myYellow focus:outline-none sm:py-1",onInput:t[0]||(t[0]=t=>e.$emit("update:tool",t.target.value))},null,40,le)]),g("div",se,[g("button",{type:"button",class:"flex gap-3 justify-center p-2 w-2/3 bg-gray-200 hover:bg-gray-300 rounded-lg md:gap-0 md:my-0 md:w-full",onClick:t[1]||(t[1]=(...e)=>a.removeItem&&a.removeItem(...e))},ne)])])}]]),de="/8th-kirukiru/assets/add-item-e0b0ffdc.svg";const ce={name:"EditKiru",components:{EditNavbar:O,CoverUpload:E,Switch:v,SwitchGroup:w,SwitchLabel:I,FormInputSelect:S,Input:_,TipTap:j,PrepareTool:me,KiruItem:te,MissionItem:q,AlertModal:s},props:{articleId:{type:[String,Number],default:""}},data:()=>({category:[],articleVm:{title:"",isFree:!0,isPush:!0,articlecategoryId:null,introduction:"",firstPhoto:"",fArrayList:[],mArrayList:[{uuid:k(),thirdPhoto:"",main:""}],fMissionList:[],final:""},coverImage:null,categoryVm:null,artInfoCount:0,finalCount:0,errors:[],editMode:!1,alertInfo:null}),computed:{categoryHandler:{get(){return this.categoryVm},set(e){this.categoryVm=e,this.articleVm.articlecategoryId=e.Id}}},async mounted(){this.articleId?(this.editMode=!0,await d(this.articleId).then((e=>{if(e.data.success){let n=e.data.data,{ArtInitDate:m,artArtlog:d,fArrayList:c,fMissionList:u,mArrayList:f}=n,h=((e,t)=>{var i={};for(var l in e)r.call(e,l)&&t.indexOf(l)<0&&(i[l]=e[l]);if(null!=e&&o)for(var l of o(e))t.indexOf(l)<0&&a.call(e,l)&&(i[l]=e[l]);return i})(n,["ArtInitDate","artArtlog","fArrayList","fMissionList","mArrayList"]);const p=this.pushUuid(c),g=this.pushUuid(u),b=this.pushUuid(f),y=(s=((e,t)=>{for(var i in t||(t={}))r.call(t,i)&&l(e,i,t[i]);if(o)for(var i of o(t))a.call(t,i)&&l(e,i,t[i]);return e})({},h),t(s,i({fArrayList:p,fMissionList:g,mArrayList:b})));Object.assign(this.articleVm,y)}else this.$notify({group:"error",title:"文章資料取得失敗 !"});var s})).catch((e=>{}))):this.editMode=!1,await c().then((e=>{if(this.category=[...e.data],this.editMode){const e=this.articleVm.articlecategoryId,t=this.category.find((t=>t.Id===e));this.categoryHandler=t}}))},methods:{postArticle(){this.$store.commit("SHOW_OVERLAY_LOADING"),u(this.articleVm).then((e=>{if(e.data.success){const t={message:this.articleVm.isPush?"切切已發布 !":"切切已儲存",confirmText:this.articleVm.isPush?"去看內文":"回個人頁面",confirmMode:"replace",confirmTodo:{name:this.articleVm.isPush?"ArticleKiru":"UserDetail",params:this.articleVm.isPush?{articleId:e.data.artId}:{userId:this.$store.state.userInfo.Username}}};this.alertInfo=t,this.$store.commit("HIDE_OVERLAY_LOADING"),this.$store.commit("SHOW_ALERT")}else this.$store.commit("HIDE_OVERLAY_LOADING"),this.$notify({group:"error",title:"發布失敗",message:e.data.message})})).catch((e=>{this.$store.commit("HIDE_OVERLAY_LOADING")}))},editArticle(){this.$store.commit("SHOW_OVERLAY_LOADING"),f(this.articleVm).then((e=>{if(e.data.success){const e={message:"切切已儲存 !",confirmText:"回到個人主頁",confirmMode:"replace",confirmTodo:{name:"User",params:{userId:this.$store.state.userInfo.Username}}};this.alertInfo=e,this.$store.commit("SHOW_ALERT")}else this.$notify({group:"error",title:"發布失敗",message:e.data.message});this.$store.commit("HIDE_OVERLAY_LOADING")})).catch((e=>{}))},saveHandler(){this.alertInfo={},this.articleVm.isPush=!1;const e=this.checkHandler(this.articleVm);e.success?this.editMode?this.editArticle():this.postArticle():(this.alertInfo={message:`${e.errors[0].message}`,showConfirm:!1,showCancel:!0,cancelText:"返回",cancelMode:"anchor",cancelTodo:{name:this.$route.name,hash:`#${e.errors[0].anchor}`}},this.$store.commit("SHOW_ALERT"))},publishHandler(){this.alertInfo={},this.articleVm.isPush=!0;const e=this.checkHandler(this.articleVm);e.success?this.editMode?this.editArticle():this.postArticle():(this.alertInfo={message:`${e.errors[0].message}`,showConfirm:!1,showCancel:!0,cancelText:"返回",cancelMode:"anchor",cancelTodo:{name:this.$route.name,hash:`#${e.errors[0].anchor}`}},this.$store.commit("SHOW_ALERT"))},pushUuid:e=>(e.forEach((e=>e.uuid=k())),e),cancelKiru(){this.alertInfo={message:"確定取消這次的切切 ?",confirmMode:"push",confirmTodo:{path:this.$store.state.recordPath}},this.$store.commit("SHOW_ALERT")},coverChange(e){this.coverImage=e},coverConfirm(){this.sendCover(this.coverImage.name)},coverCancel(){this.coverImage=null,this.articleVm.firstPhoto=""},sendCover(e){const t=new FormData;t.append("photo",this.coverImage.file),m(t).then((t=>{t.data.success?this.articleVm.firstPhoto=t.data.picname:(this.$notify({group:"error",title:"上傳圖片失敗 !"}),this.articleVm.firstPhoto=e)})).catch((e=>{}))},titleHandler(e){this.articleVm.title=this.titleError(e)},titleError(e){const t=this.errors.findIndex((t=>t===e.name));return e.error?(-1===t&&this.errors.push(e.name),""):(-1!==t&&this.errors.splice(t,1),e.value)},artInfoCountHandler:b.throttle((function(e){this.artInfoCount=e}),500),finalCountHandler:b.throttle((function(e){this.finalCount=e}),500),addTool(){this.articleVm.fArrayList.push({uuid:k(),secPhoto:"",mission:""})},addKiru(){this.articleVm.mArrayList.push({uuid:k(),thirdPhoto:"",main:""})},addMission(){this.articleVm.fMissionList.push({uuid:k(),auxiliary:"",auxiliarymain:""})},removeTool(e){const t=this.articleVm.fArrayList.findIndex((t=>t.uuid===e));this.articleVm.fArrayList.splice(t,1)},removeKiru(e){const t=this.articleVm.mArrayList.findIndex((t=>t.uuid===e));this.articleVm.mArrayList.splice(t,1)},removeMission(e){const t=this.articleVm.fMissionList.findIndex((t=>t.uuid===e));this.articleVm.fMissionList.splice(t,1)},checkHandler(e){const t=[];e.firstPhoto||t.push({key:"firstPhoto",anchor:"editor-kiru-cover",message:"必須上傳封面圖片 !"}),e.title||t.push({key:"title",anchor:"editor-kiru-title",message:"切切標題為必填 !"}),e.articlecategoryId||t.push({key:"articlecategoryId",anchor:"editor-kiru-category",message:"全站分類為必填 !"});const i=e.mArrayList.find((e=>!e.main));(0===e.mArrayList.length||i)&&t.push({key:"mArrayList",anchor:"editor-kiru-kiru",message:"切切內容不能留空 !"});return e.fMissionList.some((e=>""===e.auxiliary||""===e.auxiliarymain))&&t.push({key:"fMissionList",anchor:"editor-kiru-mission",message:"任務欄位不可為空 !"}),t.length?{success:!1,errors:t,message:"必填欄位未填"}:{success:!0,message:"文章編輯檢查成功"}},initData(e){this.$data[e]=this.$options.data()[e]}}},ue={class:"py-11 px-4 mx-auto max-w-[816px] md:px-8"},fe={class:"kiruPartEffect"},he={id:"editor-kiru-cover",class:"mb-8"},pe={id:"editor-kiru-title",class:"mb-12"},ge=g("div",{class:"mb-2"},[g("h2",{class:"inline-block pr-4 text-xl font-bold text-myBrown border-r-2 border-myBrown md:mb-2 md:text-2xl"}," 切切標題 ")],-1),be=g("div",{class:"mb-4 md:mb-6"},[g("h2",{class:"inline-block pr-4 mb-1 text-lg font-bold text-myBrown border-r-2 border-myBrown md:mb-2 md:text-2xl"}," 編輯資訊 ")],-1),ye={class:"kiruPartEffect"},xe={id:"editor-kiru-pay",class:"mb-6 md:mb-8"},ve={class:"flex gap-8 items-center"},we=g("span",{class:"font-bold text-myBrown"}," 是否要把這篇設為付費閱讀 ? ",-1),Ie=g("span",{class:"text-myBrown material-icons"},"info",-1),ke=g("span",{class:"sr-only"},"是否要把這篇設為付費閱讀",-1),Ce={id:"editor-kiru-category",class:"mb-8 w-full sm:w-1/3"},Ve=g("h3",{class:"font-bold text-myBrown"}," 全站分類 ",-1),Ae={id:"editor-kiru-introduction",class:"py-4 mb-6"},Le={class:"flex gap-2 items-center mb-2"},Me=g("h3",{class:"font-bold text-myBrown"}," 切切敘述 ",-1),Pe={class:"py-0.5 px-2 text-sm text-white bg-myBrown rounded"},Be=g("div",{class:"mb-2"},[g("h2",{class:"inline-block pr-4 mb-1 text-lg font-bold text-myBrown border-r-2 border-myBrown md:mb-2 md:text-2xl"}," 預備工具 ")],-1),$e={id:"editor-kiru-tools",class:"mb-8 md:mb-12 kiruPartEffect"},He=g("p",{class:"mb-6 text-sm font-bold text-myBrown md:text-base"}," 會用到的物品、工具、材料、環境...等 ",-1),je={class:"flex justify-center my-4"},Oe=[g("img",{src:de,alt:"add item"},null,-1)],_e={id:"editor-kiru-kiru",class:"mb-12 md:mb-16 kiruPartEffect"},Ee=g("div",{class:"flex gap-3 items-center mb-8"},[g("h2",{class:"inline-block pr-4 mb-1 text-lg font-bold text-myBrown border-r-2 border-myBrown md:mb-2 md:text-3xl"}," 開始切切 "),g("span",{class:"text-sm font-bold text-red-400"},"請至少填寫 1 個切切")],-1),Se={class:"flex justify-center my-4"},Fe=[g("img",{src:de,alt:"add item"},null,-1)],Ue=g("div",{class:"mb-2"},[g("h2",{class:"inline-block pr-4 mb-1 text-lg font-bold text-myBrown border-r-2 border-myBrown md:mb-2 md:text-2xl"}," 附屬任務 ")],-1),Te={id:"editor-kiru-mission",class:"mb-12 md:mb-12 kiruPartEffect"},De=g("div",{class:"mb-8 md:mb-12"},[g("p",{class:"mb-6 text-sm font-bold text-myBrown md:text-base"}," 完成這個切切的補充知識與延伸是什麼呢? Ex.閱讀的書、相關的知識、要備妥的文件、要安裝的檔案... ")],-1),Re={class:"flex justify-center my-4"},Ke=[g("img",{src:de,alt:"add item"},null,-1)],Ye={id:"editor-kiru-remark",class:"mb-12 md:mb-12 kiruPartEffect"},We=g("h2",{class:"mb-1 text-2xl font-bold text-center text-myBrown md:mb-2"}," 附註與補充 ",-1),Ne={class:"flex justify-center md:justify-start"};var Ge=n(ce,[["render",function(e,t,i,o,r,a){const l=O,n=E,m=_,d=C("SwitchLabel"),c=C("Switch"),u=C("SwitchGroup"),f=S,b=j,v=me,w=te,I=q,k=s;return h(),p(A,null,[y(l,{onSaveArticle:a.saveHandler,onPublishArticle:a.publishHandler},null,8,["onSaveArticle","onPublishArticle"]),g("div",ue,[g("div",fe,[g("div",he,[y(n,{name:"cover",class:"max-w-[768px]","fix-text":"點我修改封面圖片","upload-bg":"bg-upload-cover","upload-container":"mb-4 w-full sm:w-2/3","orig-image":r.articleVm.firstPhoto,"edit-mode":r.editMode,onFileChange:a.coverChange,onFileConfirm:a.coverConfirm,onFileCancel:a.coverCancel},null,8,["orig-image","edit-mode","onFileChange","onFileConfirm","onFileCancel"])]),g("div",pe,[ge,y(m,{class:"w-full sm:w-2/3","error-class":"md:-right-2 md:translate-x-full md:top-1/2 md:-translate-y-1/2 md:absolute",placeholder:"按這裡輸入標題",name:"title","error-text":"標題為必填","default-value":r.articleVm.title,onUpdate:a.titleHandler},null,8,["default-value","onUpdate"])])]),be,g("div",ye,[g("div",xe,[y(u,null,{default:V((()=>[g("div",ve,[y(d,{class:"flex gap-2 items-center"},{default:V((()=>[we,Ie])),_:1}),y(c,{modelValue:r.articleVm.isFree,"onUpdate:modelValue":t[0]||(t[0]=e=>r.articleVm.isFree=e),class:B([r.articleVm.isFree?"bg-white":"bg-myBrown","mySwitchBar"])},{default:V((()=>[ke,g("span",{class:B([r.articleVm.isFree?"translate-x-0":"translate-x-8","ring-myBrown mySwitchButton"])},null,2)])),_:1},8,["modelValue","class"])])])),_:1})]),g("div",Ce,[Ve,g("div",null,[y(f,{modelValue:a.categoryHandler,"onUpdate:modelValue":t[1]||(t[1]=e=>a.categoryHandler=e),options:r.category,"key-prop":"Name","label-prop":"Name","default-text":"打開選單","options-position":"absolute"},null,8,["modelValue","options"])])]),g("div",Ae,[g("div",Le,[Me,g("span",Pe,"字數 : "+x(r.artInfoCount),1)]),y(b,{modelValue:r.articleVm.introduction,"onUpdate:modelValue":t[2]||(t[2]=e=>r.articleVm.introduction=e),placeholder:"簡述一下這篇切切的內容吧 _","custom-class":"min-h-[6rem]","word-limit":"100",onWordCount:a.artInfoCountHandler},null,8,["modelValue","onWordCount"])])]),Be,g("div",$e,[He,(h(!0),p(A,null,L(r.articleVm.fArrayList,(e=>(h(),$(v,H({key:e.uuid},e,{"orig-image":e.secPhoto,"edit-mode":r.editMode,onRemoveItem:a.removeTool,"onUpdate:tool":t=>e.mission=t,onToolImgUpload:t=>e.secPhoto=t}),null,16,["orig-image","edit-mode","onRemoveItem","onUpdate:tool","onToolImgUpload"])))),128)),g("div",je,[g("button",{type:"button",class:"flex before:block relative before:absolute before:top-6 hover:before:top-1 before:left-[55%] hover:before:left-[65%] justify-center py-2 w-1/2 before:w-6 before:h-6 before:bg-myYellow before:rounded-full before:opacity-0 hover:before:opacity-50 before:transition-all before:-translate-x-1/2",onClick:t[3]||(t[3]=(...e)=>a.addTool&&a.addTool(...e))},Oe)])]),g("div",_e,[Ee,(h(!0),p(A,null,L(r.articleVm.mArrayList,(e=>(h(),$(w,H({key:e.uuid},e,{"orig-image":e.thirdPhoto,"orig-main":e.main,"edit-mode":r.editMode,onRemoveItem:a.removeKiru,onKiruContent:t=>e.main=t,onKiruImgUpload:t=>e.thirdPhoto=t}),null,16,["orig-image","orig-main","edit-mode","onRemoveItem","onKiruContent","onKiruImgUpload"])))),128)),g("div",Se,[g("button",{type:"button",class:"flex before:block relative before:absolute before:top-6 hover:before:top-1 before:left-[55%] hover:before:left-[65%] justify-center py-2 w-1/2 before:w-6 before:h-6 before:bg-myYellow before:rounded-full before:opacity-0 hover:before:opacity-50 before:transition-all before:-translate-x-1/2",onClick:t[4]||(t[4]=(...e)=>a.addKiru&&a.addKiru(...e))},Fe)])]),Ue,g("div",Te,[De,(h(!0),p(A,null,L(r.articleVm.fMissionList,(e=>(h(),$(I,H({key:e.uuid},e,{"edit-mode":r.editMode,onRemoveItem:a.removeMission,"onUpdate:title":t=>e.auxiliary=t,"onUpdate:link":t=>e.auxiliarymain=t}),null,16,["edit-mode","onRemoveItem","onUpdate:title","onUpdate:link"])))),128)),g("div",Re,[g("button",{type:"button",class:"flex before:block relative before:absolute before:top-6 hover:before:top-1 before:left-[55%] hover:before:left-[65%] justify-center py-2 w-1/2 before:w-6 before:h-6 before:bg-myYellow before:rounded-full before:opacity-0 hover:before:opacity-50 before:transition-all before:-translate-x-1/2",onClick:t[5]||(t[5]=(...e)=>a.addMission&&a.addMission(...e))},Ke)])]),g("div",Ye,[We,y(b,{modelValue:r.articleVm.final,"onUpdate:modelValue":t[6]||(t[6]=e=>r.articleVm.final=e),placeholder:"補充事項、提醒、小撇步等等 _","custom-class":"min-h-[6rem]","word-limit":"100",onWordCount:a.artInfoCountHandler},null,8,["modelValue","onWordCount"])]),g("div",Ne,[g("button",{type:"button",class:"userPageCancelButton",onClick:t[7]||(t[7]=(...e)=>a.cancelKiru&&a.cancelKiru(...e))}," 取消編輯 ")])]),y(k,M(P(r.alertInfo)),null,16)],64)}]]);export{Ge as default};
