import{_ as d,o as i,c as l,b as r,w as n,a as e,d as a,r as o}from"./app.65b79454.js";const c={},h=e("h1",{id:"admin-reset-password",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-reset-password","aria-hidden":"true"},"#"),a(),e("code",null,"admin/reset-password")],-1),p=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function f(w,x){const s=o("MkSchemaViewer"),t=o("ClientOnly");return i(),l("div",null,[h,p,_,r(t,null,{default:n(()=>[r(s,{schema:{type:"object",properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]}})]),_:1}),m,r(t,null,{default:n(()=>[r(s,{schema:{type:"object",optional:!1,nullable:!1,properties:{password:{type:"string",optional:!1,nullable:!1,minLength:8,maxLength:8}},required:["password"]}})]),_:1}),u])}var y=d(c,[["render",f],["__file","reset-password.html.vue"]]);export{y as default};
