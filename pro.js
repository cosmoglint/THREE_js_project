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
	
	const fov = 75;
	const aspect_ratio = w_width/w_height;
	const near = 0.1;
	const far = 1000;
	
	camera = new THREE.PerspectiveCamera(fov,aspect_ratio,near,far);
	camera.position.z = 0;
	
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setSize(w_width,w_height);
	renderer.setClearColor("#f4f4f4");
	
	document.body.appendChild(renderer.domElement);
	
	loader = new THREE.GLTFLoader();
	loader.load("./pro.glb",function(gltf){
		scene.add(gltf.scene);
	})
	
}

window.addEventListener('resize', () => {
	new_sizes();
	renderer.setSize(w_width,w_height);
	camera.aspect = (w_width/w_height);
	camera.updateProjectionMatrix;
})

function render(){
	renderer.render(scene,camera);
}

function main_loop(){
	init();
	render();
}

main_loop();