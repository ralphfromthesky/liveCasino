import{r as o,a as H,I as ce,E as de,o as a,b as c,n as e,v as l,d as i,t as X,g as F,q as Y,f as m,J as y,F as ue,s as me,K as pe,L as ve,p as ee,M as _e,i as fe,j as Z,N as he,G as be}from"./index-BjtivAsY.js";import we from"./WithdrawalRecord-C0PxGBj4.js";import{_ as xe,a as ge,b as Ce,c as Fe,d as ye,W as ke}from"./WithdrawalAccount-D1uWs1FD.js";import{_ as Ae}from"./shuaxin-B8JK-r-f.js";import{_ as te}from"./return-add9t9QT.js";import{u as Ne}from"./withdrawBankAccounts-l5UXps47.js";/* empty css                                                                       */import{e as D}from"./vue3-otp-input.esm-B_dcmQyL.js";import"./img_none_jl-D-tl6uQs.js";import"./tw-elements.es.min-Cf1_GnpJ.js";const Oe="/mobileCasino/images/bank_card.png",Se={class:"bg-[#1a45b1]"},Ve={class:"flex flex-col"},qe={class:"flex p-[.2rem] bg-[</div>] border-b border-b-[#3A61C2]"},Be={class:"flex w-full items-center"},Pe={class:"flex flex-col w-full"},Ie={class:"flex items-center gap-[.1rem]"},Me=e("span",{class:"text-white text-[.25rem]"},"Saldo da Conta",-1),$e={class:"text-[#FFAA09] text-[.25rem]"},je=e("img",{class:"w-[.3rem]",src:Ae,alt:""},null,-1),Te={class:"flex"},Re={class:"text-[#6FA4EF] text-[.22rem]"},Ue={class:"flex"},We={class:"bg-[#FFF0BB] h-[.5rem] w-[1.2rem] border border-[#FFF0BB] rounded-[.1rem] text-[#05309F] relative"},Ee={class:"h-[.32rem] w-fit left-[40%] right-0 -top-[.23rem] absolute z-10"},Ge={class:"bg-[#FF4A4A] rounded-[.126rem] rounded-bl-none text-white p-[.07rem] pt-0 h-[.26rem] w-full leading-[.26rem] text-[.16rem]"},Le=e("p",{class:"border-b-[.07rem] border-b-transparent border-l-[.07rem] border-l-[#FF4A4A] border-r-[.07rem] border-r-transparent"},null,-1),Ke=_e('<div class="flex p-[.2rem] bg-[#1a45b1] border-b border-b-[#3A61C2]"><div class="w-full"><div class="border border-[#FFF0BB] rounded-[.1rem] p-[.2rem] relative overflow-hidden"><div class="flex items-center justify-center w-full"><span class="text-white text-[.2rem]">Retirada normal</span></div><div class="flex items-center bg-[#FFF0BB] w-[.5rem] h-[.5rem] absolute -right-[.25rem] -bottom-[.25rem] rotate-[45deg]"><img src="'+Fe+'" class="-rotate-[45deg] w-[.2rem]" alt=""></div></div></div></div>',1),ze={class:"flex flex-col w-full p-[.2rem] gap-[.5rem]"},Je=e("div",{class:"flex items-center justify-between w-full h-[.7rem] p-[.2rem] border border-[#3A61C2] bg-[#05309F] rounded-[.15rem]"},[e("div",{class:"flex items-center gap-[.2rem]"},[e("img",{class:"w-[.4rem]",src:Oe,alt:""}),e("span",{class:"text-[#6FA4EF] text-[.23rem]"},"Adicionar Conta")]),e("div",{class:"flex items-center"},[e("img",{class:"rotate-180 w-[.3rem]",src:te,alt:""})])],-1),Qe={key:1,class:"w-full border-[.01rem] border-[#3A61C2] bg-[#05309F] flex items-center gap-[.2rem] rounded-[.1rem]"},He={class:"w-full relative"},Xe={class:"flex items-center gap-[.2rem]"},Ye=e("img",{src:ye,alt:"",class:"w-[.3rem]"},null,-1),Ze={class:"text-[#A0C5FB] text-[.22rem]"},De=["onClick"],et={class:"flex items-center justify-between w-full h-[.7rem] p-[.2rem] border border-[#3A61C2] bg-[#05309F] rounded-[.15rem]"},tt={class:"flex items-center gap-[.2rem] w-full"},st={class:"text-white text-[.23rem]"},ot=["placeholder"],nt=e("div",{class:"bg-[#3A61C2] w-full p-[.005rem] mt-[.5rem]"},null,-1),lt={class:"flex flex-col gap-[.1rem]"},at={class:"flex justify-between"},rt=e("span",{class:"text-[.22rem] text-white"},"Senha de Saque",-1),it={__name:"WithdrawalPage",setup(se){var O,S,V;const{bankAccount:b}=Ne(),p=fe(),w=p.state.userConfig.content,r=o(""),k=t=>{r.value=t},v=o(!1);function oe(){v.value=!v.value}const d=o(!1);function A(){d.value=!d.value}const ne=o(""),x=o(""),_=o(""),g=o(""),f=o("");o(!1);const C=o(""),h=(V=(S=(O=p==null?void 0:p.state)==null?void 0:O.withdrawConfig)==null?void 0:S.content)==null?void 0:V.configData,u=o([]);H({queryKey:["getUserBanks"],queryFn:async()=>await Z("/api/native/v2/userBanks.do"),staleTime:1e3,select:t=>{u.value=t,x.value=t.content[0].bankName,_.value=t.content[0].id,g.value=t.content[0].cardNo}});const N=o([]);H({queryKey:["getUserRate"],queryFn:async()=>await Z("/api/native/v2/userBillIndex.do"),staleTime:1e3,select:t=>{N.value=t}});const le=ce({mutationFn:t=>he("api/native/v2/withdrawForWap.do",t),onSuccess:t=>{t.success===!0?(f.value="",r.value="",document.querySelector(".AlertBox").click(),C.value="Operation Successful!"):t.success===!1&&(document.querySelector(".AlertBox").click(),C.value=t.msg)}});function ae(){le.mutate({bankId:_.value,money:f.value,repPwd:r.value})}function re(t){v.value=!1,x.value=t.bankName,ne.value=t.bankCode,_.value=t.id,g.value=t.cardNo}return(t,n)=>{var q,B,P,I,M,$,j,T,R,U,W,E,G,L,K,z,J,Q;const ie=de("router-link");return a(),c("div",Se,[e("div",Ve,[e("div",qe,[e("div",Be,[e("div",Pe,[e("div",Ie,[Me,e("span",$e,l((q=i(h))==null?void 0:q.accountBalance),1),je]),e("div",Te,[e("span",Re,"The amount of betting for the withdrawal is "+l((B=i(w))==null?void 0:B.money_unit)+l((I=(P=i(h))==null?void 0:P.betNum)==null?void 0:I.drawNeed),1)])]),e("div",Ue,[e("button",We,[X(" Juros "),e("div",Ee,[e("p",Ge,l(($=(M=N.value)==null?void 0:M.sevendayRate)==null?void 0:$.toFixed(2))+"% ",1),Le])])])])]),Ke,e("div",ze,[((T=(j=u.value)==null?void 0:j.content)==null?void 0:T.length)===0?(a(),F(ie,{key:0,onClick:n[0]||(n[0]=s=>i(b).refetch()),to:"/manageaccount"},{default:Y(()=>[Je]),_:1})):m("",!0),((U=(R=u.value)==null?void 0:R.content)==null?void 0:U.length)>0?(a(),c("div",Qe,[e("div",He,[e("div",{onClick:oe,class:"flex items-center justify-between w-full p-[.2rem]"},[e("div",Xe,[Ye,e("span",Ze,l(x.value)+" ("+l(g.value)+")",1)]),e("img",{src:te,alt:"",class:y(v.value?"w-[.25rem] rotate-90 transition-all":"w-[.25rem] -rotate-90 transition-all")},null,2)]),e("div",{class:y(v.value?"transition-all overflow-auto flex flex-col w-full py-[.2rem] h-auto max-h-[7rem] border-[.01rem] border-[#3A61C2] bg-[#05309F] left-0 rounded-[.1rem] absolute mt-[.2rem]":"hidden transition-all")},[(a(!0),c(ue,null,me((W=u.value)==null?void 0:W.content,(s,ct)=>(a(),c("span",{onClick:dt=>re(s),class:y((s==null?void 0:s.id)===_.value?"text-white font-bold p-[.2rem] bg-[#505050]":"text-white p-[.2rem]")},l(s==null?void 0:s.bankName)+" ("+l(s==null?void 0:s.cardNo)+")",11,De))),256))],2)])])):m("",!0),e("div",et,[e("div",tt,[e("span",st,l((E=i(w))==null?void 0:E.money_unit),1),pe(e("input",{"onUpdate:modelValue":n[1]||(n[1]=s=>f.value=s),class:"h-[.5rem] text-white text-[.23rem] bg-transparent outline-none w-full",placeholder:"Minimum amount "+((G=i(h))==null?void 0:G.minPickMoney)+", Maximum amount "+((L=i(h))==null?void 0:L.maxPickMoney),type:"text"},null,8,ot),[[ve,f.value]])])]),nt,e("div",lt,[e("div",at,[rt,d.value?(a(),c("img",{key:0,onClick:A,src:xe,class:"w-[.4rem]"})):m("",!0),d.value?m("",!0):(a(),c("img",{key:1,onClick:A,src:ge,class:"w-[.4rem]"}))]),d.value?(a(),F(i(D),{key:0,tabindex:"1",ref:"otpInput","input-classes":"otpInputs disabled:cursor-no-drop caret-transparent",conditionalClass:["one","two","three","four","five","six"],separator:"",inputmode:"numeric","input-type":"letter-numeric","num-inputs":6,value:r.value,"onUpdate:value":n[2]||(n[2]=s=>r.value=s),"should-auto-focus":!1,"should-focus-order":!0,onOnChange:k,"is-disabled":!((z=(K=u.value)==null?void 0:K.content)!=null&&z.length)>0,onOnComplete:t.handleOnComplete},null,8,["value","is-disabled","onOnComplete"])):m("",!0),d.value?m("",!0):(a(),F(i(D),{key:1,tabindex:"1",ref:"otpInput","input-classes":"otpInputs disabled:cursor-no-drop  !text-[.8rem] caret-transparent",conditionalClass:["one","two","three","four","five","six"],separator:"",inputmode:"numeric","input-type":"password","num-inputs":6,value:r.value,"onUpdate:value":n[3]||(n[3]=s=>r.value=s),"should-auto-focus":!1,"should-focus-order":!0,onOnChange:k,"is-disabled":!((Q=(J=u.value)==null?void 0:J.content)!=null&&Q.length)>0,onOnComplete:t.handleOnComplete},null,8,["value","is-disabled","onOnComplete"]))]),e("button",{onClick:n[4]||(n[4]=s=>ae()),class:"w-full h-[.7rem] bg-[#FFF0BB] text-[#05309F] rounded-[.1rem] text-[.2rem]"}," Confirmar ")])]),ee(Ce,null,{default:Y(()=>[X(l(C.value),1)]),_:1})])}}},gt={__name:"NewWithdrawalPage",setup(se){const b=o([{title:"Saque"},{title:"Registro de Saques"},{title:"Gerenciar Conta"}]);return(p,w)=>{const r=be;return a(),c("div",null,[ee(r,{titleLinks:b.value,"component-pass":[it,we,ke]},null,8,["titleLinks","component-pass"])])}}};export{gt as default};
