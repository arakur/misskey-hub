import{_ as i,o as d,c as l,b as a,w as o,a as e,d as r,e as c,r as n}from"./app.65b79454.js";const h={},u=e("h1",{id:"users-following",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-following","aria-hidden":"true"},"#"),r(),e("code",null,"users/following")],-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),r(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),r(" Response")],-1),m=c('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-user" tabindex="-1"><a class="header-anchor" href="#no-such-user" aria-hidden="true">#</a> NO_SUCH_USER</h3><p>ID: <code>63e4aba4-4156-4e53-be25-c9559e42d71b</code></p><h3 id="forbidden" tabindex="-1"><a class="header-anchor" href="#forbidden" aria-hidden="true">#</a> FORBIDDEN</h3><p>ID: <code>f6cdb0df-c19f-ec5c-7dbb-0ba84a1f92ba</code></p>',5);function _(b,y){const s=n("MkSchemaViewer"),t=n("ClientOnly");return d(),l("div",null,[u,f,a(t,null,{default:o(()=>[a(s,{schema:{type:"object",properties:{sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10}},anyOf:[{properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]},{properties:{username:{type:"string"},host:{type:"string",nullable:!0,description:"The local host is represented with `null`."}},required:["username","host"]}]}},null,8,["schema"])]),_:1}),p,a(t,null,{default:o(()=>[a(s,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Following",$ref:"misskey://Following"}}})]),_:1}),m])}var w=i(h,[["render",_],["__file","following.html.vue"]]);export{w as default};
