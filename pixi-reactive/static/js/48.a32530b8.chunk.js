(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[48],{172:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(20),r=a(22),l=a.n(r),c=a(28),s=a(23),u=a(17),i=a(1),o=a.n(i),m=a(24),p=a(18),f=a(27);function d(){var e=Object(s.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return d=function(){return e},e}var b,h=m.a.code(d()),E=function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=15;break}return e.next=3,Object(p.d)(p.a.Types);case 3:t=e.sent,a=new Map,n=0;case 6:if(!(n<t.length)){e.next=14;break}return e.next=9,Object(p.c)(t[n]);case 9:r=e.sent,a.set(t[n],"#".concat(r));case 11:n++,e.next=6;break;case 14:b=a;case 15:return e.abrupt("return",b);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,a=void 0===t?[]:t,r=Object(i.useState)(),l=Object(n.a)(r,2),c=l[0],s=l[1];return Object(i.useEffect)((function(){E().then(s)}),[]),o.a.createElement(u.b,null,o.a.createElement(f.m,null,o.a.createElement(f.l,null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Required"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Default"),o.a.createElement("th",null,"Description"))),o.a.createElement("tbody",null,a.map((function(e,t){return o.a.createElement("tr",{key:t},o.a.createElement("td",null,e[0]),o.a.createElement("td",null,e[1]?o.a.createElement(u.d,{f7:"checkmark_alt",size:14}):null),o.a.createElement("td",null,o.a.createElement("code",null,c&&c.has(e[2])?o.a.createElement(f.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),o.a.createElement("td",null,o.a.createElement("code",null,e[3])),o.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?o.a.createElement("span",{key:t},e):o.a.createElement(h,{key:t},e)}))))}))))))}},175:function(e,t,a){"use strict";var n=a(20),r=a(1),l=a.n(r),c=a(18),s=a(27);t.a=function(e){var t=e.page,a=e.className,u=Object(r.useState)(),i=Object(n.a)(u,2),o=i[0],m=i[1];return Object(r.useEffect)((function(){Object(c.c)(t).then((function(e){return m("#".concat(e))}))}),[t]),l.a.createElement(s.d,{className:a,href:o,key:t,text:t,external:!0})}},81:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(17),l=a(174),c=a(1),s=a.n(c),u=a(18),i=a(173),o=a(175),m=a(172),p=a(27),f=[["frameId",!0,"number","0","ID of the latest frame generated by the browser"],["elapsed",!0,"number","0","Elapsed time in milliseconds since the last generated frame"],["fps",!0,"number","0","Current framerate of the application"],["averageFps",!0,"number","0","Average framerate of the application"],["minFps",!0,"number","0","Minimum framerate reached"],["maxFps",!0,"number","0","Maximum framerate reached"],["history",!0,"number[]","[]","History of the latest 120 fps recorded"]],d=function(e){var t=e.src,a=e.speed,r=e.scale,u=void 0===r?1:r,i=Object(c.useContext)(l.b).frameId,o=Object(c.useCallback)((function(e){return e-a}),[a]),m=Object(c.useReducer)(o,0),p=Object(n.a)(m,2),f=p[0],d=p[1];return Object(c.useEffect)(d,[i]),s.a.createElement(l.V,{tileX:f,tileScaleY:u},s.a.createElement(l.U,{src:t}))},b=function(){var e=Object(c.useContext)(l.b),t=e.fps,a=e.averageFps,n=e.minFps,r=e.maxFps;return s.a.createElement("div",null,"Current: ",t," - Average: ",a," - Min: ",n," - Max: ",r)},h=function(){return s.a.createElement(l.L,null,s.a.createElement(d,{src:"./static/assets/galaxy.png",speed:.1}),s.a.createElement(d,{src:"./static/assets/slow-stars.png",speed:.5}),s.a.createElement(d,{src:"./static/assets/fast-stars.png",speed:2,scale:.5}),s.a.createElement(b,null))};t.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.n,null,"AnimationContext"),s.a.createElement(p.g,null,"When you develop your animation in one single React component, you can use the ",s.a.createElement(m.a,null,"onUpdate")," callback from the"," ",s.a.createElement(o.a,{page:u.a.PixiCanvas})," to update your animation, but let's be honest, that is unlikely to happen in a real life scenario. You are probably going to create your own components that will need to be able to leave on their own and be reusable as much as possible. That is where the ",s.a.createElement(m.a,null,"AnimationContext")," comes in hand. It provides you with the property"," ",s.a.createElement(m.a,null,"frameId")," that gets updated every time an animation frame is provided by the browser, which means that you can use it to create a side effect in your component.",s.a.createElement("br",null),"Let's refactor the example from ",s.a.createElement(o.a,{page:u.a.PixiTilingSprite})," to make use of this, and let's have a look at the other performance stats provided by the context while we are there:"),s.a.createElement(r.b,{style:{height:300}},s.a.createElement(h,null)),s.a.createElement(r.b,null,s.a.createElement(i.a,{src:"./static/examples/AnimationContextExample.tsx"})),s.a.createElement(p.k,null,"Properties"),s.a.createElement(m.b,{props:f}))}}}]);
//# sourceMappingURL=48.a32530b8.chunk.js.map