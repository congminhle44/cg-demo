"use strict";(self.webpackChunkcg_demo=self.webpackChunkcg_demo||[]).push([[753],{2753:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var o=n(1413),i=n(9439),s=n(2791),r=n(184),c=function(e){var t=e.hoverOn,n=void 0===t?"":t;return(0,r.jsx)(r.Fragment,{children:window.innerWidth>1367&&(0,r.jsx)("div",{style:{position:"absolute",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:2},children:window.innerWidth>1367&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",height:"6px",width:"6px",backgroundColor:"white",borderRadius:"50%",border:"solid 1px gray"}}),n&&(0,r.jsx)("p",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(8px, -50%)",fontSize:18,fontWeight:500,color:"white"},children:"[Click]"})]})})})},a=n(5712),l=n(3520),u=n(6466),d=n(5892),p=n(9655),m=n(6459),v=function(e){var t=Object.assign({},((0,m.Z)(e),e)),n=(0,a.xK)((function(){return(0,o.Z)({rotation:[-Math.PI/2,0,0]},t)})),s=(0,i.Z)(n,1)[0];return(0,r.jsx)("mesh",{ref:s})},h=n(3655),f=function(e){var t=e.debug,n=e.position,o=e.scale;return(0,a.EJ)((function(){return{type:"Static",args:o,position:n}})),(0,r.jsx)(r.Fragment,{children:t&&(0,r.jsxs)("mesh",{position:n,children:[(0,r.jsx)("boxGeometry",{args:o}),(0,r.jsx)("meshBasicMaterial",{transparent:!0,opacity:.5,color:"#00be00"})]})})},x=n(7626),j=n(3197),g=(0,s.memo)((function(){var e=document.createElement("video");e.crossOrigin="anonymous",e.src="".concat(j.v.apiHost,"/demo-video.mp4"),e.loop=!0,e.autoplay=!0,e.muted="muted",e.play();var t=document.createElement("canvas").getContext("2d"),n=new p.VideoTexture(e);return(0,x.A)((function(){e.readyState===e.HAVE_ENOUGH_DATA&&t.drawImage(e,0,0)})),(0,r.jsxs)("mesh",{position:[-.99,2.2,-3.01],children:[(0,r.jsx)("planeGeometry",{args:[2.1,1.2]}),(0,r.jsx)("meshBasicMaterial",{map:n})]})})),y="/assets/umedalabo_nonright.glb",b=[{position:[4.8,.5,1.6],scale:[.8,1,7]},{position:[-8,.5,-4],scale:[30,5,1]},{position:[-4,.9,-3],scale:[6,.5,1]},{position:[7.5,.9,-2],scale:[1,5,30]},{position:[-8,.5,11],scale:[30,5,1]},{position:[-8.9,.9,-3],scale:[1,5,30]},{position:[0,3.3,0],scale:[30,1,30]},{position:[4.4,.5,8.5],scale:[3,5,4]}],F=function(e){var t=e.debug,n=e.setHover,i=e.setCursorSelected,c=e.videoUrl,a=e.setShowDemoCanvas,l=(0,h.L)(y).scene;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("primitive",{onPointerOver:function(e){var t;e.stopPropagation(),n(null===e||void 0===e||null===(t=e.object)||void 0===t?void 0:t.name)},onPointerUp:function(e){e.stopPropagation(),i(null===e||void 0===e?void 0:e.object.name),"moniter-l"===(null===e||void 0===e?void 0:e.object.name)&&window.innerWidth<=1366&&a(!0)},rotation:[0,-Math.PI/2,0],object:l}),(0,r.jsx)(s.Suspense,{fallback:null,children:(0,r.jsx)(g,{videoUrl:c})}),b.map((function(e,n){return(0,r.jsx)(f,(0,o.Z)({debug:t},e),n)}))]})};h.L.preload(y);var w=n(4942),k=function(e){return{w:"moveForward",s:"moveBackward",a:"moveLeft",d:"moveRight"," ":"jump",Shift:"sprint"}[e]},S=function(e){return{0:"axe",1:"wood",2:"dirt",3:"glass",4:"log",5:"grass"}[e]},C=function(e){var t=function(){var e=(0,s.useState)({moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1,sprint:!1,jump:!1}),t=(0,i.Z)(e,2),n=t[0],r=t[1],c=(0,s.useState)("axe"),a=(0,i.Z)(c,2),l=a[0],u=a[1],d=(0,s.useState)(!0),p=(0,i.Z)(d,2),m=p[0],v=p[1];return(0,s.useEffect)((function(){var e=function(e){k(e.key)&&r((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,w.Z)({},k(e.key),!0))})),S(e.key)&&u(S(e.key)),"v"===e.key&&v(!m)},t=function(e){k(e.key)&&r((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,w.Z)({},k(e.key),!1))}))};return document.addEventListener("keydown",e),document.addEventListener("keyup",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}})),{movement:n,texture:l,fov:m}}(),n=t.movement,c=n.moveBackward,l=n.moveForward,u=n.moveLeft,d=n.moveRight,m=n.jump,v=n.sprint,h=(0,x.z)().camera,f=(0,s.useState)(0),j=(0,i.Z)(f,2),g=j[0],y=j[1],b=(0,a.Eo)((function(){return{mass:1,args:[.7,.5,6],type:"Dynamic"}})),F=(0,i.Z)(b,2),C=F[0],Z=F[1],D=(0,s.useRef)([0,0,0]);(0,s.useEffect)((function(){Z.velocity.subscribe((function(e){return D.current=e}))}),[Z.velocity]);var R=(0,s.useRef)(e.position);return(0,s.useEffect)((function(){return Z.position.subscribe((function(e){return R.current=e}))}),[Z.position]),(0,s.useEffect)((function(){y(v?3:2)}),[v]),(0,x.A)((function(){!e.debug&&h.position.copy(new p.Vector3(R.current[0],R.current[1]+.6,R.current[2])),window.innerWidth<1367&&h.rotation.set(0,e.currentRotation*(g/300),0);var t=new p.Vector3,n=new p.Vector3(0,0,(c||"BACKWARD"===e.joystickDirection?.5:0)-(l||"FORWARD"===e.joystickDirection?.5:0)),o=new p.Vector3((u||"LEFT"===e.joystickDirection?.5:0)-(d||"RIGHT"===e.joystickDirection?.5:0),0,0);t.subVectors(n,o).normalize().multiplyScalar(g).applyEuler(h.rotation),Z.velocity.set(t.x,D.current[1],t.z),m&&Math.abs(D.current[1].toFixed(2))<.01&&Z.velocity.set(D.current[0],8,D.current[2])})),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("mesh",{castShadow:!0,ref:C,children:[(0,r.jsx)("sphereGeometry",{}),(0,r.jsx)("meshStandardMaterial",{transparent:!0,opacity:e.debug?.7:0})]})})},Z=[{position:[-5.5,1.5,11.6],color:"#4c72ff",intensity:.8,distance:10},{position:[5.4,2.1,-1.3],color:"#FFFFFF",intensity:.5,distance:6},{position:[5.4,2.1,4.2],color:"#FFFFFF",intensity:.5,distance:6},{position:[6.5,1.5,7.5],color:"#FFFFFF",intensity:1,distance:6},{position:[-9.6,1.7,9.5],color:"#FFFFFF",intensity:.5,distance:5},{position:[-9.6,1.7,7.6],color:"#FFFFFF",intensity:.5,distance:5},{position:[-9.6,1.7,6],color:"#FFFFFF",intensity:.5,distance:5},{position:[-9.6,1.7,4.3],color:"#FFFFFF",intensity:.5,distance:5},{position:[-9.6,1.7,2.6],color:"#FFFFFF",intensity:.5,distance:5}],D=function(){return(0,r.jsx)("group",{dispose:null,children:Z.map((function(e,t){return(0,r.jsx)("pointLight",(0,o.Z)({},e),t)}))})},R=n(9989);function I(e){var t=new p.Object3D;return(0,r.jsxs)("group",(0,o.Z)((0,o.Z)({dispose:null},e),{},{children:[(0,r.jsx)(R.P,{target:t,angle:Math.PI/2,anglePower:5,penumbra:.4,distance:6,decay:1,color:"#FFF8DA",opacity:0,intensity:1,castShadow:!0}),(0,r.jsx)("primitive",{object:t,position:[0,-1,0]})]}))}var P=[{position:[-3.67,1,-3.4]},{position:[-4.85,1,-3.4]},{position:[-6.12,1,-3.4]}],E=function(){return(0,r.jsx)("group",{dispose:null,children:null===P||void 0===P?void 0:P.map((function(e,t){return(0,r.jsx)(I,{position:e.position},t)}))})},M=[{position:[-4,1.5,-2.7],child:"counter-table001"},{position:[5,1.5,2],child:"bar001"},{position:[2.6,2.5,8.5],child:"guildboard"},{position:[-3.2,1.7,11],child:"PC001"}],T=function(e){var t=e.setCursorSelected,n=(0,s.useRef)();return M.map((function(e,o){return(0,r.jsxs)("mesh",{ref:n,position:e.position,rotation:[Math.PI,0,0],onClick:function(n){n.stopPropagation(),t(e.child)},children:[(0,r.jsx)("coneGeometry",{args:[.1,.2,4]}),(0,r.jsx)("meshBasicMaterial",{color:"red"})]},o)}))},L=function(e){var t=e.debug,n=e.setHover,o=e.setCursorSelected,c=e.selectedLink,m=e.showInstruct,h=e.setShowDemoCanvas,f=e.joystickDirection,x=e.videoUrl,j=e.joystickRotation,g=(e.setJoystickRotation,(0,s.useState)(j.x)),y=(0,i.Z)(g,2),b=y[0],w=y[1],k=(0,s.useState)(null),S=(0,i.Z)(k,2),Z=S[0],R=S[1],I=(0,s.useRef)(null);setTimeout((function(){null!==I&&void 0!==I&&I.current&&c?setTimeout((function(){var e;null===I||void 0===I||null===(e=I.current)||void 0===e||e.unlock()}),5):setTimeout((function(){var e;null===I||void 0===I||null===(e=I.current)||void 0===e||e.lock()}),5)}),[I,c]);return(0,r.jsxs)(d.Xz,{gl:{toneMapping:p.NoToneMapping},camera:{position:[0,0,0]},style:{height:"100vh"},dpr:[1,2],onTouchStart:function(e){var t=e.changedTouches[0].screenX;R(t)},onTouchMove:function(e){if(Z){var t=e.changedTouches[0].screenX;w(b-(t-Z)),R(t)}},children:[t&&(0,r.jsx)(l.z,{}),!t&&window.innerWidth>1367&&!m&&(0,r.jsx)(u.q,{ref:I,pointerSpeed:.15}),(0,r.jsx)("ambientLight",{intensity:.7}),(0,r.jsxs)(s.Suspense,{fallback:null,children:[(0,r.jsx)(T,{setCursorSelected:o}),(0,r.jsx)(D,{}),(0,r.jsx)(E,{})]}),(0,r.jsxs)(a.wI,{gravity:[0,-30,0],children:[(0,r.jsx)(C,{debug:t,position:[2,0,2],joystickDirection:f,joystickRotation:j,currentRotation:b}),(0,r.jsx)(F,{debug:t,setHover:n,videoUrl:x,setShowDemoCanvas:h,setCursorSelected:o}),(0,r.jsx)(v,{receiveShadow:!0,position:[0,0,0]})]})]})},N=function(e){var t=e.cursorSelected,n=e.setCursorSelected;return(0,r.jsxs)("div",{style:{position:"absolute",background:"white",top:0,right:0,width:"500px",height:"100%",overflowY:"hidden",zIndex:3,visibility:t?"visible":"hidden"},children:[(0,r.jsx)("iframe",{src:t||"https://meta-heroes.io",title:t,width:"100%",height:"100%"}),(0,r.jsx)("div",{onClick:function(e){e.stopPropagation(),n("")},onTouchEnd:function(){return n("")},style:{position:"absolute",bottom:16,right:16,fontSize:24,width:"48px",height:"48px",borderRadius:"50%",textAlign:"center",lineHeight:"48px",zIndex:2,cursor:"pointer",backgroundColor:"rgba(123,121,233,0.8)",color:"white"},children:"X"})]})},z=n(7543),H=function(e){var t=e.setJoystickDirection;return(0,r.jsx)(r.Fragment,{children:window.innerWidth<1367&&(0,r.jsx)("div",{style:{position:"absolute",bottom:40,left:40,display:"flex",flexDirection:"column",alignItems:"center",zIndex:2},children:(0,r.jsx)(z.Tj,{size:100,stickSize:40,baseColor:"rgba(0,0,0,0.65)",stickColor:"#bdbdbd",move:function(e){t(e.direction)},stop:function(){t("")}})})})},A=function(e){var t=e.instructDevice,n=e.setInstructDevice,o=e.setShowInstruct;return(0,r.jsx)("div",{className:"instruction-container",children:(0,r.jsxs)("div",{className:"instruction",children:[(0,r.jsx)("div",{className:"close-container",children:(0,r.jsx)("img",{onClick:function(e){e.stopPropagation(),o(!1)},className:"close-btn",src:"/assets/close.svg",alt:"close"})}),(0,r.jsxs)("div",{className:"tab",children:[(0,r.jsx)("div",{onClick:function(e){e.stopPropagation(),n("pc")},className:"device ".concat("pc"===t&&"active"),children:"PC\u7248"}),(0,r.jsx)("div",{onClick:function(e){e.stopPropagation(),n("mobile")},className:"device ".concat("mobile"===t&&"active"),children:"\u30e2\u30d0\u30a4\u30eb\u7248"})]}),(0,r.jsx)("div",{className:"detail",children:"pc"===t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:"/assets/command.png",alt:"command"}),(0,r.jsx)("img",{src:"/assets/space.png",alt:"space"}),(0,r.jsx)("img",{src:"/assets/perspective.png",alt:"perspective"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:"/assets/mobile1.png",alt:"Mobile 1"}),(0,r.jsx)("img",{src:"/assets/mobile2.png",alt:"Mobile 2"}),(0,r.jsx)("img",{src:"/assets/mobile3.png",alt:"Mobile 3"})]})})]})})},W=function(e){var t=e.setShowDemoCanvas,n=e.videoUrl;return(0,r.jsx)("div",{className:"video-frame-container",children:(0,r.jsxs)("div",{className:"video-wrapper",children:[(0,r.jsx)("div",{className:"close-container",children:(0,r.jsx)("img",{onClick:function(e){e.stopPropagation(),t(!1)},className:"close-btn",src:"/assets/close.svg",alt:"close"})}),(0,r.jsx)("video",{crossOrigin:"anonymous",src:n,controls:!0,autoPlay:!0,muted:!0})]})})},O=n(1243),U=function(){var e="".concat(j.v.apiHost,"/demo-video.mp4"),t=(0,s.useState)(""),n=(0,i.Z)(t,2),a=n[0],l=n[1],u=(0,s.useState)(""),d=(0,i.Z)(u,2),p=d[0],m=d[1],v=(0,s.useState)({x:0}),h=(0,i.Z)(v,2),f=h[0],x=h[1],g=(0,s.useState)(window.innerWidth>=1336?"pc":"mobile"),y=(0,i.Z)(g,2),b=y[0],F=y[1],w=(0,s.useState)(!1),k=(0,i.Z)(w,2),S=k[0],C=k[1],Z=(0,s.useState)(""),D=(0,i.Z)(Z,2),R=D[0],I=D[1],P=(0,s.useState)(!1),E=(0,i.Z)(P,2),M=E[0],T=E[1],z=(0,s.useState)(),U=(0,i.Z)(z,2),B=U[0],V=U[1],G=(0,o.Z)({},B),J=G[R],_=G[a];(0,s.useEffect)((function(){setTimeout((function(){return C(!0)}),500),X()}),[]);var X=function(){return O.Z.get("".concat(j.v.apiHost,"/api/links")).then((function(e){V(e.data)})).catch((function(e){return console.log(e)}))};return(0,r.jsxs)("div",{id:"container",children:[S&&(0,r.jsx)(A,{instructDevice:b,setInstructDevice:F,setShowInstruct:C}),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{hoverOn:_}),(0,r.jsx)(N,{cursorSelected:J,setCursorSelected:I}),(0,r.jsx)(H,{setJoystickDirection:m})]}),M&&(0,r.jsx)(W,{videoUrl:e,setShowDemoCanvas:T}),(0,r.jsx)(L,{debug:false,setJoystickRotation:x,setShowDemoCanvas:T,showInstruct:S,joystickRotation:f,setHover:l,joystickDirection:p,setCursorSelected:I,selectedLink:J})]})}}}]);
//# sourceMappingURL=753.feb918a7.chunk.js.map