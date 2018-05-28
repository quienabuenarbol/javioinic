/*
- artistName
- trackId - hidden
- artWorkUrl100 - img
- trackPrice - int
- currency - string
- previewUrl - audio
*/

var xmlHttp = new XMLHttpRequest();

const DIR_API_ITUNES = "https://itunes.apple.com/search?term="

var term;
var media = "music";
var limit = 20

var terminoBusqueda = document.getElementById("searchTerm");
var botonBusqueda = document.getElementById("btnbuscar");
var direccionCompleta;
var respuesta_obj;

var filas;

function componerPeticion(){
    console.log("componerPeticion llamada");
    term = terminoBusqueda.value;
    direccionCompleta = DIR_API_ITUNES + term + "&media=" + media + "&limit=" + limit;

    xmlHttp.onreadystatechange = realizarBusqueda;
    xmlHttp.open("GET", direccionCompleta, true);
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(null);
}

function realizarBusqueda(){
    console.log("realizarBusqueda invocado " + xmlHttp.readyState);
    if (xmlHttp.readyState == 4){
        if (xmlHttp.status == 200) {
            console.log("Exito 200");
            respuesta_obj = JSON.parse(xmlHttp.responseText);
            console.log(respuesta_obj);
            filas = respuesta_obj.resultCount;
            genera_tabla(filas, 6);
        }
    }
}

function genera_tabla(filas, columnas) {
    // Obtener la referencia del elemento contenedor
    var marcoJuego = document.getElementById("contenedorTabla");

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < filas; i++) {
        // Crea las filas...
        var hilera = document.createElement("tr");
        // Las columnas...
        for (var j = 0; j < columnas; j++) {
            var celda = document.createElement("td");
            var imagenCelda = document.createElement("img");
            var reverso = document.createElement("div");
            //imagenCelda.setAttribute("src", elegirImagen());
            celda.appendChild(respuesta_obj.results[j].artistName);
            hilera.appendChild(celda);
        }

        // agrega la hilera al final de la tabla (al final del elemento tbody)
        tBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tBody);
    // appends <table> into <body>
    marcoJuego.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
}


function preCarga(){
    console.log("Precarga llamada");    
}

botonBusqueda.onclick = componerPeticion;
window.onload = preCarga;