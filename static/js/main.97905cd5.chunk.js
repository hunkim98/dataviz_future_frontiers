(this.webpackJsonpdataviz_future_frontiers=this.webpackJsonpdataviz_future_frontiers||[]).push([[0],{50:function(t,e,i){},51:function(t,e,i){},75:function(t,e,i){var n={"./en/index":34};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id=75},76:function(t,e,i){"use strict";i.r(e);var n=i(1),s=i(35),a=i.n(s),o=(i(50),i(51),i(10)),r=i(14),h=i(5),c=i(9),u=i(36),l=i.n(u);function d(t){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(Object(h.a)().mark((function t(e){var i,n,s,a,o;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("/dataviz_future_frontiers","/data/").concat(e));case 2:return i=t.sent,n=i.body.getReader(),t.next=6,n.read();case 6:return s=t.sent,a=new TextDecoder("utf-8"),t.next=10,a.decode(s.value);case 10:return o=t.sent,t.abrupt("return",o);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(c.a)(Object(h.a)().mark((function t(e){var i;return Object(h.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=l.a,t.next=3,d(e);case 3:return t.t1=t.sent,i=t.t0.parse.call(t.t0,t.t1),t.abrupt("return",i);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var p,x=i(6),y=["rgb(155,95,224)","rgb(22,164,216)","rgb(96,219,232)","rgb(139,211,70)","rgb(239,223,72)","rgb(249,165,44)","rgb(214,78,18)"],g=Object(n.createContext)({}),w=function(t){var e=t.children,i=Object(n.useState)(new Map),s=Object(o.a)(i,2),a=s[0],h=s[1],c=Object(n.useState)(),u=Object(o.a)(c,2),l=u[0],d=u[1],v=Object(n.useState)(),p=Object(o.a)(v,2),w=p[0],b=p[1],m=Object(n.useState)(null),C=Object(o.a)(m,2),z=C[0],k=C[1];return Object(n.useEffect)((function(){(function(t){return f.apply(this,arguments)})("frontiers.csv").then((function(t){for(var e=new Set,i=[],n=0,s=1;s<t.data.length;s++){var a=t.data[s],o=a[0],c=a[1];e.has(c)||n++;var u=a[2],l=a[3],v=a[4],f=a[5],p=a[6],x=a[7],g=a[8],w=a[9],m=a[10],C=a.slice(11,19),z={name:o,frontier:c,buzz:Number(u.replace(/,/g,"")),type:l,now:v,2025:f,2030:p,2040:x,2050:g,beyond:w,sources:m,urls:C,color:y[n%y.length]};c&&e.add(c),i.push(z)}for(var k=0,P=Number.MAX_VALUE,j=0,M=Number.MAX_VALUE,O=function(t,e){var n=i.filter((function(t){return t.frontier===e})),s=n.reduce((function(t,e){return e.buzz?t+e.buzz/n.length:t}),0),a=n.reduce((function(t,e){return e.buzz?t+e.buzz:t}),0);s>k&&(k=s),s<P&&(P=s),a>j&&(j=a),a<M&&(M=a),h((function(t){var i=new Map(t);return i.set(e,n.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{avgBuzz:s})}))),i}))},S=e.values(),B="";B=S.next().value;)O(0,B);b({min:M,max:j}),d({min:P,max:k})}))}),[]),Object(n.useEffect)((function(){var t=a.values().next().value;t&&k({title:t[0].frontier,data:t,avgBuzz:t.reduce((function(e,i){return i.buzz?e+i.buzz/t.length:e}),0),totalBuzz:t.reduce((function(t,e){return e.buzz?t+e.buzz:t}),0),color:t[0].color})}),[a,k]),Object(x.jsx)(g.Provider,{value:{frontiers:a,currentFrontier:z,changeFrontier:function(t){var e=a.get(t);e&&(console.log("data",e[0].color),k({title:t,data:e,avgBuzz:e.reduce((function(t,i){return i.buzz?t+i.buzz/e.length:t}),0),totalBuzz:e.reduce((function(t,e){return e.buzz?t+e.buzz:t}),0),color:e[0].color}))},minMaxAvgBuzz:l,minMaxTotalBuzz:w},children:e})},b=i(37),m=i.n(b),C=i(18),z=i(3),k=i(4);i(8),i(27);!function(t){t.RED="RED",t.BLUE="BLUE"}(p||(p={}));var P,j=i.p+"static/media/aave.7e0cb55c.png",M=i.p+"static/media/algo.2147c30f.png",O=i.p+"static/media/atom.cfe887f0.png",S=i.p+"static/media/ankr.1c8b1fdd.png",B=i.p+"static/media/bch.1b5abb07.png",E=i.p+"static/media/btc.3383c108.png",I=i.p+"static/media/celo.2502ce7f.png",D=i.p+"static/media/doge.d2618921.png",q=i.p+"static/media/enj.cc029d9e.png",T=i.p+"static/media/eos.dc7f4468.png",A=i.p+"static/media/eth.971b61a2.png",Y=i.p+"static/media/etc.0501bdeb.png",N=i.p+"static/media/knc.c75e25e5.png",Q=i.p+"static/media/link.75364210.png",R=i.p+"static/media/matic.ac27d862.png",U=i.p+"static/media/nu.729045e9.png",G=i.p+"static/media/sol.5c349913.png";i.p,i.p,i.p,i.p,i.p;!function(t){t.KOREAN="ko",t.ENGLISH="en"}(P||(P={}));var X=function(){function t(e,i,n,s){Object(z.a)(this,t),this.x=void 0,this.y=void 0,this.z=void 0,this.w=void 0,this.x=e||0,this.y=i||0,this.z=n||0,this.w=s||0}return Object(k.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z,this.w+e.w)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z,this.w-e.w)}},{key:"negative",value:function(){return new t(-this.x,-this.y,-this.z,-this.w)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}},{key:"clone",value:function(){return new t(this.x,this.y,this.z,this.w)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e,this.z*e,this.w*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w}},{key:"toArray",value:function(){return[this.x,this.y,this.z,this.w]}},{key:"toVector2",value:function(){return new V(this.x,this.y)}},{key:"toVector3",value:function(){return new W(this.x,this.y,this.z)}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}}]),t}();X.One=new X(1,1,1,1),X.Zero=new X(0,0,0,0),X.UnitX=new X(1,0,0,0),X.UnitY=new X(0,1,0,0),X.UnitZ=new X(0,0,1,0),X.UnitW=new X(0,0,0,1);var W=function(){function t(e,i,n){Object(z.a)(this,t),this.x=void 0,this.y=void 0,this.z=void 0,this.x=e||0,this.y=i||0,this.z=n||0}return Object(k.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)}},{key:"negative",value:function(){return new t(-this.x,-this.y,-this.z)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"clone",value:function(){return new t(this.x,this.y,this.z)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e,this.z*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}},{key:"toAffine",value:function(t){return new X(this.x,this.y,this.z,t?1:0)}},{key:"toArray",value:function(){return[this.x,this.y,this.z]}},{key:"toVector2",value:function(){return new V(this.x,this.y)}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}}]),t}();W.One=new W(1,1,1),W.Zero=new W(0,0,0),W.UnitX=new W(1,0,0),W.UnitY=new W(0,1,0),W.UnitZ=new W(0,0,1);var V=function(){function t(e,i){Object(z.a)(this,t),this.x=void 0,this.y=void 0,this.x=e||0,this.y=i||0}return Object(k.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"negative",value:function(){return new t(-this.x,-this.y)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"toAffine",value:function(t){return new W(this.x,this.y,t?1:0)}},{key:"toArray",value:function(){return[this.x,this.y]}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}},{key:"toScreenPointVector",value:function(){return new t(Math.floor(this.x),Math.floor(this.y))}},{key:"squareDistanceTo",value:function(t){return Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2)}}]),t}();V.One=new V(1,1),V.Zero=new V(0,0),V.UnitX=new V(1,0),V.UnitY=new V(0,1);var F,H=function(t,e,i){return e.add(new V(t.width/i/2,t.height/i/2))},L=function(t,e,i,n,s){var a=t;return a>i&&(a=i),a<e&&(a=e),(a-e)/(i-e)*(s-n)+n},Z=function(t,e,i,n,s){var a=t;return a>i&&(a=i),a<e&&(a=e),(1-(a-e)/(i-e))*(s-n)+n},K=function(t,e,i,n,s,a){for(var o=e.split(" "),r="",h="",c=[],u=0;u<o.length;u++){h+="".concat(o[u]," "),t.measureText(h).width>s&&u>0?(c.push([r,i,n]),n+=a,r="".concat(o[u]," "),h="".concat(o[u]," ")):r+="".concat(o[u]," "),u===o.length-1&&c.push([r,i,n])}return c},_=i(41),J=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.UnitX,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:V.UnitY;Object(z.a)(this,t),this.Cols=void 0,this.Cols=[e,i]}return Object(k.a)(t,[{key:"transpose",value:function(){return new t(new V(this.Cols[0].x,this.Cols[1].x),new V(this.Cols[0].y,this.Cols[1].y))}},{key:"add",value:function(e){return new t(this.Cols[0].add(e.Cols[0]),this.Cols[1].add(e.Cols[1]))}},{key:"subtract",value:function(e){return new t(this.Cols[0].subtract(e.Cols[0]),this.Cols[1].subtract(e.Cols[1]))}},{key:"scalarBy",value:function(e){return new t(this.Cols[0].scalarBy(e),this.Cols[1].scalarBy(e))}},{key:"negative",value:function(){return new t(this.Cols[0].negative(),this.Cols[1].negative())}},{key:"determinant",value:function(){return this.Cols[0].x*this.Cols[1].y-this.Cols[0].y-this.Cols[1].x}},{key:"multiplyMatrix",value:function(e){var i=this.transpose();return new t(new V(i.Cols[0].dot(e.Cols[0]),i.Cols[1].dot(e.Cols[0])),new V(i.Cols[0].dot(e.Cols[1]),i.Cols[1].dot(e.Cols[1])))}},{key:"multiplyVector",value:function(t){var e=this.transpose();return new V(e.Cols[0].dot(t),e.Cols[1].dot(t))}}]),t}(),$=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W.UnitX,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W.UnitY,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:W.UnitZ;Object(z.a)(this,t),this.Cols=void 0,this.Cols=[e,i,n]}return Object(k.a)(t,[{key:"transpose",value:function(){return new t(new W(this.Cols[0].x,this.Cols[1].x,this.Cols[2].x),new W(this.Cols[0].y,this.Cols[1].y,this.Cols[2].y),new W(this.Cols[0].z,this.Cols[1].z,this.Cols[2].z))}},{key:"add",value:function(e){return new t(this.Cols[0].add(e.Cols[0]),this.Cols[1].add(e.Cols[1]),this.Cols[2].add(e.Cols[2]))}},{key:"subtract",value:function(e){return new t(this.Cols[0].subtract(e.Cols[0]),this.Cols[1].subtract(e.Cols[1]),this.Cols[2].subtract(e.Cols[2]))}},{key:"scalarBy",value:function(e){return new t(this.Cols[0].scalarBy(e),this.Cols[1].scalarBy(e),this.Cols[2].scalarBy(e))}},{key:"negative",value:function(){return new t(this.Cols[0].negative(),this.Cols[1].negative(),this.Cols[2].negative())}},{key:"determinant",value:function(){}},{key:"multiplyMatrix",value:function(e){var i=this.transpose();return new t(new W(i.Cols[0].dot(e.Cols[0]),i.Cols[1].dot(e.Cols[0]),i.Cols[2].dot(e.Cols[0])),new W(i.Cols[0].dot(e.Cols[1]),i.Cols[1].dot(e.Cols[1]),i.Cols[2].dot(e.Cols[1])),new W(i.Cols[0].dot(e.Cols[2]),i.Cols[1].dot(e.Cols[2]),i.Cols[2].dot(e.Cols[2])))}},{key:"multiplyVector",value:function(t){var e=this.transpose();return new W(e.Cols[0].dot(t),e.Cols[1].dot(t),e.Cols[2].dot(t))}},{key:"toMatrix2x2",value:function(){return new J(this.Cols[0].toVector2(),this.Cols[1].toVector2())}}]),t}(),tt=function(){function t(e){Object(z.a)(this,t),this.degree=void 0,this.degree=e}return Object(k.a)(t,[{key:"clamp",value:function(){return this.degree=t.getClampedValue(this.degree),this.degree}},{key:"toRadian",value:function(){return this.clamp(),this.degree*Math.PI/180}},{key:"update",value:function(e){this.degree=t.getClampedValue(e)}},{key:"getRotateMatrix",value:function(){var t=Math.cos(this.toRadian()),e=Math.sin(this.toRadian());return new J(new V(t,e),new V(-e,t))}},{key:"getRotateAffineMatrix",value:function(){var t=Math.cos(this.toRadian()),e=Math.sin(this.toRadian());return new $(new V(t,e).toAffine(!1),new V(-e,t).toAffine(!1),void 0)}}],[{key:"getClampedValue",value:function(t){var e=t%360;return e<0&&(e+=360),e}}]),t}();!function(t){t.IN="IN",t.OUT="OUT"}(F||(F={}));var et,it=function(){function t(e,i,n,s,a,o,r,h){var c=this;Object(z.a)(this,t),this.canvas=void 0,this.ctx=void 0,this.canvasEdgePosition=void 0,this.progress=void 0,this.direction=void 0,this.imageElement=void 0,this.planetRotator=void 0,this.edgeRotator=void 0,this.planet=void 0,this.id=void 0,this.opacity=void 0,this.position=void 0,this.startPosition=void 0,this.endPosition=void 0,this.progressIncreaseDelta=void 0,this.isDestinationReached=void 0,this.dpr=void 0,this.isDestinationReached=!1,this.id=r,this.dpr=h,this.progress=0,this.opacity=0,this.canvasEdgePosition=i,this.canvas=e,this.planet=a,this.progressIncreaseDelta=1+3*this.planet.speed,this.ctx=e.getContext("2d"),this.planetRotator=n,this.edgeRotator=s,this.direction=o;var u=new Image;this.imageElement=u,u.src="data:image/png;base64,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",this.position=this.direction===F.OUT?a.position:i,this.direction===F.OUT?(this.startPosition=a.position,this.endPosition=i):(this.startPosition=i,this.endPosition=a.position),u.onload=function(){c.draw()}}return Object(k.a)(t,[{key:"drawTrajectory",value:function(t,e){var i=this.opacity;i>.5&&(i=.5);var n=this.direction===F.IN?this.position:this.position.add(new V(Math.cos(t),Math.sin(t)).scalarBy(-80)),s=this.direction===F.IN?this.position.add(new V(Math.cos(t),Math.sin(t)).scalarBy(80)):this.position,a=H(this.canvas,n,this.dpr),o=H(this.canvas,s,this.dpr);this.isDestinationReached&&(a=H(this.canvas,e,this.dpr)),Math.sqrt(s.squareDistanceTo(e))<10&&this.planet.removeSpaceShip(this.id),this.ctx.save();var r=this.ctx.createLinearGradient(o.x,o.y,a.x,a.y);r.addColorStop(this.direction===F.IN?0:1,"rgba(255, 255, 255, 0)"),this.ctx.beginPath(),this.ctx.moveTo(a.x,a.y),this.ctx.lineTo(o.x,o.y),this.ctx.strokeStyle=r,this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore()}},{key:"drawSpaceshipImage",value:function(t,e){e.squareDistanceTo(this.position)<10&&(this.isDestinationReached=!0);var i=H(this.canvas,this.direction===F.IN?this.canvasEdgePosition:this.planet.position,this.dpr),n=this.imageElement.width/25,s=this.imageElement.height/25,a=n/2,o=s/2;this.ctx.save(),this.direction===F.IN?(this.ctx.translate(-this.progress*Math.cos(t),-this.progress*Math.sin(t)),this.position=this.canvasEdgePosition.subtract(new V(this.progress*Math.cos(t),this.progress*Math.sin(t)))):(this.ctx.translate(this.progress*Math.cos(t),this.progress*Math.sin(t)),this.ctx.fillStyle="yellow",this.position=this.planet.position.add(new V(this.progress*Math.cos(t),this.progress*Math.sin(t)))),this.isDestinationReached||(this.opacity<1&&(this.opacity+=.02),this.ctx.translate(a+i.x,o+i.y),this.ctx.translate(-a,-o),this.direction===F.IN?this.ctx.rotate(-(-Math.PI/2-t)+Math.PI):this.ctx.rotate(-(-Math.PI/2-t)),this.ctx.globalAlpha=this.opacity,this.ctx.drawImage(this.imageElement,-a,-o,n,s)),this.ctx.restore()}},{key:"draw",value:function(){this.progress+=this.progressIncreaseDelta;var t=this.canvasEdgePosition.x-this.planet.position.x,e=this.canvasEdgePosition.y-this.planet.position.y,i=Math.atan2(e,t),n=this.direction===F.OUT?this.canvasEdgePosition:this.planet.position;this.drawTrajectory(i,n),this.drawSpaceshipImage(i,n)}},{key:"setDpr",value:function(t){this.dpr=t}}]),t}(),nt=i(31),st=i.n(nt),at=function(){function t(e,i,n,s,a,o,r,h,c,u,l){Object(z.a)(this,t),this.name=void 0,this.canvas=void 0,this.rotator=void 0,this.radius=void 0,this.position=void 0,this.speed=void 0,this.distanceFromSun=void 0,this.spaceShips=void 0,this.ctx=void 0,this.greenness=null,this.spaceShipDirection=F.IN,this.foreColor=void 0,this.backColor=void 0,this.isPopupOpen=!1,this.content=void 0,this.canvasDrawPosition=void 0,this.dpr=void 0,this.buzz=void 0,this.maxBuzzIndex=void 0,this.minBuzzIndex=void 0,this.sentimentDegree=void 0,this.sun=void 0,this.name=i,this.sun=l,this.buzz=c,this.maxBuzzIndex=o,this.minBuzzIndex=r,this.content=n,this.foreColor=s,this.backColor=a,this.canvas=e,this.rotator=new tt(360*h),this.radius=L(c,r,o,60,100),this.spaceShips=[],this.ctx=this.canvas.getContext("2d"),this.distanceFromSun=300,this.speed=.05,this.dpr=u;var d=new st.a;this.sentimentDegree=d.analyze(this.content).score;var v=new V(this.distanceFromSun,0).toAffine(!0),f=this.rotator.getRotateAffineMatrix();this.position=f.multiplyVector(v).toVector2(),this.canvasDrawPosition=H(this.canvas,this.position,this.dpr)}return Object(k.a)(t,[{key:"update",value:function(t){if(void 0!==t.content){this.content=t.content;var e=new st.a;this.sentimentDegree=e.analyze(this.content).score}}},{key:"setSpaceshipInformation",value:function(t){var e=0,i=F.IN,n=2e4;return t>=70?(e=3,i=F.IN,n=1e3):60<=t&&t<70?(e=1,i=F.IN,n=1e4):40<=t&&t<60?(e=0,i=F.OUT,n=2e4):30<=t&&t<40?(e=1,i=F.OUT,n=1e4):(e=3,i=F.OUT,n=1e3),{spaceShipCount:e,spaceShipDirection:i,spaceShipRegenerationInterval:n}}},{key:"calcSpeed",value:function(t){return L(t,0,1,.02,.3)}},{key:"calcDistanceFromSun",value:function(t){var e=this.sun.radius+30+this.radius,i=(this.canvas.height+260)/this.dpr/2,n=Z(t,-.001,.1,85*Math.PI/180,89.9*Math.PI/180),s=Math.tan(n);return L(s,Math.tan(85*Math.PI/180),Math.tan(89.9*Math.PI/180),e,i)}},{key:"getCanvasOuterTrajectoryPoint",value:function(){var t=this.rotator.degree+20-3,e=this.rotator.degree+20+3,i=new tt(Math.random()*(e-t)+t),n=0;n=i.degree<=90&&i.degree>=0?0:i.degree<=180?1:i.degree<=270?3:2,i.clamp();var s=100;if(Math.abs(Math.tan(i.toRadian()))>1){var a=n<=1?(this.canvas.height+s)/2:-(this.canvas.height+s)/2,o=a/Math.tan(i.toRadian());return{edgePosition:new V(o,a),edgeRotator:i}}var r=n%2===0?(this.canvas.width+s)/2:-(this.canvas.width+s)/2,h=Math.tan(i.toRadian())*r;return{edgePosition:new V(r,h),edgeRotator:i}}},{key:"setSpaceShip",value:function(){var t=this.getCanvasOuterTrajectoryPoint(),e=t.edgePosition,i=t.edgeRotator;this.spaceShips.length<3&&this.spaceShips.push(new it(this.canvas,e,this.rotator,i,this,this.spaceShipDirection,Object(_.a)(7),this.dpr))}},{key:"drawSpaceShips",value:function(){var t,e=Object(C.a)(this.spaceShips);try{for(e.s();!(t=e.n()).done;){t.value.draw()}}catch(i){e.e(i)}finally{e.f()}}},{key:"removeSpaceShip",value:function(t){this.spaceShips=this.spaceShips.filter((function(e){return e.id!==t}))}},{key:"setIsPopupOpen",value:function(t){this.isPopupOpen=t}},{key:"drawTrajectory",value:function(){this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.canvas.width/this.dpr/2,this.canvas.height/this.dpr/2,this.distanceFromSun,0,2*Math.PI,!1),this.ctx.strokeStyle=this.foreColor,this.ctx.globalAlpha=.3,this.ctx.lineWidth=.5,this.ctx.stroke(),this.ctx.restore()}},{key:"drawOverlay",value:function(t){this.ctx.save(),this.ctx.beginPath(),this.ctx.lineWidth=0,this.ctx.strokeStyle="none",this.ctx.arc(t.x,t.y,this.radius,0,2*Math.PI),this.content?this.ctx.fillStyle="rgba(255, 255, 255, ".concat(Z(this.sentimentDegree,0,5,0,.5),")"):this.ctx.fillStyle="rgba(80, 80, 80, 1)",this.ctx.fill(),this.ctx.closePath(),this.ctx.restore()}},{key:"draw",value:function(){var t=this;this.drawSpaceShips(),this.rotator.degree+=this.speed;var e=new V(this.distanceFromSun,0).toAffine(!0),i=this.rotator.getRotateAffineMatrix();this.position=i.multiplyVector(e).toVector2(),this.canvasDrawPosition=H(this.canvas,this.position,this.dpr),this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.canvasDrawPosition.x,this.canvasDrawPosition.y,this.radius,0,2*Math.PI,!1),this.ctx.fillStyle=this.foreColor,this.ctx.fill(),this.ctx.closePath(),this.ctx.restore(),this.drawOverlay(this.canvasDrawPosition),this.ctx.save(),this.ctx.textAlign="center",this.ctx.textBaseline="middle";this.ctx.font="bold ".concat(14,"px Questrial");var n=K(this.ctx,this.name,this.canvasDrawPosition.x,this.canvasDrawPosition.y,this.radius,20);n.forEach((function(e){var i=0;n.length>2&&(i=5*(n.length-2)),t.ctx.fillText(String(e[0]).trim(),e[1],e[2]-7*(n.length-1)-i)})),this.ctx.restore()}},{key:"setDpr",value:function(t){this.dpr=t,this.spaceShips.forEach((function(e){return e.setDpr(t)}))}}]),t}(),ot=function(){function t(e,i,n,s,a,o,r,h,c){Object(z.a)(this,t),this.canvas=void 0,this.radius=void 0,this.color="#FFFF4D",this.brightness=0,this.position=new V(0,0),this.MIN_BRIGHTNESS=2,this.MAX_BRIGHTNESS=20,this.foreColor=void 0,this.backColor=void 0,this.maxRadius=150,this.minRadius=80,this.maxBuzz=void 0,this.minBuzz=void 0,this.name=void 0,this.time=void 0,this.dpr=void 0,this.canvasDrawPosition=void 0,this.totalBuzz=void 0,this.name=i,this.totalBuzz=o,this.maxBuzz=c,this.minBuzz=h,this.canvas=e,this.foreColor=s,this.backColor=a,this.name=i,this.time=n,this.dpr=r,this.radius=L(o,h,c,this.minRadius,this.maxRadius),this.canvasDrawPosition=H(this.canvas,this.position,this.dpr),this.setBrightness(0)}return Object(k.a)(t,[{key:"setBrightness",value:function(t){this.brightness=L(t,-1,1,this.MIN_BRIGHTNESS,this.MAX_BRIGHTNESS)}},{key:"drawBrightnessInner",value:function(t,e){e.save(),e.beginPath(),e.arc(t.x,t.y,this.radius+this.brightness/2,0,2*Math.PI,!1),e.fillStyle="#fff",e.globalAlpha=.4,e.fill(),e.restore()}},{key:"update",value:function(t){t.time&&(this.time=t.time),t.name&&(this.name=t.name),t.totalBuzz&&(this.totalBuzz=t.totalBuzz,this.radius=L(this.totalBuzz,this.minBuzz,this.maxBuzz,this.minRadius,this.maxRadius),console.log(this.radius,this.totalBuzz,this.minBuzz,this.maxBuzz)),t.foreColor&&(this.foreColor=t.foreColor)}},{key:"drawBrightnessOuter",value:function(t,e){e.save(),e.beginPath(),e.arc(t.x,t.y,this.radius+this.brightness,0,2*Math.PI,!1),e.fillStyle="#fff",e.globalAlpha=.2,e.fill(),e.restore()}},{key:"drawSun",value:function(t,e){e.save(),e.beginPath(),e.arc(t.x,t.y,this.radius,0,2*Math.PI,!1),e.fillStyle=this.backColor,e.fill(),e.restore()}},{key:"draw",value:function(){var t=this.canvas.getContext("2d"),e=H(this.canvas,this.position,this.dpr);this.canvasDrawPosition=e,this.drawBrightnessInner(e,t),this.drawBrightnessOuter(e,t),this.drawSun(e,t),t.textAlign="center",t.textBaseline="middle";t.font="".concat(35,"px Questrial");var i=K(t,this.name,e.x,e.y,200,35),n=0;i.forEach((function(e,s){t.fillText(String(e[0]).trim(),e[1],e[2]-17.5*(i.length-1)),n=e[2]-17.5*(i.length-1)})),t.save(),t.font="24px Questrial",t.fillText(this.time,e.x,n+40),t.restore()}},{key:"setDpr",value:function(t){this.dpr=t}}]),t}(),rt=function(){function t(e){var i=this;Object(z.a)(this,t),this.fps=24,this.element=void 0,this.ctx=void 0,this.width=0,this.height=0,this.loop=0,this.sun=void 0,this.language=void 0,this.planets=[],this.requestAnimationFrameId=void 0,this.MIN_PLANET_SIZE=20,this.MAX_PLANET_SIZE=80,this.frameCount=0,this.backgroundLoopMax=1e3,this.dpr=1,this.hoveredPlanet=null,this.isPopupOpen=!1,this.isSunHovered=!1,this.currentFrontierColor={r:0,g:25,b:60},this.render=function(){i.frameCount++,i.loop++,i.frameCount===i.fps+1&&(i.frameCount=0),i.loop===i.backgroundLoopMax+1&&(i.loop=0),i.clear(),i.drawScene(),setTimeout((function(){requestAnimationFrame(i.render.bind(i))}),1e3/i.fps)},this.language=P.KOREAN,this.element=e,this.ctx=e.getContext("2d"),this.sun=null,this.render(),this.requestAnimationFrameId=requestAnimationFrame(this.render),this.planets=[],this.initialize()}return Object(k.a)(t,[{key:"changeLanguage",value:function(t){this.language=t}},{key:"onMouseMove",value:function(t){var e=!1;if(this.sun){var i=H(this.element,this.sun.position,this.dpr).squareDistanceTo(new V(t.clientX,t.clientY));Math.sqrt(i)<this.sun.radius?this.isSunHovered=!0:this.isSunHovered=!1}var n,s=Object(C.a)(this.planets);try{for(s.s();!(n=s.n()).done;){var a=n.value,o=H(this.element,a.position,this.dpr).squareDistanceTo(new V(t.clientX,t.clientY));Math.sqrt(o)<a.radius?(a.setIsPopupOpen(!0),e=!0,this.hoveredPlanet=a):a.setIsPopupOpen(!1)}}catch(r){s.e(r)}finally{s.f()}this.isPopupOpen=!!e,this.isSunHovered&&(this.hoveredPlanet=null,this.isPopupOpen=!0)}},{key:"drawButton",value:function(t){this.ctx.save(),this.ctx.beginPath(),this.ctx.fillStyle="rgba(255, 255, 255, 0.8)",this.ctx.arc(t.x,t.y,20,0,2*Math.PI),this.ctx.fill(),this.ctx.closePath(),this.ctx.restore()}},{key:"drawPopup",value:function(t,e){var i,n=this;if(null!==(i=this.hoveredPlanet)&&void 0!==i&&i.content){var s=0;s=t.x>this.element.width/this.dpr/2&&t.y<this.element.height/this.dpr/2?0:t.x<this.element.width/this.dpr/2&&t.y<this.element.height/this.dpr/2?1:t.x<this.element.width/this.dpr/2&&t.y>this.element.height/this.dpr/2?3:2;var a=210,o=0,r=Number.MAX_VALUE;this.ctx.save();var h=new V(t.x,t.y);this.ctx.font="".concat(15,"px Questrial"),K(this.ctx,this.hoveredPlanet.content,h.x+5,h.y+23,180,20).forEach((function(t){t[2]>o&&(o=t[2]),t[2]<r&&(r=t[2])}));var c=35+o-r+27;this.ctx.restore();var u=s%2===0?a:-210,l=2===(2&s)?-c:c;if(1===s?h=h.add(new V(-210,0)):3===s?h=h.add(new V(-210,-c)):2===s&&(h=h.add(new V(0,-c))),this.ctx.save(),function(t,e,i,n,s,a){t.beginPath(),t.moveTo(e.x,e.y),t.arcTo(i.x+s,i.y,i.x+s,i.y+a,n),t.arcTo(i.x+s,i.y+a,i.x,i.y+a,n),t.arcTo(i.x,i.y+a,i.x,i.y,n),t.arcTo(i.x,i.y,i.x+s,i.y,n),t.closePath()}(this.ctx,s%2===0?t.add(new V(10,0)):t.subtract(new V(10,0)),t,10,u,l),this.ctx.fillStyle="rgba(255,255,255, 0.95)",this.ctx.fill(),this.ctx.stroke(),this.ctx.restore(),this.hoveredPlanet&&this.sun)this.ctx.save(),this.ctx.font="20px Questrial",this.ctx.textAlign="start",this.ctx.fillText("beyond"!==this.sun.time?"In "+this.sun.time:"Beyond...",h.x+5,h.y+20),this.ctx.font="".concat(15,"px Questrial"),K(this.ctx,this.hoveredPlanet.content,h.x+5,h.y+23,180,20).forEach((function(t){n.ctx.fillText(String(t[0]).trim(),t[1],t[2]+20)})),this.ctx.restore()}}},{key:"setSun",value:function(t,e,i,n,s,a,o){if(e){var r=e.trim().split("(")[1].split(")")[0].split(",");this.currentFrontierColor={r:parseInt(r[0]),g:parseInt(r[1]),b:parseInt(r[2])}}this.sun?this.sun.update({name:t,time:n,totalBuzz:s,foreColor:e}):this.sun=new ot(this.element,t,n,e,i,s,this.dpr,a,o)}},{key:"setPlanet",value:function(t,e,i){var n=this;this.sun&&(this.planets=t.map((function(i,s){var a=i.name,o=i.buzz,r=(i.type,i.sources,i.urls,t.map((function(t){return t.buzz})).sort((function(t,e){return e-t}))[0]),h=t.map((function(t){return t.buzz})).sort((function(t,e){return t-e}))[0],c=i[e];return new at(n.element,a,c,i.color,"#aaa",r,h,s/t.length,o,n.dpr,n.sun)})))}},{key:"updatePlanets",value:function(t){this.planets.forEach((function(e){var i=t.find((function(t){return t.name===e.name}));i&&e.update({title:i.name,content:i.content})}))}},{key:"addPlanet",value:function(t,e,i,n,s,a,o,r,h,c,u,l){}},{key:"initialize",value:function(){this.onMouseMove=this.onMouseMove.bind(this),this.element.addEventListener("mousemove",this.onMouseMove)}},{key:"setWidth",value:function(t,e){this.width=t,this.element.width=e?t*e:t,this.element.style.width="".concat(t,"px")}},{key:"setHeight",value:function(t,e){this.height=t,this.element.height=e?t*e:t,this.element.style.height="".concat(t,"px")}},{key:"setSize",value:function(t,e,i){this.setWidth(t,i),this.setHeight(e,i),this.dpr=i||this.dpr}},{key:"scale",value:function(t,e){var i,n=this;this.ctx.scale(t,e),null===(i=this.sun)||void 0===i||i.setDpr(this.dpr),this.planets.forEach((function(t){return t.setDpr(n.dpr)}))}},{key:"drawBackground",value:function(){this.ctx.save();var t=this.ctx.createLinearGradient(0,0,this.width,this.height);t.addColorStop(0,"rgba(0, 0, 0, 0)"),t.addColorStop(L(this.loop,0,this.backgroundLoopMax,0,1),"rgba(".concat(this.currentFrontierColor.r,", ").concat(this.currentFrontierColor.g,", ").concat(this.currentFrontierColor.b,", ").concat(Z(Math.abs(this.loop-this.backgroundLoopMax/2),0,this.backgroundLoopMax/2,0,.15),")")),t.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.width,this.height),this.ctx.restore()}},{key:"drawScene",value:function(){this.drawBackground(),this.drawGalaxyComponents(),this.isPopupOpen&&(this.hoveredPlanet?this.drawPopup(this.hoveredPlanet.canvasDrawPosition,this.hoveredPlanet):this.sun&&this.drawPopup(this.sun.canvasDrawPosition,this.sun))}},{key:"drawDummy",value:function(){}},{key:"drawGalaxyComponents",value:function(){this.sun&&this.sun.draw();var t,e=Object(C.a)(this.planets);try{for(e.s();!(t=e.n()).done;){t.value.drawTrajectory()}}catch(s){e.e(s)}finally{e.f()}var i,n=Object(C.a)(this.planets);try{for(n.s();!(i=n.n()).done;){i.value.draw()}}catch(s){n.e(s)}finally{n.f()}}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}}]),t}();!function(t){t._2025="2025",t._2030="2030",t._2035="2035",t._2040="2040",t.beyond="beyond"}(et||(et={}));var ht=function(){var t=Object(n.useRef)(null),e=Object(n.useRef)(null),i=Object(n.useRef)(null),s=Object(n.useContext)(g),a=s.frontiers,r=s.changeFrontier,h=s.currentFrontier,c=s.minMaxAvgBuzz,u=s.minMaxTotalBuzz,l=Object(n.useState)(et._2025),d=Object(o.a)(l,2),v=d[0],f=d[1];return Object(n.useEffect)((function(){!function(t){m()("Timeline set to ".concat(t),{icon:"\ud83d\udc4f",style:{fontFamily:"Roboto",borderRadius:"10px",background:"#333",color:"#fff"}})}(v);var t=function(t){var e=t.deltaY<0,i=Math.abs(t.deltaY)>20;e&&i?v===et._2025?f(et._2030):v===et._2030?f(et._2035):v===et._2035?f(et._2040):v===et._2040&&f(et.beyond):!e&&i&&(v===et.beyond?f(et._2040):v===et._2040?f(et._2035):v===et._2035?f(et._2030):v===et._2030&&f(et._2025))};return window.addEventListener("wheel",t),function(){window.removeEventListener("wheel",t)}}),[v]),Object(n.useEffect)((function(){if(i.current){var t=i.current.sun;if(t&&v!==t.time&&(i.current.sun.update({time:v,totalBuzz:null===h||void 0===h?void 0:h.totalBuzz}),h)){var e=h.data.map((function(t){return{name:t.name,content:t[v]}}));i.current.updatePlanets(e)}}}),[v,h]),Object(n.useEffect)((function(){if(!t.current)return function(){};if(!i.current){var e=new rt(t.current);i.current=e}}),[a]),Object(n.useEffect)((function(){i.current&&h&&c&&u&&(console.log("min",c.min,"max",c.max),console.log("avg",h.avgBuzz),i.current.setSun(h.title,h.color,"#fff",et._2025,h.totalBuzz,u.min,u.max),i.current.setPlanet(h.data,et._2025,h.totalBuzz))}),[h,c,u]),Object(n.useEffect)((function(){var t=function(){if(e.current&&i.current){var t=e.current.getBoundingClientRect(),n=window.devicePixelRatio;i.current.setSize(t.width,t.height,n),i.current.scale(n,n),i.current.drawScene()}};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),Object(x.jsxs)("div",{style:{width:"100%",height:"100%",position:"fixed",backgroundColor:"black"},ref:e,children:[Object(x.jsx)("div",{style:{position:"absolute",width:"calc(100% - 60px)",display:"flex",justifyContent:"space-between",zIndex:5,flexWrap:"wrap",marginTop:20,padding:"0 30px"},children:a&&Array.from(a.keys()).map((function(t,e){var i=a.get(t);return Object(x.jsxs)("div",{style:{display:"flex",alignItems:"center",background:(null===h||void 0===h?void 0:h.title)===t?"#555":"",borderRadius:5,padding:5,cursor:"pointer"},onClick:function(){r(t)},children:[Object(x.jsx)("div",{style:{width:15,height:15,backgroundColor:i?i[0].color:"white"}}),Object(x.jsx)("button",{style:{background:"none",border:"none",color:"white",cursor:"pointer"},children:t},t)]})}))}),Object(x.jsx)("canvas",{ref:t})]})};var ct=function(){return Object(x.jsx)("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:Object(x.jsx)(w,{children:Object(x.jsx)(ht,{})})})},ut=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,77)).then((function(e){var i=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,o=e.getTTFB;i(t),n(t),s(t),a(t),o(t)}))};a.a.createRoot(document.getElementById("root")).render(Object(x.jsx)(ct,{})),ut()}},[[76,1,2]]]);
//# sourceMappingURL=main.97905cd5.chunk.js.map