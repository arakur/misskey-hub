import{_ as d,o,c,b as r,w as i,a as e,d as a,r as s}from"./app.65b79454.js";const h={},l=e("h1",{id:"admin-ad-update",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#admin-ad-update","aria-hidden":"true"},"#"),a(),e("code",null,"admin/ad/update")],-1),p=e("p",null,"Credential required.",-1),_=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),m=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),u=e("h2",{id:"errors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#errors","aria-hidden":"true"},"#"),a(" Errors")],-1),f=e("h3",{id:"no-such-ad",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#no-such-ad","aria-hidden":"true"},"#"),a(" NO_SUCH_AD")],-1),y=e("p",null,[a("ID: "),e("code",null,"b7aa1727-1354-47bc-a182-3a9c3973d300")],-1);function g(x,b){const t=s("MkSchemaViewer"),n=s("ClientOnly");return o(),c("div",null,[l,p,_,r(n,null,{default:i(()=>[r(t,{schema:{type:"object",properties:{id:{type:"string",format:"misskey:id"},memo:{type:"string"},url:{type:"string",minLength:1},imageUrl:{type:"string",minLength:1},place:{type:"string"},priority:{type:"string"},ratio:{type:"integer"},expiresAt:{type:"integer"}},required:["id","memo","url","imageUrl","place","priority","ratio","expiresAt"]}})]),_:1}),m,r(n,null,{default:i(()=>[r(t,{schema:{}})]),_:1}),u,f,y])}var k=d(h,[["render",g],["__file","update.html.vue"]]);export{k as default};
