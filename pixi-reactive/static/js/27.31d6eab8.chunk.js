(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[27,73],{164:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(20),r=n(22),c=n.n(r),l=n(28),u=n(23),o=n(17),s=n(1),i=n.n(s),f=n(24),m=n(18),b=n(27);function p(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return p=function(){return e},e}var d,h=f.a.code(p()),E=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=15;break}return e.next=3,Object(m.d)(m.a.Types);case 3:t=e.sent,n=new Map,a=0;case 6:if(!(a<t.length)){e.next=14;break}return e.next=9,Object(m.c)(t[a]);case 9:r=e.sent,n.set(t[a],"#".concat(r));case 11:a++,e.next=6;break;case 14:d=n;case 15:return e.abrupt("return",d);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,r=Object(s.useState)(),c=Object(a.a)(r,2),l=c[0],u=c[1];return Object(s.useEffect)((function(){E().then(u)}),[]),i.a.createElement(o.b,null,i.a.createElement(b.m,null,i.a.createElement(b.l,null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Required"),i.a.createElement("th",null,"Type"),i.a.createElement("th",null,"Default"),i.a.createElement("th",null,"Description"))),i.a.createElement("tbody",null,n.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,e[0]),i.a.createElement("td",null,e[1]?i.a.createElement(o.d,{f7:"checkmark_alt",size:14}):null),i.a.createElement("td",null,i.a.createElement("code",null,l&&l.has(e[2])?i.a.createElement(b.h,{text:e[2],href:l.get(e[2]),external:!0}):e[2])),i.a.createElement("td",null,i.a.createElement("code",null,e[3])),i.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?i.a.createElement("span",{key:t},e):i.a.createElement(h,{key:t},e)}))))}))))))}},168:function(e,t,n){"use strict";var a=n(20),r=n(22),c=n.n(r),l=n(28),u=n(1),o=n.n(u),s=n(18),i=n(27),f=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(s.d)(t);case 3:a=e.sent,r=0;case 5:if(!(r<a.length)){e.next=13;break}return e.next=8,Object(s.c)(a[r]);case 8:l=e.sent,n.push(o.a.createElement(i.b,{href:"#".concat(l),key:a[r],text:a[r],external:!0}));case 10:r++,e.next=5;break;case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,n=e.showTitle,r=void 0===n||n,c=Object(u.useState)([]),l=Object(a.a)(c,2),s=l[0],m=l[1];return Object(u.useEffect)((function(){f(t).then(m)}),[t]),o.a.createElement(o.a.Fragment,null,r&&o.a.createElement(i.n,null,"All ".concat(t)),s)}},71:function(e,t,n){"use strict";n.r(t),n.d(t,"effectProps",(function(){return u})),n.d(t,"amountEffectProps",(function(){return o}));var a=n(1),r=n.n(a),c=n(18),l=n(168),u=[["multiply",!1,"boolean","true","Whether the effect should be multiplied onto the color matrix or not"],["enabled",!1,"boolean","true","Whether the effect is applied to the filter or not"]],o=[["amount",!1,"number","0.5","Strength of the effect"]].concat(u);t.default=function(){return r.a.createElement(l.a,{page:c.a.Effects})}},92:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(12),c=n(17),l=n(166),u=n(1),o=n.n(u),s=n(71),i=n(165),f=n(164),m=n(27),b=[["desaturation",!0,"number","null","Desaturation amount"],["toned",!0,"number","null","Toned amount"],["lightColor",!0,"number","null","Tone value for light colors"],["darkColor",!0,"number","null","Tone value for dark colors"]].concat(Object(r.a)(s.effectProps)),p={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},d=function(e){var t=e.enabled,n=Object(u.useState)(0),r=Object(a.a)(n,2),c=r[0],s=r[1],i=Object(u.useCallback)((function(e){return s(e.width+300)}),[]),f=Object(u.useCallback)((function(e){return(e+1)%c}),[c]),m=Object(u.useReducer)(f,0),b=Object(a.a)(m,2),d=b[0],h=b[1];return o.a.createElement(l.L,{textures:p,onUpdate:h,onResize:i},o.a.createElement(l.U,{texture:"galaxy"}),o.a.createElement(l.R,{texture:"ship",x:d-150,alignY:.5}),o.a.createElement(l.l,{enabled:t},o.a.createElement(l.m,{desaturation:.5,toned:.5,lightColor:4515200,darkColor:65332})))};t.default=function(){var e=Object(u.useState)(!0),t=Object(a.a)(e,2),n=t[0],r=t[1],l=Object(u.useCallback)((function(){return r(!n)}),[n]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.n,null,"ColorToneEffect"),o.a.createElement(m.g,null,"This effect is a bit of a mystery, the official description says: We don't know exactly what it does, kind of gradient map, but funny to play with!."),o.a.createElement(c.b,{style:{textAlign:"right"}},o.a.createElement("span",{style:{marginRight:10}},"Toggle Filter"),o.a.createElement(c.n,{defaultChecked:!0,onChange:l})),o.a.createElement(c.b,{style:{height:300}},o.a.createElement(d,{enabled:n})),o.a.createElement(c.b,null,o.a.createElement(i.a,{src:"./static/examples/ColorToneEffectExample.tsx"})),o.a.createElement(m.k,null,"Properties"),o.a.createElement(f.b,{props:b}))}}}]);
//# sourceMappingURL=27.31d6eab8.chunk.js.map