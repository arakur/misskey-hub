import{_ as i,o as l,c as o,b as r,w as s,a as e,d as a,r as d}from"./app.65b79454.js";const c={},h=e("h1",{id:"admin-relays-add",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-relays-add","aria-hidden":"true"},"#"),a(),e("code",null,"admin/relays/add")],-1),u=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),f=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),m=e("h3",{id:"invalid-url",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#invalid-url","aria-hidden":"true"},"#"),a(" INVALID_URL")],-1),b=e("p",null,[a("ID: "),e("code",null,"fb8c92d3-d4e5-44e7-b3d4-800d5cef8b2c")],-1);function x(y,g){const t=d("MkSchemaViewer"),n=d("ClientOnly");return l(),o("div",null,[h,u,_,r(n,null,{default:s(()=>[r(t,{schema:{type:"object",properties:{inbox:{type:"string"}},required:["inbox"]}})]),_:1}),p,r(n,null,{default:s(()=>[r(t,{schema:{type:"object",optional:!1,nullable:!1,properties:{id:{type:"string",optional:!1,nullable:!1,format:"id"},inbox:{type:"string",optional:!1,nullable:!1,format:"url"},status:{type:"string",optional:!1,nullable:!1,default:"requesting",enum:["requesting","accepted","rejected"]}},required:["id","inbox","status"]}})]),_:1}),f,m,b])}var V=i(c,[["render",x],["__file","add.html.vue"]]);export{V as default};
