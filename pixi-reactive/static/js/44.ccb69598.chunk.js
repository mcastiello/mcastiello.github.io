(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[44,77],{119:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(12),l=n(17),c=n(170),u=n(1),i=n.n(u),s=n(75),o=n(169),f=n(168),m=n(27),b=[["noise",!1,"number","0.5","Value of the noise applied"]].concat(Object(r.a)(s.filterProps.filter((function(e){return"enabled"!==e[0]})))),p={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},d=function(){var e=Object(u.useState)(0),t=Object(a.a)(e,2),n=t[0],r=t[1],l=Object(u.useCallback)((function(e){return r(e.width+300)}),[]),s=Object(u.useCallback)((function(e){return(e+1)%n}),[n]),o=Object(u.useReducer)(s,0),f=Object(a.a)(o,2),m=f[0],b=f[1];return i.a.createElement(c.L,{textures:p,onUpdate:b,onResize:l},i.a.createElement(c.U,{texture:"galaxy"}),i.a.createElement(c.R,{texture:"ship",x:m-150,alignY:.5},i.a.createElement(c.G,{noise:1})))};t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.n,null,"NoiseFilter"),i.a.createElement(m.g,null,"Apply a noise filter to the element.",i.a.createElement("br",null),"It looks like there's some kind of issue enabling/disabling this filter. I'm investigating it, but for now the filter cannot be disabled or removed once applied."),i.a.createElement(l.b,{style:{height:300}},i.a.createElement(d,null)),i.a.createElement(l.b,null,i.a.createElement(o.a,{src:"./static/examples/NoiseFilterExample.tsx"})),i.a.createElement(m.k,null,"Properties"),i.a.createElement(f.b,{props:b}))}},168:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(20),r=n(22),l=n.n(r),c=n(28),u=n(23),i=n(17),s=n(1),o=n.n(s),f=n(24),m=n(18),b=n(27);function p(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return p=function(){return e},e}var d,h=f.a.code(p()),E=function(){var e=Object(c.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=15;break}return e.next=3,Object(m.d)(m.a.Types);case 3:t=e.sent,n=new Map,a=0;case 6:if(!(a<t.length)){e.next=14;break}return e.next=9,Object(m.c)(t[a]);case 9:r=e.sent,n.set(t[a],"#".concat(r));case 11:a++,e.next=6;break;case 14:d=n;case 15:return e.abrupt("return",d);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,r=Object(s.useState)(),l=Object(a.a)(r,2),c=l[0],u=l[1];return Object(s.useEffect)((function(){E().then(u)}),[]),o.a.createElement(i.b,null,o.a.createElement(b.m,null,o.a.createElement(b.l,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Required"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,n.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e[0]),o.a.createElement("td",null,e[1]?o.a.createElement(i.d,{f7:"checkmark_alt",size:14}):null),o.a.createElement("td",null,o.a.createElement("code",null,c&&c.has(e[2])?o.a.createElement(b.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),o.a.createElement("td",null,o.a.createElement("code",null,e[3])),o.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?o.a.createElement("span",{key:t},e):o.a.createElement(h,{key:t},e)}))))}))))))}},172:function(e,t,n){"use strict";var a=n(20),r=n(22),l=n.n(r),c=n(28),u=n(1),i=n.n(u),s=n(18),o=n(27),f=function(){var e=Object(c.a)(l.a.mark((function e(t){var n,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(s.d)(t);case 3:a=e.sent,r=0;case 5:if(!(r<a.length)){e.next=13;break}return e.next=8,Object(s.c)(a[r]);case 8:c=e.sent,n.push(i.a.createElement(o.b,{href:"#".concat(c),key:a[r],text:a[r],external:!0}));case 10:r++,e.next=5;break;case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,n=e.showTitle,r=void 0===n||n,l=Object(u.useState)([]),c=Object(a.a)(l,2),s=c[0],m=c[1];return Object(u.useEffect)((function(){f(t).then(m)}),[t]),i.a.createElement(i.a.Fragment,null,r&&i.a.createElement(o.n,null,"All ".concat(t)),s)}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"filterProps",(function(){return u}));var a=n(1),r=n.n(a),l=n(18),c=n(172),u=[["blendMode",!1,"BlendMode","BlendModes.Normal","Mode used to blend the filter with the element"],["autoFit",!1,"boolean","true","If enabled, it will fit the filter area into boundaries for better performance"],["enabled",!1,"boolean","true","Whether the filter is applied to the element or not"],["padding",!1,"number","0","Some filters require extra space to breath such as a blur. Increasing this will add extra width and height to the bounds of the object that the filter is applied to"],["resolution",!1,"number","1","The resolution of the filter"]];t.default=function(){return r.a.createElement(c.a,{page:l.a.Filters})}}}]);
//# sourceMappingURL=44.ccb69598.chunk.js.map