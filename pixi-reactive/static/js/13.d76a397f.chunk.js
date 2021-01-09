(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[13,54],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var c=n(16),r=n(21),s=n(23),i=n.n(s),o=n(29),a=n(24),j=n(18),h=n(1),u=n(25),b=n(19),x=n(28);function d(){var e=Object(a.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return d=function(){return e},e}var l,O=u.a.code(d()),f=function(){var e=Object(o.a)(i.a.mark((function e(){var t,n,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l){e.next=15;break}return e.next=3,Object(b.d)(b.a.Types);case 3:t=e.sent,n=new Map,c=0;case 6:if(!(c<t.length)){e.next=14;break}return e.next=9,Object(b.c)(t[c]);case 9:r=e.sent,n.set(t[c],"#".concat(r));case 11:c++,e.next=6;break;case 14:l=n;case 15:return e.abrupt("return",l);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,s=Object(h.useState)(),i=Object(r.a)(s,2),o=i[0],a=i[1];return Object(h.useEffect)((function(){f().then(a)}),[]),Object(c.jsx)(j.b,{children:Object(c.jsx)(x.m,{children:Object(c.jsxs)(x.l,{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Required"}),Object(c.jsx)("th",{children:"Type"}),Object(c.jsx)("th",{children:"Default"}),Object(c.jsx)("th",{children:"Description"})]})}),Object(c.jsx)("tbody",{children:n.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e[0]}),Object(c.jsx)("td",{children:e[1]?Object(c.jsx)(j.d,{f7:"checkmark_alt",size:14}):null}),Object(c.jsx)("td",{children:Object(c.jsx)("code",{children:o&&o.has(e[2])?Object(c.jsx)(x.h,{text:e[2],href:o.get(e[2]),external:!0}):e[2]})}),Object(c.jsx)("td",{children:Object(c.jsx)("code",{children:e[3]})}),Object(c.jsx)("td",{children:(n=e[4],n.split(/`/).map((function(e,t){return t%2===0?Object(c.jsx)("span",{children:e},t):Object(c.jsx)(O,{children:e},t)})))})]},t);var n}))})]})})})}},181:function(e,t,n){"use strict";var c=n(16),r=n(21),s=n(1),i=n(262),o=n(183),a=n(261);i.a.registerLanguage("tsx",o.a);t.a=function(e){var t=e.src,n=e.children,o=void 0===n?"":n,j=Object(s.useState)(o),h=Object(r.a)(j,2),u=h[0],b=h[1];return Object(s.useEffect)((function(){t&&fetch(t).then((function(e){return e.text()})).then((function(e){return b(e)}))}),[t]),Object(s.useEffect)((function(){o&&b(o)}),[o]),Object(c.jsx)(i.a,{style:a.a,language:"tsx",showLineNumbers:!0,children:u})}},186:function(e,t,n){"use strict";var c=n(16),r=n(21),s=n(1),i=n(19),o=n(28);t.a=function(e){var t=e.page,n=e.className,a=Object(s.useState)(),j=Object(r.a)(a,2),h=j[0],u=j[1];return Object(s.useEffect)((function(){Object(i.c)(t).then((function(e){return u("#".concat(e))}))}),[t]),Object(c.jsx)(o.d,{className:n,href:h,text:t,external:!0},t)}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"shapeProps",(function(){return u})),n.d(t,"PolygonExample",(function(){return b}));var c=n(16),r=n(18),s=n(182),i=(n(1),n(19)),o=n(181),a=n(186),j=n(180),h=n(28),u=[["name",!1,"string","null","Name or ID of the shape"]],b=function(){return Object(c.jsx)(s.L,{children:Object(c.jsx)(s.O,{children:Object(c.jsxs)(s.Z,{children:[Object(c.jsx)(s.C,{color:65280,width:2}),Object(c.jsx)(s.W,{x:20,y:20}),Object(c.jsx)(s.W,{x:120,y:20}),Object(c.jsx)(s.W,{x:70,y:170})]})})})};t.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.n,{children:"Polygon"}),Object(c.jsxs)(h.g,{children:["It draws a polygon on the canvas. The shape is defined by a list of ",Object(c.jsx)(a.a,{page:i.a.Point})," component that identify the"," ",Object(c.jsx)(j.a,{children:"x"})," and ",Object(c.jsx)(j.a,{children:"y"})," coordinates of the polygon vertices."]}),Object(c.jsx)(r.b,{style:{height:200},children:Object(c.jsx)(b,{})}),Object(c.jsx)(r.b,{children:Object(c.jsx)(o.a,{src:"./static/examples/PolygonExample.tsx"})}),Object(c.jsx)(h.k,{children:"Properties"}),Object(c.jsx)(j.b,{props:u})]})}},84:function(e,t,n){"use strict";n.r(t);var c=n(16),r=n(12),s=n(18),i=n(182),o=(n(1),n(19)),a=n(181),j=n(186),h=n(180),u=n(28),b=n(73),x=[].concat(Object(r.a)(b.shapeProps),[["xFrom",!1,"number","0","Position of the start point on the X axis of the Arc Curve"],["yFrom",!1,"number","0","Position of the start point on the Y axis of the Arc Curve"],["xTo",!0,"number","null","Position of the end point on the X axis of the Arc Curve"],["yTo",!0,"number","null","Position of the end point on the Y axis of the Arc Curve"],["controlX",!0,"number","null","Position of the first control point on the X axis of the Arc Curve"],["controlY",!0,"number","null","Position of the first control point on the Y axis of the Arc Curve"],["radius",!0,"number","null","Radius of the generated Arc"]]),d=function(){return Object(c.jsx)(i.L,{children:Object(c.jsx)(i.O,{children:Object(c.jsx)(i.d,{xFrom:20,yFrom:20,xTo:260,yTo:120,controlX:40,controlY:160,radius:120,children:Object(c.jsx)(i.C,{color:16711680,width:10})})})})};t.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(u.n,{children:"ArcCurve"}),Object(c.jsxs)(u.g,{children:["It draws a Arc on the canvas. It differs from the ",Object(c.jsx)(j.a,{page:o.a.Arc})," component because it defines the arc with a starting and a ending point and can be joined with other paths and curves."]}),Object(c.jsx)(s.b,{style:{height:200},children:Object(c.jsx)(d,{})}),Object(c.jsx)(s.b,{children:Object(c.jsx)(a.a,{src:"./static/examples/ArcCurveExample.tsx"})}),Object(c.jsx)(u.k,{children:"Properties"}),Object(c.jsx)(h.b,{props:x})]})}}}]);
//# sourceMappingURL=13.d76a397f.chunk.js.map