var o=Object.defineProperty,e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(e,t,l)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;import{_ as s,r as a,o as n,h as c,w as i,c as d,e as u,a as h,T as m,d as f,m as p,ai as v,t as y,F as b,s as w,x as I}from"./vendor-358810ac.js";import{_ as C}from"./index-f2480ff4.js";import{_ as x,a as A}from"./AddLove-b36243c9.js";const L={name:"ScrollToTop",data:()=>({show:!1,debounceScroll:null}),created(){this.debounceScroll=s.debounce(this.scrollHandler,100),window.addEventListener("scroll",this.debounceScroll)},beforeUnmount(){window.removeEventListener("scroll",this.debounceScroll)},methods:{scrollHandler(o){window.scrollY>=.1*window.innerHeight?this.show=!0:this.show=!1}}},g={key:0,class:"hidden fixed right-8 bottom-[15%] z-30 md:block"},k=f("span",{class:"text-3xl font-bold leading-6 text-myBrown material-icons"},"keyboard_double_arrow_up",-1),O=f("span",{class:"text-sm text-myBrown"},"Top",-1);var $=C(L,[["render",function(o,e,t,l,r,s){const f=a("router-link");return n(),c(m,{appear:"",mode:"out-in","enter-active-class":"transition duration-300 ease-out delay-300","enter-from-class":"transform opacity-0 translate-y-48","enter-to-class":"transform opacity-100 translate-y-0","leave-active-class":"transition duration-300 ease-in delay-300","leave-from-class":"transform opacity-100 translate-y-0","leave-to-class":"transform opacity-0 translate-y-48"},{default:i((()=>[r.show?(n(),d("div",g,[u(f,{class:"flex flex-col justify-center items-center p-2 hover:bg-myYellow/20 active:bg-myYellow/20 rounded-full transition-all",to:{name:o.$route.name}},{default:i((()=>[k,O])),_:1},8,["to"])])):h("",!0)])),_:1})}]]);const _={name:"ArticlePage",components:{ScrollToTop:$,AddLove:x,AddCollection:A},data:()=>({authorInfo:null,isCollect:!1}),computed:((o,s)=>{for(var a in s||(s={}))t.call(s,a)&&r(o,a,s[a]);if(e)for(var a of e(s))l.call(s,a)&&r(o,a,s[a]);return o})({},p(["userKiruCollections","userCommonCollections"])),watch:{userKiruCollections(){this.checkAddCollection("userKiruCollections")},userCommonCollections(){this.checkAddCollection("userCommonCollections")}},methods:{authorInfoHandler(o){this.authorInfo=o},changeLoveStatus(o){this.authorInfo.isAddLove=o},addLoveHandler(o){o.success?(this.authorInfo.loveCount+=1,this.authorInfo.isAddLove=!0,this.$notify({group:"normal",title:"已按喜歡"},2500)):this.$router.push({name:"SignIn"})},checkAddCollection(o){-1!==this[o].findIndex((o=>o.artId===Number(this.$route.params.articleId)))&&(this.isCollect=!0)},addCollectionHandler(){switch(this.$route.meta.articleType){case"kiru":this.isCollect?this.$store.dispatch("REMOVE_KIRU_COLLECTIONS",{artId:this.$route.params.articleId}).then((o=>{o.success&&(this.isCollect=!1,this.$notify({group:"normal",title:"已取消收藏"}))})).catch((o=>{})):this.$store.dispatch("ADD_KIRU_COLLECTION",{artId:this.$route.params.articleId}).then((o=>{o.success&&(this.isCollect=!0,this.$notify({group:"normal",title:"收藏成功"}))})).catch((o=>{}));break;case"common":this.isCollect?this.$store.dispatch("REMOVE_COMMON_COLLECTIONS",{artId:this.$route.params.articleId}).then((o=>{o.success&&(this.isCollect=!1,this.$notify({group:"normal",title:"已取消收藏"}))})).catch((o=>{})):this.$store.dispatch("ADD_COMMON_COLLECTION",{artId:this.$route.params.articleId}).then((o=>{o.success&&(this.isCollect=!0,this.$notify({group:"normal",title:"收藏成功"}))})).catch((o=>{}))}}}},j={class:"flex relative gap-3 justify-center"},S={class:"pb-32 min-w-[375px] md:pt-16 md:pl-8 md:w-[848px]"},T={key:0,class:"hidden sticky top-16 pl-4 mt-16 mb-4 w-48 h-screen border-l border-myBrown/60 lg:block"},E={class:"py-12"},H={class:"flex flex-col gap-3 justify-center items-center"},B={class:"object-cover w-full h-full bg-center scale-[103%] load",alt:""},N={class:"w-full"},Y={class:"text-center bg-myYellow"},M={class:"py-2 text-myBrown"},U={class:"border-2 border-myYellow"},K=I(" 關注 "),P={class:"w-full"},D={key:0,class:"pb-10"},R={class:"text-myBrown break-words line-clamp-6"},V={key:1,class:"text-sm text-myBrown/60"},z={class:"flex justify-center py-4 w-full border-t border-myBrown/20"};var F=C(_,[["render",function(o,e,t,l,r,s){var m,p;const I=a("router-view"),C=a("router-link"),L=x,g=A,k=$,O=v("src");return n(),d(b,null,[f("div",j,[f("div",S,[(n(),c(I,{key:o.$route.path,"love-count":null==(m=r.authorInfo)?void 0:m.loveCount,"is-add-love":null==(p=r.authorInfo)?void 0:p.isAddLove,"is-collect":r.isCollect,onAuthorInfo:s.authorInfoHandler,onAddLove:s.addLoveHandler,onIsAddLove:s.changeLoveStatus,onAddCollection:s.addCollectionHandler},null,8,["love-count","is-add-love","is-collect","onAuthorInfo","onAddLove","onIsAddLove","onAddCollection"]))]),r.authorInfo?(n(),d("div",T,[f("div",E,[f("div",H,[u(C,{class:"block overflow-hidden w-24 h-24 rounded-full",to:{name:"Author",params:{authorId:r.authorInfo.Username}}},{default:i((()=>[w(f("img",B,null,512),[[O,`https://kirukiru.rocket-coding.com/Pic/${r.authorInfo.Userpic}`]])])),_:1},8,["to"]),f("div",N,[f("div",Y,[f("p",M,y(r.authorInfo.Name),1)]),f("div",U,[u(C,{class:"block py-2 text-center text-myBrown hover:text-myOrange",to:{name:"Author",params:{authorId:r.authorInfo.Username}}},{default:i((()=>[K])),_:1},8,["to"])])]),f("div",P,[r.authorInfo.Introduction?(n(),d("div",D,[f("p",R,y(r.authorInfo.Introduction),1)])):(n(),d("p",V," 此作者沒有簡介 "))]),f("div",z,[u(L,{"button-class":"block py-2 w-full text-myBrown hover:text-myOrange border-2 border-myYellow","article-type":o.$route.meta.articleType,"love-count":r.authorInfo.loveCount,"is-add-love":r.authorInfo.isAddLove,onAddLove:s.addLoveHandler},null,8,["article-type","love-count","is-add-love","onAddLove"]),u(g,{"button-class":"block py-2 w-full text-myBrown hover:text-myOrange border-y-2 border-r-2 border-myYellow","is-collect":r.isCollect,onAddCollection:s.addCollectionHandler},null,8,["is-collect","onAddCollection"])])])])])):h("",!0)]),u(k)],64)}]]);export{F as default};
