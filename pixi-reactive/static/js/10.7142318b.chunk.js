(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[10,89],{112:function(e,t,n){"use strict";n.r(t);var a=n(17),l=n(1),r=n.n(l),c=n(18),i=n(180),o=n(182),u=n(183),s=n(179),h=n(27),d=n(73);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{src:"./static/assets/pixi-reactive.png",alt:"Pixi Reactive"})),r.a.createElement(h.g,null,"The ",r.a.createElement(s.a,null,"PixiReactive")," library is a quick way to use all the features provided by"," ",r.a.createElement(h.h,{href:"http://pixijs.download/release/docs/index.html",text:"PIXI",external:!0,target:"_blank"})," inside a"," ",r.a.createElement(h.h,{href:"https://reactjs.org/",text:"React",external:!0,target:"_blank"})," virtual DOM. The ultimate goal is to encapsulate all the PIXI elements inside React Function Components that can be easily added to your project. As a matter of fact, in most use cases, you may never need to instantiate a PIXI object yourself. You won't need to load a renderer or worry about the animation loop and the page resize. You just need to add a ",r.a.createElement(o.a,{page:c.a.PixiCanvas})," to your component and start coding your game or animation.",r.a.createElement("br",null),"You will also be able to mix HTML content with PIXI objects... I mean, you may never need it, but it's there..."),r.a.createElement(h.k,null,"Installation"),r.a.createElement(h.g,null,"This library uses both ",r.a.createElement(s.a,null,"React")," and ",r.a.createElement(s.a,null,"PIXI")," as peer dependencies, which basically means that they are required, but they are not automatically imported, so that you can use your own versions and you won't have duplicates among your node modules. So, depending on your favourite package manager, you will need to install all the 3 libraries as follows:"," ",r.a.createElement(a.b,null,r.a.createElement(s.a,null,"npm install react pixi.js pixi-reactive"),r.a.createElement("br",null),"or",r.a.createElement("br",null),r.a.createElement(s.a,null,"yarn add react pixi.js pixi-reactive")),"Or you can fork and build your own version from"," ",r.a.createElement(h.h,{href:"https://github.com/mcastiello/pixi-reactive",text:"GitHub",external:!0,target:"_blank"}),"."),r.a.createElement(h.k,null,"Usage"),r.a.createElement(h.g,null,r.a.createElement(i.a,{src:"./static/examples/PixiCanvasExample.tsx"})),r.a.createElement(a.b,{style:{height:300}},r.a.createElement(d.PixiCanvasExample,null)),r.a.createElement(h.k,null,"Documentation"),r.a.createElement(h.g,null,"Please have a look through the following sections to learn all you need to know about the library:",r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(u.a,{page:c.a.Index,showTitle:!1})),r.a.createElement(h.k,null,"Coming next"),r.a.createElement(h.g,null,"The following are a few things I'm going to add in the next few releases (in order of priority).",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.a,null,"PixiSpine")," - Another external plugin, this one is going to integrate support for the"," ",r.a.createElement(h.h,{href:"https://github.com/pixijs/pixi-spine",text:"Spine Runtime",external:!0,target:"_blank"}),"."))),r.a.createElement(h.k,null,"Contacts and Issues"),r.a.createElement(h.g,null,"Feel free to contact me and open issues on the project"," ",r.a.createElement(h.h,{href:"https://github.com/mcastiello/pixi-reactive",text:"GitHub",external:!0,target:"_blank"})," page."))}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a=n(20),l=n(22),r=n.n(l),c=n(28),i=n(23),o=n(17),u=n(1),s=n.n(u),h=n(24),d=n(18),m=n(27);function p(){var e=Object(i.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return p=function(){return e},e}var b,x=h.a.code(p()),g=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b){e.next=15;break}return e.next=3,Object(d.d)(d.a.Types);case 3:t=e.sent,n=new Map,a=0;case 6:if(!(a<t.length)){e.next=14;break}return e.next=9,Object(d.c)(t[a]);case 9:l=e.sent,n.set(t[a],"#".concat(l));case 11:a++,e.next=6;break;case 14:b=n;case 15:return e.abrupt("return",b);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,l=Object(u.useState)(),r=Object(a.a)(l,2),c=r[0],i=r[1];return Object(u.useEffect)((function(){g().then(i)}),[]),s.a.createElement(o.b,null,s.a.createElement(m.m,null,s.a.createElement(m.l,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Required"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Default"),s.a.createElement("th",null,"Description"))),s.a.createElement("tbody",null,n.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,e[0]),s.a.createElement("td",null,e[1]?s.a.createElement(o.d,{f7:"checkmark_alt",size:14}):null),s.a.createElement("td",null,s.a.createElement("code",null,c&&c.has(e[2])?s.a.createElement(m.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),s.a.createElement("td",null,s.a.createElement("code",null,e[3])),s.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?s.a.createElement("span",{key:t},e):s.a.createElement(x,{key:t},e)}))))}))))))}},182:function(e,t,n){"use strict";var a=n(20),l=n(1),r=n.n(l),c=n(18),i=n(27);t.a=function(e){var t=e.page,n=e.className,o=Object(l.useState)(),u=Object(a.a)(o,2),s=u[0],h=u[1];return Object(l.useEffect)((function(){Object(c.c)(t).then((function(e){return h("#".concat(e))}))}),[t]),r.a.createElement(i.d,{className:n,href:s,key:t,text:t,external:!0})}},183:function(e,t,n){"use strict";var a=n(20),l=n(22),r=n.n(l),c=n(28),i=n(1),o=n.n(i),u=n(18),s=n(27),h=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.next=3,Object(u.d)(t);case 3:a=e.sent,l=0;case 5:if(!(l<a.length)){e.next=13;break}return e.next=8,Object(u.c)(a[l]);case 8:c=e.sent,n.push(o.a.createElement(s.b,{href:"#".concat(c),key:a[l],text:a[l],external:!0}));case 10:l++,e.next=5;break;case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a=function(e){var t=e.page,n=e.showTitle,l=void 0===n||n,r=Object(i.useState)([]),c=Object(a.a)(r,2),u=c[0],d=c[1];return Object(i.useEffect)((function(){h(t).then(d)}),[t]),o.a.createElement(o.a.Fragment,null,l&&o.a.createElement(s.n,null,"All ".concat(t)),u)}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEvents",(function(){return d})),n.d(t,"PixiCanvasExample",(function(){return x}));var a=n(20),l=n(17),r=n(1),c=n.n(r),i=n(181),o=n(180),u=n(179),s=n(27),h=[["id",!1,"string","null","Canvas identifier"],["overflow",!1,"Overflow","Overflow.All","Whether HTML elements hovering the canvas should be seen if they overflow their container"],["className",!1,"string","null","CSS class name applied to the canvas element"],["width",!1,"number","null","Width of the canvas"],["height",!1,"number","null","Height of the canvas"],["retina",!1,"boolean","false","Whether to use a @2x canvas"],["speed",!1,"number","1","Speed at which the rendered animations will run"],["background",!1,"number","null","Set the background color of the canvas, if empty the canvas will be transparent"],["textures",!1,"LoadResourceType","[]","List of textures that will be loaded by the Pixi Loader"]],d=[["onResize",!1,"function","null","Callback executed when the canvas is resized"],["onUpdate",!1,"function","null","Callback executed at every animation frame"],["onAfterRender",!1,"function","null","Callback executed after a frame has been rendered on the canvas"]],m=[].concat(d,[["onClick",!1,"function","null","Callback executed when the `click` event is triggered"],["onMouseDown",!1,"function","null","Callback executed when the `mousedown` event is triggered"],["onMouseMove",!1,"function","null","Callback executed when the `mousemove` event is triggered"],["onMouseOut",!1,"function","null","Callback executed when the `mouseout` event is triggered"],["onMouseOver",!1,"function","null","Callback executed when the `mouseover` event is triggered"],["onMouseUp",!1,"function","null","Callback executed when the `mouseup` event is triggered"],["onPointerCancel",!1,"function","null","Callback executed when the `pointercancel` event is triggered"],["onPointerDown",!1,"function","null","Callback executed when the `pointerdown` event is triggered"],["onPointerMove",!1,"function","null","Callback executed when the `pointermove` event is triggered"],["onPointerOut",!1,"function","null","Callback executed when the `pointerout` event is triggered"],["onPointerOver",!1,"function","null","Callback executed when the `pointerover` event is triggered"],["onPointerUp",!1,"function","null","Callback executed when the `pointerup` event is triggered"],["onTouchCancel",!1,"function","null","Callback executed when the `touchcancel` event is triggered"],["onTouchEnd",!1,"function","null","Callback executed when the `touchend` event is triggered"],["onTouchMove",!1,"function","null","Callback executed when the `touchmove` event is triggered"],["onTouchStart",!1,"function","null","Callback executed when the `touchstart` event is triggered"],["onInteractionUpdate",!1,"function","null","Callback executed when `Pointer Context` is updated"],["onLoadProgress",!1,"function","null","Callback executed when the Texture Loader progress in the download process"],["onAllTexturesLoaded",!1,"function","null","Callback executed when all the textures are loaded"]]),p={galaxy:"./static/assets/galaxy.png",stars:"./static/assets/slow-stars.png",ship:"./static/assets/spaceship.png"},b=function(e){var t=e.direction;return(e.direction&&e.shipY<=60||!e.direction&&e.shipY>=240)&&(t=!e.direction),{galaxyTileX:e.galaxyTileX-.1,starsTileX:e.starsTileX-.5,direction:t,shipY:t?e.shipY-.5:e.shipY+.5}},x=function(){var e=Object(r.useReducer)(b,{galaxyTileX:0,starsTileX:0,direction:!1,shipY:150}),t=Object(a.a)(e,2),n=t[0],l=t[1];return c.a.createElement(i.L,{height:300,textures:p,onUpdate:l},c.a.createElement(i.V,{texture:"galaxy",tileX:n.galaxyTileX}),c.a.createElement(i.V,{texture:"stars",tileX:n.starsTileX}),c.a.createElement(i.S,{texture:"ship",x:30,y:n.shipY,anchorY:.5}))};t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.n,null,"PixiCanvas"),c.a.createElement(s.g,null,"The PixiCanvas is the base component that generates the canvas element, initialise the PIXI Renderer, load the textures and creates all the React contexts. It is also responsible of starting the animation loop and render all the elements onto the stage."),c.a.createElement(l.b,null,c.a.createElement(x,null)),c.a.createElement(l.b,null,c.a.createElement(o.a,{src:"./static/examples/PixiCanvasExample.tsx"})),c.a.createElement(s.k,null,"Properties"),c.a.createElement(u.b,{props:h}),c.a.createElement(s.k,null,"Event Callbacks"),c.a.createElement(u.b,{props:m}))}}}]);
//# sourceMappingURL=10.7142318b.chunk.js.map