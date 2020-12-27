(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[3,9,59,60],{106:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(17),l=n(148),i=n(1),o=n.n(i),s=n(18),c=n(146),u=n(150),h=n(147),d=n(27),m=n(73),p=n(76),g=[["frames",!1,"string[] | string","[]","List of frame names of name of the JSON file containing the whole animation"],["playing",!1,"boolean","false","Whether to play or not the animation"],["resetOnStop",!1,"boolean","true","Whether to reset to the first frame when the animation is stopped"],["currentFrame",!1,"number","0","Index of the current frame"],["fps",!1,"number","60","Frame rate of the currently running animation"]].concat(Object(a.a)(p.spriteProps)),b=[["onAnimationComplete",!1,"function","null","Callback executed when each animation loop is completed"]].concat(Object(a.a)(m.genericEvents)),f={coin:"./static/assets/animation.json"},x=function(){return o.a.createElement(l.A,{textures:f},o.a.createElement(l.z,{frames:"coin",alignX:.5,playing:!0,fps:24}))},v=function(){return o.a.createElement(l.A,null,o.a.createElement(l.z,{alignX:.5,alignY:.5,playing:!0,fps:4},o.a.createElement(l.H,{src:"./static/assets/blue.png"}),o.a.createElement(l.H,{src:"./static/assets/green.png"}),o.a.createElement(l.H,{src:"./static/assets/red.png"}),o.a.createElement(l.H,{src:"./static/assets/yellow.png"})))};t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.n,null,"PixiAnimatedSprite"),o.a.createElement(d.g,null,"The animated sprite allow you to play an animation just passing an array of frame names, the name of a JSON sprite-sheet or a group of ",o.a.createElement(u.a,{page:s.a.PixiTexture})," children nodes. It is also possible to set the frame rate and start the animation by setting the ",o.a.createElement(h.a,null,"playing")," property to true."),o.a.createElement(r.b,{style:{height:200}},o.a.createElement(x,null)),o.a.createElement(r.b,null,o.a.createElement(c.a,{src:"./static/examples/PixiAnimatedSpriteExample.tsx"})),o.a.createElement(r.b,{style:{height:200}},o.a.createElement(v,null)),o.a.createElement(r.b,null,o.a.createElement(c.a,{src:"./static/examples/PixiAnimatedSpriteColorsExample.tsx"})),o.a.createElement(d.k,null,"Properties"),o.a.createElement(h.b,{props:g}),o.a.createElement(d.k,null,"Event Callbacks"),o.a.createElement(h.b,{props:b}))}},150:function(e,t,n){"use strict";var a=n(20),r=n(1),l=n.n(r),i=n(18),o=n(27);t.a=function(e){var t=e.page,n=e.className,s=Object(r.useState)(),c=Object(a.a)(s,2),u=c[0],h=c[1];return Object(r.useEffect)((function(){Object(i.c)(t).then((function(e){return h("#".concat(e))}))}),[t]),l.a.createElement(o.d,{className:n,href:u,key:t,text:t,external:!0})}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"renderEvents",(function(){return d})),n.d(t,"PixiCanvasExample",(function(){return g}));var a=n(20),r=n(17),l=n(1),i=n.n(l),o=n(148),s=n(146),c=n(147),u=n(27),h=[["id",!1,"string","null","Canvas identifier"],["overflow",!1,"Overflow","Overflow.All","Whether HTML elements hovering the canvas should be seen if they overflow their container"],["className",!1,"string","null","CSS class name applied to the canvas element"],["width",!1,"number","null","Width of the canvas"],["height",!1,"number","null","Height of the canvas"],["retina",!1,"boolean","false","Whether to use a @2x canvas"],["speed",!1,"number","1","Speed at which the rendered animations will run"],["textures",!1,"LoadResourceType","[]","List of textures that will be loaded by the Pixi Loader"]],d=[["onResize",!1,"function","null","Callback executed when the canvas is resized"],["onUpdate",!1,"function","null","Callback executed at every animation frame"],["onAfterRender",!1,"function","null","Callback executed after a frame has been rendered on the canvas"]],m={galaxy:"./static/assets/galaxy.png",stars:"./static/assets/slow-stars.png",ship:"./static/assets/spaceship.png"},p=function(e){var t=e.direction;return(e.direction&&e.shipY<=60||!e.direction&&e.shipY>=240)&&(t=!e.direction),{galaxyTileX:e.galaxyTileX-.1,starsTileX:e.starsTileX-.5,direction:t,shipY:t?e.shipY-.5:e.shipY+.5}},g=function(){var e=Object(l.useReducer)(p,{galaxyTileX:0,starsTileX:0,direction:!1,shipY:150}),t=Object(a.a)(e,2),n=t[0],r=t[1];return i.a.createElement(o.A,{textures:m,onUpdate:r},i.a.createElement(o.I,{texture:"galaxy",tileX:n.galaxyTileX}),i.a.createElement(o.I,{texture:"stars",tileX:n.starsTileX}),i.a.createElement(o.F,{texture:"ship",x:30,y:n.shipY,anchorY:.5}))};t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.n,null,"PixiCanvas"),i.a.createElement(u.g,null,"The PixiCanvas is the base component that generates the canvas element, initialise the PIXI Renderer, load the textures and creates all the React contexts. It is also responsible of starting the animation loop and render all the elements onto the stage."),i.a.createElement(r.b,{style:{height:300}},i.a.createElement(g,null)),i.a.createElement(r.b,null,i.a.createElement(s.a,{src:"./static/examples/PixiCanvasExample.tsx"})),i.a.createElement(u.k,null,"Properties"),i.a.createElement(c.b,{props:h}),i.a.createElement(u.k,null,"Event Callbacks"),i.a.createElement(c.b,{props:d}))}},73:function(e,t,n){"use strict";n.r(t),n.d(t,"genericProps",(function(){return d})),n.d(t,"genericEvents",(function(){return m}));var a=n(12),r=n(17),l=n(1),i=n.n(l),o=n(148),s=n(146),c=n(147),u=n(27),h=n(72),d=[["alpha",!1,"number","1","Value between 0 and 1 that defines the object opacity"],["angle",!1,"number","0","Rotation of the object in degrees"],["buttonMode",!1,"boolean","false","When set to true it makes the element clickable and set the cursor as pointer"],["cursor",!1,"CursorType","CursorType.None","Cursor used while hovering on the object"],["interactive",!1,"boolean","false","Whether the object is interactive (react to pointer events)"],["name",!1,"string","null","Name of the object"],["pivotX",!1,"number","0","Relative coordinate on the X axis of the point around which the object rotate"],["pivotY",!1,"number","0","Relative coordinate on the Y axis of the point around which the object rotate"],["rotation",!1,"number","0","Rotation of the object in radians"],["scaleX",!1,"number","1","Scale of the object on the X axis"],["scaleY",!1,"number","1","Scale of the object on the Y axis"],["skewX",!1,"number","0","Skew transform value on the X axis"],["skewY",!1,"number","0","Skew transform value on the Y axis"],["visible",!1,"boolean","true","Whether the object is visible or not"],["x",!1,"number","0","X coordinate of the object relative to the parent"],["y",!1,"number","0","X coordinate of the object relative to the parent"],["zIndex",!1,"number","0","Order in which the object is rendered (only works if the parent `sortableChildren` is set to `true`)"],["width",!1,"number","null","Width of the object"],["height",!1,"number","null","Height of the object"],["sortableChildren",!1,"boolean","false","Whether the children of the element can be sorted through the `zIndex`"],["filterArea",!1,"Rectangle","null","Area over which the filters will be applied"],["hitArea",!1,"Rectangle","null","Area of the element that will be used to test for interactions"]],m=[].concat(Object(a.a)(h.renderEvents),[["onClick",!1,"function","null","Callback executed when the `click` event is triggered"],["onMouseDown",!1,"function","null","Callback executed when the `mousedown` event is triggered"],["onMouseMove",!1,"function","null","Callback executed when the `mousemove` event is triggered"],["onMouseOut",!1,"function","null","Callback executed when the `mouseout` event is triggered"],["onMouseOver",!1,"function","null","Callback executed when the `mouseover` event is triggered"],["onMouseUp",!1,"function","null","Callback executed when the `mouseup` event is triggered"],["onMouseUpOutside",!1,"function","null","Callback executed when the `mouseupoutside` event is triggered"],["onPointerCancel",!1,"function","null","Callback executed when the `pointercancel` event is triggered"],["onPointerDown",!1,"function","null","Callback executed when the `pointerdown` event is triggered"],["onPointerMove",!1,"function","null","Callback executed when the `pointermove` event is triggered"],["onPointerOut",!1,"function","null","Callback executed when the `pointerout` event is triggered"],["onPointerOver",!1,"function","null","Callback executed when the `pointerover` event is triggered"],["onPointerTap",!1,"function","null","Callback executed when the `pointertap` event is triggered"],["onPointerUp",!1,"function","null","Callback executed when the `pointerup` event is triggered"],["onPointerUpOutside",!1,"function","null","Callback executed when the `pointerupoutside` event is triggered"],["onRemovedFrom",!1,"function","null","Callback executed when the `removedfrom` event is triggered"],["onRightClick",!1,"function","null","Callback executed when the `rightclick` event is triggered"],["onRightDown",!1,"function","null","Callback executed when the `rightdown` event is triggered"],["onRightUp",!1,"function","null","Callback executed when the `rightup` event is triggered"],["onRightUpOutside",!1,"function","null","Callback executed when the `rightupoutside` event is triggered"],["onTap",!1,"function","null","Callback executed when the `tap` event is triggered"],["onTouchCancel",!1,"function","null","Callback executed when the `touchcancel` event is triggered"],["onTouchEnd",!1,"function","null","Callback executed when the `touchend` event is triggered"],["onTouchEndOutside",!1,"function","null","Callback executed when the `touchendoutside` event is triggered"],["onTouchMove",!1,"function","null","Callback executed when the `touchmove` event is triggered"],["onTouchStart",!1,"function","null","Callback executed when the `touchstart` event is triggered"],["onAdded",!1,"function","null","Callback executed the object is added to a parent element or into the rendered stage"],["onRemoved",!1,"function","null","Callback executed the element is removed from it' parent"],["onChildAdded",!1,"function","null","Callback executed a child element is added"]]),p={galaxy:"./static/assets/galaxy.png",ship:"./static/assets/spaceship.png"},g=function(){return i.a.createElement(o.A,{textures:p},i.a.createElement(o.I,{texture:"galaxy"}),i.a.createElement(o.B,{x:50,y:50},i.a.createElement(o.F,{texture:"ship"}),i.a.createElement(o.B,{x:100,y:100},i.a.createElement(o.F,{texture:"ship"}))))};t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.n,null,"PixiContainer"),i.a.createElement(u.g,null,"The PixiContainer, as the name suggests, is an object used co contain other objects. Any transformation (position, rotation and scale) are applied to all its children and allow to create logical groups that can be handled together."),i.a.createElement(r.b,{style:{height:300}},i.a.createElement(g,null)),i.a.createElement(r.b,null,i.a.createElement(s.a,{src:"./static/examples/PixiContainerExample.tsx"})),i.a.createElement(u.k,null,"Properties"),i.a.createElement(c.b,{props:d}),i.a.createElement(u.k,null,"Event Callbacks"),i.a.createElement(c.b,{props:m}))}},76:function(e,t,n){"use strict";n.r(t),n.d(t,"spriteProps",(function(){return p}));var a=n(12),r=n(17),l=n(1),i=n.n(l),o=n(148),s=n(18),c=n(146),u=n(150),h=n(147),d=n(27),m=n(73),p=[["alignX",!1,"number","0","Value between 0 and 1 that defines where the object is aligned on the X axis (0 aligns it on the left and 1 on the right)"],["alignY",!1,"number","0","Value between 0 and 1 that defines where the object is aligned on theYX axis (0 aligns it on the top and 1 on the bottom)"],["anchorX",!1,"number","0","Anchor on the X axis where the texture starts to be rendered (it is overridden by `alignX`)"],["anchorY",!1,"number","0","Anchor on the Y axis where the texture starts to be rendered (it is overridden by `alignY`)"],["blendMode",!1,"BlendModes","BlendModes.Normal","Mode used to blend textures together"],["roundPixels",!1,"boolean","false","Whether to round the pixel values when the scale causes decimal values on position and size. It makes rendering faster"],["tint",!1,"number","0xffffff","Tint applied onto the texture"],["texture",!1,"string","null","Name of the texture to be used"]].concat(Object(a.a)(m.genericProps)),g={galaxy:"./static/assets/galaxy.png",sheet:"./static/assets/spritesheet.json"},b=function(){return i.a.createElement(o.A,{textures:g},i.a.createElement(o.I,{texture:"galaxy"}),i.a.createElement(o.F,{alignY:.5,x:20},i.a.createElement(o.H,{src:"./static/assets/spaceship.png"})),i.a.createElement(o.F,{texture:"enemy-ship",alignY:.5,alignX:1,x:-20}))};t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.n,null,"PixiSprite"),i.a.createElement(d.g,null,"The PixiSprite is the component that will render a texture onto the canvas. It is possible to use a texture preloaded by the"," ",i.a.createElement(u.a,{page:s.a.TextureContext})," by using the ",i.a.createElement(h.a,null,"texture")," property or by adding a"," ",i.a.createElement(u.a,{page:s.a.PixiTexture})," as a child node. ",i.a.createElement("br",null),"If you are familiar with the PIXI properties, there are a couple of extra properties added by this library. Both"," ",i.a.createElement(h.a,null,"alignX")," and ",i.a.createElement(h.a,null,"alignX")," are not original properties but it is something I've found quite useful during the years as a game developer. These 2 properties will allow you to align the sprite on the X and Y axis. If you'll use the ",i.a.createElement(h.a,null,"x")," and/or ",i.a.createElement(h.a,null,"y")," properties, they will work as relative position translations from the aligned central position."),i.a.createElement(r.b,{style:{height:300}},i.a.createElement(b,null)),i.a.createElement(r.b,null,i.a.createElement(c.a,{src:"./static/examples/PixiSpriteExample.tsx"})),i.a.createElement(d.k,null,"Properties"),i.a.createElement(h.b,{props:p}),i.a.createElement(d.k,null,"Event Callbacks"),i.a.createElement(h.b,{props:m.genericEvents}))}}}]);
//# sourceMappingURL=3.74d4e43a.chunk.js.map