import{_ as p,E as e,c as t,A as a,a as s,H as o,S as n,o as c}from"./chunks/framework.c482a5a7.js";const q=JSON.parse('{"title":"快速开始","description":"","frontmatter":{"title":"快速开始","lang":"zh-CN"},"headers":[],"relativePath":"zh-CN/guide/quick-start.md","filePath":"zh-CN/guide/quick-start.md","lastUpdated":1701278747000}'),r={name:"zh-CN/guide/quick-start.md"},i=n(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><p>本节将介绍如何在项目中使用 Vue3 BaiduMap GL。</p><h2 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h2><h3 id="完整引入" tabindex="-1">完整引入 <a class="header-anchor" href="#完整引入" aria-label="Permalink to &quot;完整引入&quot;">​</a></h3><p>失去 Tree Shaking 的功能，打包有冗余代码。如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Vue3BaiduMapGL </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(Vue3BaiduMapGL)</span></span></code></pre></div><p>在组件中使用</p>`,7),D={id:"volar-支持",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#volar-支持","aria-label":'Permalink to "Volar 支持 <Badge type="tip" text="^0.0.21" />"'},"​",-1),F=n(`<p>如果你在使用 <code>Volar</code>，那么可以在 <code>tsconfig.json</code> 中配置 <code>compilerOptions.types</code> 来指定全局组件类型，从而获得更好的类型提示。如下图：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// tsconfig.json</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">compilerOptions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">types</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue3-baidu-map-gl/volar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,2),d={id:"按需导入",tabindex:"-1"},C=a("a",{class:"header-anchor",href:"#按需导入","aria-label":'Permalink to "按需导入 <Badge type="tip" text="推荐" />"'},"​",-1),A=n(`<p>Vue3 BaiduMap GL 提供了基于 ES Module 开箱即用的 Tree Shaking 功能。你可以直接导入组件并使用它。这种情况下，只有导入的组件才会被打包。</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BMap</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BZoom</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">&lt;!-- ... --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">BMap</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BMap</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BZoom</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="申请-ak-密钥" tabindex="-1">申请 ak 密钥 <a class="header-anchor" href="#申请-ak-密钥" aria-label="Permalink to &quot;申请 ak 密钥&quot;">​</a></h2><p>在开始使用前，您还需在百度地图开发者后台申请百度地图 ak 密钥，然后在项目中<a href="./config">配置 ak 密钥</a>后，才能正确的渲染地图。详细请阅读下面两个链接的内容：</p><blockquote><p><a href="https://lbs.baidu.com/index.php?title=jspopularGL/guide/getkey" target="_blank" rel="noreferrer">官方密钥 ak 申请指引</a></p><p><a href="https://lbsyun.baidu.com/apiconsole/key?application=key" target="_blank" rel="noreferrer">申请开发者密钥 ak</a></p></blockquote><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>参考<a href="./config">配置</a></p><h2 id="开始使用" tabindex="-1">开始使用 <a class="header-anchor" href="#开始使用" aria-label="Permalink to &quot;开始使用&quot;">​</a></h2><p>您可以从现在起启动您的项目。 对于每个组件或 hooks 的用法，请参考对应的文档。</p>`,9);function h(u,_,g,m,f,k){const l=e("Badge");return c(),t("div",null,[i,a("h4",D,[s("Volar 支持 "),o(l,{type:"tip",text:"^0.0.21"}),s(),y]),F,a("h3",d,[s("按需导入 "),o(l,{type:"tip",text:"推荐"}),s(),C]),A])}const T=p(r,[["render",h]]);export{q as __pageData,T as default};
