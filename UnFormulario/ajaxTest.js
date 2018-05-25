
var btnsubmit = document.getElementById("submit");
btnsubmit.onclick = enviarDatos;

var xmlHttp = new XMLHttpRequest();
const DIR_SERVER = "http://10.1.2.10:8080/appwebprofe/RegistrarPersona";


function enviarDatos(){
    var name = document.getElementById("nombre").value;
    var age = document.getElementById("edad").value;
    
    console.log("nombre: " + name + ", Edad: " + age);
    
    var persona = {
        nombre: name,
        edad: age
    };
    
    persona_json = JSON.stringify(persona);
    console.log(persona_json);

    // Preparo la llamada...
    xmlHttp.onreadystatechange = procesarEventos;
    xmlHttp.open("POST", DIR_SERVER, true);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(persona_json);

    function procesarEventos(){
        console.log("procesareventos invocado " + xmlHttp.readyState);
        if (xmlHttp.readyState == 4){
            if (xmlHttp.status == 200) {
                console.log("Exito 200");
                console.log(xmlHttp.responseText);
                var mensajeRespuesta = JSON.parse(xmlHttp.responseText);
            }

        }
    }
}
