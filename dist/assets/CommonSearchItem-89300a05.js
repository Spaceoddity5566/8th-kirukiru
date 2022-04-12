import{_ as t,h as e}from"./index-0c162573.js";import{_ as a}from"./index-d05ddeac.js";import{r,ai as l,o,c as s,e as n,w as i,d,h as c,a as m,t as u,l as p,s as f}from"./vendor-358810ac.js";const g={name:"CommonSearchItem",components:{PayArticleTag:t},props:{artId:{type:[String,Number],default:null},username:{type:String,default:""},author:{type:String,default:""},authorPic:{type:String,default:""},title:{type:String,default:""},introduction:{type:String,default:""},firstPhoto:{type:String,default:""},isFree:{type:Boolean,default:!1},lovecount:{type:[String,Number],default:0},artInitDate:{type:String,default:""},isShowAuthor:{type:Boolean,default:!0}},data:()=>({}),methods:{convertText:t=>e.convert(t)}},x={class:"mb-8 rounded-b-2xl border border-black/20 shadow-md"},h={class:"px-4 min-h-[76px] border-r border-r-black/20"},y={class:"mb-3 font-bold text-myBrown line-clamp-1"},b={class:"ml-1"},w={class:"flex gap-4 justify-evenly items-center pr-6 pb-2 pl-4 md:gap-3 md:pb-0"},v={class:"flex grow gap-2 justify-between items-center md:flex-col md:grow-0 md:justify-center"},S={class:"overflow-hidden shrink-0 w-8 h-8 rounded-full"},k={class:"object-cover w-full h-full bg-center scale-[103%] load",alt:""},j={class:"pr-3 text-sm font-semibold text-black/80 group-hover:text-myOrange break-all line-clamp-1"},A={class:"text-sm tracking-wide text-myBrown align-middle"},I={class:"flex items-center md:flex-col"},_=d("span",{class:"text-lg text-myOrange align-middle material-icons"},"favorite_border",-1),B={class:"text-myOrange"};var D=a(g,[["render",function(e,a,g,D,P,Y){const O=t,T=r("router-link"),C=l("my-src"),F=l("timeformat");return o(),s("li",x,[n(T,{to:{name:"ArticleCommon",params:{articleId:g.artId}},target:"_blank",class:p(["flex flex-col border-t-8 border-t-myYellow md:grid",[g.isShowAuthor?"md:grid-cols-3":"md:grid-cols-4"]])},{default:i((()=>[d("div",{class:p(["pt-4 pb-2 md:py-4",[g.isShowAuthor?"md:col-span-2":"md:col-span-3"]])},[d("div",h,[d("h3",y,[g.isFree?m("",!0):(o(),c(O,{key:0,class:"text-white bg-black/40"})),d("span",b,u(g.title),1)]),d("p",{class:p(["text-sm text-myBrown line-clamp-2",{"text-myBrown/40":!g.introduction}])},u(Y.convertText(g.introduction)||"本篇文章無簡介內容"),3)])],2),d("div",w,[d("div",v,[g.isShowAuthor?(o(),c(T,{key:0,class:"group flex gap-2 items-center",to:{name:"AuthorDetail",params:{authorId:g.username}}},{default:i((()=>[d("div",S,[f(d("img",k,null,512),[[C,{name:g.authorPic,folder:"Pic"}]])]),d("p",j,u(g.author),1)])),_:1},8,["to"])):m("",!0),f(d("span",A,null,512),[[F,{time:g.artInitDate,format:"YYYY.MM.DD"}]])]),d("div",I,[_,d("span",B,u(g.lovecount),1)])])])),_:1},8,["to","class"])])}]]);export{D as _};
