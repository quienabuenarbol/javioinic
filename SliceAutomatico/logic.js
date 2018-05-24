/*
    1.- Dos imagenes de la misma pieza en dos versiones (dos colores).
    2.- Dos botones, uno para cada color, que cambien la imagen.
    3.- Otros dos botones, uno para que cambie de imagen automaticamente
        y otro para parar dicho automatismo.
*/

function preCarga(){
    
    var srcImagen1 = "imagenes/images1.jpeg";
    var srcImagen2 = "imagenes/images2.jpeg";
    
    var intervalo;
    var contenedorImagenes = document.getElementById("contImages");

    var botonColor1 = document.getElementById("bColor1");
    var botonColor2 = document.getElementById("bColor2");
    var botonAuto = document.getElementById("bAuto");
    var botonStop = document.getElementById("bStop");

    var elementImg = document.createElement("IMG");

    contenedorImagenes.appendChild(elementImg);
    elementImg.src = srcImagen1;


    botonColor1.onclick = function(){
        elementImg.setAttribute("src", srcImagen1);
    }

    botonColor2.onclick = function(){
        elementImg.src = srcImagen2;
    }

    botonAuto.onclick = function(){
        intervalo = setInterval(cambiarImagenes, 1000);
    }

    botonStop.onclick = function(){
        clearInterval(intervalo);
    }

    function cambiarImagenes(){
        console.log("entro en cambiar imagenes");
        if (elementImg.src == srcImagen1){
            console.log("cambio a imagen 2");         
            elementImg.src = srcImagen2;
        }else{
            console.log("cambio a imagen 1");            
            elementImg.src = srcImagen1;
        }
    }



}



window.onload = preCarga();