(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[33,57],{149:function(e,t,a){"use strict";var n=a(20),r=a(22),l=a.n(r),c=a(28),i=a(1),s=a.n(i),u=a(18),o=a(27),b=function(){var e=Object(c.a)(l.a.mark((function e(t){var a,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,Object(u.d)(t);case 3:n=e.sent,r=0;case 5:if(!(r<n.length)){e.next=13;break}return e.next=8,Object(u.c)(n[r]);case 8:c=e.sent,a.push(s.a.createElement(o.b,{href:"#".concat(c),key:n[r],text:n[r],external:!0}));case 10:r++,e.next=5;break;case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,a=e.showTitle,r=void 0===a||a,l=Object(i.useState)([]),c=Object(n.a)(l,2),u=c[0],p=c[1];return Object(i.useEffect)((function(){b(t).then(p)}),[t]),s.a.createElement(s.a.Fragment,null,r&&s.a.createElement(o.n,null,"All ".concat(t)),u)}},74:function(e,t,a){"use strict";a.r(t),a.d(t,"filterProps",(function(){return i}));var n=a(1),r=a.n(n),l=a(18),c=a(149),i=[["blendMode",!1,"BlendMode","BlendModes.Normal","Mode used to blend the filter with the element"],["autoFit",!1,"boolean","true","If enabled, it will fit the filter area into boundaries for better performance"],["enabled",!1,"boolean","true","Whether the filter is applied to the element or not"],["padding",!1,"number","0","Some filters require extra space to breath such as a blur. Increasing this will add extra width and height to the bounds of the object that the filter is applied to"],["resolution",!1,"number","1","The resolution of the filter"]];t.default=function(){return r.a.createElement(c.a,{page:l.a.Filters})}},91:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(17),l=a(148),c=a(1),i=a.n(c),s=a(74),u=a(146),o=a(147),b=a(27),p={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},h=function(e){var t=e.enabled,a=Object(c.useState)(0),r=Object(n.a)(a,2),s=r[0],u=r[1],o=Object(c.useCallback)((function(e){return u(e.width+300)}),[]),b=Object(c.useCallback)((function(e){return(e+1)%s}),[s]),h=Object(c.useReducer)(b,0),f=Object(n.a)(h,2),d=f[0],m=f[1];return i.a.createElement(l.A,{textures:p,onUpdate:m,onResize:o},i.a.createElement(l.I,{texture:"galaxy"}),i.a.createElement(l.F,{texture:"ship",x:d-150,alignY:.5},i.a.createElement(l.m,{enabled:t})))};t.default=function(){var e=Object(c.useState)(!0),t=Object(n.a)(e,2),a=t[0],l=t[1],p=Object(c.useCallback)((function(){return l(!a)}),[a]);return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.n,null,"FXAAFilter"),i.a.createElement(b.g,null,"Apply a fast approximate anti-aliasing filter to the element."),i.a.createElement(r.b,{style:{textAlign:"right"}},i.a.createElement("span",{style:{marginRight:10}},"Toggle Filter"),i.a.createElement(r.n,{defaultChecked:!0,onChange:p})),i.a.createElement(r.b,{style:{height:300}},i.a.createElement(h,{enabled:a})),i.a.createElement(r.b,null,i.a.createElement(u.a,{src:"./static/examples/FXAAFilterExample.tsx"})),i.a.createElement(b.k,null,"Properties"),i.a.createElement(o.b,{props:s.filterProps}))}}}]);
//# sourceMappingURL=33.f5b4f2c5.chunk.js.map