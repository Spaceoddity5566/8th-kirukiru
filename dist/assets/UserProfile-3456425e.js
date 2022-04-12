var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o;import{_ as n}from"./AlertModal-a9166c28.js";import{_ as r}from"./DynamicTextarea-a844face.js";import{_ as i}from"./FormInputText-27d1615b.js";import{_ as l}from"./CoverUpload-dbf82206.js";import{ao as m,m as c,r as u,o as d,c as g,a as f,d as h,e as p,t as v,s as b,u as w,w as x,D as y}from"./vendor-385d4c3c.js";import{c as I,a as C}from"./object-9b840b78.js";import{_ as S,i as j,V as N,W as B,X as $}from"./index-d8506044.js";const U={name:"UserProfile",components:{CoverUpload:l,DynamicTextarea:r,AlertModal:n},emits:["get-info"],data(){const e=I().shape({"user-new-name":C().required().max(15)}),{value:t,errorMessage:a}=m("user-introduction",C().nullable().max(300));return{nameSchema:e,avatarImage:null,isShowNameInput:!1,userIntroduction:t,introError:a,alertInfo:null}},computed:((e,n)=>{for(var r in n||(n={}))a.call(n,r)&&s(e,r,n[r]);if(t)for(var r of t(n))o.call(n,r)&&s(e,r,n[r]);return e})({},c(["userInfo"])),mounted(){this.userIntroduction=this.userInfo.Introduction},methods:{toggleUploadCover(){this.$refs.avatarUploader.$refs.upload.$refs.input.click()},avatarChange(e){this.avatarImage=e},avatarConfirm(){this.sendAvatar(this.avatarImage.name)},avatarCancel(){this.avatarImage=null},async sendAvatar(e){const t=new FormData;t.append("photo",this.avatarImage.file);let a="";await j(t).then((t=>{t.data.success?a=t.data.picname:(this.$notify({group:"error",title:"上傳圖片失敗 !"}),this.newAvatarName="origin.jpg",this.articleVm.firstPhoto=e)})).catch((e=>{})),await N(a).then((e=>{e.data.success&&this.$notify({group:"success",title:"大頭貼修改成功"})})).catch((e=>{})),this.$emit("get-info")},toggleChangeName(){this.isShowNameInput=!this.isShowNameInput},onNameSubmit(e){B(e["user-new-name"]).then((e=>{e.data.success?(this.$notify({group:"success",title:"暱稱更新成功"}),this.$emit("get-info"),this.toggleChangeName()):this.$notify({group:"error",title:e.data.message})})).catch((e=>{}))},onNameInvalidSubmit(e){},onChangeIntro(){this.introError||(this.alertInfo={message:"是否確定更改敘述 ?",confirmMode:"nothing",messageClass:"text-lg font-bold text-myBrown md:text-xl"},this.$store.commit("SHOW_ALERT"))},changeIntroHandler(){$(this.userIntroduction).then((e=>{e.data.success?(this.$notify({group:"success",title:"敘述更新成功"}),this.$emit("get-info")):this.$notify({group:"error",title:e.data.message})})).catch((e=>{}))}}},P={class:"w-full"},A=h("h2",{class:"mb-8 text-2xl font-bold text-myBrown"}," 我的主頁 ",-1),F={class:"flex justify-between items-center border-b border-myBrown"},E={class:"flex grow items-center py-4 text-myBrown"},O=h("div",{class:"w-1/4 font-bold"}," 大頭貼 ",-1),_={class:"text-center"},V={class:"py-12 border-b border-myBrown"},k=h("div",{class:"mb-5 w-1/4 font-bold text-myBrown"}," 變更暱稱 ",-1),D={class:"flex flex-col gap-6"},M={class:"flex items-center text-myBrown"},T=h("div",{class:"w-1/4"}," 目前暱稱 ",-1),H={class:"font-semibold"},W={class:"flex gap-3 text-myBrown"},q=h("div",{class:"text-center"},[h("button",{type:"submit",class:"userPageButton"}," 確認更改 ")],-1),L={class:"text-center"},R={class:"py-12"},X=h("div",{class:"mb-5 w-1/4 font-bold text-myBrown"}," 個人主頁敘述 ",-1),Y={class:"text-sm text-red-500"},z={class:"text-right"},G=["disabled"];var J=S(U,[["render",function(e,t,a,o,s,m){const c=l,I=i,C=u("v-form"),S=r,j=n;return d(),g("div",P,[A,f(" 我的大頭貼 "),h("div",F,[h("div",E,[O,f(" 顯示大頭貼 "),h("div",null,[p(c,{ref:"avatarUploader",name:"avatar",class:"overflow-hidden w-[64px] rounded-full","fix-text":"修改","upload-bg":"bg-upload-cover","orig-image":e.userInfo.Userpic,"edit-mode":!0,"aspect-width":1,"aspect-height":1,"show-upload-button":!1,onFileChange:m.avatarChange,onFileConfirm:m.avatarConfirm,onFileCancel:m.avatarCancel},null,8,["orig-image","onFileChange","onFileConfirm","onFileCancel"])])]),f(" 上傳 "),h("div",_,[h("button",{type:"button",class:"userPageButton",onClick:t[0]||(t[0]=(...e)=>m.toggleUploadCover&&m.toggleUploadCover(...e))}," 上傳 ")])]),f(" 變更暱稱 "),h("div",V,[k,h("div",D,[f(" E-mail "),h("div",M,[T,h("div",null,[h("span",H,v(e.userInfo.Name),1)])]),b(p(C,{"validation-schema":s.nameSchema,onSubmit:m.onNameSubmit,onInvalidSubmit:m.onNameInvalidSubmit},{default:x((()=>[f(" 輸入暱稱 "),h("div",W,[p(I,{name:"user-new-name",type:"text",label:"輸入暱稱",placeholder:"輸入暱稱",class:"w-full","success-message":"","input-border":"focus:ring-2 focus:ring-myYellow"}),q])])),_:1},8,["validation-schema","onSubmit","onInvalidSubmit"]),[[w,s.isShowNameInput]]),h("div",L,[h("button",{type:"submit",class:"userPageButton",onClick:t[1]||(t[1]=(...e)=>m.toggleChangeName&&m.toggleChangeName(...e))}," 更改暱稱 ")])])]),f(" 個人主頁敘述 "),h("div",R,[X,h("div",null,[p(S,{modelValue:s.userIntroduction,"onUpdate:modelValue":t[2]||(t[2]=e=>s.userIntroduction=e),class:"",name:"user-introduction"},null,8,["modelValue"]),h("span",Y,v(s.introError),1),h("div",z,[h("button",{type:"button",class:"userPageButton",disabled:s.introError,onClick:t[3]||(t[3]=(...e)=>m.onChangeIntro&&m.onChangeIntro(...e))}," 更改敘述 ",8,G)])])]),p(j,y(s.alertInfo,{onAlertConfirm:m.changeIntroHandler}),null,16,["onAlertConfirm"])])}]]);export{J as default};