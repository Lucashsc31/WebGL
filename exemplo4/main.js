window.onload = () => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
        100,
        window.innerWidth / window.innerHeight,
        0.1,
        10
    );

    camera.position.set(0, 0, 3);

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth-3, window.innerHeight-4);
    document.body.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
        color: 0xe40e6e,
        wireframe: true
    });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    var animate = () => {
        requestAnimationFrame(animate);

        //Rodar cubo
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.005;

        document.onkeydown = (e) => { 
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
            }
        }
        
        renderer.render(scene, camera);
    }
    animate();
}
