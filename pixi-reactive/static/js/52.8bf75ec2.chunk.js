(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[52],{123:function(e,t,n){"use strict";n.r(t);var a=n(20),r=n(23),l=n(17),c=n(174),o=n(1),u=n.n(o),i=n(24),s=n(18),m=n(173),p=n(175),h=n(172),d=n(27);function f(){var e=Object(r.a)(["\n  width: 135px;\n  display: inline-block;\n"]);return f=function(){return e},e}var b=[["x",!0,"number","0","Relative position from the left border of the parent container"],["y",!0,"number","0","Relative position from the top border of the parent container"],["width",!0,"number","0","Computed width of the element"],["height",!0,"number","0","Computed height of the element"],["left",!0,"number","0","X axis adjustment to compensate for anchor position"],["top",!0,"number","0","Y axis adjustment to compensate for anchor position"],["transform",!1,"number[]","[1, 0, 0, 1, 0, 0]","Global transform matrix that defines position, scale and rotation within the context of the main scene"],["parent",!0,"PIXI.Container","null","Reference to the PIXI object used as parent element"]],E={red:"./static/assets/red.png",yellow:"./static/assets/yellow.png"},x=i.a.span(f()),j=function(){var e=Object(o.useContext)(c.I),t=e.x,n=e.y,a=e.width,r=e.height,l=e.parent,i=e.left,s=e.top;return u.a.createElement("div",null,u.a.createElement(x,null,"Name: ",l.name),u.a.createElement(x,null,"Position: ",t,", ",n),u.a.createElement(x,null,"Size: ",Math.round(a),", ",Math.round(r)),u.a.createElement(x,null,"Adjust: ",Math.round(i),", ",Math.round(s)))},y=function(){var e=Object(o.useState)(0),t=Object(a.a)(e,2),n=t[0],r=t[1],l=Object(o.useCallback)((function(e){return r(e.width+300)}),[]),i=Object(o.useCallback)((function(e){return(e+1)%n}),[n]),s=Object(o.useReducer)(i,0),m=Object(a.a)(s,2),p=m[0],h=m[1],d=Object(o.useReducer)((function(e){var t=e.scale,n=e.direction,a=n;return(n&&t<=1||!n&&t>=2)&&(a=!n),{direction:a,scale:a?t-.01:t+.01}}),{scale:1,direction:!1}),f=Object(a.a)(d,2),b=f[0],x=f[1],y=Object(o.useCallback)((function(){h(),x()}),[]);return u.a.createElement(c.L,{textures:E,onUpdate:y,onResize:l},u.a.createElement(c.S,{name:"Red",texture:"red",alignX:.5,alignY:.5,scaleX:b.scale,scaleY:b.scale},u.a.createElement(j,null)),u.a.createElement(c.S,{name:"Yellow",texture:"yellow",alignY:.5,x:p-150},u.a.createElement(j,null)))};t.default=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.n,null,"ParentContext"),u.a.createElement(d.g,null,"The ",u.a.createElement(h.a,null,"ParentContext")," will provide you with information about the parent object to which you're adding your component. Those info includes position, size and the adjustment you may want to apply to the position in order to math the anchor value of the parent.",u.a.createElement("br",null),"The ",u.a.createElement(h.a,null,"transform")," property can also be used whenever you need more specific information about scale and rotation of the element within the scene. It can be used, for example, as a transform matrix in a CSS style like it happens in the"," ",u.a.createElement(p.a,{page:s.a.PixiHtmlContainer}),".",u.a.createElement("br",null),"This is also the only way this library provides to access the actual ",u.a.createElement(h.a,null,"PIXI")," object. You can use it to override the control provided by the library or to perform actions not supported."),u.a.createElement(l.b,{style:{height:300}},u.a.createElement(y,null)),u.a.createElement(l.b,null,u.a.createElement(m.a,{src:"./static/examples/ParentContextExample.tsx"})),u.a.createElement(d.k,null,"Properties"),u.a.createElement(h.b,{props:b}))}},172:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(20),r=n(22),l=n.n(r),c=n(28),o=n(23),u=n(17),i=n(1),s=n.n(i),m=n(24),p=n(18),h=n(27);function d(){var e=Object(o.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return d=function(){return e},e}var f,b=m.a.code(d()),E=function(){var e=Object(c.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=15;break}return e.next=3,Object(p.d)(p.a.Types);case 3:t=e.sent,n=new Map,a=0;case 6:if(!(a<t.length)){e.next=14;break}return e.next=9,Object(p.c)(t[a]);case 9:r=e.sent,n.set(t[a],"#".concat(r));case 11:a++,e.next=6;break;case 14:f=n;case 15:return e.abrupt("return",f);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,r=Object(i.useState)(),l=Object(a.a)(r,2),c=l[0],o=l[1];return Object(i.useEffect)((function(){E().then(o)}),[]),s.a.createElement(u.b,null,s.a.createElement(h.m,null,s.a.createElement(h.l,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Required"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Default"),s.a.createElement("th",null,"Description"))),s.a.createElement("tbody",null,n.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,e[0]),s.a.createElement("td",null,e[1]?s.a.createElement(u.d,{f7:"checkmark_alt",size:14}):null),s.a.createElement("td",null,s.a.createElement("code",null,c&&c.has(e[2])?s.a.createElement(h.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),s.a.createElement("td",null,s.a.createElement("code",null,e[3])),s.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?s.a.createElement("span",{key:t},e):s.a.createElement(b,{key:t},e)}))))}))))))}},175:function(e,t,n){"use strict";var a=n(20),r=n(1),l=n.n(r),c=n(18),o=n(27);t.a=function(e){var t=e.page,n=e.className,u=Object(r.useState)(),i=Object(a.a)(u,2),s=i[0],m=i[1];return Object(r.useEffect)((function(){Object(c.c)(t).then((function(e){return m("#".concat(e))}))}),[t]),l.a.createElement(o.d,{className:n,href:s,key:t,text:t,external:!0})}}}]);
//# sourceMappingURL=52.8bf75ec2.chunk.js.map