import{_ as c}from"./icon_TelephoneNumber-DYGr8Zaz.js";import{_ as a}from"./return-Ce85TX8M.js";import{_ as n}from"./icon_GoogleAuthenticator-DhmtP39j.js";import{P as m}from"./PageLayout-BcbkgnHp.js";import{E as d,o as _,g as p,q as s,n as e,v as i,d as o,a6 as l,p as r}from"./index-CpePGZp8.js";/* empty css                                                                   */const f="/liveCasino/images/03395d.png",x="/liveCasino/profileImages/icon_Gmail.png",u="/liveCasino/profileImages/icon_LoginPassword.png",g="/liveCasino/profileImages/icon_WithdrawPassword.png",w="/liveCasino/profileImages/icon_tripartite.png",h={class:"flex flex-col gap-[.2rem] p-[.2rem] w-full"},v={class:"w-full bg-[#05309F] flex flex-col px-[.2rem] rounded-[.1rem]"},b={class:"w-full flex items-center justify-between border-b-[.01rem] border-[#3A61C2] py-[.2rem]"},y=e("div",{class:"flex items-center gap-[.1rem]"},[e("img",{class:"w-[.3rem]",src:f,alt:""}),e("span",{class:"text-white text-[.22rem]"},"Nome de Usuário")],-1),F={class:"flex items-center"},C={class:"text-[.22rem] text-[#6FA4EF]"},A={class:"w-full flex items-center justify-between border-b-[.01rem] border-[#3A61C2] py-[.2rem]"},E=e("div",{class:"flex items-center gap-[.1rem]"},[e("img",{class:"w-[.3rem]",src:c,alt:""}),e("span",{class:"text-white text-[.22rem]"},"Nº de Telefone")],-1),j={class:"flex items-center"},P={class:"text-[.22rem] text-[#6FA4EF]"},S={class:"w-full flex items-center justify-between border-b-[.01rem] border-[#3A61C2] py-[.2rem]"},I=e("div",{class:"flex items-center gap-[.1rem]"},[e("img",{class:"w-[.3rem]",src:x,alt:""}),e("span",{class:"text-white text-[.22rem]"},"Endereço de e-mail")],-1),N={class:"flex items-center gap-[.1rem]"},k={class:"text-[.22rem] text-[#6FA4EF]"},D=e("img",{class:"rotate-180 w-[.25rem]",src:a,alt:""},null,-1),L=e("div",{class:"w-full flex items-center justify-between py-[.2rem]"},[e("div",{class:"flex items-center gap-[.1rem]"},[e("img",{class:"w-[.3rem]",src:n,alt:""}),e("span",{class:"text-white text-[.22rem]"},"Google Authenticator")]),e("div",{class:"flex items-center gap-[.1rem]"},[e("span",{class:"text-[.22rem] text-[#6FA4EF]"},"Desvincular"),e("img",{class:"rotate-180 w-[.25rem]",src:a,alt:""})])],-1),B={class:"w-full bg-[#05309F] flex flex-col px-[.2rem] rounded-[.1rem]"},V=e("div",{class:"w-full flex items-center justify-between border-b-[.01rem] border-[#3A61C2] py-[.2rem]"},[e("div",{class:"flex items-center gap-[.1rem]"},[e("img",{class:"w-[.3rem]",src:u,alt:""}),e("span",{class:"text-white text-[.22rem]"},"Senha de Login")]),e("div",{class:"flex items-center gap-[.1rem]"},[e("img",{class:"rotate-180 w-[.25rem]",src:a,alt:""})])],-1),q=e("div",{class:"w-full flex items-center justify-between border-b-[.01rem] border-[#3A61C2] py-[.2rem]"},[e("div",{class:"flex items-center gap-[.1rem]"},[e("img",{class:"w-[.3rem]",src:g,alt:""}),e("span",{class:"text-white text-[.22rem]"},"Senha de Saque")]),e("div",{class:"flex items-center gap-[.1rem]"},[e("span",{class:"text-[.22rem] text-[#6FA4EF]"},"não configurado"),e("img",{class:"rotate-180 w-[.25rem]",src:a,alt:""})])],-1),G=e("div",{class:"w-full bg-[#05309F] flex flex-col px-[.2rem] rounded-[.1rem]"},[e("div",{class:"w-full flex items-center justify-between py-[.2rem]"},[e("div",{class:"flex items-center gap-[.1rem]"},[e("img",{class:"w-[.3rem]",src:w,alt:""}),e("span",{class:"text-white text-[.22rem]"},"Vincular Login de Terceiros")]),e("div",{class:"flex items-center gap-[.1rem]"},[e("span",{class:"text-[.22rem] text-[#6FA4EF]"},"não configurado")])])],-1),O={__name:"SecurityCenter",setup(T){return(U,W)=>{const t=d("router-link");return _(),p(m,{title:"Centro de Segurança"},{default:s(()=>[e("div",h,[e("div",v,[e("div",b,[y,e("div",F,[e("span",C,i(o(l).state.userInfo.username),1)])]),e("div",A,[E,e("div",j,[e("span",P,i(o(l).state.userProfile.userData.phone?"":"No Phone"),1)])]),r(t,{to:"/securityemail"},{default:s(()=>[e("div",S,[I,e("div",N,[e("span",k,i(o(l).state.userProfile.userData.email),1),D])])]),_:1}),r(t,{to:"/googleauthenticator"},{default:s(()=>[L]),_:1})]),e("div",B,[r(t,{to:"loginpassword"},{default:s(()=>[V]),_:1}),r(t,{to:"/withdrawpassword"},{default:s(()=>[q]),_:1})]),G])]),_:1})}}};export{O as default};
