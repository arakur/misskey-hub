import{_ as o,o as d,c,b as t,w as n,a as e,d as r,r as i}from"./app.65b79454.js";const p={},u=e("h1",{id:"charts-federation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#charts-federation","aria-hidden":"true"},"#"),r(),e("code",null,"charts/federation")],-1),l=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),h=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),r(" Errors")],-1);function y(b,_){const a=i("MkSchemaViewer"),s=i("ClientOnly");return d(),c("div",null,[u,l,t(s,null,{default:n(()=>[t(a,{schema:{type:"object",properties:{span:{type:"string",enum:["day","hour"]},limit:{type:"integer",minimum:1,maximum:500,default:30},offset:{type:"integer",nullable:!0,default:null}},required:["span"]}})]),_:1}),m,t(s,null,{default:n(()=>[t(a,{schema:{type:"object",properties:{deliveredInstances:{type:"array",items:{type:"number"}},inboxInstances:{type:"array",items:{type:"number"}},stalled:{type:"array",items:{type:"number"}},sub:{type:"array",items:{type:"number"}},pub:{type:"array",items:{type:"number"}},pubsub:{type:"array",items:{type:"number"}},subActive:{type:"array",items:{type:"number"}},pubActive:{type:"array",items:{type:"number"}}},required:["deliveredInstances","inboxInstances","stalled","sub","pub","pubsub","subActive","pubActive"]}})]),_:1}),h])}var x=o(p,[["render",y],["__file","federation.html.vue"]]);export{x as default};
