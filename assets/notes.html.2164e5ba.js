import{_ as o,o as d,c,b as a,w as n,a as e,d as t,r as i}from"./app.65b79454.js";const l={},h=e("h1",{id:"clips-notes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clips-notes","aria-hidden":"true"},"#"),t(),e("code",null,"clips/notes")],-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),p=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),t(" Errors")],-1),f=e("h3",{id:"no-such-clip",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-clip","aria-hidden":"true"},"#"),t(" NO_SUCH_CLIP")],-1),u=e("p",null,[t("ID: "),e("code",null,"1d7645e6-2b6d-4635-b0fe-fe22b0e72e00")],-1);function y(b,x){const s=i("MkSchemaViewer"),r=i("ClientOnly");return d(),c("div",null,[h,_,a(r,null,{default:n(()=>[a(s,{schema:{type:"object",properties:{clipId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"}},required:["clipId"]}})]),_:1}),m,a(r,null,{default:n(()=>[a(s,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Note",$ref:"misskey://Note"}}})]),_:1}),p,f,u])}var C=o(l,[["render",y],["__file","notes.html.vue"]]);export{C as default};
