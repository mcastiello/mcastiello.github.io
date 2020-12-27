(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[19,56],{149:function(e,t,a){"use strict";var n=a(20),r=a(22),c=a.n(r),l=a(28),u=a(1),s=a.n(u),i=a(18),o=a(27),f=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,n,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,Object(i.d)(t);case 3:n=e.sent,r=0;case 5:if(!(r<n.length)){e.next=13;break}return e.next=8,Object(i.c)(n[r]);case 8:l=e.sent,a.push(s.a.createElement(o.b,{href:"#".concat(l),key:n[r],text:n[r],external:!0}));case 10:r++,e.next=5;break;case 13:return e.abrupt("return",a);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,a=e.showTitle,r=void 0===a||a,c=Object(u.useState)([]),l=Object(n.a)(c,2),i=l[0],b=l[1];return Object(u.useEffect)((function(){f(t).then(b)}),[t]),s.a.createElement(s.a.Fragment,null,r&&s.a.createElement(o.n,null,"All ".concat(t)),i)}},71:function(e,t,a){"use strict";a.r(t),a.d(t,"effectProps",(function(){return u})),a.d(t,"amountEffectProps",(function(){return s}));var n=a(1),r=a.n(n),c=a(18),l=a(149),u=[["multiply",!1,"boolean","true","Whether the effect should be multiplied onto the color matrix or not"],["enabled",!1,"boolean","true","Whether the effect is applied to the filter or not"]],s=[["amount",!1,"number","0.5","Strength of the effect"]].concat(u);t.default=function(){return r.a.createElement(l.a,{page:c.a.Effects})}},90:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(17),c=a(148),l=a(1),u=a.n(l),s=a(71),i=a(146),o=a(147),f=a(27),b=[s.effectProps[0]],p={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},h=function(e){var t=e.enabled,a=Object(l.useState)(0),r=Object(n.a)(a,2),s=r[0],i=r[1],o=Object(l.useCallback)((function(e){return i(e.width+300)}),[]),f=Object(l.useCallback)((function(e){return(e+1)%s}),[s]),b=Object(l.useReducer)(f,0),h=Object(n.a)(b,2),m=h[0],E=h[1];return u.a.createElement(c.A,{textures:p,onUpdate:E,onResize:o},u.a.createElement(c.I,{texture:"galaxy"}),u.a.createElement(c.F,{texture:"ship",x:m-150,alignY:.5}),u.a.createElement(c.h,{enabled:t},u.a.createElement(c.l,null)))};t.default=function(){var e=Object(l.useState)(!0),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(l.useCallback)((function(){return c(!a)}),[a]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(f.n,null,"DesaturateEffect"),u.a.createElement(f.g,null,"This effect will remove the saturation from the scene."),u.a.createElement(r.b,{style:{textAlign:"right"}},u.a.createElement("span",{style:{marginRight:10}},"Toggle Filter"),u.a.createElement(r.n,{defaultChecked:!0,onChange:s})),u.a.createElement(r.b,{style:{height:300}},u.a.createElement(h,{enabled:a})),u.a.createElement(r.b,null,u.a.createElement(i.a,{src:"./static/examples/DesaturateEffectExample.tsx"})),u.a.createElement(f.k,null,"Properties"),u.a.createElement(o.b,{props:b}))}}}]);
//# sourceMappingURL=19.a310337f.chunk.js.map