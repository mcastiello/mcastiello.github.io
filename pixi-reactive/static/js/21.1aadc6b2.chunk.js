(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[21,56],{149:function(e,t,n){"use strict";var a=n(22),r=n(19),c=n.n(r),u=n(29),l=n(1),o=n.n(l),s=n(18),i=n(27),f=function(){var e=Object(u.a)(c.a.mark((function e(t,n){var a,r,u,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,Object(s.e)(t);case 3:r=e.sent,u=c.a.mark((function e(t){var u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.d)(r[t]);case 2:u=e.sent,a.push(o.a.createElement(i.b,{href:"#".concat(u),key:r[t],text:r[t],onClick:function(){return n(r[t])}}));case 4:case"end":return e.stop()}}),e)})),l=0;case 6:if(!(l<r.length)){e.next=11;break}return e.delegateYield(u(l),"t0",8);case 8:l++,e.next=6;break;case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,n=e.showTitle,r=void 0===n||n,c=Object(l.useState)([]),u=Object(a.a)(c,2),b=u[0],p=u[1],h=Object(l.useContext)(s.a).dispatch;return Object(l.useEffect)((function(){f(t,h).then(p)}),[t,h]),o.a.createElement(o.a.Fragment,null,r&&o.a.createElement(i.n,null,"All ".concat(t)),b)}},71:function(e,t,n){"use strict";n.r(t),n.d(t,"effectProps",(function(){return l})),n.d(t,"amountEffectProps",(function(){return o}));var a=n(1),r=n.n(a),c=n(18),u=n(149),l=[["multiply",!1,"boolean","true","Whether the effect should be multiplied onto the color matrix or not"],["enabled",!1,"boolean","true","Whether the effect is applied to the filter or not"]],o=[["amount",!1,"number","0.5","Strength of the effect"]].concat(l);t.default=function(){return r.a.createElement(u.a,{page:c.b.Effects})}},96:function(e,t,n){"use strict";n.r(t);var a=n(22),r=n(12),c=n(17),u=n(148),l=n(1),o=n.n(l),s=n(71),i=n(146),f=n(147),b=n(27),p=[["rotation",!1,"number","0","Color rotation in degrees"]].concat(Object(r.a)(s.effectProps)),h={galaxy:"/static/assets/galaxy.png",ship:"/static/assets/spaceship.png"},m=function(e){var t=e.enabled,n=Object(l.useState)(0),r=Object(a.a)(n,2),c=r[0],s=r[1],i=Object(l.useCallback)((function(e){return s(e.width+300)}),[]),f=Object(l.useCallback)((function(e){return(e+1)%c}),[c]),b=Object(l.useReducer)(f,0),p=Object(a.a)(b,2),m=p[0],E=p[1],d=Object(l.useReducer)((function(e){return(e+.5)%360}),0),g=Object(a.a)(d,2),x=g[0],j=g[1],O=Object(l.useCallback)((function(){E(),j()}),[]);return o.a.createElement(u.A,{textures:h,onUpdate:O,onResize:i},o.a.createElement(u.I,{texture:"galaxy"}),o.a.createElement(u.F,{texture:"ship",x:m-150,alignY:.5}),o.a.createElement(u.h,{enabled:t},o.a.createElement(u.r,{rotation:x})))};t.default=function(){var e=Object(l.useState)(!0),t=Object(a.a)(e,2),n=t[0],r=t[1],u=Object(l.useCallback)((function(){return r(!n)}),[n]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(b.n,null,"HueEffect"),o.a.createElement(b.g,null,"This effect will a HUE rotation to the color matrix."),o.a.createElement(c.b,{style:{textAlign:"right"}},o.a.createElement("span",{style:{marginRight:10}},"Toggle Filter"),o.a.createElement(c.n,{defaultChecked:!0,onChange:u})),o.a.createElement(c.b,{style:{height:300}},o.a.createElement(m,{enabled:n})),o.a.createElement(c.b,null,o.a.createElement(i.a,{src:"/static/examples/HueEffectExample.tsx"})),o.a.createElement(b.k,null,"Properties"),o.a.createElement(f.b,{props:p}))}}}]);
//# sourceMappingURL=21.1aadc6b2.chunk.js.map