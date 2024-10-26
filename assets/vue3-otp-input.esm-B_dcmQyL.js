import{ak as D,r as y,w as C,B as P,o as h,b as O,K,al as E,n as b,J as L,f as w,d as M,E as V,F as N,s as R,g as W}from"./index-BjtivAsY.js";var B=D({name:"SingleOtpInput",props:{inputType:{type:String,validator:e=>["number","tel","letter-numeric","password"].includes(e),default:"tel"},inputmode:{type:String,default:"numeric"},value:{type:[String,Number]},separator:{type:String},focus:{type:Boolean},inputClasses:{type:[String,Array]},conditionalClass:{type:String},shouldAutoFocus:{type:Boolean},isLastChild:{type:Boolean},placeholder:{type:String},isDisabled:{type:Boolean}},emits:["on-change","on-keydown","on-paste","on-focus","on-blur"],setup(e,u){let{emit:s}=u;const l=y(e.value||""),n=y(null),p=()=>(l.value=l.value.toString(),l.value.length>1&&(l.value=l.value.slice(0,1)),s("on-change",l.value)),c=t=>t>=65&&t<=90,g=t=>t>=48&&t<=57||t>=96&&t<=105,o=t=>{e.isDisabled&&t.preventDefault();const r=t||window.event,v=r.which?r.which:r.keyCode;g(v)||e.inputType==="letter-numeric"&&c(v)||[8,9,13,37,39,46,86].includes(v)?s("on-keydown",t):r.preventDefault()},d=t=>s("on-paste",t),m=()=>(n.value.select(),s("on-focus")),f=()=>s("on-blur");return C(()=>e.value,(t,r)=>{t!==r&&(l.value=t)}),C(()=>e.focus,(t,r)=>{r!==t&&n.value&&e.focus&&(n.value.focus(),n.value.select())}),P(()=>{n.value&&e.focus&&e.shouldAutoFocus&&(n.value.focus(),n.value.select())}),{handleOnChange:p,handleOnKeyDown:o,handleOnPaste:d,handleOnFocus:m,handleOnBlur:f,input:n,model:l,inputTypeValue:e.inputType==="letter-numeric"?"text":e.inputType}}});const H={style:{display:"flex","align-items":"center"}},q=["type","inputmode","placeholder","disabled"],z={key:0},G=["innerHTML"];function J(e,u,s,l,n,p){return h(),O("div",H,[K(b("input",{"data-test":"single-input",type:e.inputTypeValue,inputmode:e.inputmode,placeholder:e.placeholder,disabled:e.isDisabled,ref:"input",min:"0",max:"9",maxlength:"1",pattern:"[0-9]","onUpdate:modelValue":u[0]||(u[0]=c=>e.model=c),class:L([e.inputClasses,e.conditionalClass,{"is-complete":e.model}]),onInput:u[1]||(u[1]=function(){return e.handleOnChange&&e.handleOnChange(...arguments)}),onKeydown:u[2]||(u[2]=function(){return e.handleOnKeyDown&&e.handleOnKeyDown(...arguments)}),onPaste:u[3]||(u[3]=function(){return e.handleOnPaste&&e.handleOnPaste(...arguments)}),onFocus:u[4]||(u[4]=function(){return e.handleOnFocus&&e.handleOnFocus(...arguments)}),onBlur:u[5]||(u[5]=function(){return e.handleOnBlur&&e.handleOnBlur(...arguments)})},null,42,q),[[E,e.model]]),!e.isLastChild&&e.separator?(h(),O("span",z,[b("span",{innerHTML:e.separator},null,8,G)])):w("",!0)])}B.render=J;const U=8,Q=37,X=39,Y=46;var F=D({name:"Vue3OtpInput",components:{SingleOtpInput:B},props:{value:{type:String,default:"",required:!0},numInputs:{default:4},separator:{type:String,default:"**"},inputClasses:{type:[String,Array]},conditionalClass:{type:Array,default:[]},inputType:{type:String,validator:e=>["number","tel","letter-numeric","password"].includes(e)},inputmode:{type:String,validator:e=>["numeric","text","tel","none"].includes(e),default:"numeric"},shouldAutoFocus:{type:Boolean,default:!1},placeholder:{type:Array,default:[]},isDisabled:{type:Boolean,default:!1},shouldFocusOrder:{type:Boolean,default:!1}},setup(e,u){let{emit:s}=u;const l=y(0),n=y([]),p=y([]);C(()=>e.value,a=>{const i=M(a).split("");n.value=i},{immediate:!0});const c=a=>{l.value=a},g=()=>{l.value=-1},o=()=>n.value.join("").length===e.numInputs?(s("update:value",n.value.join("")),s("on-complete",n.value.join(""))):"Wait until the user enters the required number of characters",d=a=>{l.value=Math.max(Math.min(e.numInputs-1,a),0)},m=()=>{d(l.value+1)},f=()=>{d(l.value-1)},t=a=>{p.value=Object.assign([],n.value),n.value[l.value]=a,p.value.join("")!==n.value.join("")&&(s("update:value",n.value.join("")),s("on-change",n.value.join("")),o())},r=a=>{a.preventDefault();const i=a.clipboardData.getData("text/plain").slice(0,e.numInputs-l.value).split("");if(e.inputType==="number"&&!i.join("").match(/^\d+$/)||e.inputType==="letter-numeric"&&!i.join("").match(/^\w+$/))return"Invalid pasted data";const I=n.value.slice(0,l.value).concat(i);return I.slice(0,e.numInputs).forEach(function(A,j){n.value[j]=A}),d(I.slice(0,e.numInputs).length),o()},v=a=>{t(a),m()},k=()=>{n.value.length>0&&(s("update:value",""),s("on-change","")),n.value=[],l.value=0},S=a=>{const i=a.split("");i.length===e.numInputs&&(n.value=i,s("update:value",n.value.join("")),s("on-complete",n.value.join("")))},T=(a,i)=>{switch(a.keyCode){case U:a.preventDefault(),t(""),f();break;case Y:a.preventDefault(),t("");break;case Q:a.preventDefault(),f();break;case X:a.preventDefault(),m();break;default:$(i);break}},$=a=>{e.shouldFocusOrder&&setTimeout(()=>{const i=n.value.join("").length;a-i>=0&&(l.value=i,n.value[a]="")},100)};return{activeInput:l,otp:n,oldOtp:p,clearInput:k,handleOnPaste:r,handleOnKeyDown:T,handleOnBlur:g,changeCodeAtFocus:t,focusInput:d,focusNextInput:m,focusPrevInput:f,handleOnFocus:c,checkFilledAllInputs:o,handleOnChange:v,fillInput:S}}});const Z={style:{display:"flex"},class:"otp-input-container"},x={key:0,autocomplete:"off",name:"hidden",type:"text",style:{display:"none"}};function _(e,u,s,l,n,p){const c=V("SingleOtpInput");return h(),O("div",Z,[e.inputType==="password"?(h(),O("input",x)):w("",!0),(h(!0),O(N,null,R(e.numInputs,(g,o)=>(h(),W(c,{key:o,focus:e.activeInput===o,value:e.otp[o],separator:e.separator,"input-type":e.inputType,inputmode:e.inputmode,"input-classes":e.inputClasses,conditionalClass:e.conditionalClass[o],"is-last-child":o===e.numInputs-1,"should-auto-focus":e.shouldAutoFocus,placeholder:e.placeholder[o],"is-disabled":e.isDisabled,onOnChange:e.handleOnChange,onOnKeydown:d=>e.handleOnKeyDown(d,o),onOnPaste:e.handleOnPaste,onOnFocus:d=>e.handleOnFocus(o),onOnBlur:e.handleOnBlur},null,8,["focus","value","separator","input-type","inputmode","input-classes","conditionalClass","is-last-child","should-auto-focus","placeholder","is-disabled","onOnChange","onOnKeydown","onOnPaste","onOnFocus","onOnBlur"]))),128))])}F.render=_;var te=(()=>{const e=F;return e.install=u=>{u.component("Vue3OtpInput",e)},e})();export{te as e};
