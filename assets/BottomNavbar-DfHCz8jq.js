const __vite__fileDeps=["assets/Deposit-zBP7jJyR.js","assets/index-BjtivAsY.js","assets/index-D2JIchem.css","assets/1c64f5-IGjRFxmM.js","assets/Deposit-BNLvj_8e.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as u,w as k,E as C,o,b as a,n as e,p as m,q as c,d as t,f as i,g as d,J as I,F as y,h as g,x as p,i as L,l as N}from"./index-BjtivAsY.js";import"./tw-elements.es.min-Cf1_GnpJ.js";/* empty css                                                     */const D="/mobileCasino/bottomNavImages/1.png",P="/mobileCasino/bottomNavImages/3.png",B="/mobileCasino/bottomNavImages/12.png",E="/mobileCasino/bottomNavImages/9.png",M="/mobileCasino/bottomNavImages/10.png",T="/mobileCasino/bottomNavImages/15.png",v="/mobileCasino/bottomNavImages/5.png",V={class:"grid grid-cols-5 gap-[.5rem] justify-between w-full"},A=e("div",{class:"flex flex-col items-center"},[e("img",{src:D,alt:"",class:"w-[.6rem]"}),e("div",{class:"text-[.25rem]"},"Home")],-1),O=e("div",{class:"flex flex-col items-center"},[e("img",{src:P,alt:"",class:"w-[.6rem]"}),e("div",{class:"text-[.25rem]"},"Promotion")],-1),q=e("img",{src:B,alt:"",class:"w-[.6rem]"},null,-1),z=e("div",{class:"text-[.25rem]"},"Login",-1),F=[q,z],H=e("img",{src:E,alt:"",class:"w-[.6rem]"},null,-1),R=e("div",{class:"text-[.25rem]"},"Deposit",-1),S=[H,R],$=e("div",{class:"flex flex-col items-center"},[e("img",{src:M,alt:"",class:"w-[.6rem]"}),e("div",{class:"text-[.25rem]"},"Saque")],-1),j=e("div",{class:"flex flex-col items-center"},[e("img",{src:T,alt:"",class:"w-[.6rem]"}),e("div",{class:"text-[.25rem]"},"Help")],-1),G=e("img",{src:v,alt:"",class:"w-[.6rem]"},null,-1),J=e("div",{class:"text-[.25rem]"},"My",-1),K=[G,J],Q=e("div",{class:"flex flex-col items-center"},[e("img",{src:v,alt:"",class:"w-[.6rem]"}),e("div",{class:"text-[.25rem]"},"My")],-1),U={key:0,class:"h-screen bg-[#000000b3] fixed top-0 z-20"},W={key:0,class:"flex flex-col slide-in-bottom absolute top-0 left-0 ease-in-out"},se={__name:"BottomNavbar",setup(X){const x=g(()=>p(()=>import("./Deposit-zBP7jJyR.js"),__vite__mapDeps([0,1,2,3,4]))),h=g(()=>p(()=>import("./index-BjtivAsY.js").then(_=>_.bg),__vite__mapDeps([1,2])));u(!1);const s=L(),l=u(!1),f=()=>{l.value=!l.value},b=()=>{l.value=!1};return k(()=>s.state.openDeposit,_=>{f()}),(_,r)=>{const n=C("router-link"),w=N;return o(),a(y,null,[e("div",{class:I(["btom flex items-center w-full h-[1.32rem] fixed bottom-0 p-[.2rem]",t(s).state.setThemes.lightTheme?"bg-[#f08abd] text-[#ffffff]":"bg-[#032B92] text-[white]",t(s).state.setThemes.darkTheme?"bg-[#1d1c1c] text-white":" text-[white]"])},[e("div",V,[m(n,{to:"/"},{default:c(()=>[A]),_:1}),m(n,{to:"/mainNav"},{default:c(()=>[O]),_:1}),t(s).state.userInfo.isLogin?i("",!0):(o(),a("div",{key:0,class:"flex flex-col items-center",onClick:r[0]||(r[0]=()=>t(s).state.userProfile.isLogin?"":t(s).commit("setloginModal",!0))},F)),t(s).state.userInfo.isLogin?(o(),a("div",{key:1,class:"flex flex-col items-center",onClick:f},S)):i("",!0),t(s).state.userInfo.isLogin?(o(),d(n,{key:2,to:"/withdraw"},{default:c(()=>[$]),_:1})):i("",!0),t(s).state.userInfo.isLogin?i("",!0):(o(),d(n,{key:3,to:"/newsupport"},{default:c(()=>[j]),_:1})),t(s).state.userInfo.isLogin?i("",!0):(o(),a("div",{key:4,class:"flex flex-col items-center",onClick:r[1]||(r[1]=Y=>t(s).commit("setloginModal",!0))},K)),t(s).state.userInfo.isLogin?(o(),d(n,{key:5,to:"/menu"},{default:c(()=>[Q]),_:1})):i("",!0)])],2),m(w,{isOpen:t(s).state.loginModal,componentPass:t(h),backGrounds:!0},null,8,["isOpen","componentPass"]),l.value?(o(),a("div",U,[l.value?(o(),a("div",W,[m(t(x),{onClose:b})])):i("",!0)])):i("",!0)],64)}}};export{se as default};
