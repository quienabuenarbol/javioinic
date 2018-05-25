
// Comunicaciones con el servidor...
var xmlHttp = new XMLHttpRequest();
const DIR_SERVER = "http://10.1.2.10:8080/appwebprofe/RegistrarPersona";


// asignamos los elementos html necesarios a variables...
var textoAco  = document.getElementById("txar1");
var textoCo   = document.getElementById("txar2");
var botCodi   = document.getElementById("codificar");
var botEnviar = document.getElementById("enviar");

var clave = 3;

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
       var charCod = codigoLetra + clave;
       textoCo.value += String.fromCharCode(charCod) + " ";
    }
    
}

function enviarTexto(){

    function procesarEventos(){
        console.log("procesareventos invocado " + xmlHttp.readyState);
        if (xmlHttp.readyState == 4){
            if (xmlHttp.status == 200) {
                console.log("Exito 200");
                console.log(xmlHttp.obtenerClave);
            }
        }
    }

    textoCo_json = JSON.stringify(textoCo.value);
    console.log(textoCo_json);

    xmlHttp.onreadystatechange = procesarEventos;
    xmlHttp.open("POST", DIR_SERVER, true);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(null);
}

botCodi.onclick = function(){codificar(textoAco);};
botEnviar.onclick = enviarTexto;