import{_ as O}from"./img_none_jl-D-tl6uQs.js";import{H as G,a as K,b as V,B as Q,c as U,d as A,T as X}from"./BodyCell-CUnL_sQw.js";import{_ as W,r as u,I as H,S as J,B as P,o as i,b as p,n as e,p as l,V as Z,q as r,t as m,F as N,s as ee,g as x,v as a,f as y,z as q,A as Y,J as L}from"./index-BjtivAsY.js";import{g as f}from"./bettingRecords-Brn26M9u.js";/* empty css                                                                */import te from"./InterestRules-D-NqPJli.js";import"./tw-elements.es.min-Cf1_GnpJ.js";/* empty css                                                     */const z=o=>(q("data-v-db120e79"),o=o(),Y(),o),se={class:"flex justify-between p-[.2rem]"},ae={class:"flex w-auto max-w-[3.15rem] min-w-[1.6rem] gap-[.2rem]"},oe=z(()=>e("div",{class:"flex gap-[.1rem] items-center justify-center"},[e("span",{class:"text-[.22rem] text-[#6FA4EF]"},"Renda Acumulada"),e("span",{class:"text-[.22rem] text-[#FFAA09] text-center"},"0,00")],-1)),le={class:"flex flex-col h-[calc(100vh-6.58rem)] p-[.2rem] pt-0 overflow-auto"},re={key:0,class:"flex flex-col items-center h-[calc(100vh-2.8rem)] overflow-auto w-full"},ne=z(()=>e("div",{class:"flex jay flex-col h-full justify-center items-center"},[e("img",{class:"w-[2.5rem]",src:O,alt:""}),e("span",{class:"text-[#6FA4EF] text-[.25rem]"},"Sem Registros")],-1)),ce=[ne],de={__name:"juros",setup(o){const c=u([]),_=u([{name:"Today"},{name:"Yesterday"},{name:"This Week"},{name:"Last Week"},{name:"This Month"},{name:"Last Month"}]),v=s=>{console.log(s),c.value=s,u({Today:()=>t.mutate(f.value.today),Yesterday:()=>t.mutate(f.value.yesterday),"This Week":()=>t.mutate(f.value.thisWeek),"Last Week":()=>t.mutate(f.value.lastWeek),"This Month":()=>t.mutate(f.value.thisMonth),"Last Month":()=>t.mutate(f.value.lastMonth)}).value[c.value]()},d=u([]),t=H({mutationFn:s=>J("api/userCenter/userCenterBill/eChartData.do",s),onSuccess:s=>{d.value=s},onError:s=>{console.log(`this error: ${s}`)}});return P(()=>{t.mutate({startTime:"2024-06-01 00:00:00",endTime:"2024-06-10 23:59:59"})}),(s,n)=>(i(),p(N,null,[e("div",se,[e("div",ae,[l(Z,{pass:_.value,title:"Today",onSelectedItem:v},null,8,["pass"])]),oe]),e("div",le,[l(X,null,{default:r(()=>[l(G,null,{default:r(()=>[l(K,null,{default:r(()=>[l(V,null,{default:r(()=>[m("Time")]),_:1}),l(V,null,{default:r(()=>[m("Interest Rate")]),_:1})]),_:1})]),_:1}),l(Q,null,{default:r(()=>[(i(!0),p(N,null,ee(d.value.scale,(g,h)=>(i(),x(U,{key:h},{default:r(()=>[l(A,null,{default:r(()=>[m(a(d.value.statDate[h].value),1)]),_:2},1024),l(A,null,{default:r(()=>[m(a(g.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),d.value.scale==""||d.value.statDate==""?(i(),p("div",re,ce)):y("",!0)])],64))}},ue=W(de,[["__scopeId","data-v-db120e79"]]),b=o=>(q("data-v-d323bbf5"),o=o(),Y(),o),ie={class:"mainDiv w-screen h-[100vh-.9rem]"},me={class:"bg-[#05309F] w-full h-auto p-[.2rem]"},_e={class:"flex justify-between leading-none"},fe={class:"flex flex-col gap-[.2rem]"},he=b(()=>e("span",{class:"text-[#fff] text-[.18rem]"},"Yesterday's earnings (VND)",-1)),pe={class:"text-[#ffaa09] text-[.18rem]"},ve={class:"text-[#fff] text-[.18rem]"},xe={class:"text-[#ef7a7b] text-[.2rem]"},ye=b(()=>e("span",{class:"text-[#fff] text-[.18rem]"},"Earnings from the day before yesterday (VND)",-1)),be={class:"text-[#ffaa09] text-[.18rem]"},ge={class:"text-[#fff] text-[.18rem]"},Fe={class:"text-[#ef7a7b] text-[.2rem]"},we={class:"flex flex-col gap-[.2rem]"},Be=b(()=>e("span",{class:"text-[#fff] text-[.18rem]"},"Today's estimated earnings (VND)",-1)),Ce={class:"text-[#ffaa09] text-[.18rem]"},Re={class:"text-[#fff] text-[.18rem]"},Te={class:"text-[#ef7a7b] text-[.2rem]"},ke={class:"flex gap-[0.3rem] p-[.2rem] pb-0 w-full bg-[#05309F] whitespace-nowrap overflow-x-auto border-b-[.01rem] border-[#3A61C2]"},Se={__name:"JurosMainPage",setup(o){const c=u(!0),_=u(!1),v=()=>{c.value=!0,_.value=!1},d=()=>{_.value=!0,c.value=!1},t=u([]),s=H({mutationFn:n=>J("api/userCenter/userCenterBill/index.do"),onSuccess:n=>{t.value=n},onError:n=>{console.log(`this error: ${n}`)}});return P(()=>{s.mutate()}),(n,g)=>{var h,F,w,B,C,R,T,k,S,D,$,j,E,I,M;return i(),p("div",ie,[e("div",me,[e("div",_e,[e("div",fe,[he,e("span",pe,a(((h=t.value)==null?void 0:h.yesterdayRecord)!=""?(w=(F=t.value)==null?void 0:F.yesterdayRecord)==null?void 0:w.income:"0"),1),e("span",ve,[m("Earnings Rate "),e("span",xe,a(((B=t.value)==null?void 0:B.yesterdayRecord)!=""?(R=(C=t.value)==null?void 0:C.yesterdayRecord)==null?void 0:R.scale:"0")+"‱ ",1)]),ye,e("span",be,a(((T=t.value)==null?void 0:T.qiantianRecord)!=""?(S=(k=t.value)==null?void 0:k.yesterdayRecord)==null?void 0:S.income:"0"),1),e("span",ge,[m("Earnings Rate "),e("span",Fe,a(((D=t.value)==null?void 0:D.qiantianRecord)!=""?($=n.yesterdayRecord)==null?void 0:$.scale:"0")+"‱",1)])]),e("div",we,[Be,e("span",Ce,a((j=t.value)==null?void 0:j.incomeStr)+"~"+a((E=t.value)==null?void 0:E.incomeEnd),1),e("span",Re,[m("Interest rate range "),e("span",Te,a((I=t.value)==null?void 0:I.scaleStr)+"‱~"+a((M=t.value)==null?void 0:M.scaleEnd)+"‱",1)])])])]),e("div",ke,[e("div",{class:L(c.value&&"border-b-[.02rem] border-[#FFF0BB] h-[.6rem]")},[e("span",{onClick:v,class:"text-[#FFF0BB] text-[0.22rem]"},"Detalhes do registro")],2),e("div",{class:L(_.value&&"border-b-[.02rem] border-[#FFF0BB] h-[.6rem]")},[e("span",{onClick:d,class:"text-[#FFF0BB] text-[0.22rem]"},"Regras de juros")],2)]),c.value?(i(),x(ue,{key:0})):y("",!0),_.value?(i(),x(te,{key:1})):y("",!0)])}}},Ne=W(Se,[["__scopeId","data-v-d323bbf5"]]);export{Ne as default};
