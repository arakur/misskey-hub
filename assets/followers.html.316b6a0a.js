import{_ as i,o as d,c as l,b as r,w as o,a as e,d as a,e as c,r as n}from"./app.65b79454.js";const h={},u=e("h1",{id:"users-followers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#users-followers","aria-hidden":"true"},"#"),a(),e("code",null,"users/followers")],-1),f=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),a(" Parameters")],-1),p=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),a(" Response")],-1),m=c('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-user" tabindex="-1"><a class="header-anchor" href="#no-such-user" aria-hidden="true">#</a> NO_SUCH_USER</h3><p>ID: <code>27fa5435-88ab-43de-9360-387de88727cd</code></p><h3 id="forbidden" tabindex="-1"><a class="header-anchor" href="#forbidden" aria-hidden="true">#</a> FORBIDDEN</h3><p>ID: <code>3c6a84db-d619-26af-ca14-06232a21df8a</code></p>',5);function _(y,b){const s=n("MkSchemaViewer"),t=n("ClientOnly");return d(),l("div",null,[u,f,r(t,null,{default:o(()=>[r(s,{schema:{type:"object",properties:{sinceId:{type:"string",format:"misskey:id"},untilId:{type:"string",format:"misskey:id"},limit:{type:"integer",minimum:1,maximum:100,default:10}},anyOf:[{properties:{userId:{type:"string",format:"misskey:id"}},required:["userId"]},{properties:{username:{type:"string"},host:{type:"string",nullable:!0,description:"The local host is represented with `null`."}},required:["username","host"]}]}},null,8,["schema"])]),_:1}),p,r(t,null,{default:o(()=>[r(s,{schema:{type:"array",optional:!1,nullable:!1,items:{type:"object",optional:!1,nullable:!1,ref:"Following",$ref:"misskey://Following"}}})]),_:1}),m])}var x=i(h,[["render",_],["__file","followers.html.vue"]]);export{x as default};
