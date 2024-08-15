import{_ as o,E as d,o as n,c as E,J as t,w as a,a as s,d as p,m as e,a8 as k}from"./chunks/framework.DF4Ox_Kc.js";const C={};function c(l,h){const i=d("sg-link");return n(),E("p",null,[t(i,null,{default:a(()=>[s("Default")]),_:1}),t(i,{type:"primary"},{default:a(()=>[s("Primary")]),_:1}),t(i,{type:"success"},{default:a(()=>[s("Success")]),_:1}),t(i,{type:"info"},{default:a(()=>[s("Info")]),_:1}),t(i,{type:"warning"},{default:a(()=>[s("Warning")]),_:1}),t(i,{type:"danger"},{default:a(()=>[s("Danger")]),_:1})])}const A=o(C,[["render",c]]),g=e("h1",{id:"link-链接",tabindex:"-1"},[s("Link 链接 "),e("a",{class:"header-anchor",href:"#link-链接","aria-label":'Permalink to "Link 链接"'},"​")],-1),D=e("p",null,"文字超链接",-1),u=e("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),y=e("p",null,"基础的文字链接用法。",-1),F=k('<h2 id="button-api" tabindex="-1">Button API <a class="header-anchor" href="#button-api" aria-label="Permalink to &quot;Button API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>size</td><td>尺寸</td><td><code>enum</code> - <code>&#39;large&#39;| &#39;default&#39;| &#39;small&#39;</code></td><td>—</td></tr><tr><td>type</td><td>类型</td><td><code>enum</code> - <code>&#39;primary&#39;| &#39;success&#39;| &#39;warning&#39;| &#39;danger&#39;| &#39;info&#39;</code></td><td>info</td></tr><tr><td>plain</td><td>是否为朴素按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>round</td><td>是否为圆角按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>circle</td><td>是否为圆形按钮</td><td><code>boolean</code></td><td>false</td></tr><tr><td>loading</td><td>是否为加载中状态</td><td><code>boolean</code></td><td>false</td></tr><tr><td>loading-icon</td><td>自定义加载中状态图标组件</td><td><code>string</code></td><td>spinner</td></tr><tr><td>disabled</td><td>按钮是否为禁用状态</td><td><code>boolean</code></td><td>false</td></tr><tr><td>icon</td><td>按钮图标</td><td><code>string</code></td><td>-</td></tr><tr><td>autofocus</td><td>是否自动聚焦(原生<code>autofocus</code>属性)</td><td><code>boolean</code></td><td>false</td></tr><tr><td>native-type</td><td>原生 type 属性</td><td><code>enum</code> - <code>&#39;button&#39;| &#39;submit&#39;| &#39;reset&#39;</code></td><td>button</td></tr><tr><td>tag</td><td>自定义元素标签</td><td><code>string</code>/<code>Component</code></td><td>button</td></tr><tr><td>use-throttle</td><td>是否使用节流模式</td><td><code>boolean</code></td><td>true</td></tr><tr><td>throttle-duration</td><td>节流模式下，节流时间间隔(ms)</td><td><code>number</code></td><td>500</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>click</td><td>按钮点击事件</td><td><code>(event: MouseEvent)=&gt; void</code></td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>默认插槽, 按钮内容</td></tr><tr><td>loading</td><td>自定义加载图标</td></tr></tbody></table><h3 id="expose" tabindex="-1">Expose <a class="header-anchor" href="#expose" aria-label="Permalink to &quot;Expose&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>ref</td><td>按钮 html 元素</td><td><code>Ref&lt;HTMLButtonElement&gt;</code></td></tr><tr><td>size</td><td>按钮尺寸</td><td><code>ComputedRef&lt;&#39;&#39;|&#39;small&#39; |&#39;large&#39;&gt;</code></td></tr><tr><td>type</td><td>按钮类型</td><td><code>ComputedRef&lt;&#39;&#39;|&#39;primary&#39; |...&gt;</code></td></tr><tr><td>disabled</td><td>按钮禁用状态</td><td><code>ComputedRef&lt;boolean&gt;</code></td></tr></tbody></table><h2 id="buttongroup-api" tabindex="-1">ButtonGroup API <a class="header-anchor" href="#buttongroup-api" aria-label="Permalink to &quot;ButtonGroup API&quot;">​</a></h2><h3 id="props-1" tabindex="-1">Props <a class="header-anchor" href="#props-1" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>size</td><td>尺寸</td><td><code>enum</code> - <code>&#39;large&#39;| &#39;default&#39;| &#39;small&#39;</code></td><td>—</td></tr><tr><td>type</td><td>类型</td><td><code>enum</code> - <code>&#39;primary&#39;| &#39;success&#39;| &#39;warning&#39;| &#39;danger&#39;| &#39;info&#39;</code></td><td>info</td></tr><tr><td>disabled</td><td>按钮组是否为禁用状态</td><td><code>boolean</code></td><td>false</td></tr></tbody></table><h3 id="slots-1" tabindex="-1">Slots <a class="header-anchor" href="#slots-1" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Sub Component</th></tr></thead><tbody><tr><td>default</td><td>默认插槽</td><td>Button</td></tr></tbody></table>',14),b=JSON.parse('{"title":"Link","description":"Link 组件文档","frontmatter":{"title":"Link","description":"Link 组件文档","next":{"link":"/components/collapse","text":"Collapse 折叠面板"},"prev":{"link":"/components/button","text":"按钮组件文档"}},"headers":[],"relativePath":"components/link.md","filePath":"components/link.md"}'),B={name:"components/link.md"},f=p({...B,setup(l){return(h,i)=>{const r=d("demo-preview");return n(),E("div",null,[g,D,u,y,t(r,{title:"",description:"",code:"%3Ctemplate%3E%0A%20%20%3Cp%3E%0A%20%20%20%20%3Csg-link%3EDefault%3C/sg-link%3E%0A%20%20%20%20%3Csg-link%20type=%22primary%22%3EPrimary%3C/sg-link%3E%0A%20%20%20%20%3Csg-link%20type=%22success%22%3ESuccess%3C/sg-link%3E%0A%20%20%20%20%3Csg-link%20type=%22info%22%3EInfo%3C/sg-link%3E%0A%20%20%20%20%3Csg-link%20type=%22warning%22%3EWarning%3C/sg-link%3E%0A%20%20%20%20%3Csg-link%20type=%22danger%22%3EDanger%3C/sg-link%3E%0A%20%20%3C/p%3E%0A%3C/template%3E%0A",showCode:"%3Cpre%20class%3D%22shiki%20shiki-themes%20github-light%20github-dark%20vp-code%22%20v-pre%3D%22%22%3E%3Ccode%3E%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3EDefault%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22primary%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3EPrimary%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22success%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3ESuccess%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22info%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3EInfo%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22warning%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3EWarning%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%20%20%26%23x3C%3B%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%236F42C1%3B--shiki-dark%3A%23B392F0%22%3E%20type%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3D%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%23032F62%3B--shiki-dark%3A%239ECBFF%22%3E%22danger%22%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3EDanger%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Esg-link%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%20%20%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Ep%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22line%22%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%26%23x3C%3B%2F%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2322863A%3B--shiki-dark%3A%2385E89D%22%3Etemplate%3C%2Fspan%3E%3Cspan%20style%3D%22--shiki-light%3A%2324292E%3B--shiki-dark%3A%23E1E4E8%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",suffixName:"vue",absolutePath:"/home/runner/work/sungrow-ui/sungrow-ui/packages/docs/demo/link/Basic.vue",relativePath:"../demo/link/Basic.vue"},{default:a(()=>[e("p",null,[t(A)])]),_:1}),F])}}});export{b as __pageData,f as default};
