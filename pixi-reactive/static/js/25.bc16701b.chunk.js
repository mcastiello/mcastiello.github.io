(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[25,56],{102:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(12),c=a(17),l=a(148),u=a(1),s=a.n(u),i=a(71),o=a(146),f=a(147),b=a(27),h=Object(r.a)(i.amountEffectProps),m={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},p=function(e){var t=e.enabled,a=Object(u.useState)(0),r=Object(n.a)(a,2),c=r[0],i=r[1],o=Object(u.useCallback)((function(e){return i(e.width+300)}),[]),f=Object(u.useCallback)((function(e){return(e+1)%c}),[c]),b=Object(u.useReducer)(f,0),h=Object(n.a)(b,2),p=h[0],E=h[1];return s.a.createElement(l.A,{textures:m,onUpdate:E,onResize:o},s.a.createElement(l.I,{texture:"galaxy"}),s.a.createElement(l.F,{texture:"ship",x:p-150,alignY:.5}),s.a.createElement(l.h,{enabled:t},s.a.createElement(l.v,{amount:.75})))};t.default=function(){var e=Object(u.useState)(!0),t=Object(n.a)(e,2),a=t[0],r=t[1],l=Object(u.useCallback)((function(){return r(!a)}),[a]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.n,null,"NightEffect"),s.a.createElement(b.g,null,"This effect will make everything look more bluish/darker, like it was set at night."),s.a.createElement(c.b,{style:{textAlign:"right"}},s.a.createElement("span",{style:{marginRight:10}},"Toggle Filter"),s.a.createElement(c.n,{defaultChecked:!0,onChange:l})),s.a.createElement(c.b,{style:{height:300}},s.a.createElement(p,{enabled:a})),s.a.createElement(c.b,null,s.a.createElement(o.a,{src:"./static/examples/NightEffectExample.tsx"})),s.a.createElement(b.k,null,"Properties"),s.a.createElement(f.b,{props:h}))}},149:function(e,t,a){"use strict";var n=a(20),r=a(22),c=a.n(r),l=a(28),u=a(1),s=a.n(u),i=a(18),o=a(27),f=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,n,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,Object(i.d)(t);case 3:n=e.sent,r=0;case 5:if(!(r<n.length)){e.next=13;break}return e.next=8,Object(i.c)(n[r]);case 8:l=e.sent,a.push(s.a.createElement(o.b,{href:"#".concat(l),key:n[r],text:n[r],external:!0}));case 10:r++,e.next=5;break;case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,a=e.showTitle,r=void 0===a||a,c=Object(u.useState)([]),l=Object(n.a)(c,2),i=l[0],b=l[1];return Object(u.useEffect)((function(){f(t).then(b)}),[t]),s.a.createElement(s.a.Fragment,null,r&&s.a.createElement(o.n,null,"All ".concat(t)),i)}},71:function(e,t,a){"use strict";a.r(t),a.d(t,"effectProps",(function(){return u})),a.d(t,"amountEffectProps",(function(){return s}));var n=a(1),r=a.n(n),c=a(18),l=a(149),u=[["multiply",!1,"boolean","true","Whether the effect should be multiplied onto the color matrix or not"],["enabled",!1,"boolean","true","Whether the effect is applied to the filter or not"]],s=[["amount",!1,"number","0.5","Strength of the effect"]].concat(u);t.default=function(){return r.a.createElement(l.a,{page:c.a.Effects})}}}]);
//# sourceMappingURL=25.bc16701b.chunk.js.map