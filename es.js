self.ElementObserver=function(e){"use strict";const t="attributeChangedCallback",a="connectedCallback",n=new WeakMap,s=new WeakMap,o=(e,t)=>{const a=n.get(t);for(let t=0,{length:n}=e;t<n;t++){const{target:n,attributeName:s,oldValue:o}=e[t];a.get(n).attributeChangedCallback(n,s,o,n.getAttribute(s))}},r=e=>{e.disconnect(),n.delete(e)},c=(e,t,a)=>{for(let n=0,{length:s}=t;n<s;n++)if(e.has(t[n])){const s=e.get(t[n]);a in s&&s[a](t[n])}},l=(e,t)=>{const s=n.get(t);for(let t=0,{length:n}=e;t<n;t++)c(s,e[t].addedNodes,a),c(s,e[t].removedNodes,"connectedCallback")};return e.default=class{constructor(e){const t=new MutationObserver(l),a=new Map;n.set(t,a),s.set(this,{h:e,a:new Map,m:t,o:a})}observe(e,r){const c=s.get(this);if(c.o.has(e)&&this.disconnect(e),c.o.size||c.m.observe(e.ownerDocument,{childList:!0,subtree:!0}),c.o.set(e,c.h),r&&t in c.h){const{attributes:t,attributeFilter:a,attributeOldValue:s}=r,l=new MutationObserver(o);l.observe(e,{attributes:t,attributeFilter:a,attributeOldValue:s}),n.set(l,c.o),c.a.set(e,l);for(let{attributes:t}=e,n=0;n<t.length;n++){const{name:s,value:o}=t[n];(!a||-1<a.indexOf(s))&&c.h.attributeChangedCallback(e,s,null,o)}}e.isConnected&&a in c.h&&c.h.connectedCallback(e)}disconnect(e){const t=s.get(this);if(e){if(t.o.has(e)&&(t.a.has(e)&&(r(t.a.get(e)),t.a.delete(e)),t.o.delete(e),t.o.size))return}else t.a.forEach(r),t.a.clear(),t.o.clear();t.m.disconnect()}},e}({});
