import{_ as i,o as l,c as d,b as t,w as r,a as e,d as a,r as o}from"./app.65b79454.js";const c={},m=e("h1",{id:"notes-mentions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#notes-mentions","aria-hidden":"true"},"#"),a(),e("code",null,"notes/mentions")],-1),h=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),f=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),p=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function u(y,b){const s=o("MkSchemaViewer"),n=o("ClientOnly");return l(),d("div",null,[m,h,_,t(n,null,{default:r(()=>[t(s,{schema:{type:"object",properties:{following:{type:"boolean",default:!1},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},visibility:{type:"string"}},required:[]}})]),_:1}),f,t(n,null,{default:r(()=>[t(s,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),p])}var k=i(c,[["render",u],["__file","mentions.html.vue"]]);export{k as default};
