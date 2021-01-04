(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[86],{171:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(20),r=a(22),l=a.n(r),c=a(28),u=a(23),s=a(17),i=a(1),m=a.n(i),o=a(24),E=a(18),p=a(27);function h(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return h=function(){return e},e}var d,f=o.a.code(h()),b=function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d){e.next=15;break}return e.next=3,Object(E.d)(E.a.Types);case 3:t=e.sent,a=new Map,n=0;case 6:if(!(n<t.length)){e.next=14;break}return e.next=9,Object(E.c)(t[n]);case 9:r=e.sent,a.set(t[n],"#".concat(r));case 11:n++,e.next=6;break;case 14:d=a;case 15:return e.abrupt("return",d);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,a=void 0===t?[]:t,r=Object(i.useState)(),l=Object(n.a)(r,2),c=l[0],u=l[1];return Object(i.useEffect)((function(){b().then(u)}),[]),m.a.createElement(s.b,null,m.a.createElement(p.m,null,m.a.createElement(p.l,null,m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"Name"),m.a.createElement("th",null,"Required"),m.a.createElement("th",null,"Type"),m.a.createElement("th",null,"Default"),m.a.createElement("th",null,"Description"))),m.a.createElement("tbody",null,a.map((function(e,t){return m.a.createElement("tr",{key:t},m.a.createElement("td",null,e[0]),m.a.createElement("td",null,e[1]?m.a.createElement(s.d,{f7:"checkmark_alt",size:14}):null),m.a.createElement("td",null,m.a.createElement("code",null,c&&c.has(e[2])?m.a.createElement(p.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),m.a.createElement("td",null,m.a.createElement("code",null,e[3])),m.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?m.a.createElement("span",{key:t},e):m.a.createElement(f,{key:t},e)}))))}))))))}},79:function(e,t,a){"use strict";a.r(t),a.d(t,"Ship",(function(){return E}));var n=a(20),r=a(17),l=a(173),c=a(1),u=a.n(c),s=a(172),i=a(171),m=a(27),o={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},E=function(){var e=Object(c.useContext)(l.cb).width,t=Object(c.useState)(0),a=Object(n.a)(t,2),r=a[0],s=a[1],i=Object(l.rb)(10*e,!0);return Object(c.useEffect)((function(){s((e+300)*i)}),[i,e]),u.a.createElement(l.R,{texture:"ship",x:r-150,alignY:.5})},p=function(){return u.a.createElement(l.L,{textures:o},u.a.createElement(l.U,{texture:"galaxy"}),u.a.createElement(E,null))};t.default=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.n,null,"useAnimatedProgress"),u.a.createElement(m.g,null,"This hook will take as parameters a ",u.a.createElement(i.a,null,"duration")," in milliseconds of the whole animation and an optional flag"," ",u.a.createElement(i.a,null,"loop")," that will reset the animation each time it ends is set to ",u.a.createElement(i.a,null,"true"),". ",u.a.createElement("br",null),"The return value will be a value between ",u.a.createElement(i.a,null,"0")," and ",u.a.createElement(i.a,null,"1")," representing the progress of the animation in percentage."),u.a.createElement(r.b,{style:{height:300}},u.a.createElement(p,null)),u.a.createElement(r.b,null,u.a.createElement(s.a,{src:"./static/examples/UseAnimatedProgressExample.tsx"})))}}}]);
//# sourceMappingURL=86.8cfa66d9.chunk.js.map