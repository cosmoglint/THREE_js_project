function new_sizes(){
	w_width = window.innerWidth;
	w_height = window.innerHeight;
}
new_sizes();

let scene;
let camera;
let renderer;
let loader;


function init(){
	scene = new THREE.Scene();
	
	const fov = 35;
	const aspect_ratio = w_width/w_height;
	const near = 0.1;
	const far = 1000;
	
	camera = new THREE.PerspectiveCamera(fov,aspect_ratio,near,far);
	camera.position.set(0,0,5);
	
	renderer = new THREE.WebGLRenderer({antialias: true,alphs:true});
	renderer.setSize(w_width,w_height);
//	renderer.setClearColor("#f4f4f4");
	
	document.body.appendChild(renderer.domElement);
	
	loader = new THREE.GLTFLoader();
	loader.load("./files/scene.gltf",function(gltf){
		var object = gltf.scene;
		gltf.scene.scale.set(2,2,2);			   
		gltf.scene.position.x = 0;				    //Position (x = right+ left-) 
		gltf.scene.position.y = 0;				    //Position (y = up+, down-)
		gltf.scene.position.z = 0;
		scene.add(gltf.scene);
	})
	
}

window.addEventListener('resize', () => {
	new_sizes();
	renderer.setSize(w_width,w_height);
	camera.aspect = (w_width/w_height);
	camera.updateProjectionMatrix;
})

function stuff_definitions(){
	var cube1 = new THREE.BoxGeometry(2,2,2);
	var teal_material = new THREE.MeshLambertMaterial({color: 0x7744FF});
	cube_mesh = new THREE.Mesh(cube1,teal_material);
	cube_mesh.position.set(0,0,2);
	scene.add(cube_mesh);
	white_light = new THREE.PointLight("rgb(255,255,255)",3,2.5);
	white_light.position.set(-1,0,0);
	scene.add(white_light);

}

function render(){
	renderer.render(scene,camera);
}

function main_loop(){
	init();
	stuff_definitions(); 
	render();
}

main_loop();