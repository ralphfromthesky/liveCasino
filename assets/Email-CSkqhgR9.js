import{Y as d,a5 as u,aq as p,o as l,g as i,q as f,n as e,K as _,L as g,d as t,a6 as x,a0 as b,f as h}from"./index-CpePGZp8.js";import{P as w}from"./PageLayout-BcbkgnHp.js";import"./return-Ce85TX8M.js";/* empty css                                                                   */const F="/liveCasino/profileImages/bluemail.icon.png",v={class:"flex flex-col gap-[.5rem] w-full p-[.2rem]"},B=e("div",{class:""},[e("span",{class:"text-white text-[.24rem]"},"Vincular o e-mail")],-1),y={class:"w-full border-[.01rem] border-[#3A61C2] bg-[#05309F] flex items-center gap-[.2rem] rounded-[.1rem] p-[.2rem]"},C=e("img",{src:F,alt:"",class:"w-[.25rem]"},null,-1),k=["placeholder"],P={class:"w-[7.3rem] bg-[#05309F] bottom-0 fixed"},S={class:"flex p-[.2rem] items-center justify-center w-full"},q={__name:"Email",setup(V){const{useSecurity:n}=d(),{mutateProfile:o,obj:a,updated:m,msgInfo:c}=u();return p(()=>{o.isSuccess&&n.refetch()}),(A,s)=>(l(),i(w,{title:"Endereço de e-mail"},{default:f(()=>[e("div",v,[B,e("div",y,[C,_(e("input",{class:"text-[#A0C5FB] text-[.2rem] bg-transparent outline-none w-full",placeholder:t(x).state.userProfile.userData.email,type:"text","onUpdate:modelValue":s[0]||(s[0]=r=>t(a).email=r)},null,8,k),[[g,t(a).email]])]),t(m)?(l(),i(b,{key:0,updateMessage:t(c),class:"absolute top-[5rem] right-[.5rem]"},null,8,["updateMessage"])):h("",!0)]),e("div",P,[e("div",S,[e("button",{className:"rounded-[.1rem] h-[.7rem] w-full text-[.24rem] text-center text-[#05309F] border-[#FFF0BB] border bg-[#FFF0BB]",onClick:s[1]||(s[1]=r=>t(o).mutate(t(a).email))}," Seguintes ")])])]),_:1}))}};export{q as default};
