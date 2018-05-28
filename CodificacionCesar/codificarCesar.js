
// Comunicaciones con el servidor...
var xmlHttp = new XMLHttpRequest();
const DIR_SERVER_CLAVE = "http://10.1.2.10:8080/appwebprofe/ObtenerClave";
const DIR_SERVER_MENSAJE = "http://10.1.2.10:8080/appwebprofe/EnviarMensaje";



// asignamos los elementos html necesarios a variables...
var textoAco  = document.getElementById("txar1");
var textoCo   = document.getElementById("txar2");
var botCodi   = document.getElementById("codificar");
var botEnviar = document.getElementById("enviar");

var textoACodificar;
var charCod;
var textoCodificado;

var clave;


function codificar(cosa){
    textoACodificar = cosa.value;
    //var textoArray = textoACodificar.split('');
    /*
    textoArray.forEach(element => {
        var letra = textoArray.charAt(element);
    });
    */
   for (i = 0; i < textoACodificar.length; i++) {
       var codigoLetra = textoACodificar.charCodeAt(i);
       charCod = codigoLetra + clave;
       textoCo.value += charCod;//String.fromCharCode(charCod) + ",";
       textoCodificado = textoCo.value;
    }
    
}

function enviarTexto(){
    
    var mensajeCompleto = {
        mensaje_original : textoACodificar,
        mensaje_cifrado  : textoCodificado,
        clave            : clave
    }

    textoCo_json = JSON.stringify(mensajeCompleto);
    console.log(textoCo_json);

    xmlHttp.onreadystatechange = procesarEventos;
    xmlHttp.open("POST", DIR_SERVER_MENSAJE, true);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(textoCo_json);
    //console.log(parseInt(xmlHttp.responseText));
    console.log(xmlHttp.responseText);
        
}

function preCarga(){
    xmlHttp.onreadystatechange = obtenerClave;
    xmlHttp.open("GET", DIR_SERVER_CLAVE, true);
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
    console.log("obtenerMensaje invocado " + xmlHttp.readyState);
    if (xmlHttp.readyState == 4){
        if (xmlHttp.status == 200) {
            console.log("Exito 200 Mensaje");
            console.log(textoCo_json);
            console.log(xmlHttp.responseText);
        }
    }
}

botCodi.onclick = function(){codificar(textoAco);};
botEnviar.onclick = enviarTexto;

window.onload = preCarga;