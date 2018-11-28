

import '@/css/main.css';
import progress from './comps/progress'
import Toast from './comps/toast'
import color from './util/color'
var camera, scene, renderer;
var geometry, material, mesh;
var ms;

const list=['0 RAISER','0','ARIOS','CHERUDIM','DYNAMES','EXIA','FLAG_CUSTOM_MA','FLAG_CUSTOM_MS','GN_ARCHER','KYRIOS_MA','KYRIOS_MS','NADLEEH','OO','SERAVEE','VIRTUE'];
console.log(THREE);
init();
animate();

function init() {
    initStats();

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(0, 40, 50);
    camera.lookAt(new THREE.Vector3(0,0,0));
    scene = new THREE.Scene();
    window.camera=camera;

	geometry = new THREE.BoxGeometry( 1, 1, 1 );
	material = new THREE.MeshPhysicalMaterial();

    scene.add(new THREE.AmbientLight(0xffffff,0.1));

    // let light = new THREE.PointLight(0xffffff);
    // light.position.set(0, 50, 0);
    // light.castShadow = true;

    // scene.add(light);

    let d_light = new THREE.DirectionalLight( 0xffffff, 2 );
    d_light.position.set(1000, 1000, 1000);
    d_light.castShadow = true;
    d_light.target.position.set(0,0,0);
    scene.add(d_light);
    initLight();




    scene.background = new THREE.CubeTextureLoader()
         .setPath( 'static/background/' )
         .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );

    ms=[];

    // for (let i = 0; i < 100; i++) {
    //     mesh = new THREE.Mesh( geometry, material );     
    //     mesh.position.x=2*(i%10)-10;
    //     mesh.position.y=2*Math.floor(i/10)-10;
    //     // mesh.position.y=0;
    // scene.add( mesh );
    // ms.push(mesh);
    // }

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor('#ffffff',1.0)
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

    window.addEventListener('resize',(e)=>{
        renderer.setSize( window.innerWidth, window.innerHeight );
        camera.aspect = window.innerWidth/ window.innerHeight;
        camera.updateProjectionMatrix();
    });
    let d=document.createElement('div');
    d.className="selectDIV";
    document.body.appendChild(d);
    list.forEach(l=>{
        let a=document.createElement('a');
        a.innerHTML=l;
        a.addEventListener('click',()=>{loadModel(l)});
        document.querySelector('.selectDIV').appendChild(a);
        

    })
    var helper = new THREE.AxisHelper(50);
    scene.add(helper);
    window.p=new progress();


    initControls();
    loadModel();

}
function loadModel(l){
    scene.remove(window.obj);
    l=l||list[0];

    // THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
 
    var mtlLoader = new THREE.MTLLoader();
    //设置路径，也可不是设置，在load中加载完整路径也可
        mtlLoader.setPath( 'static/model/OO/' );
        window.p.progressing(0);
        mtlLoader.load( `${l}.mtl`, 
     // 资源加载成功后执行的函数 
                 //@params materials THREE.MTLLoader.MaterialCreator
                          function( materials ) {
                            window.p.progressing(0);
                    materials.preload();
                    var objLoader = new THREE.OBJLoader();
                        // objLoader.setMaterials( materials );
                        objLoader.setPath( 'static/model/OO/' );
                        objLoader.load( `${l}.obj`, function ( object ) {
                            let geometry = object.children[ 0 ].geometry;
                            geometry.attributes.uv2 = geometry.attributes.uv;
                            geometry.center();
                            window.obj = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({wireframe:true}) );
                            window.obj.scale.set(0.1,0.1,0.1);
                            scene.add( window.obj );
                          



                            // object.scale.set(0.1,0.1,0.1);
                            // window.obj=object;
                            // scene.add( object );
                            window.p.progressend();
                            Toast.toast(`模型${l}加载完成`);
                        },(xhr)=>{

                            if (xhr.lengthComputable) {
                                window.p.progressing(xhr.loaded / xhr.total,'加载材质');
                            }
    
                        },()=>{
                            window.p.progressend();
                            Toast.toast('加载模型失败',Toast.ERROR);
                        });
                    },(xhr)=>{

                        if (xhr.lengthComputable) {
                            window.p.progressing(xhr.loaded / xhr.total,'加载模型');
                        }

                    },()=>{
                        window.p.progressend();
                        Toast.toast('加载材质失败',Toast.ERROR);
                    });

}
function initLight(){
    window.groups=[];

    let group =new THREE.Group();
    group.position.set(50,50,50);
    group.lookAt(0,0,0);
    for (let i = 0; i < 9; i++) {
        let spot_light = new THREE.SpotLight( color.randomColor(), 2, 0, 0.1, 0.5, 2 );
        console.log(spot_light.color);
        let o=new THREE.Object3D();
        group.add(o);
        spot_light.target=o
        spot_light.target.position.set(Math.floor(i/3)-1,(i%3)-1,2);
        group.add(spot_light);
    }
    scene.add(group);
    window.groups.push(group);

    group =new THREE.Group();
    group.position.set(50,50,-50);
    group.lookAt(0,0,0);
    for (let i = 0; i < 9; i++) {
        let spot_light = new THREE.SpotLight( color.randomColor(), 2, 0, 0.1, 0.5, 2 );
        console.log(spot_light.color);
        let o=new THREE.Object3D();
        group.add(o);
        spot_light.target=o
        spot_light.target.position.set(Math.floor(i/3)-1,(i%3)-1,2);
        group.add(spot_light);
    }
    scene.add(group);
    window.groups.push(group);

    group =new THREE.Group();
    group.position.set(-50,50,-50);
    group.lookAt(0,0,0);
    for (let i = 0; i < 9; i++) {
        let spot_light = new THREE.SpotLight( color.randomColor(), 2, 0, 0.1, 0.5, 2 );
        console.log(spot_light.color);
        let o=new THREE.Object3D();
        group.add(o);
        spot_light.target=o
        spot_light.target.position.set(Math.floor(i/3)-1,(i%3)-1,2);
        group.add(spot_light);
    }
    scene.add(group);
    window.groups.push(group);

    group =new THREE.Group();
    group.position.set(-50,50,50);
    group.lookAt(0,0,0);
    for (let i = 0; i < 9; i++) {
        let spot_light = new THREE.SpotLight( color.randomColor(), 2, 0, 0.1, 0.5, 2 );
        console.log(spot_light.color);
        let o=new THREE.Object3D();
        group.add(o);
        spot_light.target=o
        spot_light.target.position.set(Math.floor(i/3)-1,(i%3)-1,2);
        group.add(spot_light);
    }
    scene.add(group);
    window.groups.push(group);
}


function initControls() {

 

    window.controls = new THREE.OrbitControls( camera, renderer.domElement );



    // 如果使用animate方法时，将此函数删除

    //controls.addEventListener( 'change', render );

    // 使动画循环使用时阻尼或自转 意思是否有惯性

    window.controls.enableDamping = true;

    //动态阻尼系数 就是鼠标拖拽旋转灵敏度

    //controls.dampingFactor = 0.25;

    //是否可以缩放

    window.controls.enableZoom = true;

    //是否自动旋转

    window.controls.autoRotate = true;

    //设置相机距离原点的最远距离

    window.controls.minDistance  = 1;

    //设置相机距离原点的最远距离

    window.controls.maxDistance  = 200;

    //是否开启右键拖拽

    window.controls.enablePan = true;

}
function initStats() {

    window.stats = new Stats();
    stats.dom.style.bottom='0px';
    stats.dom.style.top=null;
    document.body.appendChild(stats.dom);

}

function animate() {

    requestAnimationFrame( animate );
    if (window.groups) {
        window.groups.forEach(element => {
                element.rotateX(0.01);
                element.rotateY(0.01);
                element.rotateZ(0.01);

        });
    }
    window.stats.update();
    window.controls.update();
    renderer.render( scene, camera );
    


}