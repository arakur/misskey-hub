import{_ as i,o as l,c,b as r,w as n,a as e,d as a,r as o}from"./app.65b79454.js";const d={},h=e("h1",{id:"users-search",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-search","aria-hidden":"true"},"#"),a(),e("code",null,"users/search")],-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function f(p,y){const t=o("MkSchemaViewer"),s=o("ClientOnly");return l(),c("div",null,[h,u,r(s,null,{default:n(()=>[r(t,{schema:{type:"object",properties:{query:{type:"string"},offset:{type:"integer",default:0},limit:{type:"integer",minimum:1,maximum:100,default:10},origin:{type:"string",enum:["local","remote","combined"],default:"combined"},detail:{type:"boolean",default:!0}},required:["query"]}})]),_:1}),m,r(s,null,{default:n(()=>[r(t,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"User",$ref:"misskey://User"}}})]),_:1}),_])}var x=i(d,[["render",f],["__file","search.html.vue"]]);export{x as default};
