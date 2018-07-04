window.onload = () => {
    init();
}

function init(){
    //Resolução tela
    var ww = window.innerWidth, wh = window.innerHeight;
    
    //Renderer
    renderer = new THREE.WebGLRenderer({
        canvas : document.getElementById('scene')
    });
    renderer.setSize(ww,wh);
    renderer.setClearColor(0x3F3F3F);

    //Scene
    scene = new THREE.Scene();

    //Camera
    camera = new THREE.PerspectiveCamera(75, ww/wh, 1, 10000);
    camera.position.set(0, 125, 500);
    scene.add(camera);

    //Luz
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 500, 500);
    scene.add(light);

    //Criar Shapes
    createShapes();

    renderer.render(scene, camera);
}

function createShapes(){
    
    material = new THREE.MeshLambertMaterial({
        color: 0xe40e6e,
        wireframe: true
    });

    //Cubo
    geometryBox = new THREE.BoxGeometry(50, 100, 50);
    box = new THREE.Mesh(geometryBox, material);
    box.rotation.y = -Math.PI/6;
    box.position.x = -300;
    scene.add(box);

    //Esfera
    geometrySphere = new THREE.SphereGeometry(50, 16, 10);
    sphere = new THREE.Mesh(geometrySphere, material);
    sphere.position.x = -150;
    scene.add(sphere);

    //Cilindro
    geometryCylinder = new THREE.CylinderGeometry(50, 50, 100, 16);
	cylinder = new THREE.Mesh(geometryCylinder, material);
    scene.add(cylinder);
    
    //Piramide
    geometryPyramid = new THREE.CylinderGeometry(0, 50, 100, 4);
    pyramid = new THREE.Mesh(geometryPyramid, material);
    pyramid.position.x = 150;
    scene.add(pyramid);

    //Plano
    geometryPlane = new THREE.PlaneGeometry(50, 100);
    plane = new THREE.Mesh(geometryPlane, material);
    plane.position.x = 300;
    scene.add(plane);
}