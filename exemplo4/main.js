window.onload = () => {
    init();
}

function init(){
    //Resolução tela
    var ww = window.innerWidth, wh = window.innerHeight;
    
    //Renderer
    var renderer = new THREE.WebGLRenderer({canvas : document.getElementById('scene')});
    renderer.setSize(ww,wh);
    renderer.setClearColor(0x000);

    //Scene
    var scene = new THREE.Scene();

    //Camera
    var camera = new THREE.PerspectiveCamera(100, ww/wh, 1, 10000);
    camera.position.set(0, 0, 500);
    scene.add(camera);

    //Luz
    light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 500);
    scene.add(light);

    //Cubo
    var geometry = new THREE.BoxGeometry(200, 200, 200);
    var material = new THREE.MeshLambertMaterial({
        color: 0xe40e6e,
        wireframe: false
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    
    //Animação e Controles
    var animate = () => {
        requestAnimationFrame(animate);

        //Rodar cubo
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;

        document.onkeydown = (e) => { 
            console.log(e.keyCode)
            switch (e.keyCode) {
                case 38:
                    cube.rotation.x -= 0.1;
                    break;
                case 40:
                    cube.rotation.x += 0.1;
                    break;
                case 39:
                    cube.rotation.y += 0.1;
                    break;
                case 37:
                    cube.rotation.y -= 0.1;
                    break;
                case 87:
                    cube.material.wireframe = !cube.material.wireframe;
                    break;
                case 76:
                    light.intensity = light.intensity == 1 ? 0.2 : 1;
                    break;
            }
        }
        
        renderer.render(scene, camera);
    }
    animate();
}