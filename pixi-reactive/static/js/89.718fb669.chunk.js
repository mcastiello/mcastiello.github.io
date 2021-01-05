/*! For license information please see 89.718fb669.chunk.js.LICENSE.txt */
(this["webpackJsonppixi-reactive-docs"]=this["webpackJsonppixi-reactive-docs"]||[]).push([[89],{249:function(t,i,e){"use strict";e.d(i,"a",(function(){return k}));var s,n,r,a=e(31),h=e(12),o=e(20),l=e(179),p=function(){function t(t,i,e){this.value=t,this.time=i,this.next=null,this.isStepped=!1,this.ease=e?"function"===typeof e?e:n.generateEase(e):null}return t.createList=function(i){if("list"in i){var e=i.list,s=void 0,r=e[0],a=r.value,h=r.time,o=s=new t("string"===typeof a?n.hexToRGB(a):a,h,i.ease);if(e.length>2||2===e.length&&e[1].value!==a)for(var l=1;l<e.length;++l){var p=e[l],d=p.value,c=p.time;s.next=new t("string"===typeof d?n.hexToRGB(d):d,c),s=s.next}return o.isStepped=!!i.isStepped,o}var u=new t("string"===typeof i.start?n.hexToRGB(i.start):i.start,0);return i.end!==i.start&&(u.next=new t("string"===typeof i.end?n.hexToRGB(i.end):i.end,1)),u},t}(),d=l;function c(t){return s(t)}s=parseInt(/^(\d+)\./.exec(l.VERSION)[1],10)<5?d.Texture.fromImage:d.Texture.from,(r=n||(n={})).verbose=!1,r.DEG_TO_RADS=Math.PI/180,r.rotatePoint=function(t,i){if(t){t*=r.DEG_TO_RADS;var e=Math.sin(t),s=Math.cos(t),n=i.x*s-i.y*e,a=i.x*e+i.y*s;i.x=n,i.y=a}},r.combineRGBComponents=function(t,i,e){return t<<16|i<<8|e},r.normalize=function(t){var i=1/r.length(t);t.x*=i,t.y*=i},r.scaleBy=function(t,i){t.x*=i,t.y*=i},r.length=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)},r.hexToRGB=function(t,i){var e;return i||(i={}),"#"===t.charAt(0)?t=t.substr(1):0===t.indexOf("0x")&&(t=t.substr(2)),8===t.length&&(e=t.substr(0,2),t=t.substr(2)),i.r=parseInt(t.substr(0,2),16),i.g=parseInt(t.substr(2,2),16),i.b=parseInt(t.substr(4,2),16),e&&(i.a=parseInt(e,16)),i},r.generateEase=function(t){var i=t.length,e=1/i;return function(s){var n=i*s|0,r=(s-n*e)*i,a=t[n]||t[i-1];return a.s+r*(2*(1-r)*(a.cp-a.s)+r*(a.e-a.s))}},r.getBlendMode=function(t){if(!t)return l.BLEND_MODES.NORMAL;for(t=t.toUpperCase();t.indexOf(" ")>=0;)t=t.replace(" ","_");return l.BLEND_MODES[t]||l.BLEND_MODES.NORMAL},r.createSteppedGradient=function(t,i){void 0===i&&(i=10),("number"!==typeof i||i<=0)&&(i=10);var e=new p(r.hexToRGB(t[0].value),t[0].time);e.isStepped=!0;for(var s=e,n=t[0],a=1,h=t[a],o=1;o<i;++o){for(var l=o/i;l>h.time;)n=h,h=t[++a];l=(l-n.time)/(h.time-n.time);var d=r.hexToRGB(n.value),c=r.hexToRGB(h.value),u={r:(c.r-d.r)*l+d.r,g:(c.g-d.g)*l+d.g,b:(c.b-d.b)*l+d.b};s.next=new p(u,o/i),s=s.next}return e};var u=function(t,i){return(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var e in i)i.hasOwnProperty(e)&&(t[e]=i[e])})(t,i)};function f(t,i){function e(){this.constructor=t}u(t,i),t.prototype=null===i?Object.create(i):(e.prototype=i.prototype,new e)}function m(t){return this.ease&&(t=this.ease(t)),(this.next.value-this.current.value)*t+this.current.value}function _(t){this.ease&&(t=this.ease(t));var i=this.current.value,e=this.next.value,s=(e.r-i.r)*t+i.r,r=(e.g-i.g)*t+i.g,a=(e.b-i.b)*t+i.b;return n.combineRGBComponents(s,r,a)}function C(t){for(this.ease&&(t=this.ease(t));t>this.next.time;)this.current=this.next,this.next=this.next.next;return t=(t-this.current.time)/(this.next.time-this.current.time),(this.next.value-this.current.value)*t+this.current.value}function v(t){for(this.ease&&(t=this.ease(t));t>this.next.time;)this.current=this.next,this.next=this.next.next;t=(t-this.current.time)/(this.next.time-this.current.time);var i=this.current.value,e=this.next.value,s=(e.r-i.r)*t+i.r,r=(e.g-i.g)*t+i.g,a=(e.b-i.b)*t+i.b;return n.combineRGBComponents(s,r,a)}function x(t){for(this.ease&&(t=this.ease(t));this.next&&t>this.next.time;)this.current=this.next,this.next=this.next.next;return this.current.value}function y(t){for(this.ease&&(t=this.ease(t));this.next&&t>this.next.time;)this.current=this.next,this.next=this.next.next;var i=this.current.value;return n.combineRGBComponents(i.r,i.g,i.b)}var g,b=function(){function t(t){void 0===t&&(t=!1),this.current=null,this.next=null,this.isColor=!!t,this.interpolate=null,this.ease=null}return t.prototype.reset=function(t){this.current=t,this.next=t.next,this.next&&this.next.time>=1?this.interpolate=this.isColor?_:m:t.isStepped?this.interpolate=this.isColor?y:x:this.interpolate=this.isColor?v:C,this.ease=this.current.ease},t}(),w=function(t){function i(e){var s=t.call(this)||this;return s.prevChild=s.nextChild=null,s.emitter=e,s.anchor.x=s.anchor.y=.5,s.velocity=new l.Point,s.rotationSpeed=0,s.rotationAcceleration=0,s.maxLife=0,s.age=0,s.ease=null,s.extraData=null,s.alphaList=new b,s.speedList=new b,s.speedMultiplier=1,s.acceleration=new l.Point,s.maxSpeed=NaN,s.scaleList=new b,s.scaleMultiplier=1,s.colorList=new b(!0),s._doAlpha=!1,s._doScale=!1,s._doSpeed=!1,s._doAcceleration=!1,s._doColor=!1,s._doNormalMovement=!1,s._oneOverLife=0,s.next=null,s.prev=null,s.init=s.init,s.Particle_init=i.prototype.init,s.update=s.update,s.Particle_update=i.prototype.update,s.Sprite_destroy=t.prototype.destroy,s.Particle_destroy=i.prototype.destroy,s.applyArt=s.applyArt,s.kill=s.kill,s}return f(i,t),i.prototype.init=function(){this.age=0,this.velocity.x=this.speedList.current.value*this.speedMultiplier,this.velocity.y=0,n.rotatePoint(this.rotation,this.velocity),this.noRotation?this.rotation=0:this.rotation*=n.DEG_TO_RADS,this.rotationSpeed*=n.DEG_TO_RADS,this.rotationAcceleration*=n.DEG_TO_RADS,this.alpha=this.alphaList.current.value,this.scale.x=this.scale.y=this.scaleList.current.value,this._doAlpha=!!this.alphaList.current.next,this._doSpeed=!!this.speedList.current.next,this._doScale=!!this.scaleList.current.next,this._doColor=!!this.colorList.current.next,this._doAcceleration=0!==this.acceleration.x||0!==this.acceleration.y,this._doNormalMovement=this._doSpeed||0!==this.speedList.current.value||this._doAcceleration,this._oneOverLife=1/this.maxLife;var t=this.colorList.current.value;this.tint=n.combineRGBComponents(t.r,t.g,t.b),this.visible=!0},i.prototype.applyArt=function(t){this.texture=t||l.Texture.EMPTY},i.prototype.update=function(t){if(this.age+=t,this.age>=this.maxLife||this.age<0)return this.kill(),-1;var i=this.age*this._oneOverLife;if(this.ease&&(i=4===this.ease.length?this.ease(i,0,1,1):this.ease(i)),this._doAlpha&&(this.alpha=this.alphaList.interpolate(i)),this._doScale){var e=this.scaleList.interpolate(i)*this.scaleMultiplier;this.scale.x=this.scale.y=e}if(this._doNormalMovement){var s=void 0,r=void 0;if(this._doSpeed){var a=this.speedList.interpolate(i)*this.speedMultiplier;n.normalize(this.velocity),n.scaleBy(this.velocity,a),s=this.velocity.x*t,r=this.velocity.y*t}else if(this._doAcceleration){var h=this.velocity.x,o=this.velocity.y;if(this.velocity.x+=this.acceleration.x*t,this.velocity.y+=this.acceleration.y*t,this.maxSpeed){var l=n.length(this.velocity);l>this.maxSpeed&&n.scaleBy(this.velocity,this.maxSpeed/l)}s=(h+this.velocity.x)/2*t,r=(o+this.velocity.y)/2*t}else s=this.velocity.x*t,r=this.velocity.y*t;this.position.x+=s,this.position.y+=r}if(this._doColor&&(this.tint=this.colorList.interpolate(i)),0!==this.rotationAcceleration){var p=this.rotationSpeed+this.rotationAcceleration*t;this.rotation+=(this.rotationSpeed+p)/2*t,this.rotationSpeed=p}else 0!==this.rotationSpeed?this.rotation+=this.rotationSpeed*t:this.acceleration&&!this.noRotation&&(this.rotation=Math.atan2(this.velocity.y,this.velocity.x));return i},i.prototype.kill=function(){this.emitter.recycle(this)},i.prototype.destroy=function(){this.parent&&this.parent.removeChild(this),this.Sprite_destroy(),this.emitter=this.velocity=this.colorList=this.scaleList=this.alphaList=this.speedList=this.ease=this.next=this.prev=null},i.parseArt=function(t){var i;for(i=t.length;i>=0;--i)"string"===typeof t[i]&&(t[i]=c(t[i]));if(n.verbose)for(i=t.length-1;i>0;--i)if(t[i].baseTexture!==t[i-1].baseTexture){window.console&&console.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");break}return t},i.parseData=function(t){return t},i}(l.Sprite),S=function(){function t(t){this.segments=[],this.countingLengths=[],this.totalLength=0,this.init(t)}return t.prototype.init=function(t){if(t&&t.length)if(Array.isArray(t[0]))for(var i=0;i<t.length;++i)for(var e=t[i],s=e[0],n=1;n<e.length;++n){var r=e[n];this.segments.push({p1:s,p2:r,l:0}),s=r}else for(s=t[0],i=1;i<t.length;++i){r=t[i];this.segments.push({p1:s,p2:r,l:0}),s=r}else this.segments.push({p1:{x:0,y:0},p2:{x:0,y:0},l:0});for(i=0;i<this.segments.length;++i){var a=this.segments[i],h=a.p1,o=a.p2,l=Math.sqrt((o.x-h.x)*(o.x-h.x)+(o.y-h.y)*(o.y-h.y));this.segments[i].l=l,this.totalLength+=l,this.countingLengths.push(this.totalLength)}},t.prototype.getRandomPoint=function(t){var i,e,s=Math.random()*this.totalLength;if(1===this.segments.length)i=this.segments[0],e=s;else for(var n=0;n<this.countingLengths.length;++n)if(s<this.countingLengths[n]){i=this.segments[n],e=0===n?s:s-this.countingLengths[n-1];break}e/=i.l||1;var r=i.p1,a=i.p2;t.x=r.x+e*(a.x-r.x),t.y=r.y+e*(a.y-r.y)},t}(),P=l;g=parseInt(/^(\d+)\./.exec(l.VERSION)[1],10)<5?P.ticker.shared:P.Ticker.shared;var R=new l.Point,L=function(){function t(t,i,e){this._currentImageIndex=-1,this._particleConstructor=w,this.particleImages=null,this.startAlpha=null,this.startSpeed=null,this.minimumSpeedMultiplier=1,this.acceleration=null,this.maxSpeed=NaN,this.startScale=null,this.minimumScaleMultiplier=1,this.startColor=null,this.minLifetime=0,this.maxLifetime=0,this.minStartRotation=0,this.maxStartRotation=0,this.noRotation=!1,this.minRotationSpeed=0,this.maxRotationSpeed=0,this.particleBlendMode=0,this.customEase=null,this.extraData=null,this._frequency=1,this.spawnChance=1,this.maxParticles=1e3,this.emitterLifetime=-1,this.spawnPos=null,this.spawnType=null,this._spawnFunc=null,this.spawnRect=null,this.spawnCircle=null,this.spawnPolygonalChain=null,this.particlesPerWave=1,this.particleSpacing=0,this.angleStart=0,this.rotation=0,this.ownerPos=null,this._prevEmitterPos=null,this._prevPosIsValid=!1,this._posChanged=!1,this._parent=null,this.addAtBack=!1,this.particleCount=0,this._emit=!1,this._spawnTimer=0,this._emitterLife=-1,this._activeParticlesFirst=null,this._activeParticlesLast=null,this._poolFirst=null,this._origConfig=null,this._origArt=null,this._autoUpdate=!1,this._currentImageIndex=-1,this._destroyWhenComplete=!1,this._completeCallback=null,this.parent=t,i&&e&&this.init(i,e),this.recycle=this.recycle,this.update=this.update,this.rotate=this.rotate,this.updateSpawnPos=this.updateSpawnPos,this.updateOwnerPos=this.updateOwnerPos}return Object.defineProperty(t.prototype,"orderedArt",{get:function(){return-1!==this._currentImageIndex},set:function(t){this._currentImageIndex=t?0:-1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"frequency",{get:function(){return this._frequency},set:function(t){this._frequency="number"===typeof t&&t>0?t:1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"particleConstructor",{get:function(){return this._particleConstructor},set:function(t){if(t!==this._particleConstructor){this._particleConstructor=t,this.cleanup();for(var i=this._poolFirst;i;i=i.next)i.destroy();this._poolFirst=null,this._origConfig&&this._origArt&&this.init(this._origArt,this._origConfig)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},set:function(t){this.cleanup(),this._parent=t},enumerable:!0,configurable:!0}),t.prototype.init=function(t,i){if(t&&i){this.cleanup(),this._origConfig=i,this._origArt=t,t=Array.isArray(t)?t.slice():[t];var e=this._particleConstructor;this.particleImages=e.parseArt?e.parseArt(t):t,i.alpha?this.startAlpha=p.createList(i.alpha):this.startAlpha=new p(1,0),i.speed?(this.startSpeed=p.createList(i.speed),this.minimumSpeedMultiplier=("minimumSpeedMultiplier"in i?i.minimumSpeedMultiplier:i.speed.minimumSpeedMultiplier)||1):(this.minimumSpeedMultiplier=1,this.startSpeed=new p(0,0));var s=i.acceleration;s&&(s.x||s.y)?(this.startSpeed.next=null,this.acceleration=new l.Point(s.x,s.y),this.maxSpeed=i.maxSpeed||NaN):this.acceleration=new l.Point,i.scale?(this.startScale=p.createList(i.scale),this.minimumScaleMultiplier=("minimumScaleMultiplier"in i?i.minimumScaleMultiplier:i.scale.minimumScaleMultiplier)||1):(this.startScale=new p(1,0),this.minimumScaleMultiplier=1),i.color?this.startColor=p.createList(i.color):this.startColor=new p({r:255,g:255,b:255},0),i.startRotation?(this.minStartRotation=i.startRotation.min,this.maxStartRotation=i.startRotation.max):this.minStartRotation=this.maxStartRotation=0,i.noRotation&&(this.minStartRotation||this.maxStartRotation)?this.noRotation=!!i.noRotation:this.noRotation=!1,i.rotationSpeed?(this.minRotationSpeed=i.rotationSpeed.min,this.maxRotationSpeed=i.rotationSpeed.max):this.minRotationSpeed=this.maxRotationSpeed=0,this.rotationAcceleration=i.rotationAcceleration||0,this.minLifetime=i.lifetime.min,this.maxLifetime=i.lifetime.max,this.particleBlendMode=n.getBlendMode(i.blendMode),i.ease?this.customEase="function"===typeof i.ease?i.ease:n.generateEase(i.ease):this.customEase=null,e.parseData?this.extraData=e.parseData(i.extraData):this.extraData=i.extraData||null,this.spawnRect=this.spawnCircle=null,this.particlesPerWave=1,i.particlesPerWave&&i.particlesPerWave>1&&(this.particlesPerWave=i.particlesPerWave),this.particleSpacing=0,this.angleStart=0,this.parseSpawnType(i),this.frequency=i.frequency,this.spawnChance="number"===typeof i.spawnChance&&i.spawnChance>0?i.spawnChance:1,this.emitterLifetime=i.emitterLifetime||-1,this.maxParticles=i.maxParticles>0?i.maxParticles:1e3,this.addAtBack=!!i.addAtBack,this.rotation=0,this.ownerPos=new l.Point,this.spawnPos=new l.Point(i.pos.x,i.pos.y),this.initAdditional(t,i),this._prevEmitterPos=this.spawnPos.clone(),this._prevPosIsValid=!1,this._spawnTimer=0,this.emit=void 0===i.emit||!!i.emit,this.autoUpdate=!!i.autoUpdate,this.orderedArt=!!i.orderedArt}},t.prototype.initAdditional=function(t,i){},t.prototype.parseSpawnType=function(t){var i;switch(t.spawnType){case"rect":this.spawnType="rect",this._spawnFunc=this._spawnRect;var e=t.spawnRect;this.spawnRect=new l.Rectangle(e.x,e.y,e.w,e.h);break;case"circle":this.spawnType="circle",this._spawnFunc=this._spawnCircle,i=t.spawnCircle,this.spawnCircle=new l.Circle(i.x,i.y,i.r);break;case"ring":this.spawnType="ring",this._spawnFunc=this._spawnRing,i=t.spawnCircle,this.spawnCircle=new l.Circle(i.x,i.y,i.r),this.spawnCircle.minRadius=i.minR;break;case"burst":this.spawnType="burst",this._spawnFunc=this._spawnBurst,this.particleSpacing=t.particleSpacing,this.angleStart=t.angleStart?t.angleStart:0;break;case"point":this.spawnType="point",this._spawnFunc=this._spawnPoint;break;case"polygonalChain":this.spawnType="polygonalChain",this._spawnFunc=this._spawnPolygonalChain,this.spawnPolygonalChain=new S(t.spawnPolygon);break;default:this.spawnType="point",this._spawnFunc=this._spawnPoint}},t.prototype.recycle=function(t){t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next),t===this._activeParticlesLast&&(this._activeParticlesLast=t.prev),t===this._activeParticlesFirst&&(this._activeParticlesFirst=t.next),t.prev=null,t.next=this._poolFirst,this._poolFirst=t,t.parent&&t.parent.removeChild(t),--this.particleCount},t.prototype.rotate=function(t){if(this.rotation!==t){var i=t-this.rotation;this.rotation=t,n.rotatePoint(i,this.spawnPos),this._posChanged=!0}},t.prototype.updateSpawnPos=function(t,i){this._posChanged=!0,this.spawnPos.x=t,this.spawnPos.y=i},t.prototype.updateOwnerPos=function(t,i){this._posChanged=!0,this.ownerPos.x=t,this.ownerPos.y=i},t.prototype.resetPositionTracking=function(){this._prevPosIsValid=!1},Object.defineProperty(t.prototype,"emit",{get:function(){return this._emit},set:function(t){this._emit=!!t,this._emitterLife=this.emitterLifetime},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){this._autoUpdate&&!t?g.remove(this.update,this):!this._autoUpdate&&t&&g.add(this.update,this),this._autoUpdate=!!t},enumerable:!0,configurable:!0}),t.prototype.playOnceAndDestroy=function(t){this.autoUpdate=!0,this.emit=!0,this._destroyWhenComplete=!0,this._completeCallback=t},t.prototype.playOnce=function(t){this.emit=!0,this._completeCallback=t},t.prototype.update=function(t){if(this._autoUpdate&&(t=t/l.settings.TARGET_FPMS/1e3),this._parent){var i,e,s,n,r;for(e=this._activeParticlesFirst;e;e=s)s=e.next,e.update(t);this._prevPosIsValid&&(n=this._prevEmitterPos.x,r=this._prevEmitterPos.y);var a=this.ownerPos.x+this.spawnPos.x,h=this.ownerPos.y+this.spawnPos.y;if(this._emit)for(this._spawnTimer-=t<0?0:t;this._spawnTimer<=0;){if(this._emitterLife>=0&&(this._emitterLife-=this._frequency,this._emitterLife<=0)){this._spawnTimer=0,this._emitterLife=0,this.emit=!1;break}if(this.particleCount>=this.maxParticles)this._spawnTimer+=this._frequency;else{var o=void 0;if(o=this.minLifetime===this.maxLifetime?this.minLifetime:Math.random()*(this.maxLifetime-this.minLifetime)+this.minLifetime,-this._spawnTimer<o){var p=void 0,d=void 0;if(this._prevPosIsValid&&this._posChanged){var c=1+this._spawnTimer/t;p=(a-n)*c+n,d=(h-r)*c+r}else p=a,d=h;i=0;for(var u=Math.min(this.particlesPerWave,this.maxParticles-this.particleCount);i<u;++i)if(!(this.spawnChance<1&&Math.random()>=this.spawnChance)){var f=void 0;this._poolFirst?(f=this._poolFirst,this._poolFirst=this._poolFirst.next,f.next=null):f=new this.particleConstructor(this),this.particleImages.length>1?-1!==this._currentImageIndex?(f.applyArt(this.particleImages[this._currentImageIndex++]),(this._currentImageIndex<0||this._currentImageIndex>=this.particleImages.length)&&(this._currentImageIndex=0)):f.applyArt(this.particleImages[Math.floor(Math.random()*this.particleImages.length)]):f.applyArt(this.particleImages[0]),f.alphaList.reset(this.startAlpha),1!==this.minimumSpeedMultiplier&&(f.speedMultiplier=Math.random()*(1-this.minimumSpeedMultiplier)+this.minimumSpeedMultiplier),f.speedList.reset(this.startSpeed),f.acceleration.x=this.acceleration.x,f.acceleration.y=this.acceleration.y,f.maxSpeed=this.maxSpeed,1!==this.minimumScaleMultiplier&&(f.scaleMultiplier=Math.random()*(1-this.minimumScaleMultiplier)+this.minimumScaleMultiplier),f.scaleList.reset(this.startScale),f.colorList.reset(this.startColor),this.minRotationSpeed===this.maxRotationSpeed?f.rotationSpeed=this.minRotationSpeed:f.rotationSpeed=Math.random()*(this.maxRotationSpeed-this.minRotationSpeed)+this.minRotationSpeed,f.rotationAcceleration=this.rotationAcceleration,f.noRotation=this.noRotation,f.maxLife=o,f.blendMode=this.particleBlendMode,f.ease=this.customEase,f.extraData=this.extraData,this.applyAdditionalProperties(f),this._spawnFunc(f,p,d,i),f.init(),this.addAtBack?this._parent.addChildAt(f,0):this._parent.addChild(f),this._activeParticlesLast?(this._activeParticlesLast.next=f,f.prev=this._activeParticlesLast,this._activeParticlesLast=f):this._activeParticlesLast=this._activeParticlesFirst=f,++this.particleCount,f.update(-this._spawnTimer)}}this._spawnTimer+=this._frequency}}if(this._posChanged&&(this._prevEmitterPos.x=a,this._prevEmitterPos.y=h,this._prevPosIsValid=!0,this._posChanged=!1),!this._emit&&!this._activeParticlesFirst){if(this._completeCallback){var m=this._completeCallback;this._completeCallback=null,m()}this._destroyWhenComplete&&this.destroy()}}},t.prototype.applyAdditionalProperties=function(t){},t.prototype._spawnPoint=function(t,i,e){this.minStartRotation===this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,t.position.x=i,t.position.y=e},t.prototype._spawnRect=function(t,i,e){this.minStartRotation===this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,R.x=Math.random()*this.spawnRect.width+this.spawnRect.x,R.y=Math.random()*this.spawnRect.height+this.spawnRect.y,0!==this.rotation&&n.rotatePoint(this.rotation,R),t.position.x=i+R.x,t.position.y=e+R.y},t.prototype._spawnCircle=function(t,i,e){this.minStartRotation===this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,R.x=Math.random()*this.spawnCircle.radius,R.y=0,n.rotatePoint(360*Math.random(),R),R.x+=this.spawnCircle.x,R.y+=this.spawnCircle.y,0!==this.rotation&&n.rotatePoint(this.rotation,R),t.position.x=i+R.x,t.position.y=e+R.y},t.prototype._spawnRing=function(t,i,e){var s=this.spawnCircle;this.minStartRotation===this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,s.minRadius!==s.radius?R.x=Math.random()*(s.radius-s.minRadius)+s.minRadius:R.x=s.radius,R.y=0;var r=360*Math.random();t.rotation+=r,n.rotatePoint(r,R),R.x+=this.spawnCircle.x,R.y+=this.spawnCircle.y,0!==this.rotation&&n.rotatePoint(this.rotation,R),t.position.x=i+R.x,t.position.y=e+R.y},t.prototype._spawnPolygonalChain=function(t,i,e){this.minStartRotation===this.maxStartRotation?t.rotation=this.minStartRotation+this.rotation:t.rotation=Math.random()*(this.maxStartRotation-this.minStartRotation)+this.minStartRotation+this.rotation,this.spawnPolygonalChain.getRandomPoint(R),0!==this.rotation&&n.rotatePoint(this.rotation,R),t.position.x=i+R.x,t.position.y=e+R.y},t.prototype._spawnBurst=function(t,i,e,s){0===this.particleSpacing?t.rotation=360*Math.random():t.rotation=this.angleStart+this.particleSpacing*s+this.rotation,t.position.x=i,t.position.y=e},t.prototype.cleanup=function(){var t,i;for(t=this._activeParticlesFirst;t;t=i)i=t.next,this.recycle(t),t.parent&&t.parent.removeChild(t);this._activeParticlesFirst=this._activeParticlesLast=null,this.particleCount=0},t.prototype.destroy=function(){var t;this.autoUpdate=!1,this.cleanup();for(var i=this._poolFirst;i;i=t)t=i.next,i.destroy();this._poolFirst=this._parent=this.particleImages=this.spawnPos=this.ownerPos=this.startColor=this.startScale=this.startAlpha=this.startSpeed=this.customEase=this._completeCallback=null},t}(),A=new l.Point,M=["pow","sqrt","abs","floor","round","ceil","E","PI","sin","cos","tan","asin","acos","atan","atan2","log"],I=new RegExp(["[01234567890\\.\\*\\-\\+\\/\\(\\)x ,]"].concat(M).join("|"),"g");(function(t){function i(i){var e=t.call(this,i)||this;return e.path=null,e.initialRotation=0,e.initialPosition=new l.Point,e.movement=0,e}f(i,t),i.prototype.init=function(){this.initialRotation=this.rotation,this.Particle_init(),this.path=this.extraData.path,this._doNormalMovement=!this.path,this.movement=0,this.initialPosition.x=this.position.x,this.initialPosition.y=this.position.y},i.prototype.update=function(t){var i=this.Particle_update(t);if(i>=0&&this.path){if(this._doSpeed){var e=this.speedList.interpolate(i)*this.speedMultiplier;this.movement+=e*t}else{e=this.speedList.current.value*this.speedMultiplier;this.movement+=e*t}A.x=this.movement,A.y=this.path(this.movement),n.rotatePoint(this.initialRotation,A),this.position.x=this.initialPosition.x+A.x,this.position.y=this.initialPosition.y+A.y}return i},i.prototype.destroy=function(){this.Particle_destroy(),this.path=this.initialPosition=null},i.parseArt=function(t){return w.parseArt(t)},i.parseData=function(t){var i={};if(t&&t.path)try{i.path=function(t){for(var i=t.match(I),e=i.length-1;e>=0;--e)M.indexOf(i[e])>=0&&(i[e]="Math."+i[e]);return t=i.join(""),new Function("x","return "+t+";")}(t.path)}catch(e){n.verbose&&console.error("PathParticle: error in parsing path expression"),i.path=null}else n.verbose&&console.error("PathParticle requires a path string in extraData!"),i.path=null;return i}})(w),function(t){function i(i){var e=t.call(this,i)||this;return e.textures=null,e.duration=0,e.framerate=0,e.elapsed=0,e.loop=!1,e}f(i,t),i.prototype.init=function(){this.Particle_init(),this.elapsed=0,this.framerate<0&&(this.duration=this.maxLife,this.framerate=this.textures.length/this.duration)},i.prototype.applyArt=function(t){this.textures=t.textures,this.framerate=t.framerate,this.duration=t.duration,this.loop=t.loop},i.prototype.update=function(t){var i=this.Particle_update(t);if(i>=0){this.elapsed+=t,this.elapsed>this.duration&&(this.loop?this.elapsed=this.elapsed%this.duration:this.elapsed=this.duration-1e-6);var e=this.elapsed*this.framerate+1e-7|0;this.texture=this.textures[e]||l.Texture.EMPTY}return i},i.prototype.destroy=function(){this.Particle_destroy(),this.textures=null},i.parseArt=function(t){for(var i=[],e=0;e<t.length;++e){for(var s=t[e],n=i[e]={},r=n.textures=[],a=s.textures,h=0;h<a.length;++h){var o=a[h];if("string"===typeof o)r.push(c(o));else if(o instanceof l.Texture)r.push(o);else{var p=o.count||1;for(o="string"===typeof o.texture?c(o.texture):o.texture;p>0;--p)r.push(o)}}"matchLife"===s.framerate?(n.framerate=-1,n.duration=0,n.loop=!1):(n.loop=!!s.loop,n.framerate=s.framerate>0?s.framerate:60,n.duration=r.length/n.framerate)}return i}}(w),function(t){function i(){var i=null!==t&&t.apply(this,arguments)||this;return i._firstChild=null,i._lastChild=null,i._childCount=0,i}f(i,t),Object.defineProperty(i.prototype,"firstChild",{get:function(){return this._firstChild},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"lastChild",{get:function(){return this._lastChild},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"childCount",{get:function(){return this._childCount},enumerable:!0,configurable:!0}),i.prototype.addChild=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];if(t.length>1)for(var e=0;e<t.length;e++)this.addChild(t[e]);else{var s=t[0];s.parent&&s.parent.removeChild(s),s.parent=this,this.sortDirty=!0,s.transform._parentID=-1,this._lastChild?(this._lastChild.nextChild=s,s.prevChild=this._lastChild,this._lastChild=s):this._firstChild=this._lastChild=s,++this._childCount,this._boundsID++,this.onChildrenChange(),this.emit("childAdded",s,this,this._childCount),s.emit("added",this)}return t[0]},i.prototype.addChildAt=function(t,i){if(i<0||i>this._childCount)throw new Error("addChildAt: The index "+i+" supplied is out of bounds "+this._childCount);t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1;var e=t;if(this._firstChild)if(0===i)this._firstChild.prevChild=e,e.nextChild=this._firstChild,this._firstChild=e;else if(i===this._childCount)this._lastChild.nextChild=e,e.prevChild=this._lastChild,this._lastChild=e;else{for(var s=0,n=this._firstChild;s<i;)n=n.nextChild,++s;n.prevChild.nextChild=e,e.prevChild=n.prevChild,e.nextChild=n,n.prevChild=e}else this._firstChild=this._lastChild=e;return++this._childCount,this._boundsID++,this.onChildrenChange(i),t.emit("added",this),this.emit("childAdded",t,this,i),t},i.prototype.addChildBelow=function(t,i){if(i.parent!==this)throw new Error("addChildBelow: The relative target must be a child of this parent");return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,i.prevChild.nextChild=t,t.prevChild=i.prevChild,t.nextChild=i,i.prevChild=t,this._firstChild===i&&(this._firstChild=t),++this._childCount,this._boundsID++,this.onChildrenChange(),this.emit("childAdded",t,this,this._childCount),t.emit("added",this),t},i.prototype.addChildAbove=function(t,i){if(i.parent!==this)throw new Error("addChildBelow: The relative target must be a child of this parent");return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,i.nextChild.prevChild=t,t.nextChild=i.nextChild,t.prevChild=i,i.nextChild=t,this._lastChild===i&&(this._lastChild=t),++this._childCount,this._boundsID++,this.onChildrenChange(),this.emit("childAdded",t,this,this._childCount),t.emit("added",this),t},i.prototype.swapChildren=function(t,i){if(t!==i&&t.parent===this&&i.parent===this){var e=t,s=e.prevChild,n=e.nextChild;t.prevChild=i.prevChild,t.nextChild=i.nextChild,i.prevChild=s,i.nextChild=n,this._firstChild===t?this._firstChild=i:this._firstChild===i&&(this._firstChild=t),this._lastChild===t?this._lastChild=i:this._lastChild===i&&(this._lastChild=t),this.onChildrenChange()}},i.prototype.getChildIndex=function(t){for(var i=0,e=this._firstChild;e&&e!==t;)e=e.nextChild,++i;if(!e)throw new Error("The supplied DisplayObject must be a child of the caller");return i},i.prototype.setChildIndex=function(t,i){if(i<0||i>=this._childCount)throw new Error("The index "+i+" supplied is out of bounds "+this._childCount);if(t.parent!==this)throw new Error("The supplied DisplayObject must be a child of the caller");if(t.nextChild&&(t.nextChild.prevChild=t.prevChild),t.prevChild&&(t.prevChild.nextChild=t.nextChild),this._firstChild===t&&(this._firstChild=t.nextChild),this._lastChild===t&&(this._lastChild=t.prevChild),t.nextChild=null,t.prevChild=null,this._firstChild)if(0===i)this._firstChild.prevChild=t,t.nextChild=this._firstChild,this._firstChild=t;else if(i===this._childCount)this._lastChild.nextChild=t,t.prevChild=this._lastChild,this._lastChild=t;else{for(var e=0,s=this._firstChild;e<i;)s=s.nextChild,++e;s.prevChild.nextChild=t,t.prevChild=s.prevChild,t.nextChild=s,s.prevChild=t}else this._firstChild=this._lastChild=t;this.onChildrenChange(i)},i.prototype.removeChild=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];if(t.length>1)for(var e=0;e<t.length;e++)this.removeChild(t[e]);else{var s=t[0];if(s.parent!==this)return null;s.parent=null,s.transform._parentID=-1,s.nextChild&&(s.nextChild.prevChild=s.prevChild),s.prevChild&&(s.prevChild.nextChild=s.nextChild),this._firstChild===s&&(this._firstChild=s.nextChild),this._lastChild===s&&(this._lastChild=s.prevChild),s.nextChild=null,s.prevChild=null,--this._childCount,this._boundsID++,this.onChildrenChange(),s.emit("removed",this),this.emit("childRemoved",s,this)}return t[0]},i.prototype.getChildAt=function(t){if(t<0||t>=this._childCount)throw new Error("getChildAt: Index ("+t+") does not exist.");if(0===t)return this._firstChild;if(t===this._childCount)return this._lastChild;for(var i=0,e=this._firstChild;i<t;)e=e.nextChild,++i;return e},i.prototype.removeChildAt=function(t){var i=this.getChildAt(t);return i.parent=null,i.transform._parentID=-1,i.nextChild&&(i.nextChild.prevChild=i.prevChild),i.prevChild&&(i.prevChild.nextChild=i.nextChild),this._firstChild===i&&(this._firstChild=i.nextChild),this._lastChild===i&&(this._lastChild=i.prevChild),i.nextChild=null,i.prevChild=null,--this._childCount,this._boundsID++,this.onChildrenChange(t),i.emit("removed",this),this.emit("childRemoved",i,this,t),i},i.prototype.removeChildren=function(t,i){void 0===t&&(t=0),void 0===i&&(i=this._childCount);var e=t,s=i,n=s-e;if(n>0&&n<=s){for(var r=[],a=this._firstChild,h=0;h<=s&&a;++h,a=a.nextChild)h>=e&&r.push(a);var o=r[0].prevChild,l=r[r.length-1].nextChild;l?l.prevChild=o:this._lastChild=o,o?o.nextChild=l:this._firstChild=l;for(h=0;h<r.length;++h)r[h].parent=null,r[h].transform&&(r[h].transform._parentID=-1),r[h].nextChild=null,r[h].prevChild=null;this._boundsID++,this.onChildrenChange(t);for(h=0;h<r.length;++h)r[h].emit("removed",this),this.emit("childRemoved",r[h],this,h);return r}if(0===n&&0===this._childCount)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},i.prototype.updateTransform=function(){var t,i;for(this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha,t=this._firstChild;t;t=i)i=t.nextChild,t.visible&&t.updateTransform()},i.prototype.calculateBounds=function(){var t,i;for(this._bounds.clear(),this._calculateBounds(),t=this._firstChild;t;t=i)if(i=t.nextChild,t.visible&&t.renderable)if(t.calculateBounds(),t._mask){var e=t._mask.maskObject||t._mask;e.calculateBounds(),this._bounds.addBoundsMask(t._bounds,e._bounds)}else t.filterArea?this._bounds.addBoundsArea(t._bounds,t.filterArea):this._bounds.addBounds(t._bounds);this._bounds.updateID=this._boundsID},i.prototype.getLocalBounds=function(t,i){void 0===i&&(i=!1);var e=l.DisplayObject.prototype.getLocalBounds.call(this,t);if(!i){var s=void 0,n=void 0;for(s=this._firstChild;s;s=n)n=s.nextChild,s.visible&&s.updateTransform()}return e},i.prototype.render=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable)if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(t);else{this._render(t);var i=void 0,e=void 0;for(i=this._firstChild;i;i=e)e=i.nextChild,i.render(t)}},i.prototype.renderAdvanced=function(t){t.batch.flush();var i,e,s=this.filters,n=this._mask;if(s){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var r=0;r<s.length;r++)s[r].enabled&&this._enabledFilters.push(s[r]);this._enabledFilters.length&&t.filter.push(this,this._enabledFilters)}for(n&&t.mask.push(this,this._mask),this._render(t),i=this._firstChild;i;i=e)e=i.nextChild,i.render(t);t.batch.flush(),n&&t.mask.pop(this),s&&this._enabledFilters&&this._enabledFilters.length&&t.filter.pop()},i.prototype.renderWebGL=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable)if(this._mask||this.filters&&this.filters.length)this.renderAdvancedWebGL(t);else{this._renderWebGL(t);var i=void 0,e=void 0;for(i=this._firstChild;i;i=e)e=i.nextChild,i.renderWebGL(t)}},i.prototype.renderAdvancedWebGL=function(t){t.flush();var i,e,s=this._filters,n=this._mask;if(s){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var r=0;r<s.length;r++)s[r].enabled&&this._enabledFilters.push(s[r]);this._enabledFilters.length&&t.filterManager.pushFilter(this,this._enabledFilters)}for(n&&t.maskManager.pushMask(this,this._mask),this._renderWebGL(t),i=this._firstChild;i;i=e)e=i.nextChild,i.renderWebGL(t);t.flush(),n&&t.maskManager.popMask(this,this._mask),s&&this._enabledFilters&&this._enabledFilters.length&&t.filterManager.popFilter()},i.prototype.renderCanvas=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable){var i,e;for(this._mask&&t.maskManager.pushMask(this._mask),this._renderCanvas(t),i=this._firstChild;i;i=e)e=i.nextChild,i.renderCanvas(t);this._mask&&t.maskManager.popMask(t)}}}(l.Container);var O=e(174),T=e(1),D=e.n(T),k=function(t){var i=Object(O.vb)(new l.Container),e=Object(T.useContext)(O.hb),s=Object(T.useContext)(O.qb),n=Object(T.useContext)(O.b),r=n.frameId,p=n.elapsed,d=Object(T.useReducer)((function(t,i){return[].concat(Object(h.a)(t),[i])}),[]),c=Object(o.a)(d,2),u=c[0],f=c[1],m=Object(T.useState)([]),_=Object(o.a)(m,2),C=_[0],v=_[1],x=Object(T.useReducer)((function(t,i){return t&&t.destroy(),i}),void 0),y=Object(o.a)(x,2),g=y[0],b=y[1],w=t.textures,S=t.config,P=t.emit,R=void 0===P||P;return Object(T.useEffect)((function(){var t=((null===w||void 0===w?void 0:w.split(/\s+/))||[]).map((function(t){return s[t]})).filter((function(t){return t instanceof l.Texture}));v([].concat(Object(h.a)(u),Object(h.a)(t)))}),[w,u,s]),Object(T.useEffect)((function(){b(new L(i,C,S))}),[i,C,S]),Object(T.useEffect)((function(){g&&(g.emit=R)}),[g,R]),Object(T.useEffect)((function(){g&&g.update(.001*p)}),[g,r,p]),D.a.createElement(O.hb.Provider,{value:Object(a.a)(Object(a.a)({},e),{},{setTexture:f})},D.a.createElement(O.N,Object.assign({item:i},t)))}}}]);
//# sourceMappingURL=89.718fb669.chunk.js.map