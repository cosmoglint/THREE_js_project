//step 1
//create a scene
//camera
//renderer

function new_sizes(){
	w_width = window.innerWidth;
	w_height = window.innerHeight;
}
new_sizes();

let scene;
let camera;
let renderer;

function init(){

	scene = new THREE.Scene();
	
	const fov = 75;
	const aspect_ratio = w_width/w_height;
	const near = 0.1;
	const far = 1000;
	
	camera = new THREE.PerspectiveCamera(fov,aspect_ratio,near,far);
	camera.position.z = 5;
	
	renderer = new THREE.WebGLRenderer({antialias:true});

	//setting renderer properties
	renderer.setSize(w_width,w_height);
	renderer.setClearColor("#e4e4e4");
	
	//adding renderer to the dom element
	document.body.appendChild(renderer.domElement);
}


//to change window size everytime its resized
window.addEventListener('resize', () => {
	new_sizes();
	renderer.setSize(w_width,w_height);
	camera.aspect = (w_width/w_height);
	camera.updateProjectionMatrix;
})

function stuff_definitions(){
	var sph1 = new THREE.SphereGeometry(0.5,20,20);
	
//	var pink_material = new THREE.MeshLambertMaterial({color: 0xFF00CC});
//	
//	var sph_mesh = new THREE.Mesh(sph1,pink_material);
	
	var material1 = new THREE.PointsMaterial({color: 0xF3FFE2});
	var points = new THREE.Points(sph1,material1);
//	var sph1_mesh = new THREE.Mesh(sph1,material1);
	scene.add(points);
	
}

function render(){
	renderer.render(scene,camera);
}

//cause duh I dunno how people do this WITHOUT LOOOOPS;
function main_loop(){
	init();
	stuff_definitions();
	render();
}

main_loop();