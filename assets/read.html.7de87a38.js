import{_ as s,o as d,c,b as t,w as n,a as e,d as a,r as o}from"./app.65b79454.js";const h={},l=e("h1",{id:"notifications-read",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notifications-read","aria-hidden":"true"},"#"),a(),e("code",null,"notifications/read")],-1),_=e("p",null,"Credential required.",-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),p=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),u=e("h3",{id:"no-such-notification",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-notification","aria-hidden":"true"},"#"),a(" NO_SUCH_NOTIFICATION")],-1),b=e("p",null,[a("ID: "),e("code",null,"efa929d5-05b5-47d1-beec-e6a4dbed011e")],-1);function x(y,I){const r=o("MkSchemaViewer"),i=o("ClientOnly");return d(),c("div",null,[l,_,f,t(i,null,{default:n(()=>[t(r,{schema:{oneOf:[{type:"object",properties:{notificationId:{type:"string",format:"misskey:id"}},required:["notificationId"]},{type:"object",properties:{notificationIds:{type:"array",items:{type:"string",format:"misskey:id"},maxItems:100}},required:["notificationIds"]}]}})]),_:1}),m,t(i,null,{default:n(()=>[t(r,{schema:{}})]),_:1}),p,u,b])}var k=s(h,[["render",x],["__file","read.html.vue"]]);export{k as default};
