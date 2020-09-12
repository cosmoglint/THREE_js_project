var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z = 2;



var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e4e4e4");
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {renderer.setSize(window.innerWidth,window.innerHeight);
																				camera.aspect = innerWidth/window.innerHeight; 
																				camera.updateProjectionMatrix();});

var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

function random_color(){
	var r = Math. floor(Math. random() * 256);
	var g = Math. floor(Math. random() * 256);
	var b = Math. floor(Math. random() * 256);
	return ("rgb("+r+","+g+","+b+")");
	
}



var sph1 = new THREE.SphereGeometry(1,20,20);
var box1  = new THREE.BoxGeometry(1,1,1 );
var pink_material = new THREE.MeshLambertMaterial({color: 0xFF00CC});
var yellow_material = new THREE.MeshLambertMaterial({color: 0xFFCC11});
var teal_material = new THREE.MeshLambertMaterial({color: 0x7744FF});
var red_material = new THREE.MeshLambertMaterial({color:"rgb(255,140,140)"});
var changing_material = THREE.MeshLambertMaterial({color: random_color()});
var sph_mesh = new THREE.Mesh(sph1,teal_material);
var box_mesh = new THREE.Mesh(box1,red_material);

scene.add(box_mesh);
scene.add(sph_mesh);

var light = new THREE.PointLight("rgb(255,140,140)",1,500);
sph_mesh.position.set(3,0,-1);
box_mesh.position.set(-1,1,-3);
light.position.set(10,0,25);
scene.add(light); 

var render = function(){
	requestAnimationFrame(render);
	
	box_mesh.rotation.x += 0.01;
	renderer.render(scene,camera);
	
}

function on_moved(event){
	event.preventDefault();
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
	
	raycaster.setFromCamera(mouse, camera);
	
	var intersects = raycaster.intersectObjects(scene.children, true);
	for (var i=0; i<intersects.length; i++){
		this.tl = new TimelineMax();
		this.tl.to(intersects[i].object.scale, 1 ,{x:2,ease:Expo.easeout});
		this.tl.to(intersects[i].object.scale, 1 ,{x:-1,ease:Expo.easeout});
		var changing_material = THREE.MeshLambertMaterial({color: random_color()});
	}
	
}
render();



window.addEventListener('click', on_moved);