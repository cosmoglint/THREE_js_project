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
	const near = 1;
	const far = 1000;
	
	camera = new THREE.PerspectiveCamera(fov,aspect_ratio,near,far);
	
	renderer = new THREE.WebGLRenderer({antialias:true});

	//setting renderer properties
	renderer.setSize(w_width,w_height);
	renderer.setClearColor("#e4e4e4");
}
init();

//adding renderer to the dom element
document.body.appendChild(renderer.domElement);

//renderer.render(scene,camera);

//to change window size everytime its resized
window.addEventListener('resize', () => {
	new_sizes();
	renderer.setSize(w_width,w_height);
	camera.aspect = (w_width/w_height);
	camera.updateProjectionMatrix;
})