var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");