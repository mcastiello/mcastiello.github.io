(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[60],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var c=n(16),r=n(21),a=n(23),s=n.n(a),i=n(29),j=n(24),u=n(18),o=n(1),b=n(25),d=n(19),h=n(28);function l(){var e=Object(j.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return l=function(){return e},e}var x,f=b.a.code(l()),O=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=15;break}return e.next=3,Object(d.d)(d.a.Types);case 3:t=e.sent,n=new Map,c=0;case 6:if(!(c<t.length)){e.next=14;break}return e.next=9,Object(d.c)(t[c]);case 9:r=e.sent,n.set(t[c],"#".concat(r));case 11:c++,e.next=6;break;case 14:x=n;case 15:return e.abrupt("return",x);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,a=Object(o.useState)(),s=Object(r.a)(a,2),i=s[0],j=s[1];return Object(o.useEffect)((function(){O().then(j)}),[]),Object(c.jsx)(u.b,{children:Object(c.jsx)(h.m,{children:Object(c.jsxs)(h.l,{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Required"}),Object(c.jsx)("th",{children:"Type"}),Object(c.jsx)("th",{children:"Default"}),Object(c.jsx)("th",{children:"Description"})]})}),Object(c.jsx)("tbody",{children:n.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e[0]}),Object(c.jsx)("td",{children:e[1]?Object(c.jsx)(u.d,{f7:"checkmark_alt",size:14}):null}),Object(c.jsx)("td",{children:Object(c.jsx)("code",{children:i&&i.has(e[2])?Object(c.jsx)(h.h,{text:e[2],href:i.get(e[2]),external:!0}):e[2]})}),Object(c.jsx)("td",{children:Object(c.jsx)("code",{children:e[3]})}),Object(c.jsx)("td",{children:(n=e[4],n.split(/`/).map((function(e,t){return t%2===0?Object(c.jsx)("span",{children:e},t):Object(c.jsx)(f,{children:e},t)})))})]},t);var n}))})]})})})}},181:function(e,t,n){"use strict";var c=n(16),r=n(21),a=n(1),s=n(262),i=n(183),j=n(261);s.a.registerLanguage("tsx",i.a);t.a=function(e){var t=e.src,n=e.children,i=void 0===n?"":n,u=Object(a.useState)(i),o=Object(r.a)(u,2),b=o[0],d=o[1];return Object(a.useEffect)((function(){t&&fetch(t).then((function(e){return e.text()})).then((function(e){return d(e)}))}),[t]),Object(a.useEffect)((function(){i&&d(i)}),[i]),Object(c.jsx)(s.a,{style:j.a,language:"tsx",showLineNumbers:!0,children:b})}},188:function(e,t,n){"use strict";var c=n(16),r=n(21),a=n(1),s=n(181),i=n(180),j=n(28);t.a=function(e){var t=e.name,n=e.enumerator,u=e.src,o=Object(a.useState)(""),b=Object(r.a)(o,2),d=b[0],h=b[1];return Object(a.useEffect)((function(){var e=Object.keys(n).filter((function(e){return!/^\d+$/.test(e)})).map((function(e){return"const ".concat(e.toLowerCase()," = ").concat(t,".").concat(e,"; // ").concat(n[e])}));h("import { ".concat(t," } from 'pixi-reactive';\n\n").concat(e.join("\n")))}),[t,n]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(j.n,{children:[t," Enumerator"]}),u&&Object(c.jsxs)(j.g,{children:["You can find more information about ",Object(c.jsx)(i.a,{children:t})," at the following"," ",Object(c.jsx)(j.h,{href:u,text:"link",external:!0,target:"_blank"}),"."]}),Object(c.jsx)(s.a,{children:d})]})}},98:function(e,t,n){"use strict";n.r(t);var c=n(16),r=(n(1),n(188)),a=n(182);t.default=function(){return Object(c.jsx)(r.a,{name:"CursorType",enumerator:a.o,src:"https://developer.mozilla.org/en-US/docs/Web/CSS/cursor"})}}}]);
//# sourceMappingURL=60.f566e120.chunk.js.map