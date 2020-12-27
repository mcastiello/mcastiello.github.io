(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[25,56],{102:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(12),c=a(17),l=a(148),u=a(1),s=a.n(u),i=a(71),o=a(146),f=a(147),b=a(27),h=Object(r.a)(i.amountEffectProps),p={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},m=function(e){var t=e.enabled,a=Object(u.useState)(0),r=Object(n.a)(a,2),c=r[0],i=r[1],o=Object(u.useCallback)((function(e){return i(e.width+300)}),[]),f=Object(u.useCallback)((function(e){return(e+1)%c}),[c]),b=Object(u.useReducer)(f,0),h=Object(n.a)(b,2),m=h[0],E=h[1];return s.a.createElement(l.A,{textures:p,onUpdate:E,onResize:o},s.a.createElement(l.I,{texture:"galaxy"}),s.a.createElement(l.F,{texture:"ship",x:m-150,alignY:.5}),s.a.createElement(l.h,{enabled:t},s.a.createElement(l.v,{amount:.75})))};t.default=function(){var e=Object(u.useState)(!0),t=Object(n.a)(e,2),a=t[0],r=t[1],l=Object(u.useCallback)((function(){return r(!a)}),[a]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(b.n,null,"NightEffect"),s.a.createElement(b.g,null,"This effect will make everything look more bluish/darker, like it was set at night."),s.a.createElement(c.b,{style:{textAlign:"right"}},s.a.createElement("span",{style:{marginRight:10}},"Toggle Filter"),s.a.createElement(c.n,{defaultChecked:!0,onChange:l})),s.a.createElement(c.b,{style:{height:300}},s.a.createElement(m,{enabled:a})),s.a.createElement(c.b,null,s.a.createElement(o.a,{src:"./static/examples/NightEffectExample.tsx"})),s.a.createElement(b.k,null,"Properties"),s.a.createElement(f.b,{props:h}))}},149:function(e,t,a){"use strict";var n=a(22),r=a(19),c=a.n(r),l=a(29),u=a(1),s=a.n(u),i=a(18),o=a(27),f=function(){var e=Object(l.a)(c.a.mark((function e(t,a){var n,r,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(i.e)(t);case 3:r=e.sent,l=c.a.mark((function e(t){var l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.d)(r[t]);case 2:l=e.sent,n.push(s.a.createElement(o.b,{href:"#".concat(l),key:r[t],text:r[t],onClick:function(){return a(r[t])}}));case 4:case"end":return e.stop()}}),e)})),u=0;case 6:if(!(u<r.length)){e.next=11;break}return e.delegateYield(l(u),"t0",8);case 8:u++,e.next=6;break;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,a=e.showTitle,r=void 0===a||a,c=Object(u.useState)([]),l=Object(n.a)(c,2),b=l[0],h=l[1],p=Object(u.useContext)(i.a).dispatch;return Object(u.useEffect)((function(){f(t,p).then(h)}),[t,p]),s.a.createElement(s.a.Fragment,null,r&&s.a.createElement(o.n,null,"All ".concat(t)),b)}},71:function(e,t,a){"use strict";a.r(t),a.d(t,"effectProps",(function(){return u})),a.d(t,"amountEffectProps",(function(){return s}));var n=a(1),r=a.n(n),c=a(18),l=a(149),u=[["multiply",!1,"boolean","true","Whether the effect should be multiplied onto the color matrix or not"],["enabled",!1,"boolean","true","Whether the effect is applied to the filter or not"]],s=[["amount",!1,"number","0.5","Strength of the effect"]].concat(u);t.default=function(){return r.a.createElement(l.a,{page:c.b.Effects})}}}]);
//# sourceMappingURL=25.f4e241e6.chunk.js.map