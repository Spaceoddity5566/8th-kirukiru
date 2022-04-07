import{h as t}from"./index-922e8a91.js";import{_ as e}from"./index-4165e28f.js";import{r,ai as a,o,c as l,e as s,w as n,d as i,t as d,l as m,h as c,s as u,a as p}from"./vendor-358810ac.js";const f={name:"CommonSearchItem",components:{},props:{artId:{type:[String,Number],default:null},username:{type:String,default:""},author:{type:String,default:""},authorPic:{type:String,default:""},title:{type:String,default:""},introduction:{type:String,default:""},firstPhoto:{type:String,default:""},isFree:{type:Boolean,default:!1},lovecount:{type:[String,Number],default:0},artInitDate:{type:String,default:""},isShowAuthor:{type:Boolean,default:!0}},data:()=>({}),methods:{convertText:e=>t.convert(e)}},g={class:"mb-8 rounded-b-2xl border border-black/20 shadow-md"},x={class:"px-4 min-h-[76px] border-r border-r-black/20"},h={class:"mb-3 font-bold text-myBrown line-clamp-1"},b={class:"flex gap-4 justify-evenly items-center pr-6 pb-2 pl-4 md:gap-3 md:pb-0"},y={class:"flex grow gap-2 justify-between items-center md:flex-col md:grow-0 md:justify-center"},v={class:"overflow-hidden shrink-0 w-8 h-8 rounded-full"},w={class:"object-cover w-full h-full bg-center scale-[103%] load",alt:""},S={class:"pr-3 text-sm font-semibold text-black/80 group-hover:text-myOrange break-all line-clamp-1"},k={class:"text-sm tracking-wide text-myBrown align-middle"},j={class:"flex items-center md:flex-col"},I=i("span",{class:"text-lg text-myOrange align-middle material-icons"},"favorite_border",-1),A={class:"text-myOrange"};var B=e(f,[["render",function(t,e,f,B,_,D){const Y=r("router-link"),O=a("src"),P=a("timeformat");return o(),l("li",g,[s(Y,{to:{name:"ArticleCommon",params:{articleId:f.artId}},target:"_blank",class:m(["flex flex-col border-t-8 border-t-myYellow md:grid",[f.isShowAuthor?"md:grid-cols-3":"md:grid-cols-4"]])},{default:n((()=>[i("div",{class:m(["pt-4 pb-2 md:py-4",[f.isShowAuthor?"md:col-span-2":"md:col-span-3"]])},[i("div",x,[i("h3",h,d(f.title),1),i("p",{class:m(["text-sm text-myBrown line-clamp-2",{"text-myBrown/40":!f.introduction}])},d(D.convertText(f.introduction)||"本篇文章無簡介內容"),3)])],2),i("div",b,[i("div",y,[f.isShowAuthor?(o(),c(Y,{key:0,class:"group flex gap-2 items-center",to:{name:"AuthorDetail",params:{authorId:f.username}}},{default:n((()=>[i("div",v,[u(i("img",w,null,512),[[O,"https://kirukiru.rocket-coding.com/Pic/origin.jpg"]])]),i("p",S,d(f.author),1)])),_:1},8,["to"])):p("",!0),u(i("span",k,null,512),[[P,{time:f.artInitDate,format:"YYYY.MM.DD"}]])]),i("div",j,[I,i("span",A,d(f.lovecount),1)])])])),_:1},8,["to","class"])])}]]);export{B as _};