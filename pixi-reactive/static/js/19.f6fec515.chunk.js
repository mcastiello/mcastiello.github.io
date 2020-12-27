(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[19,56],{149:function(e,t,a){"use strict";var n=a(22),r=a(19),c=a.n(r),l=a(29),u=a(1),s=a.n(u),i=a(18),o=a(27),f=function(){var e=Object(l.a)(c.a.mark((function e(t,a){var n,r,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(i.e)(t);case 3:r=e.sent,l=c.a.mark((function e(t){var l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.d)(r[t]);case 2:l=e.sent,n.push(s.a.createElement(o.b,{href:"#".concat(l),key:r[t],text:r[t],onClick:function(){return a(r[t])}}));case 4:case"end":return e.stop()}}),e)})),u=0;case 6:if(!(u<r.length)){e.next=11;break}return e.delegateYield(l(u),"t0",8);case 8:u++,e.next=6;break;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,a=e.showTitle,r=void 0===a||a,c=Object(u.useState)([]),l=Object(n.a)(c,2),p=l[0],b=l[1],h=Object(u.useContext)(i.a).dispatch;return Object(u.useEffect)((function(){f(t,h).then(b)}),[t,h]),s.a.createElement(s.a.Fragment,null,r&&s.a.createElement(o.n,null,"All ".concat(t)),p)}},71:function(e,t,a){"use strict";a.r(t),a.d(t,"effectProps",(function(){return u})),a.d(t,"amountEffectProps",(function(){return s}));var n=a(1),r=a.n(n),c=a(18),l=a(149),u=[["multiply",!1,"boolean","true","Whether the effect should be multiplied onto the color matrix or not"],["enabled",!1,"boolean","true","Whether the effect is applied to the filter or not"]],s=[["amount",!1,"number","0.5","Strength of the effect"]].concat(u);t.default=function(){return r.a.createElement(l.a,{page:c.b.Effects})}},90:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(17),c=a(148),l=a(1),u=a.n(l),s=a(71),i=a(146),o=a(147),f=a(27),p=[s.effectProps[0]],b={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},h=function(e){var t=e.enabled,a=Object(l.useState)(0),r=Object(n.a)(a,2),s=r[0],i=r[1],o=Object(l.useCallback)((function(e){return i(e.width+300)}),[]),f=Object(l.useCallback)((function(e){return(e+1)%s}),[s]),p=Object(l.useReducer)(f,0),h=Object(n.a)(p,2),m=h[0],E=h[1];return u.a.createElement(c.A,{textures:b,onUpdate:E,onResize:o},u.a.createElement(c.I,{texture:"galaxy"}),u.a.createElement(c.F,{texture:"ship",x:m-150,alignY:.5}),u.a.createElement(c.h,{enabled:t},u.a.createElement(c.l,null)))};t.default=function(){var e=Object(l.useState)(!0),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(l.useCallback)((function(){return c(!a)}),[a]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.n,null,"DesaturateEffect"),u.a.createElement(f.g,null,"This effect will remove the saturation from the scene."),u.a.createElement(r.b,{style:{textAlign:"right"}},u.a.createElement("span",{style:{marginRight:10}},"Toggle Filter"),u.a.createElement(r.n,{defaultChecked:!0,onChange:s})),u.a.createElement(r.b,{style:{height:300}},u.a.createElement(h,{enabled:a})),u.a.createElement(r.b,null,u.a.createElement(i.a,{src:"./static/examples/DesaturateEffectExample.tsx"})),u.a.createElement(f.k,null,"Properties"),u.a.createElement(o.b,{props:p}))}}}]);
//# sourceMappingURL=19.f6fec515.chunk.js.map