import{_ as l,E as p,c as o,A as s,H as e,S as a,a as t,o as c}from"./chunks/framework.c482a5a7.js";const P=JSON.parse('{"title":"配置","description":"","frontmatter":{"title":"配置","lang":"zh-CN"},"headers":[],"relativePath":"zh-CN/guide/config.md","filePath":"zh-CN/guide/config.md","lastUpdated":1701186645000}'),r={name:"zh-CN/guide/config.md"},i=a('<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><p>本章节将为你讲述如何配置 ak、apiUrl 与插件以及更换资源链接，并实现一个自定义插件</p><h2 id="配置方式" tabindex="-1">配置方式 <a class="header-anchor" href="#配置方式" aria-label="Permalink to &quot;配置方式&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>如果你是<strong>全局注册</strong>使用方式，那么<code>ak</code>、<code>apiUrl</code>、<code>plugins</code> 和 <code>pluginsSourceLink</code> 都支持两种来源（全局注册配置和组件 <code>props</code> 提供），当同时指定的时候，会优先就近原则，从组件 <code>props</code> 中获取。如果全局注册配置和组件 <code>props</code> 都提供了，则会尝试合并两个配置。</p><p>如果你是<strong>按需加载</strong>使用方式，则只支持组件 <code>props</code> 方式</p></div><h3 id="_1-通过全局注册配置-ak-与-插件" tabindex="-1">1. 通过全局注册配置 ak 与 插件 <a class="header-anchor" href="#_1-通过全局注册配置-ak-与-插件" aria-label="Permalink to &quot;1. 通过全局注册配置 ak 与 插件&quot;">​</a></h3><p>全局注册 Options</p>',6),D=s("thead",null,[s("tr",null,[s("th",null,"属性"),s("th",null,"说明"),s("th",null,"类型"),s("th",null,"可选值"),s("th",null,"默认值"),s("th",null,"版本")])],-1),y=s("tr",null,[s("td",null,"ak"),s("td",null,[t("百度地图 "),s("a",{href:"./../guide/quick-start#申请-ak-密钥"},"ak")]),s("td",null,[s("code",null,"string")]),s("td",null,"-"),s("td",null,"-"),s("td",null,"-")],-1),F=s("td",null,"apiUrl",-1),d=s("td",null,"自建地图 api 资源地址（一般用于离线地图）",-1),C=s("td",null,[s("code",null,"string")],-1),h=s("td",null,"-",-1),A=s("td",null,"-",-1),u=s("tr",null,[s("td",null,"plugins"),s("td",null,"需要注册的插件"),s("td",null,[s("code",null,"['TrackAnimation', 'Mapvgl', 'Mapv', 'MapvThree']")]),s("td",null,"-"),s("td",null,"-"),s("td",null,"-")],-1),g=s("tr",null,[s("td",null,"pluginsSourceLink"),s("td",null,"自定义插件资源地址"),s("td",null,[s("code",null,"Record<'TrackAnimation' | 'Mapvgl' | 'Mapv' | 'MapvThree', string>")]),s("td",null,"-"),s("td",null,"-"),s("td",null,"-")],-1),m=a(`<div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">createApp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> App </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./App.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> baiduMap </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(baiduMap</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ak</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">百度地图ak</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TrackAnimation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">mount</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span></code></pre></div><h3 id="组件-bmap-传入-props-配置" tabindex="-1">组件 <code>BMap</code> 传入 <a href="/vue3-baidu-map-gl/zh-CN/components/map#静态组件-props"><code>props</code></a> 配置 <a class="header-anchor" href="#组件-bmap-传入-props-配置" aria-label="Permalink to &quot;组件 \`BMap\` 传入 [\`props\`](/zh-CN/components/map#%E9%9D%99%E6%80%81%E7%BB%84%E4%BB%B6-props) 配置&quot;">​</a></h3><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BMap</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">ak</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">百度地图ak</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:plugins</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[&#39;TrackAnimation&#39;]</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="更换插件资源链接" tabindex="-1">更换插件资源链接 <a class="header-anchor" href="#更换插件资源链接" aria-label="Permalink to &quot;更换插件资源链接&quot;">​</a></h2><p>如果需要自建或其他地址的资源链接，则可以通过该方式自定义。同样，该方式也支持两种形式:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(baiduMap</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">TrackAnimation</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">pluginsSourceLink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">TrackAnimation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">自建或其他地址的资源链接</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span></code></pre></div><p>或者</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BMap</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:plugins</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">[</span><span style="color:#89DDFF;">&#39;TrackAnimation&#39;]</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:pluginsSourceLink</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">{</span></span>
<span class="line highlighted"><span style="color:#C3E88D;">    TrackAnimation: &#39;自建或其他地址的资源链接&#39;</span></span>
<span class="line highlighted"><span style="color:#C3E88D;">  }</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span></code></pre></div><h2 id="自定义插件" tabindex="-1">自定义插件 <a class="header-anchor" href="#自定义插件" aria-label="Permalink to &quot;自定义插件&quot;">​</a></h2><p>除了提供的插件外，你还可以通过自定义插件扩展，自定义的插件将在地图加载完毕后执行与处理。</p><p>自定义的方式也很简单，你只需定义一个返回<code>Promise</code>的函数即可</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> customPlugin </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">自定义插件</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>使用的方式同样也有两种：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(baiduMap</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">plugins</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [customPlugin]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ...</span></span></code></pre></div><p>或者</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BMap</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:plugins</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[customPlugin]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div>`,16);function _(k,b,E,f,v,T){const n=p("Badge");return c(),o("div",null,[i,s("table",null,[D,s("tbody",null,[y,s("tr",null,[F,d,C,h,A,s("td",null,[e(n,{type:"tip",text:"^2.3.0"})])]),u,g])]),m])}const B=l(r,[["render",_]]);export{P as __pageData,B as default};
