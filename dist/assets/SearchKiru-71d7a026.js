/* empty css             *//* empty css                  */import{_ as a}from"./KiruSearchItem-3ce1c4c6.js";import{_ as t,H as e}from"./index-7ca2f26b.js";import{aL as n,o as i,c as r,e as s,aM as o,w as l,d as c,aJ as u,F as d,f as g,h as p,D as h}from"./vendor-358810ac.js";import"./index-07edc0f4.js";const m={name:"SearchKiru",components:{ElPagination:n,KiruSearchItem:a},props:{keywords:{type:String,default:""},paginationCount:{type:Number,default:10}},emits:["is-loading","result-count"],data:()=>({kiruSearchResult:[],paginationVm:{currentPage:1,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{"paginationVm.currentPage":{handler(a){this.searchKiruHandler(a)}},paginationCount:{handler(){this.searchKiruHandler(this.paginationVm.currentPage)}}},mounted(){this.searchKiruHandler(this.paginationVm.currentPage)},methods:{searchKiruHandler(a){this.$emit("is-loading",!0),this.isLoading=!0,e({keywords:this.keywords,nowpage:a,showcount:this.paginationCount}).then((a=>{this.$emit("is-loading",!1),a.data.success?(this.paginationVm.total=a.data.total,this.kiruSearchResult=a.data.data,this.$emit("result-count",this.paginationVm.total)):this.$notify({group:"error",title:"(搜尋頁面)搜尋切切失敗"}),this.isLoading=!1})).catch((a=>{}))}}},f={key:0},y={key:1},b=[c("span",{class:"block text-center text-myBrown/20"},"找不到搜尋的相關文章",-1)],k={class:"flex justify-center py-4"};var v=t(m,[["render",function(t,e,m,v,x,P){const S=a,w=n;return i(),r(d,null,[0!==x.kiruSearchResult.length?(i(),r("ul",f,[s(o,{mode:"out-in","enter-active-class":"transition duration-300 ease-out delay-300","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0","leave-active-class":"transition duration-300 ease-in","leave-from-class":"transform opacity-100 translate-x-0","leave-to-class":"transform opacity-0 -translate-x-48"},{default:l((()=>[(i(!0),r(d,null,g(x.kiruSearchResult,(a=>(i(),p(S,h(a,{key:a.artId,"is-show-author":!0}),null,16)))),128))])),_:1})])):(i(),r("div",y,b)),c("div",k,[s(w,{currentPage:x.paginationVm.currentPage,"onUpdate:currentPage":e[0]||(e[0]=a=>x.paginationVm.currentPage=a),style:u([x.paginationStyle]),layout:"prev, pager, next","page-size":m.paginationCount,"pager-count":7,total:x.paginationVm.total,"hide-on-single-page":!1},null,8,["currentPage","style","page-size","total"])])],64)}]]);export{v as default};
