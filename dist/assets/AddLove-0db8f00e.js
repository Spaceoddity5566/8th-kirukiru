import{o as t,c as e,l as a,t as o,a as s}from"./vendor-385d4c3c.js";import{_ as l}from"./index-d8506044.js";var n=l({name:"AddCollection",props:{buttonClass:{type:String,default:"block text-myBrown hover:text-myOrange"},iconClass:{type:String,default:"inline-block px-1 text-lg align-middle scale-110"},isCollect:{type:Boolean,default:!1}},emits:["add-collection"]},[["render",function(o,s,l,n,i,r){return t(),e("button",{type:"button",class:a(l.buttonClass),onClick:s[0]||(s[0]=t=>o.$emit("add-collection"))},[l.isCollect?(t(),e("span",{key:1,class:a(["material-icons",l.iconClass])},"bookmark",2)):(t(),e("span",{key:0,class:a(["material-icons-outlined",l.iconClass])},"bookmark_border",2))],2)}]]);var i=l({name:"AddLove",props:{buttonClass:{type:String,default:"block text-myBrown hover:text-myOrange"},iconClass:{type:String,default:"inline-block px-1 text-lg align-middle material-icons"},countClass:{type:String,default:"inline-block px-1 text-lg align-middle"},isAddLove:{type:Boolean,default:!1},showLoveCount:{type:Boolean,default:!1},loveCount:{type:[String,Number],default:0},articleType:{type:String,default:""}},emits:["add-love"],methods:{addLoveHandler(){switch(this.articleType){case"kiru":this.$store.dispatch("ADD_KIRU_LOVE",{artId:this.$route.params.articleId,putlove:!0}).then((t=>{this.$emit("add-love",t)})).catch((t=>{}));break;case"common":this.$store.dispatch("ADD_COMMON_LOVE",{artId:this.$route.params.articleId,putlove:!0}).then((t=>{this.$emit("add-love",t)})).catch((t=>{}))}}}},[["render",function(l,n,i,r,d,c){return t(),e("button",{class:a(i.buttonClass),onClick:n[0]||(n[0]=(...t)=>c.addLoveHandler&&c.addLoveHandler(...t))},[i.isAddLove?(t(),e("span",{key:0,class:a(i.iconClass)},"favorite",2)):(t(),e("span",{key:1,class:a(i.iconClass)},"favorite_border",2)),i.showLoveCount?(t(),e("span",{key:2,class:a(i.countClass)},o(i.loveCount),3)):s("v-if",!0)],2)}]]);export{i as _,n as a};