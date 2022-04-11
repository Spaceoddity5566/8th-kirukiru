var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,r=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s;import{C as o,r as l,o as n,c as i,d as c,e as m,l as p,w as d,h as u,an as f,T as x,aN as w,x as b}from"./vendor-358810ac.js";import{_ as g,S as v}from"./index-7ca2f26b.js";import"./object-fe354ed4.js";import{s as y}from"./setLocale-f7bd91f3.js";y({mixed:{default:"無效的輸入",required:"必填欄位",notType:"無效的數值"},string:{min:"長度不可小於 ${min}",max:"不可大於 ${max} 字元",email:"須符合 Email 格式 !"}});const h={name:"UserPage",props:{view:{type:String,default:"profile"}},data:()=>({}),computed:((e,o)=>{for(var l in o||(o={}))a.call(o,l)&&r(e,l,o[l]);if(t)for(var l of t(o))s.call(o,l)&&r(e,l,o[l]);return e})({},o(["userSignInStatus"])),methods:{menuButtonActive(e){return this.view===e?"bg-myYellow text-myBrown":"hover:bg-white/10"},getNewUserInfo(){v().then((e=>{e.data.success?this.$store.commit("SET_USER_INFO",e.data.data):(localStorage.removeItem("kirukiruToken"),this.$router.push({name:"SignIn"}))})).catch((e=>{this.$notify({group:"error",title:"Error",text:`${e}`},2500),this.$router.push({name:"HomePage"})}))}}},_={class:"py-11 px-4 mx-auto max-w-[1024px] md:px-8"},U={class:"flex gap-7 items-start"},j={class:"flex flex-col gap-12 py-8 px-12 min-w-[192px] min-h-[726px] bg-myBrown md:min-w-[256px]"},B={class:"flex flex-col gap-3 items-center w-full"},I=c("div",{class:"py-2 w-full border-b border-white/60"},[c("span",{class:"block font-semibold text-center text-myYellow"},"個人設定")],-1),S=b(" 個人資料 "),k=b(" 我的主頁 "),A={class:"flex flex-col gap-3 items-center w-full"},O=c("div",{class:"py-2 w-full border-b border-white/60"},[c("span",{class:"block font-semibold text-center text-myYellow"},"切切總覽")],-1),$=b(" 文章總覽 "),D=b(" 收藏總覽 "),E={class:"flex flex-col gap-3 items-center w-full"},P=c("div",{class:"py-2 w-full border-b border-white/60"},[c("span",{class:"block font-semibold text-center text-myYellow"},"訂閱設定")],-1),N=b(" 我的方案 "),T=b(" 我的訂閱 ");var Y=g(h,[["render",function(e,t,a,s,r,o){const b=l("router-link"),g=l("router-view");return n(),i("div",_,[c("div",U,[c("div",j,[c("div",B,[I,m(b,{to:{name:"UserDetail",params:{target:"info"}},class:p(["py-2 min-w-[140px] font-semibold text-center text-white rounded-lg",o.menuButtonActive("info")])},{default:d((()=>[S])),_:1},8,["class"]),m(b,{to:{name:"UserDetail",params:{target:"profile"}},class:p(["py-2 min-w-[140px] font-semibold text-center text-white rounded-lg",o.menuButtonActive("profile")])},{default:d((()=>[k])),_:1},8,["class"])]),c("div",A,[O,m(b,{to:{name:"UserDetail",params:{target:"articles"}},class:p(["py-2 min-w-[140px] font-semibold text-center text-white rounded-lg",o.menuButtonActive("articles")])},{default:d((()=>[$])),_:1},8,["class"]),m(b,{to:{name:"UserDetail",params:{target:"collections"}},class:p(["py-2 min-w-[140px] font-semibold text-center text-white rounded-lg",o.menuButtonActive("collections")])},{default:d((()=>[D])),_:1},8,["class"])]),c("div",E,[P,m(b,{to:{name:"UserDetail",params:{target:"plan"}},class:p(["py-2 min-w-[140px] font-semibold text-center text-white rounded-lg",o.menuButtonActive("plan")])},{default:d((()=>[N])),_:1},8,["class"]),m(b,{to:{name:"UserDetail",params:{target:"subscriptions"}},class:p(["py-2 min-w-[140px] font-semibold text-center text-white rounded-lg",o.menuButtonActive("subscriptions")])},{default:d((()=>[T])),_:1},8,["class"])])]),m(g,{name:a.view,onGetInfo:o.getNewUserInfo},{default:d((({Component:e})=>[(n(),u(w,null,[m(x,{mode:"out-in","enter-active-class":"transition duration-300 ease-out","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0"},{default:d((()=>[(n(),u(f(e)))])),_:2},1024)],1024))])),_:1},8,["name","onGetInfo"])])])}]]);export{Y as default};
