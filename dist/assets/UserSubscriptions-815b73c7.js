/* empty css             *//* empty css                  */import{_ as t,a0 as a}from"./index-f2480ff4.js";import{aL as e,ai as s,o as n,c as o,d as i,t as l,F as r,f as c,e as m,aJ as p,s as g}from"./vendor-358810ac.js";const d={name:"UserSubscriptions",components:{ElPagination:e},data:()=>({mySubscribeList:[],totalAmount:0,paginationVm:{currentPage:1,pageSize:5,total:0},paginationStyle:{"--el-pagination-bg-color":"#ededeb","--el-pagination-button-disabled-bg-color":"#ededeb","--el-pagination-hover-color":"#FF7F24"}}),computed:{},watch:{"paginationVm.currentPage":{handler(t){this.getMySubscribeListHandler(t)}}},created(){this.getMySubscribeListHandler(this.paginationVm.currentPage)},methods:{getMySubscribeListHandler(t){a({nowpage:t,showcount:this.paginationVm.pageSize}).then((t=>{if(t.data.success){const{data:a,total:e,pay:s}=t.data;this.mySubscribeList=a,this.paginationVm.total=e,this.totalAmount=s}else this.$notify({group:"error",title:"訂閱清單取得失敗"})}))},formatThousand:t=>String(t).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")}},u={class:"w-full"},b=i("h2",{class:"mb-8 text-2xl font-bold text-myBrown"}," 我的訂閱 ",-1),f=i("p",{class:"mb-8 text-myBrown"}," 這裡是你所訂閱的創作者總覽，每月固定幾號扣款啦，如果你想怎樣怎樣那就怎樣怎樣。 ",-1),y={class:"mb-8"},x=i("h3",{class:"mb-2 font-bold text-myBrown"}," 每月花費 ",-1),h={class:"text-myBrown"},w={class:"px-0.5 text-4xl font-bold align-sub"},S=i("span",{class:"px-0.5 text-sm align-sub"},"NTD",-1),B=i("div",{class:"flex mb-6"},[i("span",{class:"w-2/5 font-semibold text-myBrown"}," 創作者 "),i("span",{class:"w-[30%] font-semibold text-myBrown"}," 訂閱價格 "),i("span",{class:"w-[30%] font-semibold text-myBrown"}," 訂閱日期 ")],-1),v={class:"flex flex-col gap-6"},P={class:"w-2/5 text-myBrown"},V={class:"w-[30%] text-myBrown"},L={class:"w-[30%] text-myBrown"},j={class:"flex justify-center py-4"};var z=t(d,[["render",function(t,a,d,z,A,D){const M=e,F=s("timeformat");return n(),o("div",u,[b,f,i("div",y,[x,i("div",h,[i("span",w,"$"+l(D.formatThousand(A.totalAmount)),1),S])]),i("div",null,[B,i("ul",v,[(n(!0),o(r,null,c(A.mySubscribeList,(t=>(n(),o("li",{key:t.ID,class:"flex"},[i("span",P,l(t.Author),1),i("span",V," $"+l(t.Amount),1),g(i("span",L,null,512),[[F,{time:t.InitDate,format:"YYYY/MM/DD"}]])])))),128))]),i("div",j,[m(M,{currentPage:A.paginationVm.currentPage,"onUpdate:currentPage":a[0]||(a[0]=t=>A.paginationVm.currentPage=t),style:p([A.paginationStyle]),layout:"prev, pager, next","page-size":A.paginationVm.pageSize,"pager-count":7,total:A.paginationVm.total,"hide-on-single-page":!1},null,8,["currentPage","style","page-size","total"])])])])}]]);export{z as default};
