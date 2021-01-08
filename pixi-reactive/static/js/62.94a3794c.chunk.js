(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[62],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"Ship",(function(){return b}));var a=n(17),r=n(181),l=n(187),c=n(1),u=n.n(c),i=n(18),s=n(180),o=n(182),m=n(179),p=n(27),E=[["from",!0,"object | number","null","Number or object with numeric properties used as starting point of the animation"],["to",!0,"object | number","null","Number or object with numeric properties used define the destination of the animation"],["duration",!0,"number","null","Duration of the tween animation"],["ease",!1,"Easing","Easing.Linear","Easing effect applied to the animation"],["easeParams",!1,"string","null","Some easing effects require a few parameters (please, refer to the GreenSock website for details). Parameters can be added to the string and separated by a comma"],["onEvent",!1,"function","null","Callback executed when an event is triggered by the animation"]],f={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},b=function(){var e=Object(c.useContext)(r.eb).width,t=Object(l.e)(-150,e+150,5e3),n=t.controls.loop;return Object(c.useEffect)(n,[n]),u.a.createElement(r.S,{texture:"ship",x:t.state,alignY:.5})},d=function(){return u.a.createElement(r.L,{textures:f},u.a.createElement(r.V,{texture:"galaxy"}),u.a.createElement(b,null))};t.default=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(p.n,null,"useTweenAnimation"),u.a.createElement(p.g,null,"This hook is part of the ",u.a.createElement(m.a,null,"pixi-reactive-tween")," and will generate a tween animation. It can be installed as follow:",u.a.createElement(a.b,null,u.a.createElement(m.a,null,"npm install pixi-reactive-tween"),u.a.createElement("br",null),"or",u.a.createElement("br",null),u.a.createElement(m.a,null,"yarn add pixi-reactive-tween")),"It will return a reference to the type used by the ",u.a.createElement(o.a,{page:i.a.TweenContext}),"."),u.a.createElement(a.b,{style:{height:300}},u.a.createElement(d,null)),u.a.createElement(a.b,null,u.a.createElement(s.a,{src:"./static/examples/UseTweenAnimationExample.tsx"})),u.a.createElement(p.k,null,"Parameters"),u.a.createElement(m.b,{props:E}))}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(20),r=n(22),l=n.n(r),c=n(28),u=n(23),i=n(17),s=n(1),o=n.n(s),m=n(24),p=n(18),E=n(27);function f(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return f=function(){return e},e}var b,d=m.a.code(f()),h=function(){var e=Object(c.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=15;break}return e.next=3,Object(p.d)(p.a.Types);case 3:t=e.sent,n=new Map,a=0;case 6:if(!(a<t.length)){e.next=14;break}return e.next=9,Object(p.c)(t[a]);case 9:r=e.sent,n.set(t[a],"#".concat(r));case 11:a++,e.next=6;break;case 14:b=n;case 15:return e.abrupt("return",b);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,r=Object(s.useState)(),l=Object(a.a)(r,2),c=l[0],u=l[1];return Object(s.useEffect)((function(){h().then(u)}),[]),o.a.createElement(i.b,null,o.a.createElement(E.m,null,o.a.createElement(E.l,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Required"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,n.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e[0]),o.a.createElement("td",null,e[1]?o.a.createElement(i.d,{f7:"checkmark_alt",size:14}):null),o.a.createElement("td",null,o.a.createElement("code",null,c&&c.has(e[2])?o.a.createElement(E.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),o.a.createElement("td",null,o.a.createElement("code",null,e[3])),o.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?o.a.createElement("span",{key:t},e):o.a.createElement(d,{key:t},e)}))))}))))))}},182:function(e,t,n){"use strict";var a=n(20),r=n(1),l=n.n(r),c=n(18),u=n(27);t.a=function(e){var t=e.page,n=e.className,i=Object(r.useState)(),s=Object(a.a)(i,2),o=s[0],m=s[1];return Object(r.useEffect)((function(){Object(c.c)(t).then((function(e){return m("#".concat(e))}))}),[t]),l.a.createElement(u.d,{className:n,href:o,key:t,text:t,external:!0})}}}]);
//# sourceMappingURL=62.94a3794c.chunk.js.map