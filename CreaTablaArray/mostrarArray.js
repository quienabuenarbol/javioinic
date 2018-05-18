
var arrayDeNombres = [];
var divTabla = document.getElementById("tabla");

function aniade_al_array(){
    // Obtener la referencia del elemento contenedor
    var nombreIntroducido = document.getElementById("nombre_intro");
    // Introducirlo en el array a continuación (push)...
    arrayDeNombres.push(nombreIntroducido.value);
    genera_tabla(arrayDeNombres);
}


function genera_tabla(arrayDeNombres) {

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");
    var tBody = document.createElement("tbody");
    var hilera = document.createElement("tr");
    
    divTabla.appendChild(tabla);
    tabla.appendChild(tBody);
    tBody.appendChild(hilera);
    // Crea las celdas
    for (var i = 0; i < arrayDeNombres.length; i++) {
        // Crea las filas...
        var celda = document.createElement("td");
        var nuevoNombre = document.createElement("p");
        hilera.appendChild(celda);
        celda.appendChild(nuevoNombre);
        nuevoNombre.innerHTML = arrayDeNombres[i];
        //hilera.appendChild(celda);

        // agrega la hilera al final de la tabla (al final del elemento tbody)
    }

    // posiciona el <tbody> debajo del elemento <table>
    // appends <table> into <body>
    // modifica el atributo "border" de la tabla y lo fija a "2";
    //tabla.setAttribute("border", "2");
}