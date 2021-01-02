(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[22,74],{164:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(20),r=a(22),l=a.n(r),c=a(28),u=a(23),i=a(17),s=a(1),o=a.n(s),p=a(24),h=a(18),b=a(27);function d(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return d=function(){return e},e}var m,f=p.a.code(d()),E=function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=15;break}return e.next=3,Object(h.d)(h.a.Types);case 3:t=e.sent,a=new Map,n=0;case 6:if(!(n<t.length)){e.next=14;break}return e.next=9,Object(h.c)(t[n]);case 9:r=e.sent,a.set(t[n],"#".concat(r));case 11:n++,e.next=6;break;case 14:m=a;case 15:return e.abrupt("return",m);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,a=void 0===t?[]:t,r=Object(s.useState)(),l=Object(n.a)(r,2),c=l[0],u=l[1];return Object(s.useEffect)((function(){E().then(u)}),[]),o.a.createElement(i.b,null,o.a.createElement(b.m,null,o.a.createElement(b.l,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Required"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,a.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e[0]),o.a.createElement("td",null,e[1]?o.a.createElement(i.d,{f7:"checkmark_alt",size:14}):null),o.a.createElement("td",null,o.a.createElement("code",null,c&&c.has(e[2])?o.a.createElement(b.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),o.a.createElement("td",null,o.a.createElement("code",null,e[3])),o.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?o.a.createElement("span",{key:t},e):o.a.createElement(f,{key:t},e)}))))}))))))}},168:function(e,t,a){"use strict";var n=a(20),r=a(22),l=a.n(r),c=a(28),u=a(1),i=a.n(u),s=a(18),o=a(27),p=function(){var e=Object(c.a)(l.a.mark((function e(t){var a,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,Object(s.d)(t);case 3:n=e.sent,r=0;case 5:if(!(r<n.length)){e.next=13;break}return e.next=8,Object(s.c)(n[r]);case 8:c=e.sent,a.push(i.a.createElement(o.b,{href:"#".concat(c),key:n[r],text:n[r],external:!0}));case 10:r++,e.next=5;break;case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,a=e.showTitle,r=void 0===a||a,l=Object(u.useState)([]),c=Object(n.a)(l,2),s=c[0],h=c[1];return Object(u.useEffect)((function(){p(t).then(h)}),[t]),i.a.createElement(i.a.Fragment,null,r&&i.a.createElement(o.n,null,"All ".concat(t)),s)}},75:function(e,t,a){"use strict";a.r(t),a.d(t,"filterProps",(function(){return u}));var n=a(1),r=a.n(n),l=a(18),c=a(168),u=[["blendMode",!1,"BlendMode","BlendModes.Normal","Mode used to blend the filter with the element"],["autoFit",!1,"boolean","true","If enabled, it will fit the filter area into boundaries for better performance"],["enabled",!1,"boolean","true","Whether the filter is applied to the element or not"],["padding",!1,"number","0","Some filters require extra space to breath such as a blur. Increasing this will add extra width and height to the bounds of the object that the filter is applied to"],["resolution",!1,"number","1","The resolution of the filter"]];t.default=function(){return r.a.createElement(c.a,{page:l.a.Filters})}},79:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(12),l=a(17),c=a(166),u=a(1),i=a.n(u),s=a(75),o=a(165),p=a(164),h=a(27),b=[["alpha",!1,"number","1","Alpha value assigned to the parent element"]].concat(Object(r.a)(s.filterProps)),d={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},m=function(e){var t=e.enabled,a=Object(u.useState)(0),r=Object(n.a)(a,2),l=r[0],s=r[1],o=Object(u.useCallback)((function(e){return s(e.width+300)}),[]),p=Object(u.useCallback)((function(e){return(e+1)%l}),[l]),h=Object(u.useReducer)(p,0),b=Object(n.a)(h,2),m=b[0],f=b[1],E=Object(u.useReducer)((function(e){var t=e.value>.8||e.value<.2?!e.direction:e.direction;return{value:e.value+(t?.1:-.1),direction:t}}),{value:.5,direction:!0}),x=Object(n.a)(E,2),g=x[0],v=x[1],j=Object(u.useCallback)((function(){f(),v()}),[]);return i.a.createElement(c.L,{textures:d,onUpdate:j,onResize:o},i.a.createElement(c.U,{texture:"galaxy"}),i.a.createElement(c.R,{texture:"ship",x:m-150,alignY:.5},i.a.createElement(c.a,{enabled:t,alpha:g.value})))};t.default=function(){var e=Object(u.useState)(!0),t=Object(n.a)(e,2),a=t[0],r=t[1],c=Object(u.useCallback)((function(){return r(!a)}),[a]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.n,null,"AlphaFilter"),i.a.createElement(h.g,null,"Apply a filter to reduce or increase the value of the alpha channel of the element to witch it is applied. The alpha channel is responsible of the opacity/transparency of the element."),i.a.createElement(l.b,{style:{textAlign:"right"}},i.a.createElement("span",{style:{marginRight:10}},"Toggle Filter"),i.a.createElement(l.n,{defaultChecked:!0,onChange:c})),i.a.createElement(l.b,{style:{height:300}},i.a.createElement(m,{enabled:a})),i.a.createElement(l.b,null,i.a.createElement(o.a,{src:"./static/examples/AlphaFilterExample.tsx"})),i.a.createElement(h.k,null,"Properties"),i.a.createElement(p.b,{props:b}))}}}]);
//# sourceMappingURL=22.caffffdf.chunk.js.map