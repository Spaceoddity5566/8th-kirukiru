import{ao as e,ac as t,ai as a,o as l,c as r,s as o,d as s,l as n,t as u,u as d,ad as p}from"./vendor-358810ac.js";import"./object-fe354ed4.js";import{_ as i}from"./index-ce9f5a0d.js";const c={name:"FormInputText",props:{focus:{type:Boolean,default:!1},type:{type:String,default:"text"},value:{type:String,default:""},name:{type:String,required:!0},label:{type:String,required:!0},successMessage:{type:String,default:""},placeholder:{type:String,default:""},defaultValue:{type:String,default:""},initValue:{type:Boolean,default:!1},inputBorder:{type:String,default:"border-2 border-myBrown focus:border-myYellow"}},emits:["update:model-value"],setup(a){const{value:l,errorMessage:r,handleBlur:o,handleChange:s,meta:n}=e(a.name,void 0,{initialValue:a.value});return t(l,(e=>{a.initValue&&p((()=>{l.value=a.defaultValue}))}),{immediate:!0}),{handleChange:s,handleBlur:o,errorMessage:r,inputValue:l,meta:n}},methods:{handleInput(e){this.handleChange(e),this.$emit("update:model-value",e.target.value.trim())}}},m=["id","name","type","placeholder","value"],h=["for"];var f=i(c,[["render",function(e,t,p,i,c,f){const g=a("focus");return l(),r("div",{class:n(["relative",{"text-red-500":!!i.errorMessage}])},[o(s("input",{id:p.name,name:p.name,type:p.type,placeholder:p.placeholder,value:i.inputValue,class:n([[{"text-red-500":!!i.errorMessage},p.inputBorder],"peer placeholder-shown:py-2 px-2 pt-8 focus:pt-8 pb-4 focus:pb-4 w-full h-10 text-base tracking-wide placeholder:text-transparent rounded-lg focus:outline-none transition-all placeholder:select-none"]),onInput:t[0]||(t[0]=(...e)=>f.handleInput&&f.handleInput(...e)),onBlur:t[1]||(t[1]=(...e)=>i.handleBlur&&i.handleBlur(...e))},null,42,m),[[g,p.focus]]),s("label",{for:p.name,class:"absolute top-1 peer-placeholder-shown:top-2.5 peer-focus:top-1 left-2.5 text-xs peer-placeholder-shown:text-sm peer-focus:text-xs font-medium text-myBrown peer-placeholder-shown:text-myBrown/50 peer-focus:text-myBrown transition-all"},u(p.placeholder),9,h),o(s("p",{class:"absolute -bottom-6 left-0 m-0 text-sm"},u(i.errorMessage||p.successMessage),513),[[d,i.errorMessage||i.meta.valid]])],2)}]]);export{f as _};
