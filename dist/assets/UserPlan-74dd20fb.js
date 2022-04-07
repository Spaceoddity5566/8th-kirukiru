var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,r=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;import{_ as l}from"./AlertModal-25b4f360.js";import{_ as i}from"./DynamicTextarea-ff54f408.js";import{ao as c,m as g,o as h,c as u,d as p,a as d,s as f,u as m,t as P,q as b,e as y,l as C,D as x}from"./vendor-358810ac.js";import{a as w,e as I}from"./object-fe354ed4.js";import{_ as v,X as H,Y as B,Z as O,$ as j,J as k}from"./index-f2480ff4.js";const M={name:"UserPlan",components:{DynamicTextarea:i,AlertModal:l},data(){const{value:e,errorMessage:t}=c("plan-info",w().nullable().max(300)),{value:n,errorMessage:a}=c("plan-price",I().required().positive().integer());return{getDataComplete:!1,myPlan:null,openPlan:!1,showChangePrice:!1,planPrice:0,checkPrice:n,shadowPrice:0,planPriceError:a,showChangeInfo:!1,planInfo:e,planInfoError:t,alertInfo:null,subscribeCount:0}},computed:(E=((e,t)=>{for(var n in t||(t={}))s.call(t,n)&&r(e,n,t[n]);if(a)for(var n of a(t))o.call(t,n)&&r(e,n,t[n]);return e})({},g(["userInfo"])),$={monthRevenue(){return Math.floor(this.subscribeCount*this.planPrice)}},t(E,n($))),watch:{},created(){this.getMyPlanHandler(),this.getSubscribeCount()},methods:{getMyPlanHandler(){H().then((e=>{e.data.success?(this.myPlan=e.data.data,this.planPrice=this.myPlan.amount,this.openPlan=!0,this.getDataComplete=!0):this.openPlan=!1})).catch((e=>{}))},openPlanHandler(){B().then((e=>{e.data.success?(this.$notify({group:"success",title:"已開通訂閱方案"}),this.openPlan=!0,this.getMyPlanHandler()):(this.$notify({group:"error",title:"方案開通失敗",test:"請重新檢查您的網路連線"}),this.openPlan=!1)})).catch((e=>{}))},togglePriceChange(){this.showChangePrice=!this.showChangePrice},planPriceInputHandler(e){this.planPrice=e.target.value,this.checkPrice=e.target.value},changePlanPriceHandler(){this.planPriceError||O(this.planPrice).then((e=>{e.data.success?(this.$notify({group:"success",title:"訂閱金額修改成功"}),this.getMyPlanHandler(),this.togglePriceChange()):this.$notify({group:"success",title:"訂閱金額修改失敗"})})).catch((e=>{}))},toggleInfoChange(){this.showChangeInfo=!this.showChangeInfo},onChangePlanInfo(){this.introError||(this.alertInfo={message:"是否確定更改敘述 ?",confirmMode:"nothing",messageClass:"text-lg font-bold text-myBrown md:text-xl"},this.$store.commit("SHOW_ALERT"))},changePlanInfoHandler(){j(this.planInfo).then((e=>{e.data.success?(this.$notify({group:"success",title:"敘述更新成功"}),this.getMyPlanHandler(),this.toggleInfoChange()):this.$notify({group:"error",title:e.data.message})})).catch((e=>{}))},getSubscribeCount(){k(this.userInfo.Username).then((e=>{e.data.success?this.subscribeCount=e.data.orderNumber:this.$notify({group:"error",title:"訂閱人數取得失敗"})})).catch((e=>{}))},formatThousand:e=>String(e).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,",")}};var E,$;const D={class:"w-full"},T=p("h2",{class:"mb-4 text-2xl font-bold text-myBrown"}," 我的方案 ",-1),A={key:0,class:"py-4 text-myBrown"},S=p("p",{class:"py-2 px-4 mb-4 font-medium text-myOrange bg-myOrange/20 rounded-lg"}," 請先點選開通方案，才能享受完整的切切功能哦 ",-1),_={class:"mb-4"},U={key:1},V=p("p",{class:"py-2 px-4 mb-8 font-medium text-myOrange bg-myOrange/20 rounded-lg"}," 您已開通方案 ! ",-1),q={class:"mb-8"},N=p("h3",{class:"mb-2 text-lg font-bold text-myBrown"}," 方案價格 ",-1),R={class:"flex gap-8 items-center"},Y={class:"font-bold text-myBrown"},J=p("span",{class:"px-0.5 text-sm align-sub"},"$",-1),K={class:"px-0.5 text-2xl align-sub"},L=p("span",{class:"px-0.5 text-sm align-sub"},"NTD",-1),W={class:"relative"},X=["value"],Z={class:"absolute -bottom-6 left-0 text-sm text-red-500"},z={class:"flex gap-3"},F=["disabled"],G={class:"mb-12"},Q=p("h3",{class:"mb-2 text-lg font-bold text-myBrown"}," 方案敘述 ",-1),ee={class:"text-myBrown whitespace-pre-wrap"},te={class:"py-4"},ne={class:"text-sm text-red-500"},ae={class:"flex gap-3 text-right"},se=["disabled"],oe={class:"flex justify-between"},re={class:"flex flex-col gap-4 items-center"},le=p("span",{class:"font-semibold text-myBrown"},"訂閱我的人數",-1),ie={class:"text-4xl font-semibold text-myBrown"};var ce=v(M,[["render",function(e,t,n,a,s,o){const r=i,c=l;return h(),u("div",D,[T,s.openPlan?d("",!0):(h(),u("div",A,[S,p("div",_,[p("button",{type:"submit",class:"userPageButton",onClick:t[0]||(t[0]=(...e)=>o.openPlanHandler&&o.openPlanHandler(...e))}," 開通方案 ")])])),s.getDataComplete?(h(),u("div",U,[p("div",null,[V,p("div",q,[N,p("div",R,[f(p("div",Y,[J,p("span",K,P(o.formatThousand(s.myPlan.amount)),1),L],512),[[m,!s.showChangePrice]]),f(p("button",{type:"button",class:"userPageButton",onClick:t[1]||(t[1]=(...e)=>o.togglePriceChange&&o.togglePriceChange(...e))}," 修改價格 ",512),[[m,!s.showChangePrice]]),f(p("div",W,[p("input",{value:s.planPrice,class:"w-24 rounded-lg border-none focus:ring-2 focus:ring-myYellow form-input",type:"text",name:"plan-price",onInput:t[2]||(t[2]=e=>o.planPriceInputHandler(e)),onKeyup:t[3]||(t[3]=b(((...e)=>o.changePlanPriceHandler&&o.changePlanPriceHandler(...e)),["enter"]))},null,40,X),p("span",Z,P(s.planPriceError),1)],512),[[m,s.showChangePrice]]),f(p("div",z,[p("button",{type:"button",class:"userPageButton",disabled:s.planPriceError,onClick:t[4]||(t[4]=(...e)=>o.changePlanPriceHandler&&o.changePlanPriceHandler(...e))}," 確認修改 ",8,F),p("button",{type:"button",class:"userPageCancelButton",onClick:t[5]||(t[5]=(...e)=>o.togglePriceChange&&o.togglePriceChange(...e))}," 取消 ")],512),[[m,s.showChangePrice]])])]),p("div",G,[Q,p("p",ee,P(s.myPlan.info),1),p("div",te,[f(y(r,{modelValue:s.planInfo,"onUpdate:modelValue":t[6]||(t[6]=e=>s.planInfo=e),placeholder:"請輸入敘述內容",class:"",name:"plan-info"},null,8,["modelValue"]),[[m,s.showChangeInfo]]),p("span",ne,P(s.planInfoError),1),p("div",ae,[s.showChangeInfo?(h(),u("button",{key:0,type:"button",class:"userPageButton",disabled:s.planInfoError,onClick:t[7]||(t[7]=(...e)=>o.onChangePlanInfo&&o.onChangePlanInfo(...e))}," 確認更改 ",8,se)):d("",!0),p("button",{type:"button",class:C([s.showChangeInfo?"userPageCancelButton":"userPageButton"]),onClick:t[8]||(t[8]=(...e)=>o.toggleInfoChange&&o.toggleInfoChange(...e))},P(s.showChangeInfo?"取消":"更改敘述"),3)])])]),p("div",oe,[p("div",re,[le,p("span",ie,P(o.formatThousand(s.subscribeCount)),1)])])])])):d("",!0),y(c,x(s.alertInfo,{onAlertConfirm:o.changePlanInfoHandler}),null,16,["onAlertConfirm"])])}]]);export{ce as default};
