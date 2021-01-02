(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[17,54],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"PathExample",(function(){return b})),a.d(t,"DrawPathExample",(function(){return d}));var n=a(12),l=a(20),r=a(17),c=a(66),u=a(166),o=a(1),m=a.n(o),i=a(18),s=a(165),E=a(167),p=a(164),h=a(27),f=a(72),b=function(){return m.a.createElement(u.L,null,m.a.createElement(u.N,null,m.a.createElement(u.J,null,m.a.createElement(u.C,{color:16711680,width:10}),m.a.createElement(u.V,{x:20,y:80}),m.a.createElement(u.V,{x:70,y:170}),m.a.createElement(u.V,{x:120,y:20}),m.a.createElement(u.V,{x:320,y:60}))))},d=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(o.useState)([]),s=Object(l.a)(i,2),E=s[0],p=s[1],h=Object(o.useCallback)((function(e){if(a&&E.length>0){var t=[].concat(Object(n.a)(E[E.length-1]),[e]);E.length=E.length-1,p([].concat(Object(n.a)(E),[t]))}}),[a,E]),f=Object(o.useCallback)((function(e){var t=[e];p([].concat(Object(n.a)(E),[t])),c(!0)}),[E]),b=Object(o.useCallback)((function(){return c(!1)}),[]),d=Object(o.useCallback)((function(){return p([])}),[]);return m.a.createElement(u.L,{onInteractionStart:f,onInteractionMove:h,onInteractionEnd:b,background:16777215},E.map((function(e,t){return m.a.createElement(u.N,{key:"path-".concat(t)},m.a.createElement(u.J,null,m.a.createElement(u.C,{color:16711680,width:3}),e.map((function(e,t){return m.a.createElement(u.V,Object.assign({key:"point-".concat(t)},e))}))))})),m.a.createElement(r.e,{iconOnly:!0,iconF7:"clear",color:"black",onClick:d}))};t.default=function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(h.n,null,"Path"),m.a.createElement(h.g,null,"It draws a Path on the canvas. The shape is defined by a list of ",m.a.createElement(E.a,{page:i.a.Point})," component that identify the"," ",m.a.createElement(p.a,null,"x")," and ",m.a.createElement(p.a,null,"y")," coordinates of the points along the path."),m.a.createElement(r.b,{style:{height:200}},m.a.createElement(b,null)),m.a.createElement(r.b,null,m.a.createElement(s.a,{src:"./static/examples/PathExample.tsx"})),c.a.device.desktop&&m.a.createElement(m.a.Fragment,null,m.a.createElement(r.b,{style:{height:400}},"Try to draw on the canvas below ;-)",m.a.createElement(d,null)),m.a.createElement(r.b,null,m.a.createElement(s.a,{src:"./static/examples/DrawPathExample.tsx"}))),m.a.createElement(h.k,null,"Properties"),m.a.createElement(p.b,{props:f.shapeProps}))}},164:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(20),l=a(22),r=a.n(l),c=a(28),u=a(23),o=a(17),m=a(1),i=a.n(m),s=a(24),E=a(18),p=a(27);function h(){var e=Object(u.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return h=function(){return e},e}var f,b=s.a.code(h()),d=function(){var e=Object(c.a)(r.a.mark((function e(){var t,a,n,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=15;break}return e.next=3,Object(E.d)(E.a.Types);case 3:t=e.sent,a=new Map,n=0;case 6:if(!(n<t.length)){e.next=14;break}return e.next=9,Object(E.c)(t[n]);case 9:l=e.sent,a.set(t[n],"#".concat(l));case 11:n++,e.next=6;break;case 14:f=a;case 15:return e.abrupt("return",f);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,a=void 0===t?[]:t,l=Object(m.useState)(),r=Object(n.a)(l,2),c=r[0],u=r[1];return Object(m.useEffect)((function(){d().then(u)}),[]),i.a.createElement(o.b,null,i.a.createElement(p.m,null,i.a.createElement(p.l,null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Name"),i.a.createElement("th",null,"Required"),i.a.createElement("th",null,"Type"),i.a.createElement("th",null,"Default"),i.a.createElement("th",null,"Description"))),i.a.createElement("tbody",null,a.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,e[0]),i.a.createElement("td",null,e[1]?i.a.createElement(o.d,{f7:"checkmark_alt",size:14}):null),i.a.createElement("td",null,i.a.createElement("code",null,c&&c.has(e[2])?i.a.createElement(p.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),i.a.createElement("td",null,i.a.createElement("code",null,e[3])),i.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?i.a.createElement("span",{key:t},e):i.a.createElement(b,{key:t},e)}))))}))))))}},167:function(e,t,a){"use strict";var n=a(20),l=a(1),r=a.n(l),c=a(18),u=a(27);t.a=function(e){var t=e.page,a=e.className,o=Object(l.useState)(),m=Object(n.a)(o,2),i=m[0],s=m[1];return Object(l.useEffect)((function(){Object(c.c)(t).then((function(e){return s("#".concat(e))}))}),[t]),r.a.createElement(u.d,{className:a,href:i,key:t,text:t,external:!0})}},72:function(e,t,a){"use strict";a.r(t),a.d(t,"shapeProps",(function(){return E})),a.d(t,"PolygonExample",(function(){return p}));var n=a(17),l=a(166),r=a(1),c=a.n(r),u=a(18),o=a(165),m=a(167),i=a(164),s=a(27),E=[["name",!1,"string","null","Name or ID of the shape"]],p=function(){return c.a.createElement(l.L,null,c.a.createElement(l.N,null,c.a.createElement(l.Y,null,c.a.createElement(l.C,{color:65280,width:2}),c.a.createElement(l.V,{x:20,y:20}),c.a.createElement(l.V,{x:120,y:20}),c.a.createElement(l.V,{x:70,y:170}))))};t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.n,null,"Polygon"),c.a.createElement(s.g,null,"It draws a polygon on the canvas. The shape is defined by a list of ",c.a.createElement(m.a,{page:u.a.Point})," component that identify the"," ",c.a.createElement(i.a,null,"x")," and ",c.a.createElement(i.a,null,"y")," coordinates of the polygon vertices."),c.a.createElement(n.b,{style:{height:200}},c.a.createElement(p,null)),c.a.createElement(n.b,null,c.a.createElement(o.a,{src:"./static/examples/PolygonExample.tsx"})),c.a.createElement(s.k,null,"Properties"),c.a.createElement(i.b,{props:E}))}}}]);
//# sourceMappingURL=17.d08e81dc.chunk.js.map