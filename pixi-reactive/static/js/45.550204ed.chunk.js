(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[45,92],{109:function(e,t,n){"use strict";n.r(t);var r=n(16),c=n(21),a=n(18),s=n(197),i=n(1),u=n(84),j=n(196),b=n(195),l=n(28),o={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},d=function(e){var t=e.enabled,n=Object(i.useState)(0),a=Object(c.a)(n,2),u=a[0],j=a[1],b=Object(i.useCallback)((function(e){return j(e.width+300)}),[]),l=Object(i.useCallback)((function(e){return(e+1)%u}),[u]),d=Object(i.useReducer)(l,0),h=Object(c.a)(d,2),x=h[0],f=h[1];return Object(r.jsxs)(s.L,{textures:o,onUpdate:f,onResize:b,children:[Object(r.jsx)(s.V,{texture:"galaxy"}),Object(r.jsx)(s.S,{texture:"ship",x:x-150,alignY:.5,children:Object(r.jsx)(s.r,{enabled:t})})]})};t.default=function(){var e=Object(i.useState)(!0),t=Object(c.a)(e,2),n=t[0],s=t[1],o=Object(i.useCallback)((function(){return s(!n)}),[n]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.n,{children:"FXAAFilter"}),Object(r.jsx)(l.g,{children:"Apply a fast approximate anti-aliasing filter to the element."}),Object(r.jsxs)(a.b,{style:{textAlign:"right"},children:[Object(r.jsx)("span",{style:{marginRight:10},children:"Toggle Filter"}),Object(r.jsx)(a.n,{defaultChecked:!0,onChange:o})]}),Object(r.jsx)(a.b,{style:{height:300},children:Object(r.jsx)(d,{enabled:n})}),Object(r.jsx)(a.b,{children:Object(r.jsx)(j.a,{src:"./static/examples/FXAAFilterExample.tsx"})}),Object(r.jsx)(l.k,{children:"Properties"}),Object(r.jsx)(b.b,{props:u.filterProps})]})}},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(16),c=n(21),a=n(23),s=n.n(a),i=n(30),u=n(24),j=n(18),b=n(1),l=n(25),o=n(19),d=n(28);function h(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return h=function(){return e},e}var x,f=l.a.code(h()),O=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=15;break}return e.next=3,Object(o.d)(o.a.Types);case 3:t=e.sent,n=new Map,r=0;case 6:if(!(r<t.length)){e.next=14;break}return e.next=9,Object(o.c)(t[r]);case 9:c=e.sent,n.set(t[r],"#".concat(c));case 11:r++,e.next=6;break;case 14:x=n;case 15:return e.abrupt("return",x);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,a=Object(b.useState)(),s=Object(c.a)(a,2),i=s[0],u=s[1];return Object(b.useEffect)((function(){O().then(u)}),[]),Object(r.jsx)(j.b,{children:Object(r.jsx)(d.m,{children:Object(r.jsxs)(d.l,{children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Name"}),Object(r.jsx)("th",{children:"Required"}),Object(r.jsx)("th",{children:"Type"}),Object(r.jsx)("th",{children:"Default"}),Object(r.jsx)("th",{children:"Description"})]})}),Object(r.jsx)("tbody",{children:n.map((function(e,t){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e[0]}),Object(r.jsx)("td",{children:e[1]?Object(r.jsx)(j.d,{f7:"checkmark_alt",size:14}):null}),Object(r.jsx)("td",{children:Object(r.jsx)("code",{children:i&&i.has(e[2])?Object(r.jsx)(d.h,{text:e[2],href:i.get(e[2]),external:!0}):e[2]})}),Object(r.jsx)("td",{children:Object(r.jsx)("code",{children:e[3]})}),Object(r.jsx)("td",{children:(n=e[4],n.split(/`/).map((function(e,t){return t%2===0?Object(r.jsx)("span",{children:e},t):Object(r.jsx)(f,{children:e},t)})))})]},t);var n}))})]})})})}},196:function(e,t,n){"use strict";var r=n(16),c=n(21),a=n(1),s=n(262),i=n(198),u=n(261);s.a.registerLanguage("tsx",i.a);t.a=function(e){var t=e.src,n=e.children,i=void 0===n?"":n,j=Object(a.useState)(i),b=Object(c.a)(j,2),l=b[0],o=b[1];return Object(a.useEffect)((function(){t&&fetch(t).then((function(e){return e.text()})).then((function(e){return o(e)}))}),[t]),Object(a.useEffect)((function(){i&&o(i)}),[i]),Object(r.jsx)(s.a,{style:u.a,language:"tsx",showLineNumbers:!0,children:l})}},202:function(e,t,n){"use strict";var r=n(16),c=n(21),a=n(23),s=n.n(a),i=n(30),u=n(1),j=n(19),b=n(28),l=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,c,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(j.d)(t);case 3:c=e.sent,a=0;case 5:if(!(a<c.length)){e.next=13;break}return e.next=8,Object(j.c)(c[a]);case 8:i=e.sent,n.push(Object(r.jsx)(b.b,{href:"#".concat(i),text:c[a],external:!0},c[a]));case 10:a++,e.next=5;break;case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,n=e.showTitle,a=void 0===n||n,s=Object(u.useState)([]),i=Object(c.a)(s,2),j=i[0],o=i[1];return Object(u.useEffect)((function(){l(t).then(o)}),[t]),Object(r.jsxs)(r.Fragment,{children:[a&&Object(r.jsx)(b.n,{children:"All ".concat(t)}),j]})}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"filterProps",(function(){return s}));var r=n(16),c=(n(1),n(19)),a=n(202),s=[["blendMode",!1,"BlendMode","BlendModes.Normal","Mode used to blend the filter with the element"],["autoFit",!1,"boolean","true","If enabled, it will fit the filter area into boundaries for better performance"],["enabled",!1,"boolean","true","Whether the filter is applied to the element or not"],["padding",!1,"number","0","Some filters require extra space to breath such as a blur. Increasing this will add extra width and height to the bounds of the object that the filter is applied to"],["resolution",!1,"number","1","The resolution of the filter"]];t.default=function(){return Object(r.jsx)(a.a,{page:c.a.Filters})}}}]);
//# sourceMappingURL=45.550204ed.chunk.js.map