(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[59,60],{72:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEvents",(function(){return d})),n.d(t,"PixiCanvasExample",(function(){return p}));var a=n(22),l=n(17),i=n(1),r=n.n(i),o=n(148),c=n(146),s=n(147),u=n(27),h=[["id",!1,"string","null","Canvas identifier"],["overflow",!1,"Overflow","Overflow.All","Whether HTML elements hovering the canvas should be seen if they overflow their container"],["className",!1,"string","null","CSS class name applied to the canvas element"],["width",!1,"number","null","Width of the canvas"],["height",!1,"number","null","Height of the canvas"],["retina",!1,"boolean","false","Whether to use a @2x canvas"],["speed",!1,"number","1","Speed at which the rendered animations will run"],["textures",!1,"LoadResourceType","[]","List of textures that will be loaded by the Pixi Loader"]],d=[["onResize",!1,"function","null","Callback executed when the canvas is resized"],["onUpdate",!1,"function","null","Callback executed at every animation frame"],["onAfterRender",!1,"function","null","Callback executed after a frame has been rendered on the canvas"]],g={galaxy:"/static/assets/galaxy.png",stars:"/static/assets/slow-stars.png",ship:"/static/assets/spaceship.png"},b=function(e){var t=e.direction;return(e.direction&&e.shipY<=60||!e.direction&&e.shipY>=240)&&(t=!e.direction),{galaxyTileX:e.galaxyTileX-.1,starsTileX:e.starsTileX-.5,direction:t,shipY:t?e.shipY-.5:e.shipY+.5}},p=function(){var e=Object(i.useReducer)(b,{galaxyTileX:0,starsTileX:0,direction:!1,shipY:150}),t=Object(a.a)(e,2),n=t[0],l=t[1];return r.a.createElement(o.A,{textures:g,onUpdate:l},r.a.createElement(o.I,{texture:"galaxy",tileX:n.galaxyTileX}),r.a.createElement(o.I,{texture:"stars",tileX:n.starsTileX}),r.a.createElement(o.F,{texture:"ship",x:30,y:n.shipY,anchorY:.5}))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.n,null,"PixiCanvas"),r.a.createElement(u.g,null,"The PixiCanvas is the base component that generates the canvas element, initialise the PIXI Renderer, load the textures and creates all the React contexts. It is also responsible of starting the animation loop and render all the elements onto the stage."),r.a.createElement(l.b,{style:{height:300}},r.a.createElement(p,null)),r.a.createElement(l.b,null,r.a.createElement(c.a,{src:"/static/examples/PixiCanvasExample.tsx"})),r.a.createElement(u.k,null,"Properties"),r.a.createElement(s.b,{props:h}),r.a.createElement(u.k,null,"Event Callbacks"),r.a.createElement(s.b,{props:d}))}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"genericProps",(function(){return d})),n.d(t,"genericEvents",(function(){return g}));var a=n(12),l=n(17),i=n(1),r=n.n(i),o=n(148),c=n(146),s=n(147),u=n(27),h=n(72),d=[["alpha",!1,"number","1","Value between 0 and 1 that defines the object opacity"],["angle",!1,"number","0","Rotation of the object in degrees"],["buttonMode",!1,"boolean","false","When set to true it makes the element clickable and set the cursor as pointer"],["cursor",!1,"CursorType","CursorType.None","Cursor used while hovering on the object"],["interactive",!1,"boolean","false","Whether the object is interactive (react to pointer events)"],["name",!1,"string","null","Name of the object"],["pivotX",!1,"number","0","Relative coordinate on the X axis of the point around which the object rotate"],["pivotY",!1,"number","0","Relative coordinate on the Y axis of the point around which the object rotate"],["rotation",!1,"number","0","Rotation of the object in radians"],["scaleX",!1,"number","1","Scale of the object on the X axis"],["scaleY",!1,"number","1","Scale of the object on the Y axis"],["skewX",!1,"number","0","Skew transform value on the X axis"],["skewY",!1,"number","0","Skew transform value on the Y axis"],["visible",!1,"boolean","true","Whether the object is visible or not"],["x",!1,"number","0","X coordinate of the object relative to the parent"],["y",!1,"number","0","X coordinate of the object relative to the parent"],["zIndex",!1,"number","0","Order in which the object is rendered (only works if the parent `sortableChildren` is set to `true`)"],["width",!1,"number","null","Width of the object"],["height",!1,"number","null","Height of the object"],["sortableChildren",!1,"boolean","false","Whether the children of the element can be sorted through the `zIndex`"],["filterArea",!1,"Rectangle","null","Area over which the filters will be applied"],["hitArea",!1,"Rectangle","null","Area of the element that will be used to test for interactions"]],g=[].concat(Object(a.a)(h.renderEvents),[["onClick",!1,"function","null","Callback executed when the `click` event is triggered"],["onMouseDown",!1,"function","null","Callback executed when the `mousedown` event is triggered"],["onMouseMove",!1,"function","null","Callback executed when the `mousemove` event is triggered"],["onMouseOut",!1,"function","null","Callback executed when the `mouseout` event is triggered"],["onMouseOver",!1,"function","null","Callback executed when the `mouseover` event is triggered"],["onMouseUp",!1,"function","null","Callback executed when the `mouseup` event is triggered"],["onMouseUpOutside",!1,"function","null","Callback executed when the `mouseupoutside` event is triggered"],["onPointerCancel",!1,"function","null","Callback executed when the `pointercancel` event is triggered"],["onPointerDown",!1,"function","null","Callback executed when the `pointerdown` event is triggered"],["onPointerMove",!1,"function","null","Callback executed when the `pointermove` event is triggered"],["onPointerOut",!1,"function","null","Callback executed when the `pointerout` event is triggered"],["onPointerOver",!1,"function","null","Callback executed when the `pointerover` event is triggered"],["onPointerTap",!1,"function","null","Callback executed when the `pointertap` event is triggered"],["onPointerUp",!1,"function","null","Callback executed when the `pointerup` event is triggered"],["onPointerUpOutside",!1,"function","null","Callback executed when the `pointerupoutside` event is triggered"],["onRemovedFrom",!1,"function","null","Callback executed when the `removedfrom` event is triggered"],["onRightClick",!1,"function","null","Callback executed when the `rightclick` event is triggered"],["onRightDown",!1,"function","null","Callback executed when the `rightdown` event is triggered"],["onRightUp",!1,"function","null","Callback executed when the `rightup` event is triggered"],["onRightUpOutside",!1,"function","null","Callback executed when the `rightupoutside` event is triggered"],["onTap",!1,"function","null","Callback executed when the `tap` event is triggered"],["onTouchCancel",!1,"function","null","Callback executed when the `touchcancel` event is triggered"],["onTouchEnd",!1,"function","null","Callback executed when the `touchend` event is triggered"],["onTouchEndOutside",!1,"function","null","Callback executed when the `touchendoutside` event is triggered"],["onTouchMove",!1,"function","null","Callback executed when the `touchmove` event is triggered"],["onTouchStart",!1,"function","null","Callback executed when the `touchstart` event is triggered"],["onAdded",!1,"function","null","Callback executed the object is added to a parent element or into the rendered stage"],["onRemoved",!1,"function","null","Callback executed the element is removed from it' parent"],["onChildAdded",!1,"function","null","Callback executed a child element is added"]]),b={galaxy:"/static/assets/galaxy.png",ship:"/static/assets/spaceship.png"},p=function(){return r.a.createElement(o.A,{textures:b},r.a.createElement(o.I,{texture:"galaxy"}),r.a.createElement(o.B,{x:50,y:50},r.a.createElement(o.F,{texture:"ship"}),r.a.createElement(o.B,{x:100,y:100},r.a.createElement(o.F,{texture:"ship"}))))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.n,null,"PixiContainer"),r.a.createElement(u.g,null,"The PixiContainer, as the name suggests, is an object used co contain other objects. Any transformation (position, rotation and scale) are applied to all its children and allow to create logical groups that can be handled together."),r.a.createElement(l.b,{style:{height:300}},r.a.createElement(p,null)),r.a.createElement(l.b,null,r.a.createElement(c.a,{src:"/static/examples/PixiContainerExample.tsx"})),r.a.createElement(u.k,null,"Properties"),r.a.createElement(s.b,{props:d}),r.a.createElement(u.k,null,"Event Callbacks"),r.a.createElement(s.b,{props:g}))}}}]);
//# sourceMappingURL=59.d000d476.chunk.js.map