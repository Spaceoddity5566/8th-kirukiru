/* empty css             *//* empty css                  */import{_ as a}from"./CommonSearchItem-c7f79154.js";import{_ as t,G as e}from"./index-c712dfb1.js";import{aL as n,o,c as i,e as s,aM as r,w as l,d as c,aJ as m,F as g,f as d,h as u,D as p}from"./vendor-358810ac.js";import"./index-7e1131ce.js";const h={name:"CategoryCommon",components:{ElPagination:n,CommonSearchItem:a},props:{categoryId:{type:Number,default:1},paginationCount:{type:Number,default:10}},emits:["is-loading","result-count"],data:()=>({commonSearchResult:[],paginationVm:{currentPage:1,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"},isLoading:!1}),watch:{categoryId:{handler(){this.searchCommonHandler(this.paginationVm.currentPage)}},"paginationVm.currentPage":{handler(a){this.searchCommonHandler(a)}},paginationCount:{handler(){this.searchCommonHandler(this.paginationVm.currentPage)}}},mounted(){this.searchCommonHandler(this.paginationVm.currentPage)},methods:{searchCommonHandler(a){this.$emit("is-loading",!0),this.isLoading=!0,e({articlecategoryId:this.categoryId,nowpage:a,showcount:this.paginationCount}).then((a=>{this.$emit("is-loading",!1),a.data.success?(this.paginationVm.total=a.data.total,this.commonSearchResult=a.data.data,this.$emit("result-count",this.paginationVm.total)):this.$notify({group:"error",title:"(分類頁面)取得一般文章失敗"}),this.isLoading=!1})).catch((a=>{}))}}},y={key:0},f={key:1},C=[c("span",{class:"block text-center text-myBrown/20"},"目前分類無文章",-1)],b={class:"flex justify-center py-4"};var v=t(h,[["render",function(t,e,h,v,x,P){const V=a,S=n;return o(),i(g,null,[0!==x.commonSearchResult.length?(o(),i("ul",y,[s(r,{mode:"out-in","enter-active-class":"transition duration-300 ease-out delay-300","enter-from-class":"transform opacity-0 translate-x-48","enter-to-class":"transform opacity-100 translate-x-0","leave-active-class":"transition duration-300 ease-in","leave-from-class":"transform opacity-100 translate-x-0","leave-to-class":"transform opacity-0 -translate-x-48"},{default:l((()=>[(o(!0),i(g,null,d(x.commonSearchResult,(a=>(o(),u(V,p(a,{key:a.artId,"is-show-author":!0}),null,16)))),128))])),_:1})])):(o(),i("div",f,C)),c("div",b,[s(S,{currentPage:x.paginationVm.currentPage,"onUpdate:currentPage":e[0]||(e[0]=a=>x.paginationVm.currentPage=a),style:m([x.paginationStyle]),layout:"prev, pager, next","page-size":h.paginationCount,"pager-count":7,total:x.paginationVm.total,"hide-on-single-page":!1},null,8,["currentPage","style","page-size","total"])])],64)}]]);export{v as default};
