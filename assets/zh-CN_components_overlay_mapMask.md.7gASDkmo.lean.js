import{_ as C,D as p,c as E,k as n,a as s,I as a,w as c,R as o,o as l}from"./chunks/framework.aeLSa5ZG.js";const T=JSON.parse('{"title":"BMapMask 掩膜","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/components/overlay/mapMask.md","filePath":"zh-CN/components/overlay/mapMask.md","lastUpdated":1720256247000}'),u={name:"zh-CN/components/overlay/mapMask.md"},k={id:"bmapmask-掩膜",tabindex:"-1"},i=n("a",{class:"header-anchor",href:"#bmapmask-掩膜","aria-label":'Permalink to "BMapMask 掩膜 <Badge type="tip" text="^2.1.0" />"'},"​",-1),D=o("",5),F=n("p",null,"overlay/mapMask",-1),r=n("h2",{id:"动态组件-props",tabindex:"-1"},[s("动态组件 Props "),n("a",{class:"header-anchor",href:"#动态组件-props","aria-label":'Permalink to "动态组件 Props"'},"​")],-1),d=n("thead",null,[n("tr",null,[n("th",null,"属性"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"可选值"),n("th",null,"默认值"),n("th",null,"版本")])],-1),m=n("tr",null,[n("td",null,"path"),n("td",null,"圆形中心点经纬度"),n("td",null,[n("code",null,"{ lng: number, lat: number}")]),n("td",null,"-"),n("td",null,[n("code",null,"required")]),n("td",null,"-")],-1),A=n("tr",null,[n("td",null,"showRegion"),n("td",null,"展示区域内部还是外部"),n("td",null,[n("a",{href:"#mapmaskshowregion"},[n("code",null,"MapMaskShowRegion")])]),n("td",null,"-"),n("td",null,[n("code",null,"inside")]),n("td",null,"-")],-1),h=n("tr",null,[n("td",null,"isBuildingMask"),n("td",null,"楼块是否参与掩膜"),n("td",null,[n("code",null,"boolean")]),n("td",null,"-"),n("td",null,[n("code",null,"false")]),n("td",null,"-")],-1),B=n("tr",null,[n("td",null,"isMapMask"),n("td",null,"底图是否参与掩膜"),n("td",null,[n("code",null,"boolean")]),n("td",null,"-"),n("td",null,[n("code",null,"false")]),n("td",null,"-")],-1),M=n("tr",null,[n("td",null,"isPoiMask"),n("td",null,"底图上的 Poi 是否参与掩膜"),n("td",null,[n("code",null,"boolean")]),n("td",null,"-"),n("td",null,[n("code",null,"false")]),n("td",null,"-")],-1),g=n("td",null,"visible",-1),w=n("td",null,"是否显示",-1),b=n("td",null,[n("code",null,"boolean")],-1),_=n("td",null,"-",-1),v=n("td",null,[n("code",null,"true")],-1),P=o("",4);function y(f,G,L,R,q,S){const t=p("Badge"),e=p("Demo");return l(),E("div",null,[n("h1",k,[s("BMapMask 掩膜 "),a(t,{type:"tip",text:"^2.1.0"}),s(),i]),D,a(e,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%E6%98%BE%E7%A4%BA%E5%8C%BA%E5%9F%9F%3A%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eselect%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EshowRegion%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eoption%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Evalue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eoutside%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E5%B1%80%E9%83%A8%E5%BD%B1%E8%97%8F%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eoption%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eoption%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Evalue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Einside%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E5%B1%80%E9%83%A8%E6%98%BE%E7%A4%BA%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eoption%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eselect%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acenter%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Azoom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E16%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40initd%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EhandleInitd%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3Eenable-scroll-wheel-zoom%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AbackgroundColor%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%5B192%2C%20214%2C%20213%2C%20100%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMarker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aposition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecenter%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMarker%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMapMask%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Apath%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Epath%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Ashow-region%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EshowRegion%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EisPoiMask%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EisBuildingMask%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3EisMapMask%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMapMask%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20shallowRef%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20triggerRef%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20BMap%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20BMarker%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20BMapMask%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20Point%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20type%20MapMaskShowRegion%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue3-baidu-map-gl'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20path%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20shallowRef%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EPoint%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20center%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20showRegion%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EMapMaskShowRegion%3Cspan%20class%3D%22token%20operator%22%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'outside'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Efunction%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EhandleInitd%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20center%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31951444701689%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03514188328609%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20path%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31951444701689%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03514188328609%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31914525270483%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03627653457813%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31887119442595%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03712933826661%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31862381043088%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.037753816069426%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31846085080458%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03827800880047%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31800011574751%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03960034324275%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.3176890313816%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.0403207681881%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31747304954207%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.04023658043798%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31689403073578%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.040120567399384%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31419172285828%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03965310472413%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31437612880998%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03919415930771%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31462581129936%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03876546296739%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31525321239126%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.037930670509574%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.315488510584%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.0377117230615%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31601289759325%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.037228304952336%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31692309046987%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03662665953143%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31817328272946%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03584288930924%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20keyword%22%3Enew%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EBMapGL%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3EPoint%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E116.31924096994166%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E40.03521921152976%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EtriggerRef%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Epath%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"overlay/mapMask","raw-source":"%3Ctemplate%3E%0A%20%20%E6%98%BE%E7%A4%BA%E5%8C%BA%E5%9F%9F%3A%0A%20%20%3Cselect%20class%3D%22mySelect%22%20name%3D%22%22%20id%3D%22%22%20v-model%3D%22showRegion%22%3E%0A%20%20%20%20%3Coption%20value%3D%22outside%22%3E%E5%B1%80%E9%83%A8%E5%BD%B1%E8%97%8F%3C%2Foption%3E%0A%20%20%20%20%3Coption%20value%3D%22inside%22%3E%E5%B1%80%E9%83%A8%E6%98%BE%E7%A4%BA%3C%2Foption%3E%0A%20%20%3C%2Fselect%3E%0A%20%20%3CBMap%0A%20%20%20%20v-bind%3D%22%24attrs%22%0A%20%20%20%20%3Acenter%3D%22center%22%0A%20%20%20%20%3Azoom%3D%2216%22%0A%20%20%20%20%40initd%3D%22handleInitd%22%0A%20%20%20%20enable-scroll-wheel-zoom%0A%20%20%20%20%3AbackgroundColor%3D%22%5B192%2C%20214%2C%20213%2C%20100%5D%22%0A%20%20%3E%0A%20%20%20%20%3CBMarker%20%3Aposition%3D%22center%22%3E%3C%2FBMarker%3E%0A%20%20%20%20%3CBMapMask%20%3Apath%3D%22path%22%20%3Ashow-region%3D%22showRegion%22%20isPoiMask%20isBuildingMask%20isMapMask%3E%3C%2FBMapMask%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0A%20%20import%20%7B%20ref%2C%20shallowRef%2C%20triggerRef%20%7D%20from%20'vue'%0A%20%20import%20%7B%20BMap%2C%20BMarker%2C%20BMapMask%2C%20Point%2C%20type%20MapMaskShowRegion%20%7D%20from%20'vue3-baidu-map-gl'%0A%20%20const%20path%20%3D%20shallowRef%3CPoint%5B%5D%3E(%5B%5D)%0A%20%20const%20center%20%3D%20ref%3CBMapGL.Point%3E()%0A%20%20const%20showRegion%20%3D%20ref%3CMapMaskShowRegion%3E('outside')%0A%20%20function%20handleInitd()%20%7B%0A%20%20%20%20center.value%20%3D%20new%20BMapGL.Point(116.31951444701689%2C%2040.03514188328609)%0A%20%20%20%20path.value%20%3D%20%5B%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31951444701689%2C%2040.03514188328609)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31914525270483%2C%2040.03627653457813)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31887119442595%2C%2040.03712933826661)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31862381043088%2C%2040.037753816069426)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31846085080458%2C%2040.03827800880047)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31800011574751%2C%2040.03960034324275)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.3176890313816%2C%2040.0403207681881)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31747304954207%2C%2040.04023658043798)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31689403073578%2C%2040.040120567399384)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31419172285828%2C%2040.03965310472413)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31437612880998%2C%2040.03919415930771)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31462581129936%2C%2040.03876546296739)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31525321239126%2C%2040.037930670509574)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.315488510584%2C%2040.0377117230615)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31601289759325%2C%2040.037228304952336)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31692309046987%2C%2040.03662665953143)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31817328272946%2C%2040.03584288930924)%2C%0A%20%20%20%20%20%20new%20BMapGL.Point(116.31924096994166%2C%2040.03521921152976)%0A%20%20%20%20%5D%0A%20%20%20%20triggerRef(path)%0A%20%20%7D%0A%3C%2Fscript%3E%0A",description:"%3Cp%3E%E5%B1%80%E9%83%A8%E9%9A%90%E8%97%8F%3C%2Fp%3E%0A"},{default:c(()=>[F]),_:1}),r,n("table",null,[d,n("tbody",null,[m,A,h,B,M,n("tr",null,[g,w,b,_,v,n("td",null,[a(t,{type:"tip",text:"^2.2.0"})])])])]),P])}const N=C(u,[["render",y]]);export{T as __pageData,N as default};
