const __vite__fileDeps=["assets/Language-bARDAU9f.js","assets/index-CpePGZp8.js","assets/index-VvHOXzW7.css","assets/HomeView-CoAwFaGq.js","assets/star-fO3CO0i5.js","assets/games-BkZyYXKW.js","assets/HomeView-BykbN_2V.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as S,u as P,r as m,a as M,j as $,w as j,o as c,b as d,n as e,F as w,s as k,J as C,v as y,Z as B,d as g,p as I,M as A,h as G,x as R,i as D,l as H,z as O,A as z}from"./index-CpePGZp8.js";import{n as u}from"./navigation-BqQSylFt.js";const V="/liveCasino/turnlateImages/rotate.png",q="/liveCasino/turnlateImages/rotate2.png",J="/liveCasino/images/betHist.png",F="/liveCasino/images/globe.png",Q="/liveCasino/images/down.png",K="/liveCasino/images/call.png",Y="/liveCasino/images/wenhao.png",n=p=>(O("data-v-227ff75a"),p=p(),z(),p),Z={class:"flex flex-col w-full gap-[.1rem]"},U=A('<span data-v-227ff75a><span class="bg-[#3A61C2] rounded-[.1rem] flex items-center justify-end" data-v-227ff75a><span class="jackpot-text mr-[.3rem] z-10" data-v-227ff75a>TRY ME! </span><span class="relative" data-v-227ff75a><img src="'+V+'" class="rotate" alt="" data-v-227ff75a><img src="'+q+'" class="absolute h-[.9rem] top-[.32rem] left-[.53rem] transform -translate-x-1/2 -translate-y-1/2" alt="" data-v-227ff75a></span></span></span>',1),W={class:"grid grid-cols-2 gap-[.1rem]"},X=["onClick"],ee=["src"],se={class:"text-[.16rem] text-nowrap"},te=n(()=>e("img",{src:J,alt:"",class:"w-[.4rem]"},null,-1)),ae=n(()=>e("span",{class:"text-white text-[.24rem]"},"Betting History",-1)),ie=[te,ae],ne={class:"grid grid-cols-2 w-full h-auto bg-[#3A61C2] rounded-[.1rem] gap-[.1rem] p-[.1rem] leading-none"},oe=["onClick"],re={class:"text-white text-[.15rem] absolute top-[.05rem] left-[.05rem]"},le={class:"flex flex-col gap-[.1rem]"},me=n(()=>e("div",{class:"w-[.3rem] h-[.3rem] bg-[#6FA4EF] rounded-[50%]"},[e("img",{src:F,alt:"",class:"w-[.3rem]"})],-1)),ce=n(()=>e("div",{class:"text-[.22rem]"},"Language",-1)),de=[me,ce],ge=n(()=>e("div",{class:"w-[.3rem] h-[.3rem] bg-[#6FA4EF] rounded-[50%]"},[e("img",{src:F,alt:"",class:"w-[.3rem]"})],-1)),pe=n(()=>e("div",{class:"text-[.22rem]"},"Themes",-1)),ue=[ge,pe],ve=A('<div class="flex gap-[.1rem] items-center" data-v-227ff75a><div class="w-[.3rem] h-[.3rem] bg-[#6FA4EF] rounded-[50%]" data-v-227ff75a><img src="'+Q+'" alt="" class="w-[.5rem]" data-v-227ff75a></div><a href="https://vk8.me/app/mg_MP6D" target="_blank" data-v-227ff75a><div class="text-[.22rem]" data-v-227ff75a>Download App</div></a></div>',1),fe={class:"flex gap-[.1rem] items-center"},_e=n(()=>e("div",{class:"w-[.3rem] h-[.3rem] bg-[#6FA4EF] rounded-[50%]"},[e("img",{src:K,alt:"",class:"w-[.5rem]"})],-1)),he={class:"flex gap-[.1rem] items-center"},be=n(()=>e("div",{class:"w-[.3rem] h-[.3rem] bg-[#6FA4EF] rounded-[50%]"},[e("img",{src:Y,alt:"",class:"w-[.5rem]"})],-1)),xe=n(()=>e("div",{class:"h-[4rem] border-2"},"ds",-1)),we={__name:"SidebarLayout",setup(p){const h=P(),b=m(0),T=G(()=>R(()=>import("./Language-bARDAU9f.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),v=m(!1),f=m(!1),s=D();m(!1);const x=m([]);M({queryKey:["userGames"],queryFn:async()=>await $("/api/getGames.do?type=11&limitNum=50&lang=en"),staleTime:1e3,select:i=>{x.value=i}});const L=(i,t)=>{s.commit("setsideBar");const l={563:0,562:1,129:2,503:3,263:4,124:5,127:6,123:7,281:8,125:9,322:10,280:11};s.commit("setScrollTo",l[i])},N=()=>{s.state.userInfo.isLogin||s.commit("setloginModal",!0),s.commit("setnewTask",!0)},E=m([{title:"Eventos",img:"/sidebarImages/event.png",bg:"3A61C2",func:()=>h.push("/mainNav")},{title:"Pendente",img:"/sidebarImages/gift.png",bg:"3A61C2",func:()=>o("/mainNav",4)},{title:"History",img:"/sidebarImages/present.png",func:()=>o("/mainNav",6)},{title:"Juros",img:"/sidebarImages/bank.png",func:()=>o("/mainNav",5)},{title:"Vip",img:"/sidebarImages/king.png",func:()=>o("/mainNav",2)},{title:"Mission Centers",img:"/sidebarImages/calendar.png",func:()=>u("/mainNav",1)},{title:"rebate",img:"/sidebarImages/rebate.png",func:()=>o("/mainNav",8)},{title:"Agente",img:"/sidebarImages/convide.png",func:()=>h.push("/invite")},{title:"Red envelope",img:"/sidebarImages/red.png",func:()=>s.state.userInfo.isLogin?s.commit("setopenRedPacket",!0):s.commit("setloginModal",!0)},{title:"Earn free",img:"/sidebarImages/pdd.png",func:()=>s.state.userInfo.isLogin?s.commit("setturnLate",!0):s.commit("setloginModal",!0)},{title:"Bonus wallet",img:"/sidebarImages/cj.png",func:()=>o("/lottery")},{title:"Redemption code",img:"/sidebarImages/redemp.png",func:()=>o("/mainNav",3)}]),o=(i,t)=>{var l,a;(a=(l=s.state)==null?void 0:l.userInfo)!=null&&a.isLogin?(u(i,t),s.commit("setIndexPass",t)):s.commit("setloginModal",!0)};return j(()=>s.state.scrollTo,i=>{i&&(b.value=i)}),(i,t)=>{const l=H;return c(),d("div",{class:C([" h-[calc(100vh-.9rem)] w-[3rem] p-[.15rem] overflow-auto",g(s).state.setThemes.lightTheme?"bg-[#f08abd] text-[white]":"bg-[#05309F] text-[white]",g(s).state.setThemes.darkTheme?"bg-[black] text-[white] border-r-[.01rem] border-[#30302f]":"bg-[#05309F] text-[white]"])},[e("div",Z,[e("span",{class:"h-[.8rem] bg-[url('https://mt0.yibo22.com/mobile/wap2/dist/static/img/heijinBg.b70d1998.png')] bg-[#25200b] bg-cover bg-center text-[#dfd54b] flex items-center font-bold justify-start p-[.1rem] rounded-[.1rem]",onClick:N},"Exclusive"),U,e("div",W,[(c(!0),d(w,null,k(x.value,({games:a,tab:r},_)=>(c(),d("div",{key:_,class:C(["flex flex-col items-center justify-center",b.value===_?"cheeseDog":"spicyHotdog"]),onClick:ke=>L(r.id)},[e("img",{src:"/logo/"+(r==null?void 0:r.code)+"_active.png",class:"h-[.4rem]"},null,8,ee),e("div",se,y(r==null?void 0:r.name),1)],10,X))),128))]),e("div",{class:"w-full h-[.9rem] bg-[#3A61C2] rounded-[.1rem] flex items-center justify-center gap-[.2rem]",onClick:t[0]||(t[0]=a=>o("/mainNav",6))},ie),e("div",ne,[(c(!0),d(w,null,k(E.value,(a,r)=>(c(),d("div",{key:a.title,style:B({backgroundImage:`url('${a.img}')`}),class:"relative yummyHakdog leading-none",onClick:_=>a.func()},[e("span",re,y(a.title),1)],12,oe))),128))]),e("div",le,[e("div",{class:"flex gap-[.1rem] items-center",onClick:t[1]||(t[1]=a=>v.value=!v.value)},de),e("div",{class:"flex gap-[.1rem] items-center",onClick:t[2]||(t[2]=a=>f.value=!f.value)},ue),ve,e("div",fe,[_e,e("div",{class:"text-[.22rem]",onClick:t[3]||(t[3]=a=>g(u)("/newsupport"))}," Support ")]),e("div",he,[be,e("div",{class:"text-[.22rem]",onClick:t[4]||(t[4]=a=>g(u)("/newsupport"))}," FAQ ")]),xe])]),I(l,{isOpen:v.value,componentPass:g(T),backGrounds:!0},null,8,["isOpen","componentPass"]),I(l,{isOpen:f.value,bgColor:!0,themePass:"Change Themes"},null,8,["isOpen"])],2)}}},Ie=S(we,[["__scopeId","data-v-227ff75a"]]);export{Ie as default};
