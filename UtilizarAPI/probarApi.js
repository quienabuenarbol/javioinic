/*
- artistName
- trackId - hidden
- artWorkUrl100 - img
- trackPrice - int
- currency - string
- previewUrl - audio

    TODO 
    - Gif de carga.
    - Cuando la busqueda no devuelve resultados.
    - busca con intro. (onChange)
    - Hacer checkbox.
*/

var xmlHttp = new XMLHttpRequest();

const DIR_API_ITUNES = "https://itunes.apple.com/search?term="

var term;
var media = "music";
var limit = 20;

var gifEspera;

var terminoBusqueda = document.getElementById("searchTerm");
var botonBusqueda = document.getElementById("btnbuscar");
var direccionCompleta;
var respuesta_obj;
var marcoJuego = document.getElementById("contenedorTabla");


var filas;

var lista_detalles = [
    "trackId",
    "artistName",
    "artworkUrl60",
    "trackPrice",
    "currency",
    "previewUrl"
];

function componerPeticion(){
    console.log("componerPeticion llamada");
    term = terminoBusqueda.value;
    direccionCompleta = DIR_API_ITUNES + term + "&media=" + media + "&limit=" + limit;

    marcoJuego.appendChild(gifEspera); 

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
            numeroDetalles = lista_detalles.length;
            marcoJuego.removeChild(marcoJuego.firstChild);
            generar_tabla(filas, numeroDetalles);
        }
    }
}

function generar_tabla(filas, columnas){
    //var marcoJuego = document.getElementById("contenedorTabla");
    var tabla = document.createElement("table");
    for (var i = 0; i < filas; i++) {
        var hilera = document.createElement("tr");
        for (var j = 0; j < columnas; j++) {
            var celda = document.createElement("td");
            var detalle = lista_detalles[j];
            switch(j){
                case 0:
                    celda.innerHTML = respuesta_obj.results[i][detalle];
                    celda.setAttribute("style", "visibility:hidden");
                    break;
                case 1:
                    celda.innerHTML = respuesta_obj.results[i][detalle];
                    break;
                case 2:
                    var imagenCelda = document.createElement("img");
                    imagenCelda.setAttribute("src", respuesta_obj.results[i][detalle]);
                    celda.appendChild(imagenCelda);
                    break;
                case 3:
                    celda.innerHTML = respuesta_obj.results[i][detalle] + 2;
                    break;
                case 4:
                    celda.innerHTML = respuesta_obj.results[i][detalle];
                    break;
                case 5:
                    var clip = document.createElement("audio");
                    clip.setAttribute("controls","Play");
                    var clipSrc = document.createElement("source");
                    clipSrc.setAttribute("src", respuesta_obj.results[i][detalle]);
                    clip.appendChild(clipSrc);
                    celda.appendChild(clip);
                    break;
                default:
                    console.log("case default");
                    break;          
            }
            hilera.appendChild(celda);
        }
        tabla.appendChild(hilera);
    }
    marcoJuego.appendChild(tabla);



}

 /*
function generar_tabla(filas, columnas) {

    // Obtener la referencia del elemento contenedor
    var marcoJuego = document.getElementById("contenedorTabla");
    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tBody = document.createElement("tbody");
    

    for (var i = 0; i < filas; i++) {

        var hilera = document.createElement("tr");
        var artistaActual = respuesta_obj.results[i].artistName
        hilera.innerHTML = artistaActual;

        for (var j = 0; j < columnas; j++) {
            var celda = document.createElement("td");
            var imagenCelda = document.createElement("img");
            imagenCelda.setAttribute("src", respuesta_obj.results[i].artworkUrl60);
            celda.appendChild(imagenCelda);
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
*/


function preCarga(){
    gifEspera = document.createElement("img");
    gifEspera.setAttribute("src", "https://thumbs.gfycat.com/ZestyKeenCrocodile-max-1mb.gif");
    console.log("Precarga llamada");
}

botonBusqueda.onclick = componerPeticion;
window.onload = preCarga;