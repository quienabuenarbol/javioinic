
/*---- Constantes ----*/

const T_FILAS = 2;
const T_COLUMNAS = 2;

/*-Imagenes-*/
const listaImagenes = [
    "./resources/download.jpg",
    "./resources/firefox-300x300.png",
    "./resources/images.png"
]


/* ---- FUNCIONES ---- */

function elegirImagen(){
    var aleatorioImg = Math.floor(Math.random() * listaImagenes.length);

    console.log(aleatorioImg);
    return listaImagenes[aleatorioImg];
}

function genera_tabla(filas, columnas) {
    // Obtener la referencia del elemento contenedor
    var marcoJuego = document.getElementById("contenedorTabla");

    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
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
            imagenCelda.setAttribute("src", elegirImagen());
            reverso.setAttribute("class", "back_face");
            celda.appendChild(imagenCelda);
            celda.appendChild(reverso);
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
    //tabla.setAttribute("border", "2");
  }


  genera_tabla(T_FILAS, T_COLUMNAS);