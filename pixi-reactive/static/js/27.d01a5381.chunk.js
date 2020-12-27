(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[27,56],{115:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(12),c=a(17),l=a(148),u=a(1),s=a.n(u),o=a(71),i=a(146),f=a(147),h=a(27),p=Object(r.a)(o.amountEffectProps),b={galaxy:"/static/assets/galaxy.png",ship:"/static/assets/spaceship.png"},m=function(e){var t=e.enabled,a=Object(u.useState)(0),r=Object(n.a)(a,2),c=r[0],o=r[1],i=Object(u.useCallback)((function(e){return o(e.width+300)}),[]),f=Object(u.useCallback)((function(e){return(e+1)%c}),[c]),h=Object(u.useReducer)(f,0),p=Object(n.a)(h,2),m=p[0],d=p[1];return s.a.createElement(l.A,{textures:b,onUpdate:d,onResize:i},s.a.createElement(l.I,{texture:"galaxy"}),s.a.createElement(l.F,{texture:"ship",x:m-150,alignY:.5}),s.a.createElement(l.h,{enabled:t},s.a.createElement(l.L,null)))};t.default=function(){var e=Object(u.useState)(!0),t=Object(n.a)(e,2),a=t[0],r=t[1],l=Object(u.useCallback)((function(){return r(!a)}),[a]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(h.n,null,"PredatorEffect"),s.a.createElement(h.g,null,"This effect will make it looks like the scene is seen through the eyes of a Predator (you know the movie, right?)."),s.a.createElement(c.b,{style:{textAlign:"right"}},s.a.createElement("span",{style:{marginRight:10}},"Toggle Filter"),s.a.createElement(c.n,{defaultChecked:!0,onChange:l})),s.a.createElement(c.b,{style:{height:300}},s.a.createElement(m,{enabled:a})),s.a.createElement(c.b,null,s.a.createElement(i.a,{src:"/static/examples/PredatorEffectExample.tsx"})),s.a.createElement(h.k,null,"Properties"),s.a.createElement(f.b,{props:p}))}},149:function(e,t,a){"use strict";var n=a(22),r=a(19),c=a.n(r),l=a(29),u=a(1),s=a.n(u),o=a(18),i=a(27),f=function(){var e=Object(l.a)(c.a.mark((function e(t,a){var n,r,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(o.e)(t);case 3:r=e.sent,l=c.a.mark((function e(t){var l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.d)(r[t]);case 2:l=e.sent,n.push(s.a.createElement(i.b,{href:"#".concat(l),key:r[t],text:r[t],onClick:function(){return a(r[t])}}));case 4:case"end":return e.stop()}}),e)})),u=0;case 6:if(!(u<r.length)){e.next=11;break}return e.delegateYield(l(u),"t0",8);case 8:u++,e.next=6;break;case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,a=e.showTitle,r=void 0===a||a,c=Object(u.useState)([]),l=Object(n.a)(c,2),h=l[0],p=l[1],b=Object(u.useContext)(o.a).dispatch;return Object(u.useEffect)((function(){f(t,b).then(p)}),[t,b]),s.a.createElement(s.a.Fragment,null,r&&s.a.createElement(i.n,null,"All ".concat(t)),h)}},71:function(e,t,a){"use strict";a.r(t),a.d(t,"effectProps",(function(){return u})),a.d(t,"amountEffectProps",(function(){return s}));var n=a(1),r=a.n(n),c=a(18),l=a(149),u=[["multiply",!1,"boolean","true","Whether the effect should be multiplied onto the color matrix or not"],["enabled",!1,"boolean","true","Whether the effect is applied to the filter or not"]],s=[["amount",!1,"number","0.5","Strength of the effect"]].concat(u);t.default=function(){return r.a.createElement(l.a,{page:c.b.Effects})}}}]);
//# sourceMappingURL=27.d01a5381.chunk.js.map