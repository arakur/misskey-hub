import{_ as c,o as d,c as i,b as a,w as n,a as e,d as s,e as h,r as o}from"./app.65b79454.js";const l={},p=e("h1",{id:"auth-session-userkey",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#auth-session-userkey","aria-hidden":"true"},"#"),s(),e("code",null,"auth/session/userkey")],-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),s(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),s(" Response")],-1),f=h('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-app" tabindex="-1"><a class="header-anchor" href="#no-such-app" aria-hidden="true">#</a> NO_SUCH_APP</h3><p>ID: <code>fcab192a-2c5a-43b7-8ad8-9b7054d8d40d</code></p><h3 id="no-such-session" tabindex="-1"><a class="header-anchor" href="#no-such-session" aria-hidden="true">#</a> NO_SUCH_SESSION</h3><p>ID: <code>5b5a1503-8bc8-4bd0-8054-dc189e8cdcb3</code></p><h3 id="pending-session" tabindex="-1"><a class="header-anchor" href="#pending-session" aria-hidden="true">#</a> PENDING_SESSION</h3><p>ID: <code>8c8a4145-02cc-4cca-8e66-29ba60445a8e</code></p>',7);function b(m,k){const r=o("MkSchemaViewer"),t=o("ClientOnly");return d(),i("div",null,[p,u,a(t,null,{default:n(()=>[a(r,{schema:{type:"object",properties:{appSecret:{type:"string"},token:{type:"string"}},required:["appSecret","token"]}})]),_:1}),_,a(t,null,{default:n(()=>[a(r,{schema:{type:"object",optional:!1,nullable:!1,properties:{accessToken:{type:"string",optional:!1,nullable:!1},user:{type:"object",optional:!1,nullable:!1,ref:"UserDetailedNotMe",$ref:"misskey://UserDetailedNotMe"}},required:["accessToken","user"]}})]),_:1}),f])}var S=c(l,[["render",b],["__file","userkey.html.vue"]]);export{S as default};
