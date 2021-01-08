(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[79,89],{179:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(20),l=n(22),r=n.n(l),o=n(28),i=n(23),c=n(17),u=n(1),s=n.n(u),h=n(24),d=n(18),m=n(27);function b(){var e=Object(i.a)(["\n  background: rgba(100, 100, 100, 0.5);\n  padding: 0 5px;\n  border-radius: 2px;\n"]);return b=function(){return e},e}var g,p=h.a.code(b()),f=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n,a,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=15;break}return e.next=3,Object(d.d)(d.a.Types);case 3:t=e.sent,n=new Map,a=0;case 6:if(!(a<t.length)){e.next=14;break}return e.next=9,Object(d.c)(t[a]);case 9:l=e.sent,n.set(t[a],"#".concat(l));case 11:a++,e.next=6;break;case 14:g=n;case 15:return e.abrupt("return",g);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.b=function(e){var t=e.props,n=void 0===t?[]:t,l=Object(u.useState)(),r=Object(a.a)(l,2),o=r[0],i=r[1];return Object(u.useEffect)((function(){f().then(i)}),[]),s.a.createElement(c.b,null,s.a.createElement(m.m,null,s.a.createElement(m.l,null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"Required"),s.a.createElement("th",null,"Type"),s.a.createElement("th",null,"Default"),s.a.createElement("th",null,"Description"))),s.a.createElement("tbody",null,n.map((function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,e[0]),s.a.createElement("td",null,e[1]?s.a.createElement(c.d,{f7:"checkmark_alt",size:14}):null),s.a.createElement("td",null,s.a.createElement("code",null,o&&o.has(e[2])?s.a.createElement(m.h,{text:e[2],href:o.get(e[2]),external:!0}):e[2])),s.a.createElement("td",null,s.a.createElement("code",null,e[3])),s.a.createElement("td",null,e[4].split(/`/).map((function(e,t){return t%2===0?s.a.createElement("span",{key:t},e):s.a.createElement(p,{key:t},e)}))))}))))))}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEvents",(function(){return d})),n.d(t,"PixiCanvasExample",(function(){return p}));var a=n(20),l=n(17),r=n(1),o=n.n(r),i=n(181),c=n(180),u=n(179),s=n(27),h=[["id",!1,"string","null","Canvas identifier"],["overflow",!1,"Overflow","Overflow.All","Whether HTML elements hovering the canvas should be seen if they overflow their container"],["className",!1,"string","null","CSS class name applied to the canvas element"],["width",!1,"number","null","Width of the canvas"],["height",!1,"number","null","Height of the canvas"],["retina",!1,"boolean","false","Whether to use a @2x canvas"],["speed",!1,"number","1","Speed at which the rendered animations will run"],["background",!1,"number","null","Set the background color of the canvas, if empty the canvas will be transparent"],["textures",!1,"LoadResourceType","[]","List of textures that will be loaded by the Pixi Loader"]],d=[["onResize",!1,"function","null","Callback executed when the canvas is resized"],["onUpdate",!1,"function","null","Callback executed at every animation frame"],["onAfterRender",!1,"function","null","Callback executed after a frame has been rendered on the canvas"]],m=[].concat(d,[["onClick",!1,"function","null","Callback executed when the `click` event is triggered"],["onMouseDown",!1,"function","null","Callback executed when the `mousedown` event is triggered"],["onMouseMove",!1,"function","null","Callback executed when the `mousemove` event is triggered"],["onMouseOut",!1,"function","null","Callback executed when the `mouseout` event is triggered"],["onMouseOver",!1,"function","null","Callback executed when the `mouseover` event is triggered"],["onMouseUp",!1,"function","null","Callback executed when the `mouseup` event is triggered"],["onPointerCancel",!1,"function","null","Callback executed when the `pointercancel` event is triggered"],["onPointerDown",!1,"function","null","Callback executed when the `pointerdown` event is triggered"],["onPointerMove",!1,"function","null","Callback executed when the `pointermove` event is triggered"],["onPointerOut",!1,"function","null","Callback executed when the `pointerout` event is triggered"],["onPointerOver",!1,"function","null","Callback executed when the `pointerover` event is triggered"],["onPointerUp",!1,"function","null","Callback executed when the `pointerup` event is triggered"],["onTouchCancel",!1,"function","null","Callback executed when the `touchcancel` event is triggered"],["onTouchEnd",!1,"function","null","Callback executed when the `touchend` event is triggered"],["onTouchMove",!1,"function","null","Callback executed when the `touchmove` event is triggered"],["onTouchStart",!1,"function","null","Callback executed when the `touchstart` event is triggered"],["onInteractionUpdate",!1,"function","null","Callback executed when `Pointer Context` is updated"],["onLoadProgress",!1,"function","null","Callback executed when the Texture Loader progress in the download process"],["onAllTexturesLoaded",!1,"function","null","Callback executed when all the textures are loaded"]]),b={galaxy:"./static/assets/galaxy.png",stars:"./static/assets/slow-stars.png",ship:"./static/assets/spaceship.png"},g=function(e){var t=e.direction;return(e.direction&&e.shipY<=60||!e.direction&&e.shipY>=240)&&(t=!e.direction),{galaxyTileX:e.galaxyTileX-.1,starsTileX:e.starsTileX-.5,direction:t,shipY:t?e.shipY-.5:e.shipY+.5}},p=function(){var e=Object(r.useReducer)(g,{galaxyTileX:0,starsTileX:0,direction:!1,shipY:150}),t=Object(a.a)(e,2),n=t[0],l=t[1];return o.a.createElement(i.L,{height:300,textures:b,onUpdate:l},o.a.createElement(i.V,{texture:"galaxy",tileX:n.galaxyTileX}),o.a.createElement(i.V,{texture:"stars",tileX:n.starsTileX}),o.a.createElement(i.S,{texture:"ship",x:30,y:n.shipY,anchorY:.5}))};t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.n,null,"PixiCanvas"),o.a.createElement(s.g,null,"The PixiCanvas is the base component that generates the canvas element, initialise the PIXI Renderer, load the textures and creates all the React contexts. It is also responsible of starting the animation loop and render all the elements onto the stage."),o.a.createElement(l.b,null,o.a.createElement(p,null)),o.a.createElement(l.b,null,o.a.createElement(c.a,{src:"./static/examples/PixiCanvasExample.tsx"})),o.a.createElement(s.k,null,"Properties"),o.a.createElement(u.b,{props:h}),o.a.createElement(s.k,null,"Event Callbacks"),o.a.createElement(u.b,{props:m}))}},74:function(e,t,n){"use strict";n.r(t),n.d(t,"transformProps",(function(){return d})),n.d(t,"genericProps",(function(){return m})),n.d(t,"genericEvents",(function(){return b}));var a=n(12),l=n(17),r=n(1),o=n.n(r),i=n(181),c=n(180),u=n(179),s=n(27),h=n(73),d=[["x",!1,"number","0","X coordinate of the object relative to the parent"],["y",!1,"number","0","X coordinate of the object relative to the parent"],["pivotX",!1,"number","0","Relative coordinate on the X axis of the point around which the object rotate"],["pivotY",!1,"number","0","Relative coordinate on the Y axis of the point around which the object rotate"],["rotation",!1,"number","0","Rotation of the object in radians"],["scaleX",!1,"number","1","Scale of the object on the X axis"],["scaleY",!1,"number","1","Scale of the object on the Y axis"],["skewX",!1,"number","0","Skew transform value on the X axis"],["skewY",!1,"number","0","Skew transform value on the Y axis"]],m=[].concat(d,[["alpha",!1,"number","1","Value between 0 and 1 that defines the object opacity"],["angle",!1,"number","0","Rotation of the object in degrees"],["buttonMode",!1,"boolean","false","When set to true it makes the element clickable and set the cursor as pointer"],["cursor",!1,"CursorType","CursorType.None","Cursor used while hovering on the object"],["interactive",!1,"boolean","false","Whether the object is interactive (react to pointer events)"],["name",!1,"string","null","Name of the object"],["visible",!1,"boolean","true","Whether the object is visible or not"],["zIndex",!1,"number","0","Order in which the object is rendered (only works if the parent `sortableChildren` is set to `true`)"],["width",!1,"number","null","Width of the object"],["height",!1,"number","null","Height of the object"],["sortableChildren",!1,"boolean","false","Whether the children of the element can be sorted through the `zIndex`"],["filterArea",!1,"Area","null","Area over which the filters will be applied"],["hitArea",!1,"Area","null","Area of the element that will be used to test for interactions"],["impactArea",!1,"Area","null","Area of the element that will be used to test for impacts"],["detectImpacts",!1,"boolean","false","Whether or not the component will detect or will be detected for impacts"],["impactClassName",!1,"string","null","Class name of the object used for comparison during impact detection"],["impactFilter",!1,"string[]","[]","List of classes and names of components that will trigger the `onImpact` callback when an impact is detected"]]),b=[].concat(Object(a.a)(h.renderEvents),[["onClick",!1,"function","null","Callback executed when the `click` event is triggered"],["onMouseDown",!1,"function","null","Callback executed when the `mousedown` event is triggered"],["onMouseMove",!1,"function","null","Callback executed when the `mousemove` event is triggered"],["onMouseOut",!1,"function","null","Callback executed when the `mouseout` event is triggered"],["onMouseOver",!1,"function","null","Callback executed when the `mouseover` event is triggered"],["onMouseUp",!1,"function","null","Callback executed when the `mouseup` event is triggered"],["onMouseUpOutside",!1,"function","null","Callback executed when the `mouseupoutside` event is triggered"],["onPointerCancel",!1,"function","null","Callback executed when the `pointercancel` event is triggered"],["onPointerDown",!1,"function","null","Callback executed when the `pointerdown` event is triggered"],["onPointerMove",!1,"function","null","Callback executed when the `pointermove` event is triggered"],["onPointerOut",!1,"function","null","Callback executed when the `pointerout` event is triggered"],["onPointerOver",!1,"function","null","Callback executed when the `pointerover` event is triggered"],["onPointerTap",!1,"function","null","Callback executed when the `pointertap` event is triggered"],["onPointerUp",!1,"function","null","Callback executed when the `pointerup` event is triggered"],["onPointerUpOutside",!1,"function","null","Callback executed when the `pointerupoutside` event is triggered"],["onRemovedFrom",!1,"function","null","Callback executed when the `removedfrom` event is triggered"],["onRightClick",!1,"function","null","Callback executed when the `rightclick` event is triggered"],["onRightDown",!1,"function","null","Callback executed when the `rightdown` event is triggered"],["onRightUp",!1,"function","null","Callback executed when the `rightup` event is triggered"],["onRightUpOutside",!1,"function","null","Callback executed when the `rightupoutside` event is triggered"],["onTap",!1,"function","null","Callback executed when the `tap` event is triggered"],["onTouchCancel",!1,"function","null","Callback executed when the `touchcancel` event is triggered"],["onTouchEnd",!1,"function","null","Callback executed when the `touchend` event is triggered"],["onTouchEndOutside",!1,"function","null","Callback executed when the `touchendoutside` event is triggered"],["onTouchMove",!1,"function","null","Callback executed when the `touchmove` event is triggered"],["onTouchStart",!1,"function","null","Callback executed when the `touchstart` event is triggered"],["onAdded",!1,"function","null","Callback executed the object is added to a parent element or into the rendered stage"],["onRemoved",!1,"function","null","Callback executed the element is removed from it' parent"],["onChildAdded",!1,"function","null","Callback executed a child element is added"],["onImpact",!1,"function","null","Callback executed when an impact is detected"]]),g={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},p=function(){return o.a.createElement(i.L,{textures:g},o.a.createElement(i.V,{texture:"galaxy"}),o.a.createElement(i.M,{x:50,y:50},o.a.createElement(i.S,{texture:"ship"}),o.a.createElement(i.M,{x:100,y:100},o.a.createElement(i.S,{texture:"ship"}))))};t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.n,null,"PixiContainer"),o.a.createElement(s.g,null,"The PixiContainer, as the name suggests, is an object used co contain other objects. Any transformation (position, rotation and scale) are applied to all its children and allow to create logical groups that can be handled together."),o.a.createElement(l.b,{style:{height:300}},o.a.createElement(p,null)),o.a.createElement(l.b,null,o.a.createElement(c.a,{src:"./static/examples/PixiContainerExample.tsx"})),o.a.createElement(s.k,null,"Properties"),o.a.createElement(u.b,{props:m}),o.a.createElement(s.k,null,"Event Callbacks"),o.a.createElement(u.b,{props:b}))}}}]);
//# sourceMappingURL=79.6bd2debd.chunk.js.map