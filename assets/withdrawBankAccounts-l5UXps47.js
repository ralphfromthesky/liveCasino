import{a as s,j as t,i as a}from"./index-BjtivAsY.js";const o=a(),c=()=>({bankAccount:s({queryKey:["getbankAccounts"],staleTime:1e3,enabled:!1,queryFn:async()=>await t("/api/native/v2/userBanks.do"),select:e=>{o.commit("setWithdrawBank",e)},onError:e=>{console.log(`error: ${e}`)}})});export{c as u};
