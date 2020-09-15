function new_sizes(){
	w_width = window.innerWidth;
	w_height = window.innerHeight;
}
new_sizes();

let scene;
let camera;
let renderer;


function init(){
	scene = new THREE.scene();
	
	const fov = 75;
	const aspect_ratio = w_width/w_height;
	const near = 0.1;
	const far = 1000;
}