import{_ as e,h as t}from"./index-07edc0f4.js";import{r as a,ai as l,o as r,h as s,w as o,d as i,s as n,e as d,t as c,c as m,a as p,u}from"./vendor-358810ac.js";import{_ as f}from"./index-7ca2f26b.js";const x={name:"KiruCard",components:{PayArticleTag:e},props:{artId:{type:[String,Number],default:0},firstPhoto:{type:String,default:""},title:{type:String,default:""},introduction:{type:String,default:""},artArtlog:{type:String,default:""},username:{type:String,default:""},author:{type:String,default:""},authorPic:{type:String,default:""},lovecount:{type:[String,Number],default:0},collectionCount:{type:[String,Number],default:0},isFree:{type:Boolean,default:!0},artInitDate:{type:String,default:""}},methods:{convertText:e=>t.convert(e)}},b={class:"flex flex-col"},g={class:"max-w-[248px] border border-myBrown"},y={class:"transition-all aspect-w-16 aspect-h-9 md:brightness-95 md:group-hover:brightness-100"},h={class:"object-cover object-center w-full h-full load",alt:""},w={class:"flex justify-between items-center mt-2"},v={class:"overflow-hidden w-8 h-8 rounded-full md:w-8 md:h-8"},k={class:"object-cover w-full h-full bg-center scale-[103%] load",alt:""},B={class:"text-sm line-clamp-1"},S={class:"flex gap-4 justify-between px-2"},j={class:"flex items-center text-myBrown"},P=i("span",{class:"inline-block px-0.5 text-sm align-middle material-icons"},"favorite_border",-1),_={class:"inline-block px-0.5 text-sm align-middle"},I={key:0,class:"flex items-center text-myBrown"},A=i("span",{class:"inline-block px-0.5 text-sm align-middle scale-110 material-icons-outlined"},"bookmark_border",-1),D={class:"inline-block px-0.5 text-sm align-middle"},C={class:"flex gap-2 justify-end items-center px-2"},Y={class:"text-xs text-black/60"},N={class:"absolute top-0 right-2"},T={class:"text-xs font-semibold text-myBrown/60"},F={class:"flex absolute top-1/2 right-0 z-20 flex-col gap-2 justify-start items-end w-full h-full max-h-[136px] translate-y-[-60%]"},K={class:"py-1 px-2 w-4/6 min-h-[58px] bg-white border-y border-l border-myBrown drop-shadow-md"},M={class:"text-lg font-semibold leading-6 text-myBrown line-clamp-2"},z={class:"py-1 px-2 w-1/2 bg-white border-y border-l border-myBrown drop-shadow"},G={class:"text-sm text-myBrown line-clamp-3"};var O=f(x,[["render",function(t,f,x,O,q,E){const H=a("router-link"),J=e,L=l("my-src"),Q=l("timeformat");return r(),s(H,{to:{name:"ArticleKiru",params:{articleId:x.artId}},class:"group block overflow-hidden relative p-2 w-[396px] h-[212px] bg-myGray rounded-b-2xl border border-myBrown drop-shadow"},{default:o((()=>[i("div",b,[i("div",g,[i("div",y,[n(i("img",h,null,512),[[L,{name:x.firstPhoto,folder:"Pic"}]])])]),i("div",w,[d(H,{class:"flex gap-2 items-center text-myBrown hover:text-myOrange",to:{name:"AuthorDetail",params:{authorId:x.username}}},{default:o((()=>[i("div",v,[n(i("img",k,null,512),[[L,{name:x.authorPic,folder:"Pic"}]])]),i("p",B,c(x.author),1)])),_:1},8,["to"]),i("div",S,[i("div",j,[P,i("span",_,c(x.lovecount),1)]),0!==x.collectionCount?(r(),m("div",I,[A,i("span",D,c(x.collectionCount),1)])):p("",!0)])]),i("div",C,[x.isFree?p("",!0):(r(),s(J,{key:0,class:"text-black/60 bg-black/0"})),n(i("span",Y,null,512),[[Q,{time:x.artInitDate,format:"YYYY.MM.DD"}]])])]),i("div",N,[i("span",T,c(x.artArtlog),1)]),i("div",F,[i("div",K,[i("h3",M,c(x.title),1)]),n(i("div",z,[i("p",G,c(E.convertText(x.introduction)),1)],512),[[u,""!==x.introduction]])])])),_:1},8,["to"])}]]);export{O as _};
