main();

//Inicio

function main(){
    const canvas = document.getElementById("myCanvas");
    
    //Inicializa contexto WebGL
    const gl = canvas.getContext("webgl") || canvas.msGetInputContext("webgl");

    //Verifica se o WebGL é disponivel e se funciona
    if(!gl){
        return console.log("Erro no WebGL, verifique a compatibilidade");
    }

    //Define a cor do fundo
    gl.clearColor(255, 0, 255, 1);

    //Limpa buffer de cores com uma cor especifica
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    return console.log("Canvas Finalizado!!");
}