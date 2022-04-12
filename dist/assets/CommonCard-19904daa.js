import{_ as t,h as e}from"./index-604e8a58.js";import{_ as a}from"./index-ce9f5a0d.js";import{r as l,ai as r,o as s,h as o,w as n,d as i,t as m,s as c,a as d,e as p}from"./vendor-358810ac.js";const u={name:"CommonCard",components:{PayArticleTag:t},props:{artId:{type:[String,Number],default:0},firstPhoto:{type:String,default:""},title:{type:String,default:""},introduction:{type:String,default:""},username:{type:String,default:""},author:{type:String,default:""},authorPic:{type:String,default:""},articlecategoryId:{type:[String,Number],default:0},artArtlog:{type:[String,Number],default:0},lovecount:{type:[String,Number],default:0},collectionCount:{type:[String,Number],default:0},isFree:{type:Boolean,default:!0},artInitDate:{type:String,default:""}},methods:{convertText:t=>e.convert(t)}},f={class:"flex flex-col"},x={class:"flex justify-between items-center"},y={class:"py-1 px-2 w-1/2 text-xs font-semibold text-myBrown bg-myYellow"},g={class:"px-2"},b={class:"text-xs text-black/60"},h={class:"py-3"},v={class:"px-2 min-h-[3.5rem] text-lg font-semibold text-myBrown line-clamp-2"},w={class:"ml-1"},S={class:"p-2 min-h-[56px] bg-myYellow"},j={class:"text-sm text-myBrown text-ellipsis line-clamp-2"},k={class:"flex justify-between items-center py-1 px-2"},B={class:"flex gap-4 justify-between p-2"},I={class:"flex items-center text-myBrown"},Y=i("span",{class:"inline-block px-0.5 text-sm align-middle material-icons"},"favorite_border",-1),_={class:"inline-block px-0.5 text-sm align-middle"},A={class:"text-sm text-myBrown group-hover:text-myOrange"},D={class:"overflow-hidden w-8 h-8 rounded-full md:w-8 md:h-8"},N={class:"object-cover w-full h-full bg-center scale-[103%] load",alt:""};var P=a(u,[["render",function(e,a,u,P,C,T){const F=t,M=l("router-link"),G=r("timeformat"),O=r("my-src");return s(),o(M,{to:{name:"ArticleCommon",params:{articleId:u.artId}},class:"block relative w-[256px] h-[204px] bg-myGray rounded-b-2xl border border-myBrown drop-shadow-md"},{default:n((()=>[i("div",f,[i("div",x,[i("p",y,m(u.artArtlog),1),i("div",g,[c(i("span",b,null,512),[[G,{time:u.artInitDate,format:"YYYY.MM.DD"}]])])]),i("div",h,[i("h3",v,[u.isFree?d("",!0):(s(),o(F,{key:0,class:"text-white bg-black/40"})),i("span",w,m(u.title),1)])]),i("div",S,[i("p",j,m(T.convertText(u.introduction)),1)]),i("div",k,[i("div",B,[i("div",I,[Y,i("span",_,m(u.lovecount),1)])]),p(M,{class:"group flex gap-2 items-center",to:{name:"AuthorDetail",params:{authorId:u.username}}},{default:n((()=>[i("p",A,m(u.author),1),i("div",D,[c(i("img",N,null,512),[[O,{name:u.authorPic,folder:"Pic"}]])])])),_:1},8,["to"])])])])),_:1},8,["to"])}]]);export{P as _};
