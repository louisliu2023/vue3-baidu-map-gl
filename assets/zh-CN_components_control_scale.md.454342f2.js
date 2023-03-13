import{_ as e,c as s,f as n,g as d,h as t,i as o,o as l,b as r}from"./app.16bb4b9b.js";const T=JSON.parse('{"title":"BScale 比例尺控件","description":"","frontmatter":{},"headers":[{"level":2,"title":"组件示例","slug":"组件示例","link":"#组件示例","children":[]},{"level":2,"title":"静态组件 Props","slug":"静态组件-props","link":"#静态组件-props","children":[]},{"level":2,"title":"动态组件 Props","slug":"动态组件-props","link":"#动态组件-props","children":[]},{"level":2,"title":"anchor","slug":"anchor","link":"#anchor","children":[]},{"level":2,"title":"unit","slug":"unit","link":"#unit","children":[]},{"level":2,"title":"组件事件","slug":"组件事件","link":"#组件事件","children":[]}],"relativePath":"zh-CN/components/control/scale.md","lastUpdated":1678687890000}'),c={name:"zh-CN/components/control/scale.md"},p=t(`<h1 id="bscale-比例尺控件" tabindex="-1">BScale 比例尺控件 <a class="header-anchor" href="#bscale-比例尺控件" aria-hidden="true">#</a></h1><p>比例尺控件，默认显示在地图左下角</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">BScale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue3-baidu-map-gl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="组件示例" tabindex="-1">组件示例 <a class="header-anchor" href="#组件示例" aria-hidden="true">#</a></h2>`,4),h=r("p",null,"control/scale",-1),i=t('<h2 id="静态组件-props" tabindex="-1">静态组件 Props <a class="header-anchor" href="#静态组件-props" aria-hidden="true">#</a></h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>anchor</td><td>控件的停靠位置</td><td><code>string</code></td><td><a href="#anchor">anchor</a></td><td><code>BMAP_ANCHOR_BOTTOM_LEFT</code></td></tr><tr><td>offset</td><td>控件的偏移值</td><td><code>{x: number, y: number }</code></td><td>-</td><td><code>{ x: 83, y: 18 }</code></td></tr></tbody></table><h2 id="动态组件-props" tabindex="-1">动态组件 Props <a class="header-anchor" href="#动态组件-props" aria-hidden="true">#</a></h2><p>动态绑定的值变更，会自动更新到地图中</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>unit</td><td>比例尺单位制</td><td><code>string</code></td><td><a href="#unit">unit</a></td><td><code>BMAP_UNIT_METRIC</code></td></tr></tbody></table><h2 id="anchor" tabindex="-1">anchor <a class="header-anchor" href="#anchor" aria-hidden="true">#</a></h2><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>BMAP_ANCHOR_TOP_LEFT</td><td>左上</td></tr><tr><td>BMAP_ANCHOR_TOP_RIGHT</td><td>右上</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_LEFT</td><td>左下</td></tr><tr><td>BMAP_ANCHOR_BOTTOM_RIGHT</td><td>右下</td></tr></tbody></table><h2 id="unit" tabindex="-1">unit <a class="header-anchor" href="#unit" aria-hidden="true">#</a></h2><table><thead><tr><th>值</th><th>说明</th></tr></thead><tbody><tr><td>BMAP_UNIT_METRIC</td><td>公尺</td></tr><tr><td>BMAP_UNIT_IMPERIAL</td><td>英尺</td></tr></tbody></table><h2 id="组件事件" tabindex="-1">组件事件 <a class="header-anchor" href="#组件事件" aria-hidden="true">#</a></h2><table><thead><tr><th>事件名</th><th>说明</th><th>类型</th></tr></thead><tbody><tr><td>initd</td><td>组件初始化后，调用的方法，返回一个地图实例</td><td><code>{ map, BmapGL, instance }</code></td></tr><tr><td>unload</td><td>组件卸载时会调用此方法</td><td>-</td></tr></tbody></table>',11);function C(_,E,u,F,D,A){const a=o("Demo");return l(),s("div",null,[p,n(a,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBMap%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3EBScale%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3EBMap%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"control/scale","raw-source":"%3Ctemplate%3E%0A%20%20%3CBMap%20v-bind%3D%22%24attrs%22%3E%0A%20%20%20%20%3CBScale%20%2F%3E%0A%20%20%3C%2FBMap%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:d(()=>[h]),_:1}),i])}const k=e(c,[["render",C]]);export{T as __pageData,k as default};
