//step 1
//create a scene
//camera
//renderer

function new_sizes(){
	w_width = window.innerWidth;
	w_height = window.innerHeight;
}

function random_color(){
	var r = Math. floor(Math. random() * 256);
	var g = Math. floor(Math. random() * 256);
	var b = Math. floor(Math. random() * 256);
	return ("rgb("+r+","+g+","+b+")");
	
}


new_sizes();

let scene;
let camera;
let renderer;

let cube_mesh;
let decahedron_mesh;

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

let running = true;

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

window.addEventListener('click', clicked);
window.addEventListener('mousemove', move_light);


function move_light(event){
	event.preventDefault();
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
	
	raycaster.setFromCamera(mouse, camera);
	white_light.position.set(mouse.x,mouse.y,3.9);
	scene.add(white_light);
	render();
	console.log(white_light.position);
}

function clicked(){
	event.preventDefault();
	
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
	
	raycaster.setFromCamera(mouse, camera);
	
	
	var intersects = raycaster.intersectObjects(scene.children, true);
	for (var i=0; i<intersects.length; i++){
		ran_col = random_color();
		intersects[i].object.material.color.set(ran_col);
	}
}

function stuff_definitions(){
	var cube1 = new THREE.BoxGeometry(2,2,2);
	var sph1 = new THREE.SphereGeometry(0.5,20,20);
	var decahedron1 = new THREE.DodecahedronGeometry(1,3);
	
	var teal_material = new THREE.MeshLambertMaterial({color: 0x7744FF});
	var pink_material = new THREE.MeshLambertMaterial({color: 0xFF00CC});
	var red_material = new THREE.MeshLambertMaterial({color:"rgb(255,140,140)"});
	
	cube_mesh = new THREE.Mesh(cube1,teal_material);
	var sph_mesh = new THREE.Mesh(sph1,pink_material);
	decahedron_mesh = new THREE.Mesh(decahedron1,red_material);
	
	sph_mesh.position.set(0,0,3);
	
	cube_mesh.position.set(0,0,2);
	
	decahedron_mesh.position.set(0,0,3)
	scene.add(decahedron_mesh);
	
	white_light = new THREE.PointLight("rgb(255,255,255)",3,10);
//	white_light = new THREE.PointLight("rgb(255,255,255)",3,2.5);
	white_light.position.set(-1,0,0);
	scene.add(white_light);
	
}

function animate(){
	var mesh = decahedron_mesh;
	requestAnimationFrame(animate);
	mesh.rotation.z += 0.005;
	mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.05;
	render();
}

function render(){
	
	renderer.render(scene,camera);
}

//cause duh I dunno how people do this WITHOUT LOOOOPS;
function main_loop(){
	init();
	stuff_definitions();
	
	render();
	animate();
}
main_loop();



//while (running){
//	main_loop();
//}