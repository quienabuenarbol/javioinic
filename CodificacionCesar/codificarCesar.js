
// Comunicaciones con el servidor...
var xmlHttp = new XMLHttpRequest();
const DIR_SERVER = "http://10.1.2.10:8080/appwebprofe/ObtenerClave";


// asignamos los elementos html necesarios a variables...
var textoAco  = document.getElementById("txar1");
var textoCo   = document.getElementById("txar2");
var botCodi   = document.getElementById("codificar");
var botEnviar = document.getElementById("enviar");

var textoACodificar;
var charCod;

var clave;


function codificar(textoACodificar){
    textoACodificar = textoAco.value;
    //var textoArray = textoACodificar.split('');
    /*
    textoArray.forEach(element => {
        var letra = textoArray.charAt(element);
    });
    */
   for (i = 0; i < textoACodificar.length; i++) {
       var codigoLetra = textoACodificar.charCodeAt(i);
       charCod = codigoLetra + clave;
       textoCo.value += charCod+ ", ";//String.fromCharCode(charCod) + ",";
    }
    
}

function enviarTexto(){
    
    var mensajeCompleto = {
        mensaje_original : textoACodificar,
        mensaje_cifrado  : charCod,
        clave            : clave
    }

    textoCo_json = JSON.stringify(mensajeCompleto);
    console.log(textoCo_json);

    xmlHttp.onreadystatechange = procesarEventos;
    xmlHttp.open("POST", DIR_SERVER, true);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(textoCo_json);
        
}

function preCarga(){
    xmlHttp.onreadystatechange = obtenerClave;
    xmlHttp.open("GET", DIR_SERVER, true);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(null);
}

function obtenerClave(){
    console.log("obtenerClave invocado " + xmlHttp.readyState);
    if (xmlHttp.readyState == 4){
        if (xmlHttp.status == 200) {
            console.log("Exito 200");
            console.log(xmlHttp.ObtenerClave);
            console.log(xmlHttp.responseText);
            console.log(parseInt(xmlHttp.responseText));
            clave = parseInt(xmlHttp.responseText);
        }
    }
}

function procesarEventos(){
    console.log("obtenerClave invocado " + xmlHttp.readyState);
    if (xmlHttp.readyState == 4){
        if (xmlHttp.status == 200) {
            console.log("Exito 200");
            console.log(textoCo_json);
        }
    }
}

botCodi.onclick = function(){codificar(textoAco);};
botEnviar.onclick = enviarTexto;

window.onload = preCarga;