import{_ as e,h as t}from"./index-3f4a165a.js";import{_ as a}from"./index-36166ff4.js";import{r as l,a8 as s,o as r,h as o,w as n,d as i,t as m,s as c,a as d,e as p,c as u,F as f,f as x,D as y}from"./vendor-c1c40a3c.js";import{S as g,a as b,P as w,N as v,A as h}from"./pagination.min-91b3c22c.js";const S={name:"CommonCard",components:{PayArticleTag:e},props:{artId:{type:[String,Number],default:0},firstPhoto:{type:String,default:""},title:{type:String,default:""},introduction:{type:String,default:""},username:{type:String,default:""},author:{type:String,default:""},authorPic:{type:String,default:""},articlecategoryId:{type:[String,Number],default:0},artArtlog:{type:[String,Number],default:0},lovecount:{type:[String,Number],default:0},collectionCount:{type:[String,Number],default:0},isFree:{type:Boolean,default:!0},artInitDate:{type:String,default:""}},methods:{convertText:e=>t.convert(e)}},I={class:"flex flex-col"},k={class:"flex justify-between items-center"},C={class:"py-1 px-2 w-1/2 text-xs font-semibold text-myBrown bg-myYellow"},A={class:"px-2"},j={class:"text-xs text-black/60"},_={class:"py-3"},B={class:"px-2 min-h-[3.5rem] text-lg font-semibold text-myBrown line-clamp-2"},D={class:"ml-1"},N={class:"p-2 min-h-[56px] bg-myYellow"},P={class:"text-sm text-myBrown text-ellipsis line-clamp-2"},Y={class:"flex justify-between items-center py-1 px-2"},F={class:"flex gap-4 justify-between p-2"},T={class:"flex items-center text-myBrown"},M=i("span",{class:"inline-block px-0.5 text-sm align-middle material-icons"},"favorite_border",-1),G={class:"inline-block px-0.5 text-sm align-middle"},O={class:"text-sm text-myBrown group-hover:text-myOrange line-clamp-1"},q={class:"overflow-hidden w-8 h-8 rounded-full md:w-8 md:h-8"},z={class:"object-cover w-full h-full bg-center scale-[103%] load",alt:""};var E=a(S,[["render",function(t,a,u,f,x,y){const g=e,b=l("router-link"),w=s("timeformat"),v=s("my-src");return r(),o(b,{to:{name:"ArticleCommon",params:{articleId:u.artId}},class:"block relative w-[256px] h-[204px] bg-myGray rounded-b-2xl border border-myBrown drop-shadow-md"},{default:n((()=>[i("div",I,[i("div",k,[i("p",C,m(u.artArtlog),1),i("div",A,[c(i("span",j,null,512),[[w,{time:u.artInitDate,format:"YYYY.MM.DD"}]])])]),i("div",_,[i("h3",B,[u.isFree?d("",!0):(r(),o(g,{key:0,class:"text-white bg-black/40"})),i("span",D,m(u.title),1)])]),i("div",N,[i("p",P,m(y.convertText(u.introduction)),1)]),i("div",Y,[i("div",F,[i("div",T,[M,i("span",G,m(u.lovecount),1)])]),p(b,{class:"group flex gap-2 items-center",to:{name:"AuthorDetail",params:{authorId:u.username}}},{default:n((()=>[i("p",O,m(u.author),1),i("div",q,[c(i("img",z,null,512),[[v,{name:u.authorPic,folder:"Pic"}]])])])),_:1},8,["to"])])])])),_:1},8,["to"])}]]);const H={class:"px-2 mx-auto"};var J=a({name:"CommonCardSwiper",components:{Swiper:g,SwiperSlide:b,CommonCard:E},props:{commonInfo:{type:Array,default:()=>[]}},data:()=>({modules:[w,v,h]})},[["render",function(e,t,a,s,i,m){const c=E,p=l("SwiperSlide"),g=l("Swiper");return r(),u("div",H,[0!==a.commonInfo.length?(r(),o(g,{key:0,class:"mySwiper",modules:i.modules,"slides-per-view":"auto","space-between":4,pagination:{clickable:!0,bulletActiveClass:"mySwiper-bulletActive"}},{default:n((()=>[(r(!0),u(f,null,x(a.commonInfo,(e=>(r(),o(p,{key:e.artId,class:"normalCard-slide"},{default:n((()=>[(r(),o(c,y(e,{key:e.artId,class:"w-80 scale-95"}),null,16))])),_:2},1024)))),128))])),_:1},8,["modules"])):d("",!0)])}]]);export{E as _,J as a};