!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s="Vtdi")}({"1n1x":function(e,t){},HFZp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e){e&&e.__esModule}(n("1n1x"));let o='\n\n    <div class="progress">\n        <div class="progress-bar">\n            <div class="progress-bar-inner">\n            </div>\n        </div>\n        <p></p>\n    </div>\n';t.default=class{constructor(){this.el=null,this.bar=null,this.text=null,this.el=document.createElement("div"),this.el.className="progress-continer",this.el.innerHTML=o,this.bar=this.el.querySelector(".progress-bar-inner"),this.text=this.el.querySelector("p"),document.querySelector("body").appendChild(this.el)}progressing(e,t){this.el.style.display="block",this.bar.style.width=`${100*e}%`,this.text.innerHTML=`加载中...${100*e}%`}progressend(){this.el.style.display="none"}}},Vtdi:function(e,t,n){"use strict";n("WF7/");var o,i,r,s=a(n("HFZp")),d=a(n("wAzV"));function a(e){return e&&e.__esModule?e:{default:e}}const l=["0 RAISER","0","ARIOS","CHERUDIM","DYNAMES","EXIA","FLAG_CUSTOM_MA","FLAG_CUSTOM_MS","GN_ARCHER","KYRIOS_MA","KYRIOS_MS","NADLEEH","OO","SERAVEE","VIRTUE"];function c(e){i.remove(window.obj),e=e||l[0];var t=new THREE.MTLLoader;t.setPath("static/model/OO/"),window.p.progressing(0),t.load(`${e}.mtl`,function(t){window.p.progressing(0),t.preload();var n=new THREE.OBJLoader;n.setMaterials(t),n.setPath("static/model/OO/"),window.p.progressend(),n.load(`${e}.obj`,function(e){e.scale.set(.1,.1,.1),window.obj=e,i.add(e),window.p.progressend()},e=>{e.lengthComputable&&window.p.progressing(e.loaded/e.total)},()=>{window.p.progressend(),d.default.toast("加载失败",d.default.ERROR)})},e=>{e.lengthComputable&&window.p.progressing(e.loaded/e.total)},()=>{window.p.progressend(),d.default.toast("加载失败",d.default.ERROR)})}console.log(THREE),function(){window.stats=new Stats,stats.dom.style.bottom="0px",stats.dom.style.top=null,document.body.appendChild(stats.dom),(o=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,.1,1e3)).position.set(0,40,50),o.lookAt(new THREE.Vector3(0,0,0)),i=new THREE.Scene,window.camera=o,new THREE.BoxGeometry(1,1,1),new THREE.MeshPhysicalMaterial,i.add(new THREE.AmbientLight(4473924));let e=new THREE.PointLight(16777215);e.position.set(0,50,0),e.castShadow=!0,i.add(e),i.background=(new THREE.CubeTextureLoader).setPath("static/background/").load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]),[],(r=new THREE.WebGLRenderer({antialias:!0})).setClearColor("#ffffff",1),r.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(r.domElement),window.addEventListener("resize",e=>{r.setSize(window.innerWidth,window.innerHeight),o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix()});let t=document.createElement("div");t.className="selectDIV",document.body.appendChild(t),l.forEach(e=>{let t=document.createElement("a");t.innerHTML=e,t.addEventListener("click",()=>{c(e)}),document.querySelector(".selectDIV").appendChild(t)});var n=new THREE.AxisHelper(50);i.add(n),window.p=new s.default,window.controls=new THREE.OrbitControls(o,r.domElement),window.controls.enableDamping=!0,window.controls.enableZoom=!0,window.controls.autoRotate=!0,window.controls.minDistance=1,window.controls.maxDistance=200,window.controls.enablePan=!0,c()}(),function e(){requestAnimationFrame(e);window.stats.update();window.controls.update();r.render(i,o)}()},"WF7/":function(e,t){},ZlNP:function(e,t){},wAzV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n("ZlNP");class o{static toast(e,t){var n=document.createElement("div");n.setAttribute("role","toast"),n.innerHTML=e,document.querySelector("body").appendChild(n),n.className=`${t} toast fade `,n.style.left="calc((100% - "+n.clientWidth+"px)/2)",setTimeout(function(){n.className=`${t} toast`},0),setTimeout(function(){n.className=`${t} toast fade`,setTimeout(function(){document.querySelector("body").removeChild(n)},500)},2e3)}}t.default=o,o.ERROR="error"}});
//# sourceMappingURL=app.017f727ed05249007789.js.map