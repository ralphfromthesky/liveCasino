import{_ as m}from"./return-add9t9QT.js";import{_ as u}from"./shuaxin-B8JK-r-f.js";import{u as _}from"./withdrawBankAccounts-l5UXps47.js";import{_ as p,B as w,a as x,E as h,o as d,b as g,n as e,p as c,q as a,e as v,j as b,z as k,A as y,i as C,g as A}from"./index-BjtivAsY.js";/* empty css                                                                       */const n=o=>(k("data-v-77ef59f5"),o=o(),y(),o),F={class:"flex items-center custom1 h-[.9rem] w-full bg-[#05309F] border-b border-b-[#3A61C2]"},S={class:"flex items-center relative w-screen p-[.2rem]"},j={class:"flex items-center bg-[#05309F] w-full"},$=n(()=>e("img",{src:m,class:"w-[.4rem]",alt:""},null,-1)),B=[$],q={class:"flex gap-[.7rem] items-center overflow-x-auto text-white"},I=n(()=>e("div",{class:"flex link-content items-center justify-center w-full text-nowrap h-[.9rem]"},[e("span",{class:"text-[.27rem] text-nowrap"},"Saque")],-1)),E=n(()=>e("div",{class:"flex link-content items-center justify-center w-full text-nowrap h-[.9rem]"},[e("span",{class:"text-[.27rem] text-nowrap"},"Registro de Saques")],-1)),W=n(()=>e("div",{class:"flex link-content items-center justify-center w-full text-nowrap h-[.9rem]"},[e("span",{class:"text-[.27rem] text-nowrap"},"Gerenciar Conta")],-1)),R={class:"flex bg-[#1a45b1]"},G={class:"bg-[#1a45b1] h-[calc(100vh-.9rem)] custom2 w-screen overflow-auto"},T={__name:"WithdrawLayout",setup(o){const{bankAccount:l}=_(),i=C();w(()=>{x({queryKey:["getWithdrawConfigs"],staleTime:1e3,enabled:!0,queryFn:async()=>await b("/api/native/v2/withdrawConfig.do"),select:t=>{var r,s;i.commit("setWithdrawConfig",t),((s=(r=t==null?void 0:t.content)==null?void 0:r.bankInfo)==null?void 0:s.receiptPwd)===null&&(window.location.href="/withdrawpassword")},onError:t=>{console.log(`error: ${t}`)}})});function f(){l.refetch()}return(t,r)=>{const s=h("router-link");return d(),g("main",null,[e("div",F,[e("div",S,[e("div",j,[e("div",{class:"mr-[.2rem]",onClick:r[0]||(r[0]=K=>this.$router.go(-1))},B),e("div",q,[c(s,{to:"/withdraw"},{default:a(()=>[I]),_:1}),c(s,{to:"/withdrawrecord"},{default:a(()=>[E]),_:1}),c(s,{to:"/manageaccount",onClick:f},{default:a(()=>[W]),_:1})])])])]),e("div",R,[e("section",G,[v(t.$slots,"default",{},void 0,!0)])])])}}},L=p(T,[["__scopeId","data-v-77ef59f5"]]),N="/mobileCasino/withdrawImages/kf.png",V="/mobileCasino/images/noRecord.png",z=e("div",{class:"flex flex-col w-full p-[.2rem] gap-[.2rem]"},[e("div",{class:"flex w-full justify-between items-center"},[e("div",{class:"flex w-full items-center gap-[.2rem]"},[e("div",{class:"flex bg-[#05309F] w-[1.5rem] border border-[#3A61C2] rounded-full px-[.2rem] h-[.5rem] items-center justify-between"},[e("span",{class:"text-[#A0C5FB] text-[.2rem]"},"Tudos"),e("img",{src:m,alt:"",class:"-rotate-90 w-[.2rem]"})]),e("img",{class:"w-[.4rem]",src:N,alt:""})]),e("div",{class:"flex w-full justify-end gap-[.1rem] items-center"},[e("span",{class:"text-[#6FA4EF] text-[.22rem]"},"Total de Saques"),e("span",{class:"text-white text-[.22rem]"},"R$ 0,00"),e("img",{class:"w-[.3rem]",src:u,alt:""})])]),e("div",{class:"flex flex-col h-[calc(100vh-2rem)] overflow-auto"},[e("div",{class:"flex flex-col items-center h-full justify-center"},[e("img",{class:"w-[2.5rem]",src:V,alt:""}),e("span",{class:"text-[#6FA4EF] text-[.25rem]"},"Sem Registros")])])],-1),J={__name:"WithdrawalAudit",setup(o){return(l,i)=>(d(),A(L,null,{default:a(()=>[z]),_:1}))}};export{J as default};
