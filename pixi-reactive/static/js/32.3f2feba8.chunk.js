(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[32,90],{111:function(e,t,c){"use strict";c.r(t);var n=c(16),r=c(21),s=c(12),a=c(18),i=c(182),u=c(1),j=c(72),b=c(181),o=c(180),l=c(28),h=[["rotation",!1,"number","0","Color rotation in degrees"]].concat(Object(s.a)(j.effectProps)),d={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},f=function(e){var t=e.enabled,c=Object(u.useState)(0),s=Object(r.a)(c,2),a=s[0],j=s[1],b=Object(u.useCallback)((function(e){return j(e.width+300)}),[]),o=Object(u.useCallback)((function(e){return(e+1)%a}),[a]),l=Object(u.useReducer)(o,0),h=Object(r.a)(l,2),f=h[0],x=h[1],O=Object(u.useReducer)((function(e){return(e+.5)%360}),0),p=Object(r.a)(O,2),g=p[0],v=p[1],m=Object(u.useCallback)((function(){x(),v()}),[]);return Object(n.jsxs)(i.L,{textures:d,onUpdate:m,onResize:b,children:[Object(n.jsx)(i.V,{texture:"galaxy"}),Object(n.jsx)(i.S,{texture:"ship",x:f-150,alignY:.5}),Object(n.jsx)(i.l,{enabled:t,children:Object(n.jsx)(i.y,{rotation:g})})]})};t.default=function(){var e=Object(u.useState)(!0),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(u.useCallback)((function(){return s(!c)}),[c]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(l.n,{children:"HueEffect"}),Object(n.jsx)(l.g,{children:"This effect will a HUE rotation to the color matrix."}),Object(n.jsxs)(a.b,{style:{textAlign:"right"},children:[Object(n.jsx)("span",{style:{marginRight:10},children:"Toggle Filter"}),Object(n.jsx)(a.n,{defaultChecked:!0,onChange:i})]}),Object(n.jsx)(a.b,{style:{height:300},children:Object(n.jsx)(f,{enabled:c})}),Object(n.jsx)(a.b,{children:Object(n.jsx)(b.a,{src:"./static/examples/HueEffectExample.tsx"})}),Object(n.jsx)(l.k,{children:"Properties"}),Object(n.jsx)(o.b,{props:h})]})}},180:function(e,t,c){"use strict";c.d(t,"a",(function(){return x}));var n=c(16),r=c(21),s=c(23),a=c.n(s),i=c(29),u=c(24),j=c(18),b=c(1),o=c(25),l=c(19),h=c(28);function d(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return d=function(){return e},e}var f,x=o.a.code(d()),O=function(){var e=Object(i.a)(a.a.mark((function e(){var t,c,n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=15;break}return e.next=3,Object(l.d)(l.a.Types);case 3:t=e.sent,c=new Map,n=0;case 6:if(!(n<t.length)){e.next=14;break}return e.next=9,Object(l.c)(t[n]);case 9:r=e.sent,c.set(t[n],"#".concat(r));case 11:n++,e.next=6;break;case 14:f=c;case 15:return e.abrupt("return",f);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,c=void 0===t?[]:t,s=Object(b.useState)(),a=Object(r.a)(s,2),i=a[0],u=a[1];return Object(b.useEffect)((function(){O().then(u)}),[]),Object(n.jsx)(j.b,{children:Object(n.jsx)(h.m,{children:Object(n.jsxs)(h.l,{children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Required"}),Object(n.jsx)("th",{children:"Type"}),Object(n.jsx)("th",{children:"Default"}),Object(n.jsx)("th",{children:"Description"})]})}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e[0]}),Object(n.jsx)("td",{children:e[1]?Object(n.jsx)(j.d,{f7:"checkmark_alt",size:14}):null}),Object(n.jsx)("td",{children:Object(n.jsx)("code",{children:i&&i.has(e[2])?Object(n.jsx)(h.h,{text:e[2],href:i.get(e[2]),external:!0}):e[2]})}),Object(n.jsx)("td",{children:Object(n.jsx)("code",{children:e[3]})}),Object(n.jsx)("td",{children:(c=e[4],c.split(/`/).map((function(e,t){return t%2===0?Object(n.jsx)("span",{children:e},t):Object(n.jsx)(x,{children:e},t)})))})]},t);var c}))})]})})})}},181:function(e,t,c){"use strict";var n=c(16),r=c(21),s=c(1),a=c(262),i=c(183),u=c(261);a.a.registerLanguage("tsx",i.a);t.a=function(e){var t=e.src,c=e.children,i=void 0===c?"":c,j=Object(s.useState)(i),b=Object(r.a)(j,2),o=b[0],l=b[1];return Object(s.useEffect)((function(){t&&fetch(t).then((function(e){return e.text()})).then((function(e){return l(e)}))}),[t]),Object(s.useEffect)((function(){i&&l(i)}),[i]),Object(n.jsx)(a.a,{style:u.a,language:"tsx",showLineNumbers:!0,children:o})}},187:function(e,t,c){"use strict";var n=c(16),r=c(21),s=c(23),a=c.n(s),i=c(29),u=c(1),j=c(19),b=c(28),o=function(){var e=Object(i.a)(a.a.mark((function e(t){var c,r,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.next=3,Object(j.d)(t);case 3:r=e.sent,s=0;case 5:if(!(s<r.length)){e.next=13;break}return e.next=8,Object(j.c)(r[s]);case 8:i=e.sent,c.push(Object(n.jsx)(b.b,{href:"#".concat(i),text:r[s],external:!0},r[s]));case 10:s++,e.next=5;break;case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,c=e.showTitle,s=void 0===c||c,a=Object(u.useState)([]),i=Object(r.a)(a,2),j=i[0],l=i[1];return Object(u.useEffect)((function(){o(t).then(l)}),[t]),Object(n.jsxs)(n.Fragment,{children:[s&&Object(n.jsx)(b.n,{children:"All ".concat(t)}),j]})}},72:function(e,t,c){"use strict";c.r(t),c.d(t,"effectProps",(function(){return a})),c.d(t,"amountEffectProps",(function(){return i}));var n=c(16),r=(c(1),c(19)),s=c(187),a=[["multiply",!1,"boolean","true","Whether the effect should be multiplied onto the color matrix or not"],["enabled",!1,"boolean","true","Whether the effect is applied to the filter or not"]],i=[["amount",!1,"number","0.5","Strength of the effect"]].concat(a);t.default=function(){return Object(n.jsx)(s.a,{page:r.a.Effects})}}}]);
//# sourceMappingURL=32.3f2feba8.chunk.js.map