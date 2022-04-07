import{h as e}from"./index-922e8a91.js";import{r as t,ai as r,o as l,h as a,w as o,d as s,s as i,e as n,t as d,c,a as m,u}from"./vendor-358810ac.js";import{_ as p}from"./index-4165e28f.js";const x={name:"KiruCard",props:{artId:{type:[String,Number],default:0},firstPhoto:{type:String,default:""},title:{type:String,default:""},introduction:{type:String,default:""},username:{type:String,default:""},author:{type:String,default:""},authorPic:{type:String,default:""},lovecount:{type:[String,Number],default:0},collectionCount:{type:[String,Number],default:0},isFree:{type:Boolean,default:!0},artInitDate:{type:String,default:""}},methods:{convertText:t=>e.convert(t)}},f={class:"flex flex-col"},b={class:"max-w-[248px] border border-myBrown"},h={class:"transition-all aspect-w-16 aspect-h-9 md:brightness-95 md:group-hover:brightness-100"},g={class:"object-cover object-center w-full h-full load",alt:""},y={class:"flex justify-between items-center mt-2"},w={class:"overflow-hidden w-8 h-8 rounded-full md:w-8 md:h-8"},v={class:"object-cover w-full h-full bg-center scale-[103%] load",alt:""},k={class:"text-sm text-myBrown line-clamp-1"},j={class:"flex gap-4 justify-between px-2"},B={class:"flex items-center text-myBrown hover:text-myOrange"},S=s("span",{class:"inline-block px-0.5 text-sm align-middle material-icons"},"favorite_border",-1),I={class:"inline-block px-0.5 text-sm align-middle"},P={key:0,class:"flex items-center text-myBrown hover:text-myOrange"},_=s("span",{class:"inline-block px-0.5 text-sm align-middle scale-110 material-icons-outlined"},"bookmark_border",-1),C={class:"inline-block px-0.5 text-sm align-middle"},D={class:"flex justify-end items-center px-2"},Y={class:"text-xs text-black/60"},N={class:"flex absolute top-1/2 right-0 z-20 flex-col gap-2 justify-start items-end w-full h-full max-h-[136px] translate-y-[-60%]"},A={class:"py-1 px-2 w-4/6 min-h-[58px] bg-white border-y border-l border-myBrown drop-shadow-md"},K={class:"text-lg font-semibold leading-6 text-myBrown line-clamp-2"},M={class:"py-1 px-2 w-1/2 bg-white border-y border-l border-myBrown drop-shadow"},O={class:"text-sm text-myBrown line-clamp-3"};var T=p(x,[["render",function(e,p,x,T,$,z){const F=t("router-link"),G=r("src"),q=r("timeformat");return l(),a(F,{to:{name:"ArticleKiru",params:{articleId:x.artId}},class:"group block overflow-hidden relative p-2 w-[396px] h-[212px] bg-myGray rounded-b-2xl border border-myBrown drop-shadow"},{default:o((()=>[s("div",f,[s("div",b,[s("div",h,[i(s("img",g,null,512),[[G,`https://kirukiru.rocket-coding.com/Pic/${x.firstPhoto}`]])])]),s("div",y,[n(F,{class:"flex gap-2 items-center",to:{name:"Author",params:{authorId:x.username}}},{default:o((()=>[s("div",w,[i(s("img",v,null,512),[[G,`https://kirukiru.rocket-coding.com/Pic/${x.authorPic}`]])]),s("p",k,d(x.author),1)])),_:1},8,["to"]),s("div",j,[s("div",B,[S,s("span",I,d(x.lovecount),1)]),0!==x.collectionCount?(l(),c("div",P,[_,s("span",C,d(x.collectionCount),1)])):m("",!0)])]),s("div",D,[i(s("span",Y,null,512),[[q,{time:x.artInitDate,format:"YYYY.MM.DD"}]])])]),s("div",N,[s("div",A,[s("h3",K,d(x.title),1)]),i(s("div",M,[s("p",O,d(z.convertText(x.introduction)),1)],512),[[u,""!==x.introduction]])])])),_:1},8,["to"])}]]);export{T as _};
