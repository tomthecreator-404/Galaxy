import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75,  window.innerWidth/ window.innerHeight , 0.1 ,1000);

const renderer = new THREE.WebGLRenderer({
    canvas : document.querySelector('#bg'), 
});


renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize(window.innerWidth , window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.useLegacyLights = true;
camera.position.setZ(30);


window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})
//Sun----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const sunTexture = new THREE.TextureLoader().load('Sun.jpg');
sunTexture.colorSpace = THREE.SRGBColorSpace;

const Sun = new THREE.Mesh(
 new THREE.SphereGeometry(30, 40 , 30 ),
 new THREE.MeshBasicMaterial({ map: sunTexture})
);
scene.add(Sun);
//Adding light to the sun
const pointLight = new THREE.PointLight(0xfdfbd3,10 ,300 , 0);
pointLight.position.set(0,0,0);
scene.add(pointLight);

// Mercury ------------------------------------------
const MercuryText = new THREE.TextureLoader().load('2k_mercury.jpg');
MercuryText.colorSpace = THREE.SRGBColorSpace;

const Mercury = new THREE.Mesh(
 new THREE.SphereGeometry(3.2, 40 , 30 ),
 new THREE.MeshStandardMaterial({ map:MercuryText})
);
const MercuryObj = new THREE.Object3D();
scene.add(MercuryObj);
MercuryObj.add(Mercury);
Mercury.position.x = 40;

//Venus ---------------------------------------------------------------------

const VenusTexture = new THREE.TextureLoader().load('2k_venus_surface.jpg');
VenusTexture.colorSpace = THREE.SRGBColorSpace;

const Venus = new THREE.Mesh(
  new THREE.SphereGeometry(5.2 , 40, 30),
  new THREE.MeshStandardMaterial({ map: VenusTexture})
);
const VenusObject = new THREE.Object3D();
scene.add(VenusObject);
VenusObject.add(Venus);
Venus.position.x = 56;
// Earth -----------------------------------
const EarthTexture = new THREE.TextureLoader().load('2k_earth_daymap.jpg');
EarthTexture.colorSpace = THREE.SRGBColorSpace;

const Earth = new THREE.Mesh(
new THREE.SphereGeometry(6.2, 40 ,30),
new THREE.MeshStandardMaterial({map: EarthTexture})
);


const EarthObject = new THREE.Object3D();
scene.add(EarthObject);
EarthObject.add(Earth);
Earth.position.x = 84;
//Earths Moon --------------
const MoonTexture = new THREE.TextureLoader().load('2k_moon.jpg');
MoonTexture.colorSpace = THREE.SRGBColorSpace;

const Moon = new THREE.Mesh(
new THREE.SphereGeometry(2.3 , 40 , 30),
new THREE.MeshStandardMaterial({map: MoonTexture})
);
const MoonObj = new THREE.Object3D();
scene.add(MoonObj);
Earth.add(MoonObj);
MoonObj.add(Moon);
Moon.position.x = 11;

//Mars -------------------------

const MarsTexture = new THREE.TextureLoader().load('2k_mars.jpg');
MarsTexture.colorSpace = THREE.SRGBColorSpace;

const Mars = new THREE.Mesh(
new THREE.SphereGeometry(4.5, 40 ,30),
new THREE.MeshStandardMaterial({map: MarsTexture})
);


const MarsObject = new THREE.Object3D();
scene.add(MarsObject);
MarsObject.add(Mars);
Mars.position.x = 130;

//Jupiter ----------------------------------

const JupiterTexture = new THREE.TextureLoader().load('2k_jupiter.jpg');
JupiterTexture.colorSpace = THREE.SRGBColorSpace;

const Jupiter = new THREE.Mesh(
new THREE.SphereGeometry(15, 40 ,30),
new THREE.MeshStandardMaterial({map: JupiterTexture})
);


const JupiterObject = new THREE.Object3D();
scene.add(JupiterObject);
JupiterObject.add(Jupiter);
Jupiter.position.x = 150;

//Saturn --------------------------------------------------

const SaturnTexture = new THREE.TextureLoader().load('2k_Saturn.jpg');
SaturnTexture.colorSpace = THREE.SRGBColorSpace;

const Saturn = new THREE.Mesh(
new THREE.SphereGeometry(12, 40 ,30),
new THREE.MeshStandardMaterial({map: SaturnTexture})
);


const SaturnObject = new THREE.Object3D();
scene.add(SaturnObject);
SaturnObject.add(Saturn);
Saturn.position.x = 200;

//Saturn Ring --------------------------------------- 

const SaturnRingTexture = new THREE.TextureLoader().load('saturn_rings.jpg');
SaturnRingTexture.colorSpace = THREE.SRGBColorSpace;

const SaturnRing = new THREE.Mesh(
  new THREE.RingGeometry(15, 20 ,32),
  new THREE.MeshBasicMaterial({map: SaturnRingTexture , side: THREE.DoubleSide})
  );
  SaturnObject.add(SaturnRing);
  SaturnRing.position.x = 200;
  
//Uranus ------------------------------------------------------------------

const UranusTexture = new THREE.TextureLoader().load('2k_uranus.jpg');
UranusTexture.colorSpace = THREE.SRGBColorSpace;

const Uranus = new THREE.Mesh(
new THREE.SphereGeometry(7.5, 40 ,30),
new THREE.MeshStandardMaterial({map: UranusTexture})
);


const UranusObject = new THREE.Object3D();
scene.add(UranusObject);
UranusObject.add(Uranus);
Uranus.position.x = 230;


// Neptune ------------------------------------------------------------------------

const NeptuneTexture = new THREE.TextureLoader().load('2k_neptune.jpg');
NeptuneTexture.colorSpace = THREE.SRGBColorSpace;

const Neptune = new THREE.Mesh(
new THREE.SphereGeometry(6.5, 40 ,30),
new THREE.MeshStandardMaterial({map: NeptuneTexture})
);


const NeptuneObject = new THREE.Object3D();
scene.add(NeptuneObject);
NeptuneObject.add(Neptune);
Neptune.position.x = 245;





//Background --------------------------
const spaceTexture = new THREE.TextureLoader().load('galaxy.jpg');
scene.background = spaceTexture    ;
spaceTexture.colorSpace = THREE.SRGBColorSpace;



const particlesGeometry = new THREE.BufferGeometry ;
const particlesCount = 15000;

const vertices = new Float32Array(particlesCount);

const Controls = new OrbitControls(camera , renderer.domElement);

for (let i=0; i < particlesCount; i++ ){
vertices[i] = (Math.random()- 0.5 ) * 1000 ; 
}

particlesGeometry.setAttribute('position' , new THREE.BufferAttribute(vertices, 3) );

const StarTextureloader = new THREE.TextureLoader();
const particleTexture = StarTextureloader.load('star.png');

const particleMaterial = new THREE.PointsMaterial({map: particleTexture , size: 0.2 , sizeAttenuation: true})

const stars = new THREE.Points(particlesGeometry , particleMaterial);
scene.add(stars);







function animate() {

requestAnimationFrame(animate);


Sun.rotateY(0.004);
Mercury.rotateY(0.006);
MercuryObj.rotateY(0.007);
Venus.rotateY(0.005);
VenusObject.rotateY(0.0027);
Earth.rotateY(0.006);
EarthObject.rotateY(0.0022);
Moon.rotateY(0.005);
MoonObj.rotateY(0.004);
Mars.rotateY(0.005);
MarsObject.rotateY(0.0026)
Jupiter.rotateY(0.004);
JupiterObject.rotateY(0.0016);
Saturn.rotateY(0.0056);
SaturnObject.rotateY(0.0020);
SaturnRing.rotateX(0.0014);
Uranus.rotateY(0.004);
UranusObject.rotateY(0.0017);
Neptune.rotateY(0.004);
NeptuneObject.rotateY(0.0015);



renderer.render(scene , camera);

}



animate();