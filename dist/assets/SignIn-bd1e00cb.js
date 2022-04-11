var e=Object.defineProperty,s=Object.defineProperties,t=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(s,t,a)=>t in s?e(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,i=(e,s)=>{for(var t in s||(s={}))n.call(s,t)&&o(e,t,s[t]);if(a)for(var t of a(s))r.call(s,t)&&o(e,t,s[t]);return e};import{_ as l}from"./LoadingSpin-f9f3568a.js";import{_ as m}from"./FormInputText-fb158cda.js";import{c as d,a as c}from"./object-fe354ed4.js";import{s as u}from"./setLocale-f7bd91f3.js";import{g as p,H as b,r as f,ai as g,s as h,o as x,c as y,d as v,e as w,w as I,t as S,al as E,a as P,l as _,am as j,x as B,T as O,h as T,an as k}from"./vendor-358810ac.js";import{u as M,_ as U}from"./index-67b2667b.js";u({mixed:{default:"無效的輸入",required:"必填欄位"},string:{min:"長度不可小於 ${min}"}});const C={name:"SignInModal",components:{FormInputText:m,LoadingSpin:l},props:{isOpen:{type:Boolean,default:!1}},data:()=>({schema:d().shape({username:c().required(),password:c().min(6).required()}),showPassword:!1,username:"",rememberMe:!1,signInProcess:!1,isInvalidAniProcess:null,signInErrorMsg:""}),created(){const e=localStorage.getItem("userAccount");e&&(this.username=e,this.rememberMe=!0)},methods:(L=i(i({},p(["SET_TOKEN","SET_USER_INFO"])),b(["GET_KIRU_COLLECTIONS","GET_SUBSCRIBE_LIST"])),$={onSubmit(e){this.signInProcess||(this.signInProcess=!0,this.rememberMe?localStorage.setItem("userAccount",this.username):localStorage.removeItem("userAccount"),M(e).then((e=>{e.data.success?(this.$notify({group:"success",title:"登入成功",text:`歡迎回來，${e.data.data.Name}`},3e3),localStorage.setItem("kirukiruToken",e.data.token),this.SET_TOKEN(e.data.token),this.SET_USER_INFO(e.data.data),this.GET_KIRU_COLLECTIONS({nowpage:1,showcount:9999}),this.GET_SUBSCRIBE_LIST({nowpage:1,showcount:9999}),this.$router.replace(this.$store.state.recordPath)):(this.signInErrorMsg=e.data.message,this.$notify({group:"error",title:"登入失敗 !",text:`${e.data.message}`},2500)),this.signInProcess=!1})).catch((e=>{this.signInProcess=!1,this.$notify({group:"error",title:"Error",text:`${e}`},2500)})))},onInvalidSubmit(e){this.isInvalidAniProcess=!0},usernameChange(e){this.username=e},animationEndHandler(){this.isInvalidAniProcess=!1}},s(L,t($)))};var L,$;const A=v("div",{class:"py-8 border-b-myBrown md:py-4 md:bg-myYellow md:border-b-2"},[v("h1",{class:"text-2xl font-bold text-center text-myBrown select-none md:text-3xl"}," 切切會員登入 ")],-1),N={class:"px-10 pb-6 bg-myGray md:pt-10"},R={class:"flex justify-end mb-6"},V=v("span",{class:"text-sm material-icons"}," visibility ",-1),F={class:"flex justify-between items-center"},G={class:"flex items-center"},H=v("label",{for:"remember-me",class:"block ml-2 text-sm font-medium text-myBrown"}," 記住帳號 ",-1),K={class:"text-sm"},q=B(" 忘記密碼 ? "),Y={class:"flex justify-center py-6"},z={key:0,class:"text-red-500"},D={class:"flex flex-col justify-center items-center"},J=["disabled"],Q=B(" 立即註冊 ! ");const W={name:"SignIn",components:{SignInModal:U(C,[["render",function(e,s,t,a,n,r){const o=m,i=f("router-link"),d=l,c=f("v-form"),u=g("invalid");return h((x(),y("div",{class:"overflow-hidden h-screen ring-myBrown md:w-96 md:h-fit md:rounded-xl md:ring-2 md:shadow-xl md:drop-shadow-2xl",onAnimationend:s[2]||(s[2]=j(((...e)=>r.animationEndHandler&&r.animationEndHandler(...e)),["stop"]))},[A,v("div",N,[w(c,{"validation-schema":n.schema,onSubmit:r.onSubmit,onInvalidSubmit:r.onInvalidSubmit},{default:I((()=>[w(o,{focus:!0,name:"username",type:"text",label:"帳號",placeholder:"帳號",class:"mb-8","default-value":n.username,"init-value":!0,"success-message":"","onUpdate:modelValue":r.usernameChange},null,8,["default-value","onUpdate:modelValue"]),w(o,{name:"password",type:n.showPassword?"text":"password",label:"密碼",placeholder:"密碼",class:"mb-2","success-message":""},null,8,["type"]),v("div",R,[v("button",{type:"button",class:"flex gap-2 items-center text-sm text-myBrown",onClick:s[0]||(s[0]=e=>n.showPassword=!n.showPassword)},[V,v("span",null,S(n.showPassword?"隱藏":"顯示")+"密碼",1)])]),v("div",F,[v("div",G,[h(v("input",{id:"remember-me","onUpdate:modelValue":s[1]||(s[1]=e=>n.rememberMe=e),name:"remember-me",type:"checkbox",class:"w-4 h-4 text-myBrown rounded border-gray-300 focus:ring-myYellow form-checkbox"},null,512),[[E,n.rememberMe]]),H]),v("div",K,[w(i,{to:{name:"ForgotPassword"},class:"font-medium text-myBrown hover:text-myYellow"},{default:I((()=>[q])),_:1})])]),v("div",Y,[n.signInErrorMsg?(x(),y("span",z,S(n.signInErrorMsg),1)):P("",!0)]),v("div",D,[v("button",{type:"submit",class:_(["relative myButtonValid button-lg",[n.signInProcess?"myButtonInvalid":"myButtonValid myButtonValidHover"]]),disabled:n.signInProcess},[w(d,{class:"absolute top-3 left-5 w-5 h-5 text-white align-middle",show:n.signInProcess},null,8,["show"]),v("span",null,S(n.signInProcess?"登入中...":"登入"),1)],10,J),w(i,{class:"py-1 px-4 mt-4 text-lg font-bold text-center text-myBrown underline underline-offset-4 md:hover:underline",to:{name:"SignUp"}},{default:I((()=>[Q])),_:1})])])),_:1},8,["validation-schema","onSubmit","onInvalidSubmit"])])],32)),[[u,n.isInvalidAniProcess]])}]])}},X={class:"flex justify-center items-center min-h-[calc(100vh-56px-64px)]"},Z={class:"overflow-x-hidden md:grid md:grid-cols-2 md:gap-11"},ee={class:"my-auto ml-auto"},se=v("div",{class:"-z-10 py-4 my-auto"},[v("div",{class:"hidden overflow-hidden min-w-[464px] max-w-[500px] rounded-xl border-2 border-myBrown -translate-x-1/3 md:block"},[v("img",{class:"block object-cover w-full h-full scale-105",src:"/8th-kirukiru/assets/signin-bg-a14b02ab.svg",alt:"signin background image"})])],-1);var te=U(W,[["render",function(e,s,t,a,n,r){return x(),y("div",X,[v("div",Z,[v("div",ee,[w(O,{appear:"",mode:"out-in","enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0","leave-active-class":"transition duration-300 ease-in","leave-from-class":"transform opacity-100 translate-x-0","leave-to-class":"transform opacity-0 -translate-x-48"},{default:I((()=>[(x(),T(k("SignInModal")))])),_:1})]),se])])}]]);export{te as default};
