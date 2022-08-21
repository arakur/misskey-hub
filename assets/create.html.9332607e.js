import{_ as o,o as c,c as d,b as a,w as n,a as e,d as t,e as l,r as i}from"./app.65b79454.js";const h={},p=e("h1",{id:"pages-create",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pages-create","aria-hidden":"true"},"#"),t(),e("code",null,"pages/create")],-1),f=e("p",null,"Credential required.",-1),u=e("h2",{id:"parameters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#parameters","aria-hidden":"true"},"#"),t(" Parameters")],-1),_=e("h2",{id:"response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#response","aria-hidden":"true"},"#"),t(" Response")],-1),m=l('<h2 id="errors" tabindex="-1"><a class="header-anchor" href="#errors" aria-hidden="true">#</a> Errors</h2><h3 id="no-such-file" tabindex="-1"><a class="header-anchor" href="#no-such-file" aria-hidden="true">#</a> NO_SUCH_FILE</h3><p>ID: <code>b7b97489-0f66-4b12-a5ff-b21bd63f6e1c</code></p><h3 id="name-already-exists" tabindex="-1"><a class="header-anchor" href="#name-already-exists" aria-hidden="true">#</a> NAME_ALREADY_EXISTS</h3><p>ID: <code>4650348e-301c-499a-83c9-6aa988c66bc1</code></p>',5);function b(y,g){const r=i("MkSchemaViewer"),s=i("ClientOnly");return c(),d("div",null,[p,f,u,a(s,null,{default:n(()=>[a(r,{schema:{type:"object",properties:{title:{type:"string"},name:{type:"string",minLength:1},summary:{type:"string",nullable:!0},content:{type:"array",items:{type:"object",additionalProperties:!0}},variables:{type:"array",items:{type:"object",additionalProperties:!0}},script:{type:"string"},eyeCatchingImageId:{type:"string",format:"misskey:id",nullable:!0},font:{type:"string",enum:["serif","sans-serif"],default:"sans-serif"},alignCenter:{type:"boolean",default:!1},hideTitleWhenPinned:{type:"boolean",default:!1}},required:["title","name","content","variables","script"]}})]),_:1}),_,a(s,null,{default:n(()=>[a(r,{schema:{type:"object",optional:!1,nullable:!1,ref:"Page",$ref:"misskey://Page"}})]),_:1}),m])}var C=o(h,[["render",b],["__file","create.html.vue"]]);export{C as default};
