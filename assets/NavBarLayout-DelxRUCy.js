const __vite__fileDeps=["assets/index-CpePGZp8.js","assets/index-VvHOXzW7.css","assets/Deposit-FATnE3Gq.js","assets/1c64f5-DNuPn08C.js","assets/Deposit-BNLvj_8e.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as O,D as S,r as n,C as V,H as G,E as N,o as a,b as c,n as e,J as _,d as t,p as s,U as B,f as m,q as C,g as q,F as U,h as b,x as v,i as F,a2 as j,$ as J,l as H,z as K,A as Q}from"./index-CpePGZp8.js";/* empty css              */import{_ as W}from"./logo-Cam6WfGz.js";import{_ as y}from"./search-K077cxzp.js";import{_ as X}from"./shuaxin-zLg3Itad.js";import"./MainLayout-C6VumGOR.js";import"./tw-elements.es.min-Cf1_GnpJ.js";import"./HomeView-CoAwFaGq.js";import"./star-fO3CO0i5.js";import"./games-BkZyYXKW.js";const Y="/liveCasino/images/logoSide.png",Z="/liveCasino/BrazilFlag.png",ee="/liveCasino/arrowDown.png",l=d=>(K("data-v-8a5395fa"),d=d(),Q(),d),te={class:"flex justify-between w-full items-center"},oe={class:"flex gap-[.05rem] items-center"},se=l(()=>e("img",{src:W,class:"w-full h-[1rem]"},null,-1)),re={key:0,class:"flex gap-[.2rem] items-center"},ne={key:1,class:"text-white flex items-center gap-[.06rem]"},ae={class:"flex items-center border-[.01rem] gap-[.05rem] rounded border-[#3a61c2]"},le=l(()=>e("span",null,[e("img",{src:Z,class:"h-[.4rem] border-[yellow]",alt:""})],-1)),ie={class:"flex items-center gap-[.1rem] bg-[#FFF0BB] text-[#1A45B1] rounded-[.1rem] px-[.1rem]","data-twe-dropdown-ref":""},ce=l(()=>e("span",null,"|",-1)),me={class:"absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-sm border-none bg-[#05309F] bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block dark:bg-surface-dark","aria-labelledby":"dropdownMenuButton1","data-twe-dropdown-menu-ref":""},de=l(()=>e("li",null,[e("a",{class:"block whitespace-nowrap h-[1rem] w-[2rem] text-left pl-[.4rem] bg-[#05309F] text-[.3rem] font-normal text-white hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25","data-twe-dropdown-item-ref":""},"Saque")],-1)),ue=l(()=>e("li",null,[e("a",{class:"block whitespace-nowrap h-[1rem] w-[2rem] text-left pl-[.4rem] mb-[.2rem] bg-[#05309F] text-[.3rem] font-normal text-white hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-neutral-800/25 dark:focus:bg-neutral-800/25 dark:active:bg-neutral-800/25",href:"#","data-twe-dropdown-item-ref":""},"Juros")],-1)),pe=l(()=>e("span",null,null,-1)),_e={class:"ml-[.1rem]"},fe={key:0,class:"h-screen bg-[#000000b3] fixed top-0 z-20"},ge={key:0,class:"flex flex-col slide-in-bottom absolute top-0 left-0 ease-in-out"},he={__name:"NavBarLayout",setup(d){const I=b(()=>v(()=>import("./index-CpePGZp8.js").then(u=>u.bg),__vite__mapDeps([0,1]))),L=b(()=>v(()=>import("./index-CpePGZp8.js").then(u=>u.bf),__vite__mapDeps([0,1]))),z=b(()=>v(()=>import("./Deposit-FATnE3Gq.js"),__vite__mapDeps([2,0,1,3,4])));S(),n(null);const f=n(!1),g=n(!1),i=n(!1),{query:R}=V(),r=F();G();const h=F(),T=n(!1),A=n(!1),D=()=>{g.value=!g.value,R.refetch()},$=()=>{f.value=!f.value},E=()=>{i.value=!i.value},P=()=>{i.value=!1};return(u,o)=>{const w=j,M=J,k=N("router-link"),x=H;return a(),c(U,null,[e("div",{class:_(["flex items-center p-[.15rem]  w-full h-[1.2rem] relative",t(h).state.setThemes.lightTheme?"bg-[#f08abd] text-[white]":"bg-[#062064]",t(h).state.setThemes.darkTheme?"bg-[#1d1c1c]  text-[white]":"bg-[#05309F] text-[white]"])},[e("div",te,[e("div",oe,[e("img",{src:Y,class:_(t(r).state.sideBar?"w-[.5rem] h-[.5rem] -rotate-180 transition-all":"w-[.5rem] h-[.5rem] rotate-0 transition-all"),onClick:o[0]||(o[0]=p=>t(r).commit("setsideBar"))},null,2),se]),t(r).state.userInfo.isLogin?m("",!0):(a(),c("div",re,[s(w,{title:"Login",bg:"#FFF0BB",h:".6rem",w:"1.5rem",b:".1rem",ft:".22rem",onClick:o[1]||(o[1]=p=>t(r).commit("setloginModal",!0))}),s(w,{title:"Register",bg:"#05309f",h:".6rem",w:"1.5rem",b:".1rem",ft:".22rem",cla:!0,onClick:o[2]||(o[2]=p=>t(r).commit("setRegisterModal",!0))}),e("img",{src:y,class:"w-[.35rem] h-[.35rem]",onClick:o[3]||(o[3]=p=>t(B).push("/search"))})])),t(r).state.userInfo.isLogin?(a(),c("div",ne,[e("div",ae,[le,s(M,{ref:"rollingTextRef","start-num":0,"target-num":t(h).state.userInfo.money,class:"van"},null,8,["target-num"]),e("span",null,[e("img",{class:_([{rotateThis:g.value},"w-[.4rem]"]),src:X,alt:"",onClick:D},null,2)])]),e("div",ie,[s(w,{title:"Deposito",bg:"#FFF0BB",h:".65rem",w:"1rem",b:".1rem",ft:".24rem",onClick:E}),ce,e("span",null,[e("img",{class:_(`w-[.30rem] h-[.30rem] transition-transform duration-300 ${f.value?"rotate-180":""}`),src:ee,type:"button","aria-expanded":"false","data-twe-ripple-color":"light","data-twe-dropdown-toggle-ref":"","data-twe-ripple-init":"",id:"dropdownMenuButton1",onClick:$},null,2),e("ul",me,[s(k,{to:"/withdraw"},{default:C(()=>[de]),_:1}),s(k,{to:"/juros"},{default:C(()=>[ue]),_:1})])]),pe]),e("div",_e,[e("img",{src:y,class:"w-[.30rem] h-[.30rem]",onClick:o[4]||(o[4]=p=>t(B).push("/search"))})])])):m("",!0)])],2),i.value?(a(),c("div",fe,[i.value?(a(),c("div",ge,[s(t(z),{onClose:P})])):m("",!0)])):m("",!0),t(r).state.userInfo.isLogin?m("",!0):(a(),q(x,{key:1,isOpen:T.value,componentPass:t(I),backGrounds:!0},null,8,["isOpen","componentPass"])),s(x,{isOpen:A.value,componentPass:t(L),backGrounds:!0},null,8,["isOpen","componentPass"])],64)}}},Le=O(he,[["__scopeId","data-v-8a5395fa"]]);export{Le as default};
