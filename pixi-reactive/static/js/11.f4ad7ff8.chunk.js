(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[11,79,89],{127:function(e,t,n){"use strict";n.r(t);var a=n(12),l=n(17),r=n(181),c=n(1),o=n.n(c),i=n(18),u=n(180),s=n(182),h=n(179),d=n(27),m=n(74),p=[["blendMode",!1,"BlendModes","BlendModes.Normal","Mode used to blend textures together"],["tint",!1,"number","0xffffff","Tint applied onto the texture"]].concat(Object(a.a)(m.genericProps)),g={stars:"./static/assets/slow-stars.png"},b=function(){return o.a.createElement(r.L,{textures:g},o.a.createElement(r.O,null,o.a.createElement(r.db,{x:20,y:20,width:100,height:150},o.a.createElement(r.C,{color:16711680,width:2}),o.a.createElement(r.s,{alpha:.75},o.a.createElement(r.hb,{src:"./static/assets/galaxy.png"}))),o.a.createElement(r.q,{x:250,y:95,width:100,height:50},o.a.createElement(r.C,{color:16776960,width:2}),o.a.createElement(r.s,{color:65535},o.a.createElement(r.hb,{texture:"stars",scaleX:.5,scaleY:.5}))),o.a.createElement(r.lb,{x:100,y:280,radius:80},o.a.createElement(r.C,{color:16777215,width:5}),o.a.createElement(r.s,{color:16776960})),o.a.createElement(r.Z,null,o.a.createElement(r.C,{color:65280,width:2}),o.a.createElement(r.W,{x:200,y:200}),o.a.createElement(r.W,{x:300,y:200}),o.a.createElement(r.W,{x:250,y:350})),o.a.createElement(r.db,{x:100,y:400,width:150,height:150},o.a.createElement(r.s,{color:65280}),o.a.createElement(r.x,null,o.a.createElement(r.k,{x:130,y:430,radius:25}),o.a.createElement(r.k,{x:175,y:475,radius:25}),o.a.createElement(r.k,{x:220,y:520,radius:25})))))},f=function(){return o.a.createElement(r.L,null,o.a.createElement(r.O,null,o.a.createElement(r.e,{xFrom:20,yFrom:20,xTo:130,yTo:60,controlX:60,controlY:110,controlX2:130,controlY2:60},o.a.createElement(r.C,{color:16711680,width:5})),o.a.createElement(r.J,null,o.a.createElement(r.W,{x:130,y:60}),o.a.createElement(r.W,{x:200,y:170}),o.a.createElement(r.W,{x:210,y:40}),o.a.createElement(r.W,{x:80,y:20}))))};t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.n,null,"PixiGraphics"),o.a.createElement(d.g,null,"This components will let you draw predefined shapes of custom paths/polygons inside the canvas. Please, refer to the"," ",o.a.createElement(s.a,{page:i.a.Graphics})," for all the supported shapes and graphics. It is also possible to draw"," ",o.a.createElement(s.a,{page:i.a.Holes})," inside the shapes, check the example for details.",o.a.createElement("br",null),"If you want to mix together different paths or curves, make sure that the first point of the next segment matches with the last point of the previous one. Also, set add a line style ONLY to the first segment. Check the second example for details.",o.a.createElement("br",null),"The components that can be joined together are ",o.a.createElement(s.a,{page:i.a.Path}),", ",o.a.createElement(s.a,{page:i.a.ArcCurve}),","," ",o.a.createElement(s.a,{page:i.a.BezierCurve})," and ",o.a.createElement(s.a,{page:i.a.QuadraticCurve}),"."),o.a.createElement(l.b,{style:{height:600}},o.a.createElement(b,null)),o.a.createElement(l.b,null,o.a.createElement(u.a,{src:"./static/examples/PixiGraphicsExample.tsx"})),o.a.createElement(l.b,{style:{height:200}},o.a.createElement(f,null)),o.a.createElement(l.b,null,o.a.createElement(u.a,{src:"./static/examples/CustomPathExample.tsx"})),o.a.createElement(d.k,null,"Properties"),o.a.createElement(h.b,{props:p}),o.a.createElement(d.k,null,"Event Callbacks"),o.a.createElement(h.b,{props:m.genericEvents}))}},179:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(20),l=n(22),r=n.n(l),c=n(28),o=n(23),i=n(17),u=n(1),s=n.n(u),h=n(24),d=n(18),m=n(27);function p(){var e=Object(o.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return p=function(){return e},e}var g,b=h.a.code(p()),f=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=15;break}return e.next=3,Object(d.d)(d.a.Types);case 3:t=e.sent,n=new Map,a=0;case 6:if(!(a<t.length)){e.next=14;break}return e.next=9,Object(d.c)(t[a]);case 9:l=e.sent,n.set(t[a],"#".concat(l));case 11:a++,e.next=6;break;case 14:g=n;case 15:return e.abrupt("return",g);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,l=Object(u.useState)(),r=Object(a.a)(l,2),c=r[0],o=r[1];return Object(u.useEffect)((function(){f().then(o)}),[]),s.a.createElement(i.b,null,s.a.createElement(m.m,null,s.a.createElement(m.l,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Required"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Default"),s.a.createElement("th",null,"Description"))),s.a.createElement("tbody",null,n.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,e[0]),s.a.createElement("td",null,e[1]?s.a.createElement(i.d,{f7:"checkmark_alt",size:14}):null),s.a.createElement("td",null,s.a.createElement("code",null,c&&c.has(e[2])?s.a.createElement(m.h,{text:e[2],href:c.get(e[2]),external:!0}):e[2])),s.a.createElement("td",null,s.a.createElement("code",null,e[3])),s.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?s.a.createElement("span",{key:t},e):s.a.createElement(b,{key:t},e)}))))}))))))}},182:function(e,t,n){"use strict";var a=n(20),l=n(1),r=n.n(l),c=n(18),o=n(27);t.a=function(e){var t=e.page,n=e.className,i=Object(l.useState)(),u=Object(a.a)(i,2),s=u[0],h=u[1];return Object(l.useEffect)((function(){Object(c.c)(t).then((function(e){return h("#".concat(e))}))}),[t]),r.a.createElement(o.d,{className:n,href:s,key:t,text:t,external:!0})}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEvents",(function(){return d})),n.d(t,"PixiCanvasExample",(function(){return b}));var a=n(20),l=n(17),r=n(1),c=n.n(r),o=n(181),i=n(180),u=n(179),s=n(27),h=[["id",!1,"string","null","Canvas identifier"],["overflow",!1,"Overflow","Overflow.All","Whether HTML elements hovering the canvas should be seen if they overflow their container"],["className",!1,"string","null","CSS class name applied to the canvas element"],["width",!1,"number","null","Width of the canvas"],["height",!1,"number","null","Height of the canvas"],["retina",!1,"boolean","false","Whether to use a @2x canvas"],["speed",!1,"number","1","Speed at which the rendered animations will run"],["background",!1,"number","null","Set the background color of the canvas, if empty the canvas will be transparent"],["textures",!1,"LoadResourceType","[]","List of textures that will be loaded by the Pixi Loader"]],d=[["onResize",!1,"function","null","Callback executed when the canvas is resized"],["onUpdate",!1,"function","null","Callback executed at every animation frame"],["onAfterRender",!1,"function","null","Callback executed after a frame has been rendered on the canvas"]],m=[].concat(d,[["onClick",!1,"function","null","Callback executed when the `click` event is triggered"],["onMouseDown",!1,"function","null","Callback executed when the `mousedown` event is triggered"],["onMouseMove",!1,"function","null","Callback executed when the `mousemove` event is triggered"],["onMouseOut",!1,"function","null","Callback executed when the `mouseout` event is triggered"],["onMouseOver",!1,"function","null","Callback executed when the `mouseover` event is triggered"],["onMouseUp",!1,"function","null","Callback executed when the `mouseup` event is triggered"],["onPointerCancel",!1,"function","null","Callback executed when the `pointercancel` event is triggered"],["onPointerDown",!1,"function","null","Callback executed when the `pointerdown` event is triggered"],["onPointerMove",!1,"function","null","Callback executed when the `pointermove` event is triggered"],["onPointerOut",!1,"function","null","Callback executed when the `pointerout` event is triggered"],["onPointerOver",!1,"function","null","Callback executed when the `pointerover` event is triggered"],["onPointerUp",!1,"function","null","Callback executed when the `pointerup` event is triggered"],["onTouchCancel",!1,"function","null","Callback executed when the `touchcancel` event is triggered"],["onTouchEnd",!1,"function","null","Callback executed when the `touchend` event is triggered"],["onTouchMove",!1,"function","null","Callback executed when the `touchmove` event is triggered"],["onTouchStart",!1,"function","null","Callback executed when the `touchstart` event is triggered"],["onInteractionUpdate",!1,"function","null","Callback executed when `Pointer Context` is updated"],["onLoadProgress",!1,"function","null","Callback executed when the Texture Loader progress in the download process"],["onAllTexturesLoaded",!1,"function","null","Callback executed when all the textures are loaded"]]),p={galaxy:"./static/assets/galaxy.png",stars:"./static/assets/slow-stars.png",ship:"./static/assets/spaceship.png"},g=function(e){var t=e.direction;return(e.direction&&e.shipY<=60||!e.direction&&e.shipY>=240)&&(t=!e.direction),{galaxyTileX:e.galaxyTileX-.1,starsTileX:e.starsTileX-.5,direction:t,shipY:t?e.shipY-.5:e.shipY+.5}},b=function(){var e=Object(r.useReducer)(g,{galaxyTileX:0,starsTileX:0,direction:!1,shipY:150}),t=Object(a.a)(e,2),n=t[0],l=t[1];return c.a.createElement(o.L,{height:300,textures:p,onUpdate:l},c.a.createElement(o.V,{texture:"galaxy",tileX:n.galaxyTileX}),c.a.createElement(o.V,{texture:"stars",tileX:n.starsTileX}),c.a.createElement(o.S,{texture:"ship",x:30,y:n.shipY,anchorY:.5}))};t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.n,null,"PixiCanvas"),c.a.createElement(s.g,null,"The PixiCanvas is the base component that generates the canvas element, initialise the PIXI Renderer, load the textures and creates all the React contexts. It is also responsible of starting the animation loop and render all the elements onto the stage."),c.a.createElement(l.b,null,c.a.createElement(b,null)),c.a.createElement(l.b,null,c.a.createElement(i.a,{src:"./static/examples/PixiCanvasExample.tsx"})),c.a.createElement(s.k,null,"Properties"),c.a.createElement(u.b,{props:h}),c.a.createElement(s.k,null,"Event Callbacks"),c.a.createElement(u.b,{props:m}))}},74:function(e,t,n){"use strict";n.r(t),n.d(t,"transformProps",(function(){return d})),n.d(t,"genericProps",(function(){return m})),n.d(t,"genericEvents",(function(){return p}));var a=n(12),l=n(17),r=n(1),c=n.n(r),o=n(181),i=n(180),u=n(179),s=n(27),h=n(73),d=[["x",!1,"number","0","X coordinate of the object relative to the parent"],["y",!1,"number","0","X coordinate of the object relative to the parent"],["pivotX",!1,"number","0","Relative coordinate on the X axis of the point around which the object rotate"],["pivotY",!1,"number","0","Relative coordinate on the Y axis of the point around which the object rotate"],["rotation",!1,"number","0","Rotation of the object in radians"],["scaleX",!1,"number","1","Scale of the object on the X axis"],["scaleY",!1,"number","1","Scale of the object on the Y axis"],["skewX",!1,"number","0","Skew transform value on the X axis"],["skewY",!1,"number","0","Skew transform value on the Y axis"]],m=[].concat(d,[["alpha",!1,"number","1","Value between 0 and 1 that defines the object opacity"],["angle",!1,"number","0","Rotation of the object in degrees"],["buttonMode",!1,"boolean","false","When set to true it makes the element clickable and set the cursor as pointer"],["cursor",!1,"CursorType","CursorType.None","Cursor used while hovering on the object"],["interactive",!1,"boolean","false","Whether the object is interactive (react to pointer events)"],["name",!1,"string","null","Name of the object"],["visible",!1,"boolean","true","Whether the object is visible or not"],["zIndex",!1,"number","0","Order in which the object is rendered (only works if the parent `sortableChildren` is set to `true`)"],["width",!1,"number","null","Width of the object"],["height",!1,"number","null","Height of the object"],["sortableChildren",!1,"boolean","false","Whether the children of the element can be sorted through the `zIndex`"],["filterArea",!1,"Area","null","Area over which the filters will be applied"],["hitArea",!1,"Area","null","Area of the element that will be used to test for interactions"],["impactArea",!1,"Area","null","Area of the element that will be used to test for impacts"],["detectImpacts",!1,"boolean","false","Whether or not the component will detect or will be detected for impacts"],["impactClassName",!1,"string","null","Class name of the object used for comparison during impact detection"],["impactFilter",!1,"string[]","[]","List of classes and names of components that will trigger the `onImpact` callback when an impact is detected"]]),p=[].concat(Object(a.a)(h.renderEvents),[["onClick",!1,"function","null","Callback executed when the `click` event is triggered"],["onMouseDown",!1,"function","null","Callback executed when the `mousedown` event is triggered"],["onMouseMove",!1,"function","null","Callback executed when the `mousemove` event is triggered"],["onMouseOut",!1,"function","null","Callback executed when the `mouseout` event is triggered"],["onMouseOver",!1,"function","null","Callback executed when the `mouseover` event is triggered"],["onMouseUp",!1,"function","null","Callback executed when the `mouseup` event is triggered"],["onMouseUpOutside",!1,"function","null","Callback executed when the `mouseupoutside` event is triggered"],["onPointerCancel",!1,"function","null","Callback executed when the `pointercancel` event is triggered"],["onPointerDown",!1,"function","null","Callback executed when the `pointerdown` event is triggered"],["onPointerMove",!1,"function","null","Callback executed when the `pointermove` event is triggered"],["onPointerOut",!1,"function","null","Callback executed when the `pointerout` event is triggered"],["onPointerOver",!1,"function","null","Callback executed when the `pointerover` event is triggered"],["onPointerTap",!1,"function","null","Callback executed when the `pointertap` event is triggered"],["onPointerUp",!1,"function","null","Callback executed when the `pointerup` event is triggered"],["onPointerUpOutside",!1,"function","null","Callback executed when the `pointerupoutside` event is triggered"],["onRemovedFrom",!1,"function","null","Callback executed when the `removedfrom` event is triggered"],["onRightClick",!1,"function","null","Callback executed when the `rightclick` event is triggered"],["onRightDown",!1,"function","null","Callback executed when the `rightdown` event is triggered"],["onRightUp",!1,"function","null","Callback executed when the `rightup` event is triggered"],["onRightUpOutside",!1,"function","null","Callback executed when the `rightupoutside` event is triggered"],["onTap",!1,"function","null","Callback executed when the `tap` event is triggered"],["onTouchCancel",!1,"function","null","Callback executed when the `touchcancel` event is triggered"],["onTouchEnd",!1,"function","null","Callback executed when the `touchend` event is triggered"],["onTouchEndOutside",!1,"function","null","Callback executed when the `touchendoutside` event is triggered"],["onTouchMove",!1,"function","null","Callback executed when the `touchmove` event is triggered"],["onTouchStart",!1,"function","null","Callback executed when the `touchstart` event is triggered"],["onAdded",!1,"function","null","Callback executed the object is added to a parent element or into the rendered stage"],["onRemoved",!1,"function","null","Callback executed the element is removed from it' parent"],["onChildAdded",!1,"function","null","Callback executed a child element is added"],["onImpact",!1,"function","null","Callback executed when an impact is detected"]]),g={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},b=function(){return c.a.createElement(o.L,{textures:g},c.a.createElement(o.V,{texture:"galaxy"}),c.a.createElement(o.M,{x:50,y:50},c.a.createElement(o.S,{texture:"ship"}),c.a.createElement(o.M,{x:100,y:100},c.a.createElement(o.S,{texture:"ship"}))))};t.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.n,null,"PixiContainer"),c.a.createElement(s.g,null,"The PixiContainer, as the name suggests, is an object used co contain other objects. Any transformation (position, rotation and scale) are applied to all its children and allow to create logical groups that can be handled together."),c.a.createElement(l.b,{style:{height:300}},c.a.createElement(b,null)),c.a.createElement(l.b,null,c.a.createElement(i.a,{src:"./static/examples/PixiContainerExample.tsx"})),c.a.createElement(s.k,null,"Properties"),c.a.createElement(u.b,{props:m}),c.a.createElement(s.k,null,"Event Callbacks"),c.a.createElement(u.b,{props:p}))}}}]);
//# sourceMappingURL=11.f4ad7ff8.chunk.js.map