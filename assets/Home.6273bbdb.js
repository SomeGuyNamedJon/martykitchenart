import{_ as c,c as l,a as t,t as n,b as r,w as d,r as _,o as p,p as b,d as u}from"./index.c83f7ed1.js";const m="Marty Kitchen Art",f="Welcomes You",h="Our Experience",v="Our team is made up of highly trained personnel in our various departments, specifically dedicated to the areas of design, sales, manufacturing and installation, at a national and international level.",g="Contact Us",x={title:m,subtitle:f,b_title:h,blurb:v,btn:g},y="Marty Arte en Cocinas",j="Te da la bienvenida",w="Nuestra experiencia",I="Nuestro equipo est\xE1 formado por personal ampliamente capacitado en nuestros diversos departamentos, dedicados espec\xEDficamente a las \xE1reas de dise\xF1o, ventas, fabricaci\xF3n e instalaci\xF3n, a nivel nacionale internacional.",S="Cont\xE1ctanos",C={title:y,subtitle:j,b_title:w,blurb:I,btn:S},k="/assets/homebanner.6548d38c.webp",M="/assets/homeside.de59e9b0.webp";const N={props:{lang:{type:String}},setup(e){return{json:e.lang==="es"?C:x}}},o=e=>(b("data-v-c61f1fc8"),e=e(),u(),e),$={class:"MainView"},B=o(()=>t("div",{class:"KitchenImage"},[t("img",{id:"banner",src:k})],-1)),T={class:"Title"},V={class:"MainText"},A={class:"blurb"},E=o(()=>t("div",{class:"SideImage"},[t("img",{id:"side",src:M})],-1));function H(e,a,K,s,L,O){const i=_("RouterLink");return p(),l("div",$,[B,t("div",T,[t("h1",null,n(s.json.title),1),t("h2",null,n(s.json.subtitle),1)]),t("div",V,[t("div",A,[t("h2",null,n(s.json.b_title),1),t("p",null,n(s.json.blurb),1),r(i,{to:"/contact"},{default:d(()=>[t("button",null,n(s.json.btn),1)]),_:1})])]),E])}const q=c(N,[["render",H],["__scopeId","data-v-c61f1fc8"]]);export{q as default};