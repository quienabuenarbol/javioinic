
/*
    form registro
    Nombre  -----> min 6 letras
    Email   -----> email validation
    Pass    -----> mín 6
    Repite Pass -> igual
    
    Botones  de enviar y limpiar.

    - Si valido ok...
    Enviar -> compongo un json {nombre, email, contraseña} Y POST al servicio "login".
*/
const DIR_SERV = "http://10.1.2.10:8080/appwebprofe/Login"
var xmlHttp = new XMLHttpRequest();

var botonEnviar = document.getElementById("btn_enviar");
var campoNombre = document.getElementById("nombrer");
var campoEmilio = document.getElementById("emilior");
var campoPass   = document.getElementById("campo_pass");
var campoTel    = document.getElementById("phone");

botonEnviar.onclick = function(){
    var invalidos = document.querySelectorAll(":invalid");
    if (document.querySelectorAll(":invalid").length != 0){
        alert("revisa los campos del formulario");
    }else{
        var nuevoLog = new Logueo(document.querySelector(".selected-flag").title, campoTel.value, campoNombre.value, campoEmilio.value, campoPass.value);
        enviarnuevoLog(nuevoLog);
    }
}

var repitePass = document.getElementById("repite_pass");
var i = 0;

repitePass.onkeyup = function(){
    //campoPass = document.getElementById("campo_pass").value;
    if (campoPass.value[i] == repitePass.value[i]){
        console.log(campoPass.value[i]);
    }else{
        alert("La contraseña debe ser la misma");
        repitePass.value = "";
        i = -1;
    }
    i++;
}

function Logueo(prefijo, telefono, nombre, mail, pass){
    this.prefijo = prefijo;
    this.telefono = telefono;
    this.nombre = nombre;
    this.mail = mail;
    this.pass = pass;
}

function enviarnuevoLog(nuevoLog){
    xmlHttp.onreadystatechange = procesarEventosRecibir;
    xmlHttp.open('POST', DIR_SERV, true); 
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.send(JSON.stringify(nuevoLog));
    console.log(xmlHttp.responseText);
}

function procesarEventosRecibir(){
    if  (xmlHttp.readyState == 4 && xmlHttp.status == 200){
    //lista = xmlHttp.responseText; 
    //lista = JSON.parse(lista);
    //lista = lista.results;
    console.log("dentrorr");
    //imprimirLista();
    } 
    else {
        lista = "ERROR";
    } 
}
