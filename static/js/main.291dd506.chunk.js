(this.webpackJsonpdataviz_future_frontiers=this.webpackJsonpdataviz_future_frontiers||[]).push([[0],{45:function(t,e,i){},46:function(t,e,i){},58:function(t,e,i){var s={"./en/index":29};function n(t){var e=a(t);return i(e)}function a(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id=58},59:function(t,e,i){"use strict";i.r(e);var s=i(2),n=i(30),a=i.n(n),o=(i(45),i(46),i(11)),r=i(14),h=i(5),c=i(9),u=i(31),l=i.n(u);function d(t){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(Object(h.a)().mark((function t(e){var i,s,n,a,o;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("/dataviz_future_frontiers","/data/").concat(e));case 2:return i=t.sent,s=i.body.getReader(),t.next=6,s.read();case 6:return n=t.sent,a=new TextDecoder("utf-8"),t.next=10,a.decode(n.value);case 10:return o=t.sent,t.abrupt("return",o);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(c.a)(Object(h.a)().mark((function t(e){var i;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l.a,t.next=3,d(e);case 3:return t.t1=t.sent,i=t.t0.parse.call(t.t0,t.t1),t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var p,x=i(6),y=["#9b5fe0","#16a4d8","#60dbe8","#8bd346","#efdf48","#f9a52c","#d64e12"],g=Object(s.createContext)({}),w=function(t){var e=t.children,i=Object(s.useState)(new Map),n=Object(o.a)(i,2),a=n[0],h=n[1],c=Object(s.useState)(null),u=Object(o.a)(c,2),l=u[0],d=u[1];return Object(s.useEffect)((function(){(function(t){return f.apply(this,arguments)})("frontiers.csv").then((function(t){for(var e=new Set,i=[],s=0,n=1;n<t.data.length;n++){var a=t.data[n],o=a[0],c=a[1];e.has(c)||s++;var u=a[2],l=a[3],d=a[4],v=a[5],f=a[6],p=a[7],x=a[8],g=a[9],w=a[10],b=a.slice(11,19),C={name:o,frontier:c,buzz:Number(u.replace(/,/g,"")),type:l,now:d,2025:v,2030:f,2040:p,2050:x,beyond:g,sources:w,urls:b,color:y[s%y.length]};c&&e.add(c),i.push(C)}for(var m=function(t,e){var s=i.filter((function(t){return t.frontier===e})),n=s.reduce((function(t,e){return e.buzz?t+e.buzz:t}),0);h((function(t){var i=new Map(t);return i.set(e,s.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{avgBuzz:n})}))),i}))},k=e.values(),P="";P=k.next().value;)m(0,P)}))}),[]),Object(s.useEffect)((function(){var t=a.values().next().value;t&&d({title:t[0].frontier,data:t,totalBuzz:t.reduce((function(t,e){return e.buzz?t+e.buzz:t}),0)})}),[a,d]),Object(x.jsx)(g.Provider,{value:{frontiers:a,currentFrontier:l,changeFrontier:function(t){var e=a.get(t);e&&(console.log("from frontier",e.reduce((function(t,e){return e.buzz?t+Number(e.buzz):t}),0)),d({title:t,data:e,totalBuzz:e.reduce((function(t,e){return e.buzz?t+e.buzz:t}),0)}))}},children:e})},b=i(17),C=i(3),m=i(4);i(8),i(25);!function(t){t.RED="RED",t.BLUE="BLUE"}(p||(p={}));var k,P=i.p+"static/media/aave.7e0cb55c.png",S=i.p+"static/media/algo.2147c30f.png",j=i.p+"static/media/atom.cfe887f0.png",M=i.p+"static/media/ankr.1c8b1fdd.png",z=i.p+"static/media/bch.1b5abb07.png",O=i.p+"static/media/btc.3383c108.png",D=i.p+"static/media/celo.2502ce7f.png",E=i.p+"static/media/doge.d2618921.png",B=i.p+"static/media/enj.cc029d9e.png",I=i.p+"static/media/eos.dc7f4468.png",q=i.p+"static/media/eth.971b61a2.png",T=i.p+"static/media/etc.0501bdeb.png",N=i.p+"static/media/knc.c75e25e5.png",R=i.p+"static/media/link.75364210.png",Y=i.p+"static/media/matic.ac27d862.png",A=i.p+"static/media/nu.729045e9.png",G=i.p+"static/media/sol.5c349913.png";i.p,i.p,i.p,i.p,i.p;!function(t){t.KOREAN="ko",t.ENGLISH="en"}(k||(k={}));var U=function(){function t(e,i,s,n){Object(C.a)(this,t),this.x=void 0,this.y=void 0,this.z=void 0,this.w=void 0,this.x=e||0,this.y=i||0,this.z=s||0,this.w=n||0}return Object(m.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z,this.w+e.w)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z,this.w-e.w)}},{key:"negative",value:function(){return new t(-this.x,-this.y,-this.z,-this.w)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}},{key:"clone",value:function(){return new t(this.x,this.y,this.z,this.w)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e,this.z*e,this.w*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w}},{key:"toArray",value:function(){return[this.x,this.y,this.z,this.w]}},{key:"toVector2",value:function(){return new X(this.x,this.y)}},{key:"toVector3",value:function(){return new Q(this.x,this.y,this.z)}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}}]),t}();U.One=new U(1,1,1,1),U.Zero=new U(0,0,0,0),U.UnitX=new U(1,0,0,0),U.UnitY=new U(0,1,0,0),U.UnitZ=new U(0,0,1,0),U.UnitW=new U(0,0,0,1);var Q=function(){function t(e,i,s){Object(C.a)(this,t),this.x=void 0,this.y=void 0,this.z=void 0,this.x=e||0,this.y=i||0,this.z=s||0}return Object(m.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)}},{key:"negative",value:function(){return new t(-this.x,-this.y,-this.z)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"clone",value:function(){return new t(this.x,this.y,this.z)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e,this.z*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}},{key:"toAffine",value:function(t){return new U(this.x,this.y,this.z,t?1:0)}},{key:"toArray",value:function(){return[this.x,this.y,this.z]}},{key:"toVector2",value:function(){return new X(this.x,this.y)}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}}]),t}();Q.One=new Q(1,1,1),Q.Zero=new Q(0,0,0),Q.UnitX=new Q(1,0,0),Q.UnitY=new Q(0,1,0),Q.UnitZ=new Q(0,0,1);var X=function(){function t(e,i){Object(C.a)(this,t),this.x=void 0,this.y=void 0,this.x=e||0,this.y=i||0}return Object(m.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"negative",value:function(){return new t(-this.x,-this.y)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"toAffine",value:function(t){return new Q(this.x,this.y,t?1:0)}},{key:"toArray",value:function(){return[this.x,this.y]}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}},{key:"toScreenPointVector",value:function(){return new t(Math.floor(this.x),Math.floor(this.y))}},{key:"squareDistanceTo",value:function(t){return Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2)}}]),t}();X.One=new X(1,1),X.Zero=new X(0,0),X.UnitX=new X(1,0),X.UnitY=new X(0,1);var W,V=function(t,e,i){return e.add(new X(t.width/i/2,t.height/i/2))},H=function(t,e,i,s,n){var a=t;return a>i&&(a=i),a<e&&(a=e),(a-e)/(i-e)*(n-s)+s},F=function(t,e,i,s,n){var a=t;return a>i&&(a=i),a<e&&(a=e),(1-(a-e)/(i-e))*(n-s)+s},L=function(t,e,i,s,n,a){t.beginPath(),t.moveTo(e.x,e.y),t.arcTo(i.x+n,i.y,i.x+n,i.y+a,s),t.arcTo(i.x+n,i.y+a,i.x,i.y+a,s),t.arcTo(i.x,i.y+a,i.x,i.y,s),t.arcTo(i.x,i.y,i.x+n,i.y,s),t.closePath()},K=i(35),Z=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X.UnitX,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X.UnitY;Object(C.a)(this,t),this.Cols=void 0,this.Cols=[e,i]}return Object(m.a)(t,[{key:"transpose",value:function(){return new t(new X(this.Cols[0].x,this.Cols[1].x),new X(this.Cols[0].y,this.Cols[1].y))}},{key:"add",value:function(e){return new t(this.Cols[0].add(e.Cols[0]),this.Cols[1].add(e.Cols[1]))}},{key:"subtract",value:function(e){return new t(this.Cols[0].subtract(e.Cols[0]),this.Cols[1].subtract(e.Cols[1]))}},{key:"scalarBy",value:function(e){return new t(this.Cols[0].scalarBy(e),this.Cols[1].scalarBy(e))}},{key:"negative",value:function(){return new t(this.Cols[0].negative(),this.Cols[1].negative())}},{key:"determinant",value:function(){return this.Cols[0].x*this.Cols[1].y-this.Cols[0].y-this.Cols[1].x}},{key:"multiplyMatrix",value:function(e){var i=this.transpose();return new t(new X(i.Cols[0].dot(e.Cols[0]),i.Cols[1].dot(e.Cols[0])),new X(i.Cols[0].dot(e.Cols[1]),i.Cols[1].dot(e.Cols[1])))}},{key:"multiplyVector",value:function(t){var e=this.transpose();return new X(e.Cols[0].dot(t),e.Cols[1].dot(t))}}]),t}(),_=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.UnitX,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Q.UnitY,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Q.UnitZ;Object(C.a)(this,t),this.Cols=void 0,this.Cols=[e,i,s]}return Object(m.a)(t,[{key:"transpose",value:function(){return new t(new Q(this.Cols[0].x,this.Cols[1].x,this.Cols[2].x),new Q(this.Cols[0].y,this.Cols[1].y,this.Cols[2].y),new Q(this.Cols[0].z,this.Cols[1].z,this.Cols[2].z))}},{key:"add",value:function(e){return new t(this.Cols[0].add(e.Cols[0]),this.Cols[1].add(e.Cols[1]),this.Cols[2].add(e.Cols[2]))}},{key:"subtract",value:function(e){return new t(this.Cols[0].subtract(e.Cols[0]),this.Cols[1].subtract(e.Cols[1]),this.Cols[2].subtract(e.Cols[2]))}},{key:"scalarBy",value:function(e){return new t(this.Cols[0].scalarBy(e),this.Cols[1].scalarBy(e),this.Cols[2].scalarBy(e))}},{key:"negative",value:function(){return new t(this.Cols[0].negative(),this.Cols[1].negative(),this.Cols[2].negative())}},{key:"determinant",value:function(){}},{key:"multiplyMatrix",value:function(e){var i=this.transpose();return new t(new Q(i.Cols[0].dot(e.Cols[0]),i.Cols[1].dot(e.Cols[0]),i.Cols[2].dot(e.Cols[0])),new Q(i.Cols[0].dot(e.Cols[1]),i.Cols[1].dot(e.Cols[1]),i.Cols[2].dot(e.Cols[1])),new Q(i.Cols[0].dot(e.Cols[2]),i.Cols[1].dot(e.Cols[2]),i.Cols[2].dot(e.Cols[2])))}},{key:"multiplyVector",value:function(t){var e=this.transpose();return new Q(e.Cols[0].dot(t),e.Cols[1].dot(t),e.Cols[2].dot(t))}},{key:"toMatrix2x2",value:function(){return new Z(this.Cols[0].toVector2(),this.Cols[1].toVector2())}}]),t}(),J=function(){function t(e){Object(C.a)(this,t),this.degree=void 0,this.degree=e}return Object(m.a)(t,[{key:"clamp",value:function(){return this.degree=t.getClampedValue(this.degree),this.degree}},{key:"toRadian",value:function(){return this.clamp(),this.degree*Math.PI/180}},{key:"update",value:function(e){this.degree=t.getClampedValue(e)}},{key:"getRotateMatrix",value:function(){var t=Math.cos(this.toRadian()),e=Math.sin(this.toRadian());return new Z(new X(t,e),new X(-e,t))}},{key:"getRotateAffineMatrix",value:function(){var t=Math.cos(this.toRadian()),e=Math.sin(this.toRadian());return new _(new X(t,e).toAffine(!1),new X(-e,t).toAffine(!1),void 0)}}],[{key:"getClampedValue",value:function(t){var e=t%360;return e<0&&(e+=360),e}}]),t}();!function(t){t.IN="IN",t.OUT="OUT"}(W||(W={}));var $=function(){function t(e,i,s,n,a,o,r,h){var c=this;Object(C.a)(this,t),this.canvas=void 0,this.ctx=void 0,this.canvasEdgePosition=void 0,this.progress=void 0,this.direction=void 0,this.imageElement=void 0,this.planetRotator=void 0,this.edgeRotator=void 0,this.planet=void 0,this.id=void 0,this.opacity=void 0,this.position=void 0,this.startPosition=void 0,this.endPosition=void 0,this.progressIncreaseDelta=void 0,this.isDestinationReached=void 0,this.dpr=void 0,this.isDestinationReached=!1,this.id=r,this.dpr=h,this.progress=0,this.opacity=0,this.canvasEdgePosition=i,this.canvas=e,this.planet=a,this.progressIncreaseDelta=1+3*this.planet.speed,this.ctx=e.getContext("2d"),this.planetRotator=s,this.edgeRotator=n,this.direction=o;var u=new Image;this.imageElement=u,u.src="data:image/png;base64,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",this.position=this.direction===W.OUT?a.position:i,this.direction===W.OUT?(this.startPosition=a.position,this.endPosition=i):(this.startPosition=i,this.endPosition=a.position),u.onload=function(){c.draw()}}return Object(m.a)(t,[{key:"drawTrajectory",value:function(t,e){var i=this.opacity;i>.5&&(i=.5);var s=this.direction===W.IN?this.position:this.position.add(new X(Math.cos(t),Math.sin(t)).scalarBy(-80)),n=this.direction===W.IN?this.position.add(new X(Math.cos(t),Math.sin(t)).scalarBy(80)):this.position,a=V(this.canvas,s,this.dpr),o=V(this.canvas,n,this.dpr);this.isDestinationReached&&(a=V(this.canvas,e,this.dpr)),Math.sqrt(n.squareDistanceTo(e))<10&&this.planet.removeSpaceShip(this.id),this.ctx.save();var r=this.ctx.createLinearGradient(o.x,o.y,a.x,a.y);r.addColorStop(this.direction===W.IN?0:1,"rgba(255, 255, 255, 0)"),this.ctx.beginPath(),this.ctx.moveTo(a.x,a.y),this.ctx.lineTo(o.x,o.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore()}},{key:"drawSpaceshipImage",value:function(t,e){e.squareDistanceTo(this.position)<10&&(this.isDestinationReached=!0);var i=V(this.canvas,this.direction===W.IN?this.canvasEdgePosition:this.planet.position,this.dpr),s=this.imageElement.width/25,n=this.imageElement.height/25,a=s/2,o=n/2;this.ctx.save(),this.direction===W.IN?(this.ctx.translate(-this.progress*Math.cos(t),-this.progress*Math.sin(t)),this.position=this.canvasEdgePosition.subtract(new X(this.progress*Math.cos(t),this.progress*Math.sin(t)))):(this.ctx.translate(this.progress*Math.cos(t),this.progress*Math.sin(t)),this.ctx.fillStyle="yellow",this.position=this.planet.position.add(new X(this.progress*Math.cos(t),this.progress*Math.sin(t)))),this.isDestinationReached||(this.opacity<1&&(this.opacity+=.02),this.ctx.translate(a+i.x,o+i.y),this.ctx.translate(-a,-o),this.direction===W.IN?this.ctx.rotate(-(-Math.PI/2-t)+Math.PI):this.ctx.rotate(-(-Math.PI/2-t)),this.ctx.globalAlpha=this.opacity,this.ctx.drawImage(this.imageElement,-a,-o,s,n)),this.ctx.restore()}},{key:"draw",value:function(){this.progress+=this.progressIncreaseDelta;var t=this.canvasEdgePosition.x-this.planet.position.x,e=this.canvasEdgePosition.y-this.planet.position.y,i=Math.atan2(e,t),s=this.direction===W.OUT?this.canvasEdgePosition:this.planet.position;this.drawTrajectory(i,s),this.drawSpaceshipImage(i,s)}},{key:"setDpr",value:function(t){this.dpr=t}}]),t}(),tt=function(t,e,i,s,n,a){for(var o=e.split(" "),r="",h="",c=[],u=0;u<o.length;u++){h+="".concat(o[u]," "),t.measureText(h).width>n&&u>0?(c.push([r,i,s]),s+=a,r="".concat(o[u]," "),h="".concat(o[u]," ")):r+="".concat(o[u]," "),u===o.length-1&&c.push([r,i,s])}return c},et=function(){function t(e,i,s,n,a,o,r){Object(C.a)(this,t),this.canvas=void 0,this.color="#FFFF4D",this.brightness=0,this.position=new X(0,0),this.MIN_BRIGHTNESS=2,this.MAX_BRIGHTNESS=20,this.foreColor=void 0,this.backColor=void 0,this.name=void 0,this.time=void 0,this.dpr=void 0,this.canvasDrawPosition=void 0,this.totalBuzz=void 0,this.name=i,this.totalBuzz=o,this.canvas=e,this.foreColor=n,this.backColor=a,this.name=i,this.time=s,this.dpr=r,this.canvasDrawPosition=V(this.canvas,this.position,this.dpr),this.setBrightness(0)}return Object(m.a)(t,[{key:"setBrightness",value:function(t){this.brightness=H(t,-1,1,this.MIN_BRIGHTNESS,this.MAX_BRIGHTNESS)}},{key:"drawBrightnessInner",value:function(e,i){i.save(),i.beginPath(),i.arc(e.x,e.y,t.radius+this.brightness/2,0,2*Math.PI,!1),i.fillStyle=this.foreColor,i.globalAlpha=.4,i.fill(),i.restore()}},{key:"update",value:function(t){t.time&&(this.time=t.time),t.name&&(this.name=t.name),t.totalBuzz&&(this.totalBuzz=t.totalBuzz)}},{key:"drawBrightnessOuter",value:function(e,i){i.save(),i.beginPath(),i.arc(e.x,e.y,t.radius+this.brightness,0,2*Math.PI,!1),i.fillStyle=this.foreColor,i.globalAlpha=.2,i.fill(),i.restore()}},{key:"drawSun",value:function(e,i){i.save(),i.beginPath(),i.arc(e.x,e.y,t.radius,0,2*Math.PI,!1),i.fillStyle=this.backColor,i.fill(),i.restore()}},{key:"draw",value:function(){var t=this.canvas.getContext("2d"),e=V(this.canvas,this.position,this.dpr);this.canvasDrawPosition=e,this.drawBrightnessInner(e,t),this.drawBrightnessOuter(e,t),this.drawSun(e,t),t.textAlign="center",t.textBaseline="middle",t.font="35px Righteous";var i=tt(t,this.name,e.x,e.y,200,35),s=0;i.forEach((function(e,i){t.fillText(String(e[0]).trim(),e[1],e[2]),s=e[2]})),t.save(),t.font="24px Righteous",t.fillText(this.time,e.x,s+40),t.stroke()}},{key:"setDpr",value:function(t){this.dpr=t}}]),t}();et.radius=130;var it,st=i(36),nt=i.n(st),at=function(){function t(e,i,s,n,a,o,r,h,c,u){Object(C.a)(this,t),this.name=void 0,this.canvas=void 0,this.rotator=void 0,this.radius=void 0,this.position=void 0,this.speed=void 0,this.distanceFromSun=void 0,this.spaceShips=void 0,this.ctx=void 0,this.greenness=null,this.spaceShipDirection=W.IN,this.foreColor=void 0,this.backColor=void 0,this.isPopupOpen=!1,this.content=void 0,this.canvasDrawPosition=void 0,this.dpr=void 0,this.maxBuzzIndex=void 0,this.minBuzzIndex=void 0,this.name=s,this.maxBuzzIndex=r,this.minBuzzIndex=h,this.content=n,this.foreColor=a,this.backColor=o,this.canvas=e,this.rotator=new J(360*c),this.radius=i,this.spaceShips=[],this.ctx=this.canvas.getContext("2d"),this.distanceFromSun=300,this.speed=.05,this.dpr=u;var l=new nt.a;console.log(l.analyze(this.content).score,this.content);var d=new X(this.distanceFromSun,0).toAffine(!0),v=this.rotator.getRotateAffineMatrix();this.position=v.multiplyVector(d).toVector2(),this.canvasDrawPosition=V(this.canvas,this.position,this.dpr)}return Object(m.a)(t,[{key:"update",value:function(t){}},{key:"setSpaceshipInformation",value:function(t){var e=0,i=W.IN,s=2e4;return t>=70?(e=3,i=W.IN,s=1e3):60<=t&&t<70?(e=1,i=W.IN,s=1e4):40<=t&&t<60?(e=0,i=W.OUT,s=2e4):30<=t&&t<40?(e=1,i=W.OUT,s=1e4):(e=3,i=W.OUT,s=1e3),{spaceShipCount:e,spaceShipDirection:i,spaceShipRegenerationInterval:s}}},{key:"calcSpeed",value:function(t){return H(t,0,1,.02,.3)}},{key:"calcDistanceFromSun",value:function(t){var e=et.radius+30+this.radius,i=(this.canvas.height+260)/this.dpr/2,s=F(t,-.001,.1,85*Math.PI/180,89.9*Math.PI/180),n=Math.tan(s);return H(n,Math.tan(85*Math.PI/180),Math.tan(89.9*Math.PI/180),e,i)}},{key:"getCanvasOuterTrajectoryPoint",value:function(){var t=this.rotator.degree+20-3,e=this.rotator.degree+20+3,i=new J(Math.random()*(e-t)+t),s=0;s=i.degree<=90&&i.degree>=0?0:i.degree<=180?1:i.degree<=270?3:2,i.clamp();var n=100;if(Math.abs(Math.tan(i.toRadian()))>1){var a=s<=1?(this.canvas.height+n)/2:-(this.canvas.height+n)/2,o=a/Math.tan(i.toRadian());return{edgePosition:new X(o,a),edgeRotator:i}}var r=s%2===0?(this.canvas.width+n)/2:-(this.canvas.width+n)/2,h=Math.tan(i.toRadian())*r;return{edgePosition:new X(r,h),edgeRotator:i}}},{key:"setSpaceShip",value:function(){var t=this.getCanvasOuterTrajectoryPoint(),e=t.edgePosition,i=t.edgeRotator;this.spaceShips.length<3&&this.spaceShips.push(new $(this.canvas,e,this.rotator,i,this,this.spaceShipDirection,Object(K.a)(7),this.dpr))}},{key:"drawSpaceShips",value:function(){var t,e=Object(b.a)(this.spaceShips);try{for(e.s();!(t=e.n()).done;){t.value.draw()}}catch(i){e.e(i)}finally{e.f()}}},{key:"removeSpaceShip",value:function(t){this.spaceShips=this.spaceShips.filter((function(e){return e.id!==t}))}},{key:"setIsPopupOpen",value:function(t){this.isPopupOpen=t}},{key:"drawTrajectory",value:function(){this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.canvas.width/this.dpr/2,this.canvas.height/this.dpr/2,this.distanceFromSun,0,2*Math.PI,!1),this.ctx.strokeStyle=this.foreColor,this.ctx.globalAlpha=.3,this.ctx.lineWidth=.5,this.ctx.stroke(),this.ctx.restore()}},{key:"drawOverlay",value:function(t){this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(t.x,t.y,this.radius,0,2*Math.PI),this.ctx.fillStyle="rgba(255, 255, 255, ".concat(F(.6,0,1,0,.3),")"),this.ctx.fill(),this.ctx.closePath(),this.ctx.restore()}},{key:"draw",value:function(){var t=this;this.drawSpaceShips(),this.rotator.degree+=this.speed;var e=new X(this.distanceFromSun,0).toAffine(!0),i=this.rotator.getRotateAffineMatrix();this.position=i.multiplyVector(e).toVector2(),this.canvasDrawPosition=V(this.canvas,this.position,this.dpr),this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.canvasDrawPosition.x,this.canvasDrawPosition.y,this.radius,0,2*Math.PI,!1),this.ctx.fillStyle=this.foreColor,this.ctx.fill(),this.ctx.closePath(),this.ctx.restore(),this.drawOverlay(this.canvasDrawPosition),this.ctx.save(),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.font="18px Righteous",tt(this.ctx,this.name,this.canvasDrawPosition.x,this.canvasDrawPosition.y,this.radius,20).forEach((function(e){t.ctx.fillText(e[0],e[1],e[2])})),this.ctx.restore()}},{key:"setDpr",value:function(t){this.dpr=t,this.spaceShips.forEach((function(e){return e.setDpr(t)}))}}]),t}(),ot=function(){function t(e){var i=this;Object(C.a)(this,t),this.fps=24,this.element=void 0,this.ctx=void 0,this.width=0,this.height=0,this.loop=0,this.sun=void 0,this.language=void 0,this.planets=[],this.requestAnimationFrameId=void 0,this.MIN_PLANET_SIZE=20,this.MAX_PLANET_SIZE=80,this.frameCount=0,this.backgroundLoopMax=1e3,this.dpr=1,this.hoveredPlanet=null,this.isPopupOpen=!1,this.isSunHovered=!1,this.render=function(){i.frameCount++,i.loop++,i.frameCount===i.fps+1&&(i.frameCount=0),i.loop===i.backgroundLoopMax+1&&(i.loop=0),i.clear(),i.drawScene(),setTimeout((function(){requestAnimationFrame(i.render.bind(i))}),1e3/i.fps)},this.language=k.KOREAN,this.element=e,this.ctx=e.getContext("2d"),this.sun=null,this.render(),this.requestAnimationFrameId=requestAnimationFrame(this.render),this.planets=[],this.initialize()}return Object(m.a)(t,[{key:"changeLanguage",value:function(t){this.language=t}},{key:"onMouseMove",value:function(t){var e=!1;if(this.sun){var i=V(this.element,this.sun.position,this.dpr).squareDistanceTo(new X(t.clientX,t.clientY));Math.sqrt(i)<et.radius?this.isSunHovered=!0:this.isSunHovered=!1}var s,n=Object(b.a)(this.planets);try{for(n.s();!(s=n.n()).done;){var a=s.value,o=V(this.element,a.position,this.dpr).squareDistanceTo(new X(t.clientX,t.clientY));Math.sqrt(o)<a.radius?(a.setIsPopupOpen(!0),e=!0,this.hoveredPlanet=a):a.setIsPopupOpen(!1)}}catch(r){n.e(r)}finally{n.f()}this.isPopupOpen=!!e,this.isSunHovered&&(this.hoveredPlanet=null,this.isPopupOpen=!0)}},{key:"drawPopup",value:function(t,e){var i=43,s=e instanceof at?5:4,n=0,a=0;a=t.x>this.element.width/this.dpr/2&&t.y<this.element.height/this.dpr/2?0:t.x<this.element.width/this.dpr/2&&t.y<this.element.height/this.dpr/2?1:t.x<this.element.width/this.dpr/2&&t.y>this.element.height/this.dpr/2?3:2;var o=e instanceof et,r=10,h=210,c=35+s*i,u=a%2===0?h:-210,l=2===(2&a)?-c:c,d=new X(t.x,t.y);1===a?d=d.add(new X(-210,0)):3===a?d=d.add(new X(-210,-c)):2===a&&(d=d.add(new X(0,-c))),this.ctx.save(),L(this.ctx,a%2===0?t.add(new X(r,0)):t.subtract(new X(r,0)),t,r,u,l),this.ctx.fillStyle=e.foreColor,this.ctx.fill(),this.ctx.textAlign="start",this.ctx.textBaseline="top",this.ctx.fillStyle="black",this.ctx.font="bold 20px Anek Devanagari",this.ctx.fillStyle="white";var v=d.y+8+5;this.ctx.fillText(e.name,d.x+8,v),this.ctx.textAlign="start",this.ctx.font="normal 10px Noto Sans KR";var f=v+20+2;this.ctx.fillStyle="black",this.ctx.save(),this.ctx.fillStyle=n%2===0?"#D9D9D9":"#BCBCBC",n++,this.ctx.fillRect(d.x,f,h,i),this.ctx.restore();var p=f;o||(p+=i,this.ctx.save(),this.ctx.fillStyle=n%2===0?"#D9D9D9":"#BCBCBC",n++,this.ctx.fillRect(d.x,p,h,i),this.ctx.restore(),this.ctx.font="normal 10px Noto Sans KR",this.ctx.fillText(this.language===k.ENGLISH?"Correlation to BTC (Distance from Sun)":"BTC\uc640\uc758 \uac00\uaca9 \ubcc0\ub3d9 \uc720\uc0ac\uc131 (\ud0dc\uc591\uacfc\uc758 \uac70\ub9ac)",d.x+8,p+8),this.ctx.font="bold 14px Noto Sans KR");var x=p+i;this.ctx.save(),this.ctx.fillStyle=n%2===0?"#D9D9D9":"#BCBCBC",n++,this.ctx.fillRect(d.x,x,h,i),this.ctx.restore(),this.ctx.font="normal 10px Noto Sans KR";var y=this.language===k.ENGLISH?"Relative Strength Index (Spaceship in/out)":"RSI \uacfc\ub9e4\uc218 \uc815\ub3c4 (\uc6b0\uc8fc\uc120 \uc720\uc785/\ucd9c\uc785)";this.ctx.fillText(o?y.split("(")[0]:y,d.x+8,x+8);var g=x+i;this.ctx.save(),this.ctx.fillStyle=n%2===0?"#D9D9D9":"#BCBCBC",n++,this.ctx.fillRect(d.x,g,h,i),this.ctx.restore(),this.ctx.font="normal 10px Noto Sans KR";var w=this.language===k.ENGLISH?"Money Flow Index (Planet Ice Age)":"MFI \uacfc\ub9e4\uc218 \uc815\ub3c4 (\ud589\uc131 \ube59\ud558\uae30 \uc815\ub3c4)";this.ctx.fillText(o?w.split("(")[0]:w,d.x+8,g+8),L(this.ctx,a%2===0?t.add(new X(r,0)):t.subtract(new X(r,0)),t,r,u,l),this.ctx.clip();var b=g+i;this.ctx.save(),this.ctx.fillStyle=n%2===0?"#D9D9D9":"#BCBCBC",n++,this.ctx.fillRect(d.x,b,h,i),this.ctx.restore(),this.ctx.font="normal 10px Noto Sans KR";var C=this.language===k.ENGLISH?"MA Increase Rate (Orbit Speed)":"\uac00\uaca9 \uc774\ub3d9\ud3c9\uade0\uc120 \uc99d\uac00\uc728 (\ud589\uc131 \uacf5\uc804\uc18d\ub3c4)";this.ctx.fillText(o?C.split("(")[0]:C,d.x+8,b+8),this.ctx.restore()}},{key:"setSun",value:function(t,e,i,s,n){this.sun?this.sun.update({name:t,time:s,totalBuzz:n}):this.sun=new et(this.element,t,s,e,i,n,this.dpr)}},{key:"setPlanet",value:function(t,e){var i=this;this.planets=t.map((function(s,n){var a=s.name,o=(s.buzz,s.type,s.sources,s.urls,t.map((function(t){return t.buzz})).sort((function(t,e){return e-t}))[0]),r=t.map((function(t){return t.buzz})).sort((function(t,e){return t-e}))[0],h=s[e];return new at(i.element,50,a,h,s.color,"#aaa",o,r,n/t.length,i.dpr)}))}},{key:"addPlanet",value:function(t,e,i,s,n,a,o,r,h,c,u,l){}},{key:"initialize",value:function(){this.onMouseMove=this.onMouseMove.bind(this),this.element.addEventListener("mousemove",this.onMouseMove)}},{key:"setWidth",value:function(t,e){this.width=t,this.element.width=e?t*e:t,this.element.style.width="".concat(t,"px")}},{key:"setHeight",value:function(t,e){this.height=t,this.element.height=e?t*e:t,this.element.style.height="".concat(t,"px")}},{key:"setSize",value:function(t,e,i){this.setWidth(t,i),this.setHeight(e,i),this.dpr=i||this.dpr}},{key:"scale",value:function(t,e){var i,s=this;this.ctx.scale(t,e),null===(i=this.sun)||void 0===i||i.setDpr(this.dpr),this.planets.forEach((function(t){return t.setDpr(s.dpr)}))}},{key:"drawBackground",value:function(){this.ctx.save();var t=this.ctx.createLinearGradient(0,0,this.width,this.height);t.addColorStop(0,"rgba(0, 0, 0, 0)"),t.addColorStop(H(this.loop,0,this.backgroundLoopMax,0,1),"rgba(0, 15, 45, ".concat(F(Math.abs(this.loop-this.backgroundLoopMax/2),0,this.backgroundLoopMax/2,0,1),")")),t.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.restore()}},{key:"drawScene",value:function(){this.drawGalaxyComponents(),this.isPopupOpen&&(this.hoveredPlanet?this.drawPopup(this.hoveredPlanet.canvasDrawPosition,this.hoveredPlanet):this.sun&&this.drawPopup(this.sun.canvasDrawPosition,this.sun))}},{key:"drawDummy",value:function(){}},{key:"drawGalaxyComponents",value:function(){this.sun&&this.sun.draw();var t,e=Object(b.a)(this.planets);try{for(e.s();!(t=e.n()).done;){t.value.drawTrajectory()}}catch(n){e.e(n)}finally{e.f()}var i,s=Object(b.a)(this.planets);try{for(s.s();!(i=s.n()).done;){i.value.draw()}}catch(n){s.e(n)}finally{s.f()}}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}}]),t}();!function(t){t._2025="2025",t._2030="2030",t._2035="2035",t._2040="2040",t.beyond="beyond"}(it||(it={}));var rt=function(){var t=Object(s.useRef)(null),e=Object(s.useRef)(null),i=Object(s.useRef)(null),n=Object(s.useContext)(g),a=n.frontiers,r=n.changeFrontier,h=n.currentFrontier,c=Object(s.useState)(it._2025),u=Object(o.a)(c,2),l=u[0],d=u[1];return Object(s.useEffect)((function(){var t=function(t){var e=t.deltaY<0,i=Math.abs(t.deltaY)>20;e&&i?l===it._2025?d(it._2030):l===it._2030?d(it._2035):l===it._2035?d(it._2040):l===it._2040&&d(it.beyond):!e&&i&&(l===it.beyond?d(it._2040):l===it._2040?d(it._2035):l===it._2035?d(it._2030):l===it._2030&&d(it._2025))};return window.addEventListener("wheel",t),function(){window.removeEventListener("wheel",t)}}),[l]),Object(s.useEffect)((function(){i.current&&(i.current.sun&&i.current.sun.update({time:l}))}),[l]),Object(s.useEffect)((function(){if(!t.current)return function(){};if(!i.current){var e=new ot(t.current);i.current=e}}),[a]),Object(s.useEffect)((function(){i.current&&h&&(i.current.setSun(h.title,"#555","#fff",it._2025,h.totalBuzz),i.current.setPlanet(h.data,it._2025))}),[h]),Object(s.useEffect)((function(){var t=function(){if(e.current&&i.current){var t=e.current.getBoundingClientRect(),s=window.devicePixelRatio;i.current.setSize(t.width,t.height,s),i.current.scale(s,s),i.current.drawScene()}};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),Object(x.jsxs)("div",{style:{width:"100%",height:"100%",position:"fixed"},ref:e,children:[Object(x.jsx)("div",{style:{position:"absolute",width:"100%",display:"flex",justifyContent:"space-between",zIndex:5},children:a&&Array.from(a.keys()).map((function(t){return Object(x.jsx)("button",{onClick:function(){r(t)},children:t},t)}))}),Object(x.jsx)("canvas",{ref:t})]})};var ht=function(){return Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh",fontFamily:"Righteous"},children:Object(x.jsx)(w,{children:Object(x.jsx)(rt,{})})})},ct=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,60)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,o=e.getTTFB;i(t),s(t),n(t),a(t),o(t)}))};a.a.createRoot(document.getElementById("root")).render(Object(x.jsx)(ht,{})),ct()}},[[59,1,2]]]);
//# sourceMappingURL=main.291dd506.chunk.js.map