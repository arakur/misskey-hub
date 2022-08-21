import{_ as l,o,c as d,b as r,w as i,a as e,d as a,r as n}from"./app.65b79454.js";const c={},h=e("h1",{id:"drive-files",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#drive-files","aria-hidden":"true"},"#"),a(),e("code",null,"drive/files")],-1),m=e("p",null,"Credential required.",-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),u=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),_=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1);function p(y,b){const t=n("MkSchemaViewer"),s=n("ClientOnly");return o(),d("div",null,[h,m,f,r(s,null,{default:i(()=>[r(t,{schema:{type:"object",properties:{limit:{type:"integer",minimum:1,maximum:100,default:10},sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},folderId:{type:"string",format:"misskey:id",nullable:!0,default:null},type:{type:"string",nullable:!0,pattern:"^[a-zA-Z\\/\\-*]+$"}},required:[]}})]),_:1}),u,r(s,null,{default:i(()=>[r(t,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"DriveFile",$ref:"misskey://DriveFile"}}})]),_:1}),_])}var v=l(c,[["render",p],["__file","files.html.vue"]]);export{v as default};
