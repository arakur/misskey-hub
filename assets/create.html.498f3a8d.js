import{_ as c,o as i,c as d,b as a,w as n,a as e,d as r,r as o}from"./app.65b79454.js";const l={},h=e("h1",{id:"admin-accounts-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-accounts-create","aria-hidden":"true"},"#"),r(),e("code",null,"admin/accounts/create")],-1),p=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),m=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function u(f,b){const t=o("MkSchemaViewer"),s=o("ClientOnly");return i(),d("div",null,[h,p,a(s,null,{default:n(()=>[a(t,{schema:{type:"object",properties:{username:{type:"string",pattern:"^\\w{1,20}$"},password:{type:"string",minLength:1}},required:["username","password"]}})]),_:1}),_,a(s,null,{default:n(()=>[a(t,{schema:{type:"object",optional:!1,nullable:!1,ref:"User",properties:{token:{type:"string",optional:!1,nullable:!1}},required:["token"],$ref:"misskey://User"}})]),_:1}),m])}var y=c(l,[["render",u],["__file","create.html.vue"]]);export{y as default};
