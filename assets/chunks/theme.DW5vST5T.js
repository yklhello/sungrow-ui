const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/VPLocalSearchBox.thagPJ9f.js","assets/chunks/framework.DzcoSlOI.js"])))=>i.map(i=>d[i]);
import{d as v,o as r,c as u,r as L,n as H,a as J,t as E,b as w,w as C,e as x,T as S1,_ as A,u as ia,i as ra,f as fa,g as U3,h as B,j as q2,k,l as v2,m as M,p as m,q,s as G,v as A2,x as h3,y as t2,z as w1,A as q3,B as i6,C as ma,D as za,E as $2,F as V,G as W,H as r6,I as _1,J as y,K as S2,L as f6,M as A1,N as I2,O as e1,P as La,Q as P1,R as ua,S as g3,U as pa,V as m6,W as Ma,X as da,Y as Ca,Z as z6,$ as G3,a0 as ha,a1 as ga,a2 as xa,a3 as L6,a4 as ba,a5 as va,a6 as Na,a7 as ya,a8 as s3,a9 as ka}from"./framework.DzcoSlOI.js";const Sa=v({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(c){return(l,s)=>(r(),u("span",{class:H(["VPBadge",l.type])},[L(l.$slots,"default",{},()=>[J(E(l.text),1)])],2))}}),wa={key:0,class:"VPBackdrop"},_a=v({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(c){return(l,s)=>(r(),w(S1,{name:"fade"},{default:C(()=>[l.show?(r(),u("div",wa)):x("",!0)]),_:1}))}}),Aa=A(_a,[["__scopeId","data-v-e5149233"]]),T=ia;function Pa(c,l){let s,e=!1;return()=>{s&&clearTimeout(s),e?s=setTimeout(c,l):(c(),(e=!0)&&setTimeout(()=>e=!1,l))}}function x3(c){return/^\//.test(c)?c:`/${c}`}function W3(c){const{pathname:l,search:s,hash:e,protocol:a}=new URL(c,"http://a.com");if(ra(c)||c.startsWith("#")||!a.startsWith("http")||!fa(l))return c;const{site:n}=T(),o=l.endsWith("/")||l.endsWith(".html")?c:c.replace(/(?:(^\.+)\/)?.*$/,`$1${l.replace(/(\.md)?$/,n.value.cleanUrls?"":".html")}${s}${e}`);return U3(o)}const X3=B(q2?location.hash:"");q2&&window.addEventListener("hashchange",()=>{X3.value=location.hash});function a1({removeCurrent:c=!0,correspondingLink:l=!1}={}){const{site:s,localeIndex:e,page:a,theme:n}=T(),o=k(()=>{var i,f;return{label:(i=s.value.locales[e.value])==null?void 0:i.label,link:((f=s.value.locales[e.value])==null?void 0:f.link)||(e.value==="root"?"/":`/${e.value}/`)}});return{localeLinks:k(()=>Object.entries(s.value.locales).flatMap(([i,f])=>c&&o.value.label===f.label?[]:{text:f.label,link:Ta(f.link||(i==="root"?"/":`/${i}/`),n.value.i18nRouting!==!1&&l,a.value.relativePath.slice(o.value.link.length-1),!s.value.cleanUrls)+X3.value})),currentLang:o}}function Ta(c,l,s,e){return l?c.replace(/\/$/,"")+x3(s.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,e?".html":"")):c}const $a=c=>(q("data-v-24c5d77c"),c=c(),G(),c),Ba={class:"NotFound"},Fa={class:"code"},Ha={class:"title"},Ea=$a(()=>M("div",{class:"divider"},null,-1)),Oa={class:"quote"},Da={class:"action"},Ia=["href","aria-label"],Va=v({__name:"NotFound",setup(c){const{site:l,theme:s}=T(),{localeLinks:e}=a1({removeCurrent:!1}),a=B("/");return v2(()=>{var o;const n=window.location.pathname.replace(l.value.base,"").replace(/(^.*?\/).*$/,"/$1");e.value.length&&(a.value=((o=e.value.find(({link:t})=>t.startsWith(n)))==null?void 0:o.link)||e.value[0].link)}),(n,o)=>{var t,i,f,z,d;return r(),u("div",Ba,[M("p",Fa,E(((t=m(s).notFound)==null?void 0:t.code)??"404"),1),M("h1",Ha,E(((i=m(s).notFound)==null?void 0:i.title)??"PAGE NOT FOUND"),1),Ea,M("blockquote",Oa,E(((f=m(s).notFound)==null?void 0:f.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),M("div",Da,[M("a",{class:"link",href:m(U3)(a.value),"aria-label":((z=m(s).notFound)==null?void 0:z.linkLabel)??"go to home"},E(((d=m(s).notFound)==null?void 0:d.linkText)??"Take me home"),9,Ia)])])}}}),Ra=A(Va,[["__scopeId","data-v-24c5d77c"]]);function u6(c,l){if(Array.isArray(c))return d1(c);if(c==null)return[];l=x3(l);const s=Object.keys(c).sort((a,n)=>n.split("/").length-a.split("/").length).find(a=>l.startsWith(x3(a))),e=s?c[s]:[];return Array.isArray(e)?d1(e):d1(e.items,e.base)}function ja(c){const l=[];let s=0;for(const e in c){const a=c[e];if(a.items){s=l.push(a);continue}l[s]||l.push({items:[]}),l[s].items.push(a)}return l}function Ua(c){const l=[];function s(e){for(const a of e)a.text&&a.link&&l.push({text:a.text,link:a.link,docFooterText:a.docFooterText}),a.items&&s(a.items)}return s(c),l}function b3(c,l){return Array.isArray(l)?l.some(s=>b3(c,s)):A2(c,l.link)?!0:l.items?b3(c,l.items):!1}function d1(c,l){return[...c].map(s=>{const e={...s},a=e.base||l;return a&&e.link&&(e.link=a+e.link),e.items&&(e.items=d1(e.items,a)),e})}function L2(){const{frontmatter:c,page:l,theme:s}=T(),e=h3("(min-width: 960px)"),a=B(!1),n=k(()=>{const P=s.value.sidebar,_=l.value.relativePath;return P?u6(P,_):[]}),o=B(n.value);t2(n,(P,_)=>{JSON.stringify(P)!==JSON.stringify(_)&&(o.value=n.value)});const t=k(()=>c.value.sidebar!==!1&&o.value.length>0&&c.value.layout!=="home"),i=k(()=>f?c.value.aside==null?s.value.aside==="left":c.value.aside==="left":!1),f=k(()=>c.value.layout==="home"?!1:c.value.aside!=null?!!c.value.aside:s.value.aside!==!1),z=k(()=>t.value&&e.value),d=k(()=>t.value?ja(o.value):[]);function p(){a.value=!0}function h(){a.value=!1}function S(){a.value?h():p()}return{isOpen:a,sidebar:o,sidebarGroups:d,hasSidebar:t,hasAside:f,leftAside:i,isSidebarEnabled:z,open:p,close:h,toggle:S}}function qa(c,l){let s;w1(()=>{s=c.value?document.activeElement:void 0}),v2(()=>{window.addEventListener("keyup",e)}),q3(()=>{window.removeEventListener("keyup",e)});function e(a){a.key==="Escape"&&c.value&&(l(),s==null||s.focus())}}function Ga(c){const{page:l}=T(),s=B(!1),e=k(()=>c.value.collapsed!=null),a=k(()=>!!c.value.link),n=B(!1),o=()=>{n.value=A2(l.value.relativePath,c.value.link)};t2([l,c,X3],o),v2(o);const t=k(()=>n.value?!0:c.value.items?b3(l.value.relativePath,c.value.items):!1),i=k(()=>!!(c.value.items&&c.value.items.length));w1(()=>{s.value=!!(e.value&&c.value.collapsed)}),i6(()=>{(n.value||t.value)&&(s.value=!1)});function f(){e.value&&(s.value=!s.value)}return{collapsed:s,collapsible:e,isLink:a,isActiveLink:n,hasActiveLink:t,hasChildren:i,toggle:f}}function Wa(){const{hasSidebar:c}=L2(),l=h3("(min-width: 960px)"),s=h3("(min-width: 1280px)");return{isAsideEnabled:k(()=>!s.value&&!l.value?!1:c.value?s.value:l.value)}}const v3=[];function p6(c){return typeof c.outline=="object"&&!Array.isArray(c.outline)&&c.outline.label||c.outlineTitle||"On this page"}function Y3(c){const l=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(s=>s.id&&s.hasChildNodes()).map(s=>{const e=Number(s.tagName[1]);return{element:s,title:Xa(s),link:"#"+s.id,level:e}});return Ya(l,c)}function Xa(c){let l="";for(const s of c.childNodes)if(s.nodeType===1){if(s.classList.contains("VPBadge")||s.classList.contains("header-anchor")||s.classList.contains("ignore-header"))continue;l+=s.textContent}else s.nodeType===3&&(l+=s.textContent);return l.trim()}function Ya(c,l){if(l===!1)return[];const s=(typeof l=="object"&&!Array.isArray(l)?l.level:l)||2,[e,a]=typeof s=="number"?[s,s]:s==="deep"?[2,6]:s;c=c.filter(o=>o.level>=e&&o.level<=a),v3.length=0;for(const{element:o,link:t}of c)v3.push({element:o,link:t});const n=[];c:for(let o=0;o<c.length;o++){const t=c[o];if(o===0)n.push(t);else{for(let i=o-1;i>=0;i--){const f=c[i];if(f.level<t.level){(f.children||(f.children=[])).push(t);continue c}}n.push(t)}}return n}function Ka(c,l){const{isAsideEnabled:s}=Wa(),e=Pa(n,100);let a=null;v2(()=>{requestAnimationFrame(n),window.addEventListener("scroll",e)}),ma(()=>{o(location.hash)}),q3(()=>{window.removeEventListener("scroll",e)});function n(){if(!s.value)return;const t=window.scrollY,i=window.innerHeight,f=document.body.offsetHeight,z=Math.abs(t+i-f)<1,d=v3.map(({element:h,link:S})=>({link:S,top:Za(h)})).filter(({top:h})=>!Number.isNaN(h)).sort((h,S)=>h.top-S.top);if(!d.length){o(null);return}if(t<1){o(null);return}if(z){o(d[d.length-1].link);return}let p=null;for(const{link:h,top:S}of d){if(S>t+za()+4)break;p=h}o(p)}function o(t){a&&a.classList.remove("active"),t==null?a=null:a=c.value.querySelector(`a[href="${decodeURIComponent(t)}"]`);const i=a;i?(i.classList.add("active"),l.value.style.top=i.offsetTop+39+"px",l.value.style.opacity="1"):(l.value.style.top="33px",l.value.style.opacity="0")}}function Za(c){let l=0;for(;c!==document.body;){if(c===null)return NaN;l+=c.offsetTop,c=c.offsetParent}return l}const Qa=["href","title"],Ja=v({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(c){function l({target:s}){const e=s.href.split("#")[1],a=document.getElementById(decodeURIComponent(e));a==null||a.focus({preventScroll:!0})}return(s,e)=>{const a=$2("VPDocOutlineItem",!0);return r(),u("ul",{class:H(["VPDocOutlineItem",s.root?"root":"nested"])},[(r(!0),u(V,null,W(s.headers,({children:n,link:o,title:t})=>(r(),u("li",null,[M("a",{class:"outline-link",href:o,onClick:l,title:t},E(t),9,Qa),n!=null&&n.length?(r(),w(a,{key:0,headers:n},null,8,["headers"])):x("",!0)]))),256))],2)}}}),M6=A(Ja,[["__scopeId","data-v-2783fc16"]]),cn=c=>(q("data-v-e314ee5c"),c=c(),G(),c),ln={class:"content"},sn={class:"outline-title",role:"heading","aria-level":"2"},en={"aria-labelledby":"doc-outline-aria-label"},an=cn(()=>M("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),nn=v({__name:"VPDocAsideOutline",setup(c){const{frontmatter:l,theme:s}=T(),e=r6([]);_1(()=>{e.value=Y3(l.value.outline??s.value.outline)});const a=B(),n=B();return Ka(a,n),(o,t)=>(r(),u("div",{class:H(["VPDocAsideOutline",{"has-outline":e.value.length>0}]),ref_key:"container",ref:a,role:"navigation"},[M("div",ln,[M("div",{class:"outline-marker",ref_key:"marker",ref:n},null,512),M("div",sn,E(m(p6)(m(s))),1),M("nav",en,[an,y(M6,{headers:e.value,root:!0},null,8,["headers"])])])],2))}}),on=A(nn,[["__scopeId","data-v-e314ee5c"]]),tn={class:"VPDocAsideCarbonAds"},rn=v({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(c){const l=()=>null;return(s,e)=>(r(),u("div",tn,[y(m(l),{"carbon-ads":s.carbonAds},null,8,["carbon-ads"])]))}}),fn=c=>(q("data-v-3463fcc8"),c=c(),G(),c),mn={class:"VPDocAside"},zn=fn(()=>M("div",{class:"spacer"},null,-1)),Ln=v({__name:"VPDocAside",setup(c){const{theme:l}=T();return(s,e)=>(r(),u("div",mn,[L(s.$slots,"aside-top",{},void 0,!0),L(s.$slots,"aside-outline-before",{},void 0,!0),y(on),L(s.$slots,"aside-outline-after",{},void 0,!0),zn,L(s.$slots,"aside-ads-before",{},void 0,!0),m(l).carbonAds?(r(),w(rn,{key:0,"carbon-ads":m(l).carbonAds},null,8,["carbon-ads"])):x("",!0),L(s.$slots,"aside-ads-after",{},void 0,!0),L(s.$slots,"aside-bottom",{},void 0,!0)]))}}),un=A(Ln,[["__scopeId","data-v-3463fcc8"]]);function pn(){const{theme:c,page:l}=T();return k(()=>{const{text:s="Edit this page",pattern:e=""}=c.value.editLink||{};let a;return typeof e=="function"?a=e(l.value):a=e.replace(/:path/g,l.value.filePath),{url:a,text:s}})}function Mn(){const{page:c,theme:l,frontmatter:s}=T();return k(()=>{var i,f,z,d,p,h,S,P;const e=u6(l.value.sidebar,c.value.relativePath),a=Ua(e),n=a.findIndex(_=>A2(c.value.relativePath,_.link)),o=((i=l.value.docFooter)==null?void 0:i.prev)===!1&&!s.value.prev||s.value.prev===!1,t=((f=l.value.docFooter)==null?void 0:f.next)===!1&&!s.value.next||s.value.next===!1;return{prev:o?void 0:{text:(typeof s.value.prev=="string"?s.value.prev:typeof s.value.prev=="object"?s.value.prev.text:void 0)??((z=a[n-1])==null?void 0:z.docFooterText)??((d=a[n-1])==null?void 0:d.text),link:(typeof s.value.prev=="object"?s.value.prev.link:void 0)??((p=a[n-1])==null?void 0:p.link)},next:t?void 0:{text:(typeof s.value.next=="string"?s.value.next:typeof s.value.next=="object"?s.value.next.text:void 0)??((h=a[n+1])==null?void 0:h.docFooterText)??((S=a[n+1])==null?void 0:S.text),link:(typeof s.value.next=="object"?s.value.next.link:void 0)??((P=a[n+1])==null?void 0:P.link)}}})}const a2=v({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(c){const l=c,s=k(()=>l.tag??(l.href?"a":"span")),e=k(()=>l.href&&f6.test(l.href));return(a,n)=>(r(),w(S2(s.value),{class:H(["VPLink",{link:a.href,"vp-external-link-icon":e.value,"no-icon":a.noIcon}]),href:a.href?m(W3)(a.href):void 0,target:a.target??(e.value?"_blank":void 0),rel:a.rel??(e.value?"noreferrer":void 0)},{default:C(()=>[L(a.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),dn={class:"VPLastUpdated"},Cn=["datetime"],hn=v({__name:"VPDocFooterLastUpdated",setup(c){const{theme:l,page:s,frontmatter:e,lang:a}=T(),n=k(()=>new Date(e.value.lastUpdated??s.value.lastUpdated)),o=k(()=>n.value.toISOString()),t=B("");return v2(()=>{w1(()=>{var i,f,z;t.value=new Intl.DateTimeFormat((f=(i=l.value.lastUpdated)==null?void 0:i.formatOptions)!=null&&f.forceLocale?a.value:void 0,((z=l.value.lastUpdated)==null?void 0:z.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(n.value)})}),(i,f)=>{var z;return r(),u("p",dn,[J(E(((z=m(l).lastUpdated)==null?void 0:z.text)||m(l).lastUpdatedText||"Last updated")+": ",1),M("time",{datetime:o.value},E(t.value),9,Cn)])}}}),gn=A(hn,[["__scopeId","data-v-0fb2c769"]]),xn=c=>(q("data-v-9f9873cb"),c=c(),G(),c),bn={key:0,class:"VPDocFooter"},vn={key:0,class:"edit-info"},Nn={key:0,class:"edit-link"},yn=xn(()=>M("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),kn={key:1,class:"last-updated"},Sn={key:1,class:"prev-next"},wn={class:"pager"},_n=["innerHTML"],An=["innerHTML"],Pn={class:"pager"},Tn=["innerHTML"],$n=["innerHTML"],Bn=v({__name:"VPDocFooter",setup(c){const{theme:l,page:s,frontmatter:e}=T(),a=pn(),n=Mn(),o=k(()=>l.value.editLink&&e.value.editLink!==!1),t=k(()=>s.value.lastUpdated&&e.value.lastUpdated!==!1),i=k(()=>o.value||t.value||n.value.prev||n.value.next);return(f,z)=>{var d,p,h,S;return i.value?(r(),u("footer",bn,[L(f.$slots,"doc-footer-before",{},void 0,!0),o.value||t.value?(r(),u("div",vn,[o.value?(r(),u("div",Nn,[y(a2,{class:"edit-link-button",href:m(a).url,"no-icon":!0},{default:C(()=>[yn,J(" "+E(m(a).text),1)]),_:1},8,["href"])])):x("",!0),t.value?(r(),u("div",kn,[y(gn)])):x("",!0)])):x("",!0),(d=m(n).prev)!=null&&d.link||(p=m(n).next)!=null&&p.link?(r(),u("nav",Sn,[M("div",wn,[(h=m(n).prev)!=null&&h.link?(r(),w(a2,{key:0,class:"pager-link prev",href:m(n).prev.link},{default:C(()=>{var P;return[M("span",{class:"desc",innerHTML:((P=m(l).docFooter)==null?void 0:P.prev)||"Previous page"},null,8,_n),M("span",{class:"title",innerHTML:m(n).prev.text},null,8,An)]}),_:1},8,["href"])):x("",!0)]),M("div",Pn,[(S=m(n).next)!=null&&S.link?(r(),w(a2,{key:0,class:"pager-link next",href:m(n).next.link},{default:C(()=>{var P;return[M("span",{class:"desc",innerHTML:((P=m(l).docFooter)==null?void 0:P.next)||"Next page"},null,8,Tn),M("span",{class:"title",innerHTML:m(n).next.text},null,8,$n)]}),_:1},8,["href"])):x("",!0)])])):x("",!0)])):x("",!0)}}}),Fn=A(Bn,[["__scopeId","data-v-9f9873cb"]]),Hn=c=>(q("data-v-d60dc8ac"),c=c(),G(),c),En={class:"container"},On=Hn(()=>M("div",{class:"aside-curtain"},null,-1)),Dn={class:"aside-container"},In={class:"aside-content"},Vn={class:"content"},Rn={class:"content-container"},jn={class:"main"},Un=v({__name:"VPDoc",setup(c){const{theme:l}=T(),s=A1(),{hasSidebar:e,hasAside:a,leftAside:n}=L2(),o=k(()=>s.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(t,i)=>{const f=$2("Content");return r(),u("div",{class:H(["VPDoc",{"has-sidebar":m(e),"has-aside":m(a)}])},[L(t.$slots,"doc-top",{},void 0,!0),M("div",En,[m(a)?(r(),u("div",{key:0,class:H(["aside",{"left-aside":m(n)}])},[On,M("div",Dn,[M("div",In,[y(un,null,{"aside-top":C(()=>[L(t.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":C(()=>[L(t.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":C(()=>[L(t.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":C(()=>[L(t.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":C(()=>[L(t.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":C(()=>[L(t.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):x("",!0),M("div",Vn,[M("div",Rn,[L(t.$slots,"doc-before",{},void 0,!0),M("main",jn,[y(f,{class:H(["vp-doc",[o.value,m(l).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),y(Fn,null,{"doc-footer-before":C(()=>[L(t.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),L(t.$slots,"doc-after",{},void 0,!0)])])]),L(t.$slots,"doc-bottom",{},void 0,!0)],2)}}}),qn=A(Un,[["__scopeId","data-v-d60dc8ac"]]),Gn=v({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(c){const l=c,s=k(()=>l.href&&f6.test(l.href)),e=k(()=>l.tag||l.href?"a":"button");return(a,n)=>(r(),w(S2(e.value),{class:H(["VPButton",[a.size,a.theme]]),href:a.href?m(W3)(a.href):void 0,target:l.target??(s.value?"_blank":void 0),rel:l.rel??(s.value?"noreferrer":void 0)},{default:C(()=>[J(E(a.text),1)]),_:1},8,["class","href","target","rel"]))}}),Wn=A(Gn,[["__scopeId","data-v-1312e06d"]]),Xn=["src","alt"],Yn=v({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(c){return(l,s)=>{const e=$2("VPImage",!0);return l.image?(r(),u(V,{key:0},[typeof l.image=="string"||"src"in l.image?(r(),u("img",I2({key:0,class:"VPImage"},typeof l.image=="string"?l.$attrs:{...l.image,...l.$attrs},{src:m(U3)(typeof l.image=="string"?l.image:l.image.src),alt:l.alt??(typeof l.image=="string"?"":l.image.alt||"")}),null,16,Xn)):(r(),u(V,{key:1},[y(e,I2({class:"dark",image:l.image.dark,alt:l.image.alt},l.$attrs),null,16,["image","alt"]),y(e,I2({class:"light",image:l.image.light,alt:l.image.alt},l.$attrs),null,16,["image","alt"])],64))],64)):x("",!0)}}}),x1=A(Yn,[["__scopeId","data-v-99c6a50c"]]),Kn=c=>(q("data-v-11ebb254"),c=c(),G(),c),Zn={class:"container"},Qn={class:"main"},Jn={key:0,class:"name"},co=["innerHTML"],lo=["innerHTML"],so=["innerHTML"],eo={key:0,class:"actions"},ao={key:0,class:"image"},no={class:"image-container"},oo=Kn(()=>M("div",{class:"image-bg"},null,-1)),to=v({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(c){const l=e1("hero-image-slot-exists");return(s,e)=>(r(),u("div",{class:H(["VPHero",{"has-image":s.image||m(l)}])},[M("div",Zn,[M("div",Qn,[L(s.$slots,"home-hero-info-before",{},void 0,!0),L(s.$slots,"home-hero-info",{},()=>[s.name?(r(),u("h1",Jn,[M("span",{innerHTML:s.name,class:"clip"},null,8,co)])):x("",!0),s.text?(r(),u("p",{key:1,innerHTML:s.text,class:"text"},null,8,lo)):x("",!0),s.tagline?(r(),u("p",{key:2,innerHTML:s.tagline,class:"tagline"},null,8,so)):x("",!0)],!0),L(s.$slots,"home-hero-info-after",{},void 0,!0),s.actions?(r(),u("div",eo,[(r(!0),u(V,null,W(s.actions,a=>(r(),u("div",{key:a.link,class:"action"},[y(Wn,{tag:"a",size:"medium",theme:a.theme,text:a.text,href:a.link,target:a.target,rel:a.rel},null,8,["theme","text","href","target","rel"])]))),128))])):x("",!0),L(s.$slots,"home-hero-actions-after",{},void 0,!0)]),s.image||m(l)?(r(),u("div",ao,[M("div",no,[oo,L(s.$slots,"home-hero-image",{},()=>[s.image?(r(),w(x1,{key:0,class:"image-src",image:s.image},null,8,["image"])):x("",!0)],!0)])])):x("",!0)])],2))}}),io=A(to,[["__scopeId","data-v-11ebb254"]]),ro=v({__name:"VPHomeHero",setup(c){const{frontmatter:l}=T();return(s,e)=>m(l).hero?(r(),w(io,{key:0,class:"VPHomeHero",name:m(l).hero.name,text:m(l).hero.text,tagline:m(l).hero.tagline,image:m(l).hero.image,actions:m(l).hero.actions},{"home-hero-info-before":C(()=>[L(s.$slots,"home-hero-info-before")]),"home-hero-info":C(()=>[L(s.$slots,"home-hero-info")]),"home-hero-info-after":C(()=>[L(s.$slots,"home-hero-info-after")]),"home-hero-actions-after":C(()=>[L(s.$slots,"home-hero-actions-after")]),"home-hero-image":C(()=>[L(s.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):x("",!0)}}),fo=c=>(q("data-v-0deec81d"),c=c(),G(),c),mo={class:"box"},zo={key:0,class:"icon"},Lo=["innerHTML"],uo=["innerHTML"],po=["innerHTML"],Mo={key:4,class:"link-text"},Co={class:"link-text-value"},ho=fo(()=>M("span",{class:"vpi-arrow-right link-text-icon"},null,-1)),go=v({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(c){return(l,s)=>(r(),w(a2,{class:"VPFeature",href:l.link,rel:l.rel,target:l.target,"no-icon":!0,tag:l.link?"a":"div"},{default:C(()=>[M("article",mo,[typeof l.icon=="object"&&l.icon.wrap?(r(),u("div",zo,[y(x1,{image:l.icon,alt:l.icon.alt,height:l.icon.height||48,width:l.icon.width||48},null,8,["image","alt","height","width"])])):typeof l.icon=="object"?(r(),w(x1,{key:1,image:l.icon,alt:l.icon.alt,height:l.icon.height||48,width:l.icon.width||48},null,8,["image","alt","height","width"])):l.icon?(r(),u("div",{key:2,class:"icon",innerHTML:l.icon},null,8,Lo)):x("",!0),M("h2",{class:"title",innerHTML:l.title},null,8,uo),l.details?(r(),u("p",{key:3,class:"details",innerHTML:l.details},null,8,po)):x("",!0),l.linkText?(r(),u("div",Mo,[M("p",Co,[J(E(l.linkText)+" ",1),ho])])):x("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),xo=A(go,[["__scopeId","data-v-0deec81d"]]),bo={key:0,class:"VPFeatures"},vo={class:"container"},No={class:"items"},yo=v({__name:"VPFeatures",props:{features:{}},setup(c){const l=c,s=k(()=>{const e=l.features.length;if(e){if(e===2)return"grid-2";if(e===3)return"grid-3";if(e%3===0)return"grid-6";if(e>3)return"grid-4"}else return});return(e,a)=>e.features?(r(),u("div",bo,[M("div",vo,[M("div",No,[(r(!0),u(V,null,W(e.features,n=>(r(),u("div",{key:n.title,class:H(["item",[s.value]])},[y(xo,{icon:n.icon,title:n.title,details:n.details,link:n.link,"link-text":n.linkText,rel:n.rel,target:n.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):x("",!0)}}),ko=A(yo,[["__scopeId","data-v-a2c03767"]]),So=v({__name:"VPHomeFeatures",setup(c){const{frontmatter:l}=T();return(s,e)=>m(l).features?(r(),w(ko,{key:0,class:"VPHomeFeatures",features:m(l).features},null,8,["features"])):x("",!0)}}),wo=v({__name:"VPHomeContent",setup(c){const{width:l}=La({includeScrollbar:!1});return(s,e)=>(r(),u("div",{class:"vp-doc container",style:P1(m(l)?{"--vp-offset":`calc(50% - ${m(l)/2}px)`}:{})},[L(s.$slots,"default",{},void 0,!0)],4))}}),_o=A(wo,[["__scopeId","data-v-a927db4b"]]),Ao={class:"VPHome"},Po=v({__name:"VPHome",setup(c){const{frontmatter:l}=T();return(s,e)=>{const a=$2("Content");return r(),u("div",Ao,[L(s.$slots,"home-hero-before",{},void 0,!0),y(ro,null,{"home-hero-info-before":C(()=>[L(s.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":C(()=>[L(s.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":C(()=>[L(s.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":C(()=>[L(s.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":C(()=>[L(s.$slots,"home-hero-image",{},void 0,!0)]),_:3}),L(s.$slots,"home-hero-after",{},void 0,!0),L(s.$slots,"home-features-before",{},void 0,!0),y(So),L(s.$slots,"home-features-after",{},void 0,!0),m(l).markdownStyles!==!1?(r(),w(_o,{key:0},{default:C(()=>[y(a)]),_:1})):(r(),w(a,{key:1}))])}}}),To=A(Po,[["__scopeId","data-v-ff664f88"]]),$o={},Bo={class:"VPPage"};function Fo(c,l){const s=$2("Content");return r(),u("div",Bo,[L(c.$slots,"page-top"),y(s),L(c.$slots,"page-bottom")])}const Ho=A($o,[["render",Fo]]),Eo=v({__name:"VPContent",setup(c){const{page:l,frontmatter:s}=T(),{hasSidebar:e}=L2();return(a,n)=>(r(),u("div",{class:H(["VPContent",{"has-sidebar":m(e),"is-home":m(s).layout==="home"}]),id:"VPContent"},[m(l).isNotFound?L(a.$slots,"not-found",{key:0},()=>[y(Ra)],!0):m(s).layout==="page"?(r(),w(Ho,{key:1},{"page-top":C(()=>[L(a.$slots,"page-top",{},void 0,!0)]),"page-bottom":C(()=>[L(a.$slots,"page-bottom",{},void 0,!0)]),_:3})):m(s).layout==="home"?(r(),w(To,{key:2},{"home-hero-before":C(()=>[L(a.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":C(()=>[L(a.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":C(()=>[L(a.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":C(()=>[L(a.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":C(()=>[L(a.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":C(()=>[L(a.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":C(()=>[L(a.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":C(()=>[L(a.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":C(()=>[L(a.$slots,"home-features-after",{},void 0,!0)]),_:3})):m(s).layout&&m(s).layout!=="doc"?(r(),w(S2(m(s).layout),{key:3})):(r(),w(qn,{key:4},{"doc-top":C(()=>[L(a.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":C(()=>[L(a.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":C(()=>[L(a.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":C(()=>[L(a.$slots,"doc-before",{},void 0,!0)]),"doc-after":C(()=>[L(a.$slots,"doc-after",{},void 0,!0)]),"aside-top":C(()=>[L(a.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":C(()=>[L(a.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":C(()=>[L(a.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":C(()=>[L(a.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":C(()=>[L(a.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":C(()=>[L(a.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),Oo=A(Eo,[["__scopeId","data-v-611475d2"]]),Do={class:"container"},Io=["innerHTML"],Vo=["innerHTML"],Ro=v({__name:"VPFooter",setup(c){const{theme:l,frontmatter:s}=T(),{hasSidebar:e}=L2();return(a,n)=>m(l).footer&&m(s).footer!==!1?(r(),u("footer",{key:0,class:H(["VPFooter",{"has-sidebar":m(e)}])},[M("div",Do,[m(l).footer.message?(r(),u("p",{key:0,class:"message",innerHTML:m(l).footer.message},null,8,Io)):x("",!0),m(l).footer.copyright?(r(),u("p",{key:1,class:"copyright",innerHTML:m(l).footer.copyright},null,8,Vo)):x("",!0)])],2)):x("",!0)}}),jo=A(Ro,[["__scopeId","data-v-2dae906f"]]);function d6(){const{theme:c,frontmatter:l}=T(),s=r6([]),e=k(()=>s.value.length>0);return _1(()=>{s.value=Y3(l.value.outline??c.value.outline)}),{headers:s,hasLocalNav:e}}const Uo=c=>(q("data-v-94588e0f"),c=c(),G(),c),qo=Uo(()=>M("span",{class:"vpi-chevron-right icon"},null,-1)),Go={class:"header"},Wo={class:"outline"},Xo=v({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(c){const l=c,{theme:s}=T(),e=B(!1),a=B(0),n=B(),o=B();ua(n,()=>{e.value=!1}),g3("Escape",()=>{e.value=!1}),_1(()=>{e.value=!1});function t(){e.value=!e.value,a.value=window.innerHeight+Math.min(window.scrollY-l.navHeight,0)}function i(z){z.target.classList.contains("outline-link")&&(o.value&&(o.value.style.transition="none"),pa(()=>{e.value=!1}))}function f(){e.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(z,d)=>(r(),u("div",{class:"VPLocalNavOutlineDropdown",style:P1({"--vp-vh":a.value+"px"}),ref_key:"main",ref:n},[z.headers.length>0?(r(),u("button",{key:0,onClick:t,class:H({open:e.value})},[J(E(m(p6)(m(s)))+" ",1),qo],2)):(r(),u("button",{key:1,onClick:f},E(m(s).returnToTopLabel||"Return to top"),1)),y(S1,{name:"flyout"},{default:C(()=>[e.value?(r(),u("div",{key:0,ref_key:"items",ref:o,class:"items",onClick:i},[M("div",Go,[M("a",{class:"top-link",href:"#",onClick:f},E(m(s).returnToTopLabel||"Return to top"),1)]),M("div",Wo,[y(M6,{headers:z.headers},null,8,["headers"])])],512)):x("",!0)]),_:1})],4))}}),Yo=A(Xo,[["__scopeId","data-v-94588e0f"]]),Ko=c=>(q("data-v-2ddaf22e"),c=c(),G(),c),Zo={class:"container"},Qo=["aria-expanded"],Jo=Ko(()=>M("span",{class:"vpi-align-left menu-icon"},null,-1)),ct={class:"menu-text"},lt=v({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(c){const{theme:l,frontmatter:s}=T(),{hasSidebar:e}=L2(),{headers:a}=d6(),{y:n}=m6(),o=B(0);v2(()=>{o.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),_1(()=>{a.value=Y3(s.value.outline??l.value.outline)});const t=k(()=>a.value.length===0),i=k(()=>t.value&&!e.value),f=k(()=>({VPLocalNav:!0,"has-sidebar":e.value,empty:t.value,fixed:i.value}));return(z,d)=>m(s).layout!=="home"&&(!i.value||m(n)>=o.value)?(r(),u("div",{key:0,class:H(f.value)},[M("div",Zo,[m(e)?(r(),u("button",{key:0,class:"menu","aria-expanded":z.open,"aria-controls":"VPSidebarNav",onClick:d[0]||(d[0]=p=>z.$emit("open-menu"))},[Jo,M("span",ct,E(m(l).sidebarMenuLabel||"Menu"),1)],8,Qo)):x("",!0),y(Yo,{headers:m(a),navHeight:o.value},null,8,["headers","navHeight"])])],2)):x("",!0)}}),st=A(lt,[["__scopeId","data-v-2ddaf22e"]]);function et(){const c=B(!1);function l(){c.value=!0,window.addEventListener("resize",a)}function s(){c.value=!1,window.removeEventListener("resize",a)}function e(){c.value?s():l()}function a(){window.outerWidth>=768&&s()}const n=A1();return t2(()=>n.path,s),{isScreenOpen:c,openScreen:l,closeScreen:s,toggleScreen:e}}const at={},nt={class:"VPSwitch",type:"button",role:"switch"},ot={class:"check"},tt={key:0,class:"icon"};function it(c,l){return r(),u("button",nt,[M("span",ot,[c.$slots.default?(r(),u("span",tt,[L(c.$slots,"default",{},void 0,!0)])):x("",!0)])])}const rt=A(at,[["render",it],["__scopeId","data-v-60da0c34"]]),C6=c=>(q("data-v-4e6a6998"),c=c(),G(),c),ft=C6(()=>M("span",{class:"vpi-sun sun"},null,-1)),mt=C6(()=>M("span",{class:"vpi-moon moon"},null,-1)),zt=v({__name:"VPSwitchAppearance",setup(c){const{isDark:l,theme:s}=T(),e=e1("toggle-appearance",()=>{l.value=!l.value}),a=k(()=>l.value?s.value.lightModeSwitchTitle||"Switch to light theme":s.value.darkModeSwitchTitle||"Switch to dark theme");return(n,o)=>(r(),w(rt,{title:a.value,class:"VPSwitchAppearance","aria-checked":m(l),onClick:m(e)},{default:C(()=>[ft,mt]),_:1},8,["title","aria-checked","onClick"]))}}),K3=A(zt,[["__scopeId","data-v-4e6a6998"]]),Lt={key:0,class:"VPNavBarAppearance"},ut=v({__name:"VPNavBarAppearance",setup(c){const{site:l}=T();return(s,e)=>m(l).appearance&&m(l).appearance!=="force-dark"?(r(),u("div",Lt,[y(K3)])):x("",!0)}}),pt=A(ut,[["__scopeId","data-v-97fc0136"]]),Z3=B();let h6=!1,e3=0;function Mt(c){const l=B(!1);if(q2){!h6&&dt(),e3++;const s=t2(Z3,e=>{var a,n,o;e===c.el.value||(a=c.el.value)!=null&&a.contains(e)?(l.value=!0,(n=c.onFocus)==null||n.call(c)):(l.value=!1,(o=c.onBlur)==null||o.call(c))});q3(()=>{s(),e3--,e3||Ct()})}return Ma(l)}function dt(){document.addEventListener("focusin",g6),h6=!0,Z3.value=document.activeElement}function Ct(){document.removeEventListener("focusin",g6)}function g6(){Z3.value=document.activeElement}const ht={class:"VPMenuLink"},gt=v({__name:"VPMenuLink",props:{item:{}},setup(c){const{page:l}=T();return(s,e)=>(r(),u("div",ht,[y(a2,{class:H({active:m(A2)(m(l).relativePath,s.item.activeMatch||s.item.link,!!s.item.activeMatch)}),href:s.item.link,target:s.item.target,rel:s.item.rel},{default:C(()=>[J(E(s.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),T1=A(gt,[["__scopeId","data-v-3a5eb272"]]),xt={class:"VPMenuGroup"},bt={key:0,class:"title"},vt=v({__name:"VPMenuGroup",props:{text:{},items:{}},setup(c){return(l,s)=>(r(),u("div",xt,[l.text?(r(),u("p",bt,E(l.text),1)):x("",!0),(r(!0),u(V,null,W(l.items,e=>(r(),u(V,null,["link"in e?(r(),w(T1,{key:0,item:e},null,8,["item"])):x("",!0)],64))),256))]))}}),Nt=A(vt,[["__scopeId","data-v-c90ef881"]]),yt={class:"VPMenu"},kt={key:0,class:"items"},St=v({__name:"VPMenu",props:{items:{}},setup(c){return(l,s)=>(r(),u("div",yt,[l.items?(r(),u("div",kt,[(r(!0),u(V,null,W(l.items,e=>(r(),u(V,{key:e.text},["link"in e?(r(),w(T1,{key:0,item:e},null,8,["item"])):(r(),w(Nt,{key:1,text:e.text,items:e.items},null,8,["text","items"]))],64))),128))])):x("",!0),L(l.$slots,"default",{},void 0,!0)]))}}),wt=A(St,[["__scopeId","data-v-75a92208"]]),_t=c=>(q("data-v-c5568f3a"),c=c(),G(),c),At=["aria-expanded","aria-label"],Pt={key:0,class:"text"},Tt=["innerHTML"],$t=_t(()=>M("span",{class:"vpi-chevron-down text-icon"},null,-1)),Bt={key:1,class:"vpi-more-horizontal icon"},Ft={class:"menu"},Ht=v({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(c){const l=B(!1),s=B();Mt({el:s,onBlur:e});function e(){l.value=!1}return(a,n)=>(r(),u("div",{class:"VPFlyout",ref_key:"el",ref:s,onMouseenter:n[1]||(n[1]=o=>l.value=!0),onMouseleave:n[2]||(n[2]=o=>l.value=!1)},[M("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":l.value,"aria-label":a.label,onClick:n[0]||(n[0]=o=>l.value=!l.value)},[a.button||a.icon?(r(),u("span",Pt,[a.icon?(r(),u("span",{key:0,class:H([a.icon,"option-icon"])},null,2)):x("",!0),a.button?(r(),u("span",{key:1,innerHTML:a.button},null,8,Tt)):x("",!0),$t])):(r(),u("span",Bt))],8,At),M("div",Ft,[y(wt,{items:a.items},{default:C(()=>[L(a.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Q3=A(Ht,[["__scopeId","data-v-c5568f3a"]]),Et=["href","aria-label","innerHTML"],Ot=v({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(c){const l=c,s=k(()=>typeof l.icon=="object"?l.icon.svg:`<span class="vpi-social-${l.icon}" />`);return(e,a)=>(r(),u("a",{class:"VPSocialLink no-icon",href:e.link,"aria-label":e.ariaLabel??(typeof e.icon=="string"?e.icon:""),target:"_blank",rel:"noopener",innerHTML:s.value},null,8,Et))}}),Dt=A(Ot,[["__scopeId","data-v-613a9d3a"]]),It={class:"VPSocialLinks"},Vt=v({__name:"VPSocialLinks",props:{links:{}},setup(c){return(l,s)=>(r(),u("div",It,[(r(!0),u(V,null,W(l.links,({link:e,icon:a,ariaLabel:n})=>(r(),w(Dt,{key:e,icon:a,link:e,ariaLabel:n},null,8,["icon","link","ariaLabel"]))),128))]))}}),J3=A(Vt,[["__scopeId","data-v-c5f2bbdd"]]),Rt={key:0,class:"group translations"},jt={class:"trans-title"},Ut={key:1,class:"group"},qt={class:"item appearance"},Gt={class:"label"},Wt={class:"appearance-action"},Xt={key:2,class:"group"},Yt={class:"item social-links"},Kt=v({__name:"VPNavBarExtra",setup(c){const{site:l,theme:s}=T(),{localeLinks:e,currentLang:a}=a1({correspondingLink:!0}),n=k(()=>e.value.length&&a.value.label||l.value.appearance||s.value.socialLinks);return(o,t)=>n.value?(r(),w(Q3,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:C(()=>[m(e).length&&m(a).label?(r(),u("div",Rt,[M("p",jt,E(m(a).label),1),(r(!0),u(V,null,W(m(e),i=>(r(),w(T1,{key:i.link,item:i},null,8,["item"]))),128))])):x("",!0),m(l).appearance&&m(l).appearance!=="force-dark"?(r(),u("div",Ut,[M("div",qt,[M("p",Gt,E(m(s).darkModeSwitchLabel||"Appearance"),1),M("div",Wt,[y(K3)])])])):x("",!0),m(s).socialLinks?(r(),u("div",Xt,[M("div",Yt,[y(J3,{class:"social-links-list",links:m(s).socialLinks},null,8,["links"])])])):x("",!0)]),_:1})):x("",!0)}}),Zt=A(Kt,[["__scopeId","data-v-da51ad02"]]),Qt=c=>(q("data-v-78f0a91b"),c=c(),G(),c),Jt=["aria-expanded"],ci=Qt(()=>M("span",{class:"container"},[M("span",{class:"top"}),M("span",{class:"middle"}),M("span",{class:"bottom"})],-1)),li=[ci],si=v({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(c){return(l,s)=>(r(),u("button",{type:"button",class:H(["VPNavBarHamburger",{active:l.active}]),"aria-label":"mobile navigation","aria-expanded":l.active,"aria-controls":"VPNavScreen",onClick:s[0]||(s[0]=e=>l.$emit("click"))},li,10,Jt))}}),ei=A(si,[["__scopeId","data-v-78f0a91b"]]),ai=["innerHTML"],ni=v({__name:"VPNavBarMenuLink",props:{item:{}},setup(c){const{page:l}=T();return(s,e)=>(r(),w(a2,{class:H({VPNavBarMenuLink:!0,active:m(A2)(m(l).relativePath,s.item.activeMatch||s.item.link,!!s.item.activeMatch)}),href:s.item.link,target:s.item.target,rel:s.item.rel,tabindex:"0"},{default:C(()=>[M("span",{innerHTML:s.item.text},null,8,ai)]),_:1},8,["class","href","target","rel"]))}}),oi=A(ni,[["__scopeId","data-v-ef6527ce"]]),ti=v({__name:"VPNavBarMenuGroup",props:{item:{}},setup(c){const l=c,{page:s}=T(),e=n=>"link"in n?A2(s.value.relativePath,n.link,!!l.item.activeMatch):n.items.some(e),a=k(()=>e(l.item));return(n,o)=>(r(),w(Q3,{class:H({VPNavBarMenuGroup:!0,active:m(A2)(m(s).relativePath,n.item.activeMatch,!!n.item.activeMatch)||a.value}),button:n.item.text,items:n.item.items},null,8,["class","button","items"]))}}),ii=c=>(q("data-v-d6e5eb35"),c=c(),G(),c),ri={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},fi=ii(()=>M("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),mi=v({__name:"VPNavBarMenu",setup(c){const{theme:l}=T();return(s,e)=>m(l).nav?(r(),u("nav",ri,[fi,(r(!0),u(V,null,W(m(l).nav,a=>(r(),u(V,{key:a.text},["link"in a?(r(),w(oi,{key:0,item:a},null,8,["item"])):(r(),w(ti,{key:1,item:a},null,8,["item"]))],64))),128))])):x("",!0)}}),zi=A(mi,[["__scopeId","data-v-d6e5eb35"]]);function Li(c){const{localeIndex:l,theme:s}=T();function e(a){var S,P,_;const n=a.split("."),o=(S=s.value.search)==null?void 0:S.options,t=o&&typeof o=="object",i=t&&((_=(P=o.locales)==null?void 0:P[l.value])==null?void 0:_.translations)||null,f=t&&o.translations||null;let z=i,d=f,p=c;const h=n.pop();for(const g of n){let b=null;const $=p==null?void 0:p[g];$&&(b=p=$);const F=d==null?void 0:d[g];F&&(b=d=F);const j=z==null?void 0:z[g];j&&(b=z=j),$||(p=b),F||(d=b),j||(z=b)}return(z==null?void 0:z[h])??(d==null?void 0:d[h])??(p==null?void 0:p[h])??""}return e}const ui=["aria-label"],pi={class:"DocSearch-Button-Container"},Mi=M("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1),di={class:"DocSearch-Button-Placeholder"},Ci=M("span",{class:"DocSearch-Button-Keys"},[M("kbd",{class:"DocSearch-Button-Key"}),M("kbd",{class:"DocSearch-Button-Key"},"K")],-1),o0=v({__name:"VPNavBarSearchButton",setup(c){const s=Li({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(e,a)=>(r(),u("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":m(s)("button.buttonAriaLabel")},[M("span",pi,[Mi,M("span",di,E(m(s)("button.buttonText")),1)]),Ci],8,ui))}}),hi={class:"VPNavBarSearch"},gi={id:"local-search"},xi={key:1,id:"docsearch"},bi=v({__name:"VPNavBarSearch",setup(c){const l=da(()=>Ca(()=>import("./VPLocalSearchBox.thagPJ9f.js"),__vite__mapDeps([0,1]))),s=()=>null,{theme:e}=T(),a=B(!1),n=B(!1);v2(()=>{});function o(){a.value||(a.value=!0,setTimeout(t,16))}function t(){const d=new Event("keydown");d.key="k",d.metaKey=!0,window.dispatchEvent(d),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||t()},16)}function i(d){const p=d.target,h=p.tagName;return p.isContentEditable||h==="INPUT"||h==="SELECT"||h==="TEXTAREA"}const f=B(!1);g3("k",d=>{(d.ctrlKey||d.metaKey)&&(d.preventDefault(),f.value=!0)}),g3("/",d=>{i(d)||(d.preventDefault(),f.value=!0)});const z="local";return(d,p)=>{var h;return r(),u("div",hi,[m(z)==="local"?(r(),u(V,{key:0},[f.value?(r(),w(m(l),{key:0,onClose:p[0]||(p[0]=S=>f.value=!1)})):x("",!0),M("div",gi,[y(o0,{onClick:p[1]||(p[1]=S=>f.value=!0)})])],64)):m(z)==="algolia"?(r(),u(V,{key:1},[a.value?(r(),w(m(s),{key:0,algolia:((h=m(e).search)==null?void 0:h.options)??m(e).algolia,onVnodeBeforeMount:p[2]||(p[2]=S=>n.value=!0)},null,8,["algolia"])):x("",!0),n.value?x("",!0):(r(),u("div",xi,[y(o0,{onClick:o})]))],64)):x("",!0)])}}}),vi=v({__name:"VPNavBarSocialLinks",setup(c){const{theme:l}=T();return(s,e)=>m(l).socialLinks?(r(),w(J3,{key:0,class:"VPNavBarSocialLinks",links:m(l).socialLinks},null,8,["links"])):x("",!0)}}),Ni=A(vi,[["__scopeId","data-v-e86ab840"]]),yi=["href","rel","target"],ki={key:1},Si={key:2},wi=v({__name:"VPNavBarTitle",setup(c){const{site:l,theme:s}=T(),{hasSidebar:e}=L2(),{currentLang:a}=a1(),n=k(()=>{var i;return typeof s.value.logoLink=="string"?s.value.logoLink:(i=s.value.logoLink)==null?void 0:i.link}),o=k(()=>{var i;return typeof s.value.logoLink=="string"||(i=s.value.logoLink)==null?void 0:i.rel}),t=k(()=>{var i;return typeof s.value.logoLink=="string"||(i=s.value.logoLink)==null?void 0:i.target});return(i,f)=>(r(),u("div",{class:H(["VPNavBarTitle",{"has-sidebar":m(e)}])},[M("a",{class:"title",href:n.value??m(W3)(m(a).link),rel:o.value,target:t.value},[L(i.$slots,"nav-bar-title-before",{},void 0,!0),m(s).logo?(r(),w(x1,{key:0,class:"logo",image:m(s).logo},null,8,["image"])):x("",!0),m(s).siteTitle?(r(),u("span",ki,E(m(s).siteTitle),1)):m(s).siteTitle===void 0?(r(),u("span",Si,E(m(l).title),1)):x("",!0),L(i.$slots,"nav-bar-title-after",{},void 0,!0)],8,yi)],2))}}),_i=A(wi,[["__scopeId","data-v-d95e3ce2"]]),Ai={class:"items"},Pi={class:"title"},Ti=v({__name:"VPNavBarTranslations",setup(c){const{theme:l}=T(),{localeLinks:s,currentLang:e}=a1({correspondingLink:!0});return(a,n)=>m(s).length&&m(e).label?(r(),w(Q3,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:m(l).langMenuLabel||"Change language"},{default:C(()=>[M("div",Ai,[M("p",Pi,E(m(e).label),1),(r(!0),u(V,null,W(m(s),o=>(r(),w(T1,{key:o.link,item:o},null,8,["item"]))),128))])]),_:1},8,["label"])):x("",!0)}}),$i=A(Ti,[["__scopeId","data-v-52024514"]]),Bi=c=>(q("data-v-84466230"),c=c(),G(),c),Fi={class:"wrapper"},Hi={class:"container"},Ei={class:"title"},Oi={class:"content"},Di={class:"content-body"},Ii=Bi(()=>M("div",{class:"divider"},[M("div",{class:"divider-line"})],-1)),Vi=v({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(c){const{y:l}=m6(),{hasSidebar:s}=L2(),{hasLocalNav:e}=d6(),{frontmatter:a}=T(),n=B({});return i6(()=>{n.value={"has-sidebar":s.value,"has-local-nav":e.value,top:a.value.layout==="home"&&l.value===0}}),(o,t)=>(r(),u("div",{class:H(["VPNavBar",n.value])},[M("div",Fi,[M("div",Hi,[M("div",Ei,[y(_i,null,{"nav-bar-title-before":C(()=>[L(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":C(()=>[L(o.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),M("div",Oi,[M("div",Di,[L(o.$slots,"nav-bar-content-before",{},void 0,!0),y(bi,{class:"search"}),y(zi,{class:"menu"}),y($i,{class:"translations"}),y(pt,{class:"appearance"}),y(Ni,{class:"social-links"}),y(Zt,{class:"extra"}),L(o.$slots,"nav-bar-content-after",{},void 0,!0),y(ei,{class:"hamburger",active:o.isScreenOpen,onClick:t[0]||(t[0]=i=>o.$emit("toggle-screen"))},null,8,["active"])])])])]),Ii],2))}}),Ri=A(Vi,[["__scopeId","data-v-84466230"]]),ji={key:0,class:"VPNavScreenAppearance"},Ui={class:"text"},qi=v({__name:"VPNavScreenAppearance",setup(c){const{site:l,theme:s}=T();return(e,a)=>m(l).appearance&&m(l).appearance!=="force-dark"?(r(),u("div",ji,[M("p",Ui,E(m(s).darkModeSwitchLabel||"Appearance"),1),y(K3)])):x("",!0)}}),Gi=A(qi,[["__scopeId","data-v-49fcf4a0"]]),Wi=v({__name:"VPNavScreenMenuLink",props:{item:{}},setup(c){const l=e1("close-screen");return(s,e)=>(r(),w(a2,{class:"VPNavScreenMenuLink",href:s.item.link,target:s.item.target,rel:s.item.rel,onClick:m(l)},{default:C(()=>[J(E(s.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Xi=A(Wi,[["__scopeId","data-v-41a3b352"]]),Yi=v({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(c){const l=e1("close-screen");return(s,e)=>(r(),w(a2,{class:"VPNavScreenMenuGroupLink",href:s.item.link,target:s.item.target,rel:s.item.rel,onClick:m(l)},{default:C(()=>[J(E(s.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),x6=A(Yi,[["__scopeId","data-v-c16ade25"]]),Ki={class:"VPNavScreenMenuGroupSection"},Zi={key:0,class:"title"},Qi=v({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(c){return(l,s)=>(r(),u("div",Ki,[l.text?(r(),u("p",Zi,E(l.text),1)):x("",!0),(r(!0),u(V,null,W(l.items,e=>(r(),w(x6,{key:e.text,item:e},null,8,["item"]))),128))]))}}),Ji=A(Qi,[["__scopeId","data-v-153e07bb"]]),cr=c=>(q("data-v-d9df9740"),c=c(),G(),c),lr=["aria-controls","aria-expanded"],sr=["innerHTML"],er=cr(()=>M("span",{class:"vpi-plus button-icon"},null,-1)),ar=["id"],nr={key:1,class:"group"},or=v({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(c){const l=c,s=B(!1),e=k(()=>`NavScreenGroup-${l.text.replace(" ","-").toLowerCase()}`);function a(){s.value=!s.value}return(n,o)=>(r(),u("div",{class:H(["VPNavScreenMenuGroup",{open:s.value}])},[M("button",{class:"button","aria-controls":e.value,"aria-expanded":s.value,onClick:a},[M("span",{class:"button-text",innerHTML:n.text},null,8,sr),er],8,lr),M("div",{id:e.value,class:"items"},[(r(!0),u(V,null,W(n.items,t=>(r(),u(V,{key:t.text},["link"in t?(r(),u("div",{key:t.text,class:"item"},[y(x6,{item:t},null,8,["item"])])):(r(),u("div",nr,[y(Ji,{text:t.text,items:t.items},null,8,["text","items"])]))],64))),128))],8,ar)],2))}}),tr=A(or,[["__scopeId","data-v-d9df9740"]]),ir={key:0,class:"VPNavScreenMenu"},rr=v({__name:"VPNavScreenMenu",setup(c){const{theme:l}=T();return(s,e)=>m(l).nav?(r(),u("nav",ir,[(r(!0),u(V,null,W(m(l).nav,a=>(r(),u(V,{key:a.text},["link"in a?(r(),w(Xi,{key:0,item:a},null,8,["item"])):(r(),w(tr,{key:1,text:a.text||"",items:a.items},null,8,["text","items"]))],64))),128))])):x("",!0)}}),fr=v({__name:"VPNavScreenSocialLinks",setup(c){const{theme:l}=T();return(s,e)=>m(l).socialLinks?(r(),w(J3,{key:0,class:"VPNavScreenSocialLinks",links:m(l).socialLinks},null,8,["links"])):x("",!0)}}),b6=c=>(q("data-v-3fbb2345"),c=c(),G(),c),mr=b6(()=>M("span",{class:"vpi-languages icon lang"},null,-1)),zr=b6(()=>M("span",{class:"vpi-chevron-down icon chevron"},null,-1)),Lr={class:"list"},ur=v({__name:"VPNavScreenTranslations",setup(c){const{localeLinks:l,currentLang:s}=a1({correspondingLink:!0}),e=B(!1);function a(){e.value=!e.value}return(n,o)=>m(l).length&&m(s).label?(r(),u("div",{key:0,class:H(["VPNavScreenTranslations",{open:e.value}])},[M("button",{class:"title",onClick:a},[mr,J(" "+E(m(s).label)+" ",1),zr]),M("ul",Lr,[(r(!0),u(V,null,W(m(l),t=>(r(),u("li",{key:t.link,class:"item"},[y(a2,{class:"link",href:t.link},{default:C(()=>[J(E(t.text),1)]),_:2},1032,["href"])]))),128))])],2)):x("",!0)}}),pr=A(ur,[["__scopeId","data-v-3fbb2345"]]),Mr={class:"container"},dr=v({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(c){const l=B(null),s=z6(q2?document.body:null);return(e,a)=>(r(),w(S1,{name:"fade",onEnter:a[0]||(a[0]=n=>s.value=!0),onAfterLeave:a[1]||(a[1]=n=>s.value=!1)},{default:C(()=>[e.open?(r(),u("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:l,id:"VPNavScreen"},[M("div",Mr,[L(e.$slots,"nav-screen-content-before",{},void 0,!0),y(rr,{class:"menu"}),y(pr,{class:"translations"}),y(Gi,{class:"appearance"}),y(fr,{class:"social-links"}),L(e.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):x("",!0)]),_:3}))}}),Cr=A(dr,[["__scopeId","data-v-7443de12"]]),hr={key:0,class:"VPNav"},gr=v({__name:"VPNav",setup(c){const{isScreenOpen:l,closeScreen:s,toggleScreen:e}=et(),{frontmatter:a}=T(),n=k(()=>a.value.navbar!==!1);return G3("close-screen",s),w1(()=>{q2&&document.documentElement.classList.toggle("hide-nav",!n.value)}),(o,t)=>n.value?(r(),u("header",hr,[y(Ri,{"is-screen-open":m(l),onToggleScreen:m(e)},{"nav-bar-title-before":C(()=>[L(o.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":C(()=>[L(o.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":C(()=>[L(o.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":C(()=>[L(o.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),y(Cr,{open:m(l)},{"nav-screen-content-before":C(()=>[L(o.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":C(()=>[L(o.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):x("",!0)}}),xr=A(gr,[["__scopeId","data-v-77044165"]]),v6=c=>(q("data-v-12a96728"),c=c(),G(),c),br=["role","tabindex"],vr=v6(()=>M("div",{class:"indicator"},null,-1)),Nr=v6(()=>M("span",{class:"vpi-chevron-right caret-icon"},null,-1)),yr=[Nr],kr={key:1,class:"items"},Sr=v({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(c){const l=c,{collapsed:s,collapsible:e,isLink:a,isActiveLink:n,hasActiveLink:o,hasChildren:t,toggle:i}=Ga(k(()=>l.item)),f=k(()=>t.value?"section":"div"),z=k(()=>a.value?"a":"div"),d=k(()=>t.value?l.depth+2===7?"p":`h${l.depth+2}`:"p"),p=k(()=>a.value?void 0:"button"),h=k(()=>[[`level-${l.depth}`],{collapsible:e.value},{collapsed:s.value},{"is-link":a.value},{"is-active":n.value},{"has-active":o.value}]);function S(_){"key"in _&&_.key!=="Enter"||!l.item.link&&i()}function P(){l.item.link&&i()}return(_,g)=>{const b=$2("VPSidebarItem",!0);return r(),w(S2(f.value),{class:H(["VPSidebarItem",h.value])},{default:C(()=>[_.item.text?(r(),u("div",I2({key:0,class:"item",role:p.value},ha(_.item.items?{click:S,keydown:S}:{},!0),{tabindex:_.item.items&&0}),[vr,_.item.link?(r(),w(a2,{key:0,tag:z.value,class:"link",href:_.item.link,rel:_.item.rel,target:_.item.target},{default:C(()=>[(r(),w(S2(d.value),{class:"text",innerHTML:_.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(r(),w(S2(d.value),{key:1,class:"text",innerHTML:_.item.text},null,8,["innerHTML"])),_.item.collapsed!=null?(r(),u("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:P,onKeydown:ga(P,["enter"]),tabindex:"0"},yr,32)):x("",!0)],16,br)):x("",!0),_.item.items&&_.item.items.length?(r(),u("div",kr,[_.depth<5?(r(!0),u(V,{key:0},W(_.item.items,$=>(r(),w(b,{key:$.text,item:$,depth:_.depth+1},null,8,["item","depth"]))),128)):x("",!0)])):x("",!0)]),_:1},8,["class"])}}}),wr=A(Sr,[["__scopeId","data-v-12a96728"]]),N6=c=>(q("data-v-5bac584f"),c=c(),G(),c),_r=N6(()=>M("div",{class:"curtain"},null,-1)),Ar={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Pr=N6(()=>M("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),Tr=v({__name:"VPSidebar",props:{open:{type:Boolean}},setup(c){const{sidebarGroups:l,hasSidebar:s}=L2(),e=c,a=B(null),n=z6(q2?document.body:null);return t2([e,a],()=>{var o;e.open?(n.value=!0,(o=a.value)==null||o.focus()):n.value=!1},{immediate:!0,flush:"post"}),(o,t)=>m(s)?(r(),u("aside",{key:0,class:H(["VPSidebar",{open:o.open}]),ref_key:"navEl",ref:a,onClick:t[0]||(t[0]=xa(()=>{},["stop"]))},[_r,M("nav",Ar,[Pr,L(o.$slots,"sidebar-nav-before",{},void 0,!0),(r(!0),u(V,null,W(m(l),i=>(r(),u("div",{key:i.text,class:"group"},[y(wr,{item:i,depth:0},null,8,["item"])]))),128)),L(o.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):x("",!0)}}),$r=A(Tr,[["__scopeId","data-v-5bac584f"]]),Br=v({__name:"VPSkipLink",setup(c){const l=A1(),s=B();t2(()=>l.path,()=>s.value.focus());function e({target:a}){const n=document.getElementById(decodeURIComponent(a.hash).slice(1));if(n){const o=()=>{n.removeAttribute("tabindex"),n.removeEventListener("blur",o)};n.setAttribute("tabindex","-1"),n.addEventListener("blur",o),n.focus(),window.scrollTo(0,0)}}return(a,n)=>(r(),u(V,null,[M("span",{ref_key:"backToTop",ref:s,tabindex:"-1"},null,512),M("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:e}," Skip to content ")],64))}}),Fr=A(Br,[["__scopeId","data-v-854dd13b"]]),Hr=v({__name:"Layout",setup(c){const{isOpen:l,open:s,close:e}=L2(),a=A1();t2(()=>a.path,e),qa(l,e);const{frontmatter:n}=T(),o=L6(),t=k(()=>!!o["home-hero-image"]);return G3("hero-image-slot-exists",t),(i,f)=>{const z=$2("Content");return m(n).layout!==!1?(r(),u("div",{key:0,class:H(["Layout",m(n).pageClass])},[L(i.$slots,"layout-top",{},void 0,!0),y(Fr),y(Aa,{class:"backdrop",show:m(l),onClick:m(e)},null,8,["show","onClick"]),y(xr,null,{"nav-bar-title-before":C(()=>[L(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":C(()=>[L(i.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":C(()=>[L(i.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":C(()=>[L(i.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":C(()=>[L(i.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":C(()=>[L(i.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),y(st,{open:m(l),onOpenMenu:m(s)},null,8,["open","onOpenMenu"]),y($r,{open:m(l)},{"sidebar-nav-before":C(()=>[L(i.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":C(()=>[L(i.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),y(Oo,null,{"page-top":C(()=>[L(i.$slots,"page-top",{},void 0,!0)]),"page-bottom":C(()=>[L(i.$slots,"page-bottom",{},void 0,!0)]),"not-found":C(()=>[L(i.$slots,"not-found",{},void 0,!0)]),"home-hero-before":C(()=>[L(i.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":C(()=>[L(i.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":C(()=>[L(i.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":C(()=>[L(i.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":C(()=>[L(i.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":C(()=>[L(i.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":C(()=>[L(i.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":C(()=>[L(i.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":C(()=>[L(i.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":C(()=>[L(i.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":C(()=>[L(i.$slots,"doc-before",{},void 0,!0)]),"doc-after":C(()=>[L(i.$slots,"doc-after",{},void 0,!0)]),"doc-top":C(()=>[L(i.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":C(()=>[L(i.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":C(()=>[L(i.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":C(()=>[L(i.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":C(()=>[L(i.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":C(()=>[L(i.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":C(()=>[L(i.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":C(()=>[L(i.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),y(jo),L(i.$slots,"layout-bottom",{},void 0,!0)],2)):(r(),w(z,{key:1}))}}}),Er=A(Hr,[["__scopeId","data-v-86e043e5"]]),Or={Layout:Er,enhanceApp:({app:c})=>{c.component("Badge",Sa)}},t0=()=>{};let c4={},y6={},k6=null,S6={mark:t0,measure:t0};try{typeof window<"u"&&(c4=window),typeof document<"u"&&(y6=document),typeof MutationObserver<"u"&&(k6=MutationObserver),typeof performance<"u"&&(S6=performance)}catch{}const{userAgent:i0=""}=c4.navigator||{},C2=c4,I=y6,r0=k6,z1=S6;C2.document;const u2=!!I.documentElement&&!!I.head&&typeof I.addEventListener=="function"&&typeof I.createElement=="function",w6=~i0.indexOf("MSIE")||~i0.indexOf("Trident/");var R="classic",_6="duotone",Y="sharp",K="sharp-duotone",Dr=[R,_6,Y,K],Ir={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},f0={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Vr=["kit"],Rr=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,jr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ur={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},qr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},Gr={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Wr={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Xr={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Yr={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},A6={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},Kr=["solid","regular","light","thin","duotone","brands"],P6=[1,2,3,4,5,6,7,8,9,10],Zr=P6.concat([11,12,13,14,15,16,17,18,19,20]),Y2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qr=[...Object.keys(Wr),...Kr,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Y2.GROUP,Y2.SWAP_OPACITY,Y2.PRIMARY,Y2.SECONDARY].concat(P6.map(c=>"".concat(c,"x"))).concat(Zr.map(c=>"w-".concat(c))),Jr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},cf={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},lf={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},m0={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const m2="___FONT_AWESOME___",N3=16,T6="fa",$6="svg-inline--fa",P2="data-fa-i2svg",y3="data-fa-pseudo-element",sf="data-fa-pseudo-element-pending",l4="data-prefix",s4="data-icon",z0="fontawesome-i2svg",ef="async",af=["HTML","HEAD","STYLE","SCRIPT"],B6=(()=>{try{return!0}catch{return!1}})(),F6=[R,Y,K];function n1(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[R]}})}const H6={...A6};H6[R]={...A6[R],...f0.kit,...f0["kit-duotone"]};const w2=n1(H6),k3={...Yr};k3[R]={...k3[R],...m0.kit,...m0["kit-duotone"]};const c1=n1(k3),S3={...Xr};S3[R]={...S3[R],...lf.kit};const _2=n1(S3),w3={...Gr};w3[R]={...w3[R],...cf.kit};const nf=n1(w3),of=Rr,E6="fa-layers-text",tf=jr,rf={...Ir};n1(rf);const ff=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],a3=Y2,R2=new Set;Object.keys(c1[R]).map(R2.add.bind(R2));Object.keys(c1[Y]).map(R2.add.bind(R2));Object.keys(c1[K]).map(R2.add.bind(R2));const mf=[...Vr,...Qr],Z2=C2.FontAwesomeConfig||{};function zf(c){var l=I.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function Lf(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}I&&typeof I.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,e]=l;const a=Lf(zf(s));a!=null&&(Z2[e]=a)});const O6={styleDefault:"solid",familyDefault:"classic",cssPrefix:T6,replacementClass:$6,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Z2.familyPrefix&&(Z2.cssPrefix=Z2.familyPrefix);const j2={...O6,...Z2};j2.autoReplaceSvg||(j2.observeMutations=!1);const N={};Object.keys(O6).forEach(c=>{Object.defineProperty(N,c,{enumerable:!0,set:function(l){j2[c]=l,Q2.forEach(s=>s(N))},get:function(){return j2[c]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(c){j2.cssPrefix=c,Q2.forEach(l=>l(N))},get:function(){return j2.cssPrefix}});C2.FontAwesomeConfig=N;const Q2=[];function uf(c){return Q2.push(c),()=>{Q2.splice(Q2.indexOf(c),1)}}const p2=N3,s2={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pf(c){if(!c||!u2)return;const l=I.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;const s=I.head.childNodes;let e=null;for(let a=s.length-1;a>-1;a--){const n=s[a],o=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=n)}return I.head.insertBefore(l,e),c}const Mf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function l1(){let c=12,l="";for(;c-- >0;)l+=Mf[Math.random()*62|0];return l}function G2(c){const l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function e4(c){return c.classList?G2(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function D6(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function df(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(D6(c[s]),'" '),"").trim()}function $1(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function a4(c){return c.size!==s2.size||c.x!==s2.x||c.y!==s2.y||c.rotate!==s2.rotate||c.flipX||c.flipY}function Cf(c){let{transform:l,containerWidth:s,iconWidth:e}=c;const a={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),o="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),t="rotate(".concat(l.rotate," 0 0)"),i={transform:"".concat(n," ").concat(o," ").concat(t)},f={transform:"translate(".concat(e/2*-1," -256)")};return{outer:a,inner:i,path:f}}function hf(c){let{transform:l,width:s=N3,height:e=N3,startCentered:a=!1}=c,n="";return a&&w6?n+="translate(".concat(l.x/p2-s/2,"em, ").concat(l.y/p2-e/2,"em) "):a?n+="translate(calc(-50% + ".concat(l.x/p2,"em), calc(-50% + ").concat(l.y/p2,"em)) "):n+="translate(".concat(l.x/p2,"em, ").concat(l.y/p2,"em) "),n+="scale(".concat(l.size/p2*(l.flipX?-1:1),", ").concat(l.size/p2*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var gf=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function I6(){const c=T6,l=$6,s=N.cssPrefix,e=N.replacementClass;let a=gf;if(s!==c||e!==l){const n=new RegExp("\\.".concat(c,"\\-"),"g"),o=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(l),"g");a=a.replace(n,".".concat(s,"-")).replace(o,"--".concat(s,"-")).replace(t,".".concat(e))}return a}let L0=!1;function n3(){N.autoAddCss&&!L0&&(pf(I6()),L0=!0)}var xf={mixout(){return{dom:{css:I6,insertCss:n3}}},hooks(){return{beforeDOMElementCreation(){n3()},beforeI2svg(){n3()}}}};const z2=C2||{};z2[m2]||(z2[m2]={});z2[m2].styles||(z2[m2].styles={});z2[m2].hooks||(z2[m2].hooks={});z2[m2].shims||(z2[m2].shims=[]);var e2=z2[m2];const V6=[],R6=function(){I.removeEventListener("DOMContentLoaded",R6),b1=1,V6.map(c=>c())};let b1=!1;u2&&(b1=(I.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(I.readyState),b1||I.addEventListener("DOMContentLoaded",R6));function bf(c){u2&&(b1?setTimeout(c,0):V6.push(c))}function o1(c){const{tag:l,attributes:s={},children:e=[]}=c;return typeof c=="string"?D6(c):"<".concat(l," ").concat(df(s),">").concat(e.map(o1).join(""),"</").concat(l,">")}function u0(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var o3=function(l,s,e,a){var n=Object.keys(l),o=n.length,t=s,i,f,z;for(e===void 0?(i=1,z=l[n[0]]):(i=0,z=e);i<o;i++)f=n[i],z=t(z,l[f],f,l);return z};function vf(c){const l=[];let s=0;const e=c.length;for(;s<e;){const a=c.charCodeAt(s++);if(a>=55296&&a<=56319&&s<e){const n=c.charCodeAt(s++);(n&64512)==56320?l.push(((a&1023)<<10)+(n&1023)+65536):(l.push(a),s--)}else l.push(a)}return l}function _3(c){const l=vf(c);return l.length===1?l[0].toString(16):null}function Nf(c,l){const s=c.length;let e=c.charCodeAt(l),a;return e>=55296&&e<=56319&&s>l+1&&(a=c.charCodeAt(l+1),a>=56320&&a<=57343)?(e-55296)*1024+a-56320+65536:e}function p0(c){return Object.keys(c).reduce((l,s)=>{const e=c[s];return!!e.icon?l[e.iconName]=e.icon:l[s]=e,l},{})}function A3(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:e=!1}=s,a=p0(l);typeof e2.hooks.addPack=="function"&&!e?e2.hooks.addPack(c,p0(l)):e2.styles[c]={...e2.styles[c]||{},...a},c==="fas"&&A3("fa",l)}const{styles:y2,shims:yf}=e2,kf={[R]:Object.values(_2[R]),[Y]:Object.values(_2[Y]),[K]:Object.values(_2[K])};let n4=null,j6={},U6={},q6={},G6={},W6={};const Sf={[R]:Object.keys(w2[R]),[Y]:Object.keys(w2[Y]),[K]:Object.keys(w2[K])};function wf(c){return~mf.indexOf(c)}function _f(c,l){const s=l.split("-"),e=s[0],a=s.slice(1).join("-");return e===c&&a!==""&&!wf(a)?a:null}const X6=()=>{const c=e=>o3(y2,(a,n,o)=>(a[o]=o3(n,e,{}),a),{});j6=c((e,a,n)=>(a[3]&&(e[a[3]]=n),a[2]&&a[2].filter(t=>typeof t=="number").forEach(t=>{e[t.toString(16)]=n}),e)),U6=c((e,a,n)=>(e[n]=n,a[2]&&a[2].filter(t=>typeof t=="string").forEach(t=>{e[t]=n}),e)),W6=c((e,a,n)=>{const o=a[2];return e[n]=n,o.forEach(t=>{e[t]=n}),e});const l="far"in y2||N.autoFetchSvg,s=o3(yf,(e,a)=>{const n=a[0];let o=a[1];const t=a[2];return o==="far"&&!l&&(o="fas"),typeof n=="string"&&(e.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(e.unicodes[n.toString(16)]={prefix:o,iconName:t}),e},{names:{},unicodes:{}});q6=s.names,G6=s.unicodes,n4=B1(N.styleDefault,{family:N.familyDefault})};uf(c=>{n4=B1(c.styleDefault,{family:N.familyDefault})});X6();function o4(c,l){return(j6[c]||{})[l]}function Af(c,l){return(U6[c]||{})[l]}function d2(c,l){return(W6[c]||{})[l]}function Y6(c){return q6[c]||{prefix:null,iconName:null}}function Pf(c){const l=G6[c],s=o4("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function h2(){return n4}const t4=()=>({prefix:null,iconName:null,rest:[]});function B1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:s=R}=l,e=w2[s][c],a=c1[s][c]||c1[s][e],n=c in e2.styles?c:null;return a||n||null}const Tf={[R]:Object.keys(_2[R]),[Y]:Object.keys(_2[Y]),[K]:Object.keys(_2[K])};function F1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:s=!1}=l,e={[R]:"".concat(N.cssPrefix,"-").concat(R),[Y]:"".concat(N.cssPrefix,"-").concat(Y),[K]:"".concat(N.cssPrefix,"-").concat(K)};let a=null,n=R;const o=Dr.filter(i=>i!==_6);o.forEach(i=>{(c.includes(e[i])||c.some(f=>Tf[i].includes(f)))&&(n=i)});const t=c.reduce((i,f)=>{const z=_f(N.cssPrefix,f);if(y2[f]?(f=kf[n].includes(f)?nf[n][f]:f,a=f,i.prefix=f):Sf[n].indexOf(f)>-1?(a=f,i.prefix=B1(f,{family:n})):z?i.iconName=z:f!==N.replacementClass&&!o.some(d=>f===e[d])&&i.rest.push(f),!s&&i.prefix&&i.iconName){const d=a==="fa"?Y6(i.iconName):{},p=d2(i.prefix,i.iconName);d.prefix&&(a=null),i.iconName=d.iconName||p||i.iconName,i.prefix=d.prefix||i.prefix,i.prefix==="far"&&!y2.far&&y2.fas&&!N.autoFetchSvg&&(i.prefix="fas")}return i},t4());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&n===Y&&(y2.fass||N.autoFetchSvg)&&(t.prefix="fass",t.iconName=d2(t.prefix,t.iconName)||t.iconName),!t.prefix&&n===K&&(y2.fasds||N.autoFetchSvg)&&(t.prefix="fasds",t.iconName=d2(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||a==="fa")&&(t.prefix=h2()||"fas"),t}class $f{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),e=0;e<l;e++)s[e]=arguments[e];const a=s.reduce(this._pullDefinitions,{});Object.keys(a).forEach(n=>{this.definitions[n]={...this.definitions[n]||{},...a[n]},A3(n,a[n]);const o=_2[R][n];o&&A3(o,a[n]),X6()})}reset(){this.definitions={}}_pullDefinitions(l,s){const e=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(e).map(a=>{const{prefix:n,iconName:o,icon:t}=e[a],i=t[2];l[n]||(l[n]={}),i.length>0&&i.forEach(f=>{typeof f=="string"&&(l[n][f]=t)}),l[n][o]=t}),l}}let M0=[],D2={};const V2={},Bf=Object.keys(V2);function Ff(c,l){let{mixoutsTo:s}=l;return M0=c,D2={},Object.keys(V2).forEach(e=>{Bf.indexOf(e)===-1&&delete V2[e]}),M0.forEach(e=>{const a=e.mixout?e.mixout():{};if(Object.keys(a).forEach(n=>{typeof a[n]=="function"&&(s[n]=a[n]),typeof a[n]=="object"&&Object.keys(a[n]).forEach(o=>{s[n]||(s[n]={}),s[n][o]=a[n][o]})}),e.hooks){const n=e.hooks();Object.keys(n).forEach(o=>{D2[o]||(D2[o]=[]),D2[o].push(n[o])})}e.provides&&e.provides(V2)}),s}function P3(c,l){for(var s=arguments.length,e=new Array(s>2?s-2:0),a=2;a<s;a++)e[a-2]=arguments[a];return(D2[c]||[]).forEach(o=>{l=o.apply(null,[l,...e])}),l}function T2(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),e=1;e<l;e++)s[e-1]=arguments[e];(D2[c]||[]).forEach(n=>{n.apply(null,s)})}function g2(){const c=arguments[0],l=Array.prototype.slice.call(arguments,1);return V2[c]?V2[c].apply(null,l):void 0}function T3(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c;const s=c.prefix||h2();if(l)return l=d2(s,l)||l,u0(K6.definitions,s,l)||u0(e2.styles,s,l)}const K6=new $f,Hf=()=>{N.autoReplaceSvg=!1,N.observeMutations=!1,T2("noAuto")},Ef={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return u2?(T2("beforeI2svg",c),g2("pseudoElements2svg",c),g2("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l}=c;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,bf(()=>{Df({autoReplaceSvgRoot:l}),T2("watch",c)})}},Of={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:d2(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){const l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=B1(c[0]);return{prefix:s,iconName:d2(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(N.cssPrefix,"-"))>-1||c.match(of))){const l=F1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||h2(),iconName:d2(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){const l=h2();return{prefix:l,iconName:d2(l,c)||c}}}},Z={noAuto:Hf,config:N,dom:Ef,parse:Of,library:K6,findIconDefinition:T3,toHtml:o1},Df=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:l=I}=c;(Object.keys(e2.styles).length>0||N.autoFetchSvg)&&u2&&N.autoReplaceSvg&&Z.dom.i2svg({node:l})};function H1(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>o1(s))}}),Object.defineProperty(c,"node",{get:function(){if(!u2)return;const s=I.createElement("div");return s.innerHTML=c.html,s.children}}),c}function If(c){let{children:l,main:s,mask:e,attributes:a,styles:n,transform:o}=c;if(a4(o)&&s.found&&!e.found){const{width:t,height:i}=s,f={x:t/i/2,y:.5};a.style=$1({...n,"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")})}return[{tag:"svg",attributes:a,children:l}]}function Vf(c){let{prefix:l,iconName:s,children:e,attributes:a,symbol:n}=c;const o=n===!0?"".concat(l,"-").concat(N.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:o},children:e}]}]}function i4(c){const{icons:{main:l,mask:s},prefix:e,iconName:a,transform:n,symbol:o,title:t,maskId:i,titleId:f,extra:z,watchable:d=!1}=c,{width:p,height:h}=s.found?s:l,S=e==="fak",P=[N.replacementClass,a?"".concat(N.cssPrefix,"-").concat(a):""].filter(j=>z.classes.indexOf(j)===-1).filter(j=>j!==""||!!j).concat(z.classes).join(" ");let _={children:[],attributes:{...z.attributes,"data-prefix":e,"data-icon":a,class:P,role:z.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(h)}};const g=S&&!~z.classes.indexOf("fa-fw")?{width:"".concat(p/h*16*.0625,"em")}:{};d&&(_.attributes[P2]=""),t&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(f||l1())},children:[t]}),delete _.attributes.title);const b={..._,prefix:e,iconName:a,main:l,mask:s,maskId:i,transform:n,symbol:o,styles:{...g,...z.styles}},{children:$,attributes:F}=s.found&&l.found?g2("generateAbstractMask",b)||{children:[],attributes:{}}:g2("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=$,b.attributes=F,o?Vf(b):If(b)}function d0(c){const{content:l,width:s,height:e,transform:a,title:n,extra:o,watchable:t=!1}=c,i={...o.attributes,...n?{title:n}:{},class:o.classes.join(" ")};t&&(i[P2]="");const f={...o.styles};a4(a)&&(f.transform=hf({transform:a,startCentered:!0,width:s,height:e}),f["-webkit-transform"]=f.transform);const z=$1(f);z.length>0&&(i.style=z);const d=[];return d.push({tag:"span",attributes:i,children:[l]}),n&&d.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),d}function Rf(c){const{content:l,title:s,extra:e}=c,a={...e.attributes,...s?{title:s}:{},class:e.classes.join(" ")},n=$1(e.styles);n.length>0&&(a.style=n);const o=[];return o.push({tag:"span",attributes:a,children:[l]}),s&&o.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),o}const{styles:t3}=e2;function $3(c){const l=c[0],s=c[1],[e]=c.slice(4);let a=null;return Array.isArray(e)?a={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(a3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(a3.SECONDARY),fill:"currentColor",d:e[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(a3.PRIMARY),fill:"currentColor",d:e[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:e}},{found:!0,width:l,height:s,icon:a}}const jf={found:!1,width:512,height:512};function Uf(c,l){!B6&&!N.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function B3(c,l){let s=l;return l==="fa"&&N.styleDefault!==null&&(l=h2()),new Promise((e,a)=>{if(s==="fa"){const n=Y6(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&t3[l]&&t3[l][c]){const n=t3[l][c];return e($3(n))}Uf(c,l),e({...jf,icon:N.showMissingIcons&&c?g2("missingIconAbstract")||{}:{}})})}const C0=()=>{},F3=N.measurePerformance&&z1&&z1.mark&&z1.measure?z1:{mark:C0,measure:C0},K2='FA "6.6.0"',qf=c=>(F3.mark("".concat(K2," ").concat(c," begins")),()=>Z6(c)),Z6=c=>{F3.mark("".concat(K2," ").concat(c," ends")),F3.measure("".concat(K2," ").concat(c),"".concat(K2," ").concat(c," begins"),"".concat(K2," ").concat(c," ends"))};var r4={begin:qf,end:Z6};const C1=()=>{};function h0(c){return typeof(c.getAttribute?c.getAttribute(P2):null)=="string"}function Gf(c){const l=c.getAttribute?c.getAttribute(l4):null,s=c.getAttribute?c.getAttribute(s4):null;return l&&s}function Wf(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(N.replacementClass)}function Xf(){return N.autoReplaceSvg===!0?h1.replace:h1[N.autoReplaceSvg]||h1.replace}function Yf(c){return I.createElementNS("http://www.w3.org/2000/svg",c)}function Kf(c){return I.createElement(c)}function Q6(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:s=c.tag==="svg"?Yf:Kf}=l;if(typeof c=="string")return I.createTextNode(c);const e=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){e.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){e.appendChild(Q6(n,{ceFn:s}))}),e}function Zf(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}const h1={replace:function(c){const l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(Q6(s),l)}),l.getAttribute(P2)===null&&N.keepOriginalSource){let s=I.createComment(Zf(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){const l=c[0],s=c[1];if(~e4(l).indexOf(N.replacementClass))return h1.replace(c);const e=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){const n=s[0].attributes.class.split(" ").reduce((o,t)=>(t===N.replacementClass||t.match(e)?o.toSvg.push(t):o.toNode.push(t),o),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}const a=s.map(n=>o1(n)).join(`
`);l.setAttribute(P2,""),l.innerHTML=a}};function g0(c){c()}function J6(c,l){const s=typeof l=="function"?l:C1;if(c.length===0)s();else{let e=g0;N.mutateApproach===ef&&(e=C2.requestAnimationFrame||g0),e(()=>{const a=Xf(),n=r4.begin("mutate");c.map(a),n(),s()})}}let f4=!1;function c8(){f4=!0}function H3(){f4=!1}let v1=null;function x0(c){if(!r0||!N.observeMutations)return;const{treeCallback:l=C1,nodeCallback:s=C1,pseudoElementsCallback:e=C1,observeMutationsRoot:a=I}=c;v1=new r0(n=>{if(f4)return;const o=h2();G2(n).forEach(t=>{if(t.type==="childList"&&t.addedNodes.length>0&&!h0(t.addedNodes[0])&&(N.searchPseudoElements&&e(t.target),l(t.target)),t.type==="attributes"&&t.target.parentNode&&N.searchPseudoElements&&e(t.target.parentNode),t.type==="attributes"&&h0(t.target)&&~ff.indexOf(t.attributeName))if(t.attributeName==="class"&&Gf(t.target)){const{prefix:i,iconName:f}=F1(e4(t.target));t.target.setAttribute(l4,i||o),f&&t.target.setAttribute(s4,f)}else Wf(t.target)&&s(t.target)})}),u2&&v1.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Qf(){v1&&v1.disconnect()}function Jf(c){const l=c.getAttribute("style");let s=[];return l&&(s=l.split(";").reduce((e,a)=>{const n=a.split(":"),o=n[0],t=n.slice(1);return o&&t.length>0&&(e[o]=t.join(":").trim()),e},{})),s}function cm(c){const l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"";let a=F1(e4(c));return a.prefix||(a.prefix=h2()),l&&s&&(a.prefix=l,a.iconName=s),a.iconName&&a.prefix||(a.prefix&&e.length>0&&(a.iconName=Af(a.prefix,c.innerText)||o4(a.prefix,_3(c.innerText))),!a.iconName&&N.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=c.firstChild.data)),a}function lm(c){const l=G2(c.attributes).reduce((a,n)=>(a.name!=="class"&&a.name!=="style"&&(a[n.name]=n.value),a),{}),s=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return N.autoA11y&&(s?l["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(e||l1()):(l["aria-hidden"]="true",l.focusable="false")),l}function sm(){return{iconName:null,title:null,titleId:null,prefix:null,transform:s2,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function b0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:s,prefix:e,rest:a}=cm(c),n=lm(c),o=P3("parseNodeAttributes",{},c);let t=l.styleParser?Jf(c):[];return{iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:e,transform:s2,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t,attributes:n},...o}}const{styles:em}=e2;function l8(c){const l=N.autoReplaceSvg==="nest"?b0(c,{styleParser:!1}):b0(c);return~l.extra.classes.indexOf(E6)?g2("generateLayersText",c,l):g2("generateSvgReplacementMutation",c,l)}let n2=new Set;F6.map(c=>{n2.add("fa-".concat(c))});Object.keys(w2[R]).map(n2.add.bind(n2));Object.keys(w2[Y]).map(n2.add.bind(n2));Object.keys(w2[K]).map(n2.add.bind(n2));n2=[...n2];function v0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!u2)return Promise.resolve();const s=I.documentElement.classList,e=z=>s.add("".concat(z0,"-").concat(z)),a=z=>s.remove("".concat(z0,"-").concat(z)),n=N.autoFetchSvg?n2:F6.map(z=>"fa-".concat(z)).concat(Object.keys(em));n.includes("fa")||n.push("fa");const o=[".".concat(E6,":not([").concat(P2,"])")].concat(n.map(z=>".".concat(z,":not([").concat(P2,"])"))).join(", ");if(o.length===0)return Promise.resolve();let t=[];try{t=G2(c.querySelectorAll(o))}catch{}if(t.length>0)e("pending"),a("complete");else return Promise.resolve();const i=r4.begin("onTree"),f=t.reduce((z,d)=>{try{const p=l8(d);p&&z.push(p)}catch(p){B6||p.name==="MissingIcon"&&console.error(p)}return z},[]);return new Promise((z,d)=>{Promise.all(f).then(p=>{J6(p,()=>{e("active"),e("complete"),a("pending"),typeof l=="function"&&l(),i(),z()})}).catch(p=>{i(),d(p)})})}function am(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;l8(c).then(s=>{s&&J6([s],l)})}function nm(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const e=(l||{}).icon?l:T3(l||{});let{mask:a}=s;return a&&(a=(a||{}).icon?a:T3(a||{})),c(e,{...s,mask:a})}}const om=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=s2,symbol:e=!1,mask:a=null,maskId:n=null,title:o=null,titleId:t=null,classes:i=[],attributes:f={},styles:z={}}=l;if(!c)return;const{prefix:d,iconName:p,icon:h}=c;return H1({type:"icon",...c},()=>(T2("beforeDOMElementCreation",{iconDefinition:c,params:l}),N.autoA11y&&(o?f["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(t||l1()):(f["aria-hidden"]="true",f.focusable="false")),i4({icons:{main:$3(h),mask:a?$3(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:p,transform:{...s2,...s},symbol:e,title:o,maskId:n,titleId:t,extra:{attributes:f,styles:z,classes:i}})))};var tm={mixout(){return{icon:nm(om)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=v0,c.nodeCallback=am,c}}},provides(c){c.i2svg=function(l){const{node:s=I,callback:e=()=>{}}=l;return v0(s,e)},c.generateSvgReplacementMutation=function(l,s){const{iconName:e,title:a,titleId:n,prefix:o,transform:t,symbol:i,mask:f,maskId:z,extra:d}=s;return new Promise((p,h)=>{Promise.all([B3(e,o),f.iconName?B3(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[P,_]=S;p([l,i4({icons:{main:P,mask:_},prefix:o,iconName:e,transform:t,symbol:i,maskId:z,title:a,titleId:n,extra:d,watchable:!0})])}).catch(h)})},c.generateAbstractIcon=function(l){let{children:s,attributes:e,main:a,transform:n,styles:o}=l;const t=$1(o);t.length>0&&(e.style=t);let i;return a4(n)&&(i=g2("generateAbstractTransformGrouping",{main:a,transform:n,containerWidth:a.width,iconWidth:a.width})),s.push(i||a.icon),{children:s,attributes:e}}}},im={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:s=[]}=l;return H1({type:"layer"},()=>{T2("beforeDOMElementCreation",{assembler:c,params:l});let e=[];return c(a=>{Array.isArray(a)?a.map(n=>{e=e.concat(n.abstract)}):e=e.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers"),...s].join(" ")},children:e}]})}}}},rm={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:s=null,classes:e=[],attributes:a={},styles:n={}}=l;return H1({type:"counter",content:c},()=>(T2("beforeDOMElementCreation",{content:c,params:l}),Rf({content:c.toString(),title:s,extra:{attributes:a,styles:n,classes:["".concat(N.cssPrefix,"-layers-counter"),...e]}})))}}}},fm={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:s=s2,title:e=null,classes:a=[],attributes:n={},styles:o={}}=l;return H1({type:"text",content:c},()=>(T2("beforeDOMElementCreation",{content:c,params:l}),d0({content:c,transform:{...s2,...s},title:e,extra:{attributes:n,styles:o,classes:["".concat(N.cssPrefix,"-layers-text"),...a]}})))}}},provides(c){c.generateLayersText=function(l,s){const{title:e,transform:a,extra:n}=s;let o=null,t=null;if(w6){const i=parseInt(getComputedStyle(l).fontSize,10),f=l.getBoundingClientRect();o=f.width/i,t=f.height/i}return N.autoA11y&&!e&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,d0({content:l.innerHTML,width:o,height:t,transform:a,title:e,extra:n,watchable:!0})])}}};const mm=new RegExp('"',"ug"),N0=[1105920,1112319],y0={FontAwesome:{normal:"fas",400:"fas"},...qr,...Ur,...Jr},E3=Object.keys(y0).reduce((c,l)=>(c[l.toLowerCase()]=y0[l],c),{}),zm=Object.keys(E3).reduce((c,l)=>{const s=E3[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function Lm(c){const l=c.replace(mm,""),s=Nf(l,0),e=s>=N0[0]&&s<=N0[1],a=l.length===2?l[0]===l[1]:!1;return{value:_3(a?l[0]:l),isSecondary:e||a}}function um(c,l){const s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),a=isNaN(e)?"normal":e;return(E3[s]||{})[a]||zm[s]}function k0(c,l){const s="".concat(sf).concat(l.replace(":","-"));return new Promise((e,a)=>{if(c.getAttribute(s)!==null)return e();const o=G2(c.children).filter(p=>p.getAttribute(y3)===l)[0],t=C2.getComputedStyle(c,l),i=t.getPropertyValue("font-family"),f=i.match(tf),z=t.getPropertyValue("font-weight"),d=t.getPropertyValue("content");if(o&&!f)return c.removeChild(o),e();if(f&&d!=="none"&&d!==""){const p=t.getPropertyValue("content");let h=um(i,z);const{value:S,isSecondary:P}=Lm(p),_=f[0].startsWith("FontAwesome");let g=o4(h,S),b=g;if(_){const $=Pf(S);$.iconName&&$.prefix&&(g=$.iconName,h=$.prefix)}if(g&&!P&&(!o||o.getAttribute(l4)!==h||o.getAttribute(s4)!==b)){c.setAttribute(s,b),o&&c.removeChild(o);const $=sm(),{extra:F}=$;F.attributes[y3]=l,B3(g,h).then(j=>{const Q=i4({...$,icons:{main:j,mask:t4()},prefix:h,iconName:b,extra:F,watchable:!0}),U=I.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(U,c.firstChild):c.appendChild(U),U.outerHTML=Q.map(c2=>o1(c2)).join(`