
// Creo un array vacío dónde introduciré los nombres...
var arrayDeNombres = [];

// Guardo en una variable el elemento que hará de contenedor para la tabla que crearé a continuación...
var divTabla = document.getElementById("tabla");

// Creo los elemento necesarios para crear la tabla...
var tabla = document.createElement("table");
var columna = document.createElement("tr");
var celda = document.createElement("td");
celda.setAttribute("onclick","cogerId(event)");

// Creo la tabla añadiendo los elementos creados como hijos unos de otros...
divTabla.appendChild(tabla);
tabla.appendChild(columna);
columna.appendChild(celda);


function aniade_al_array(){
    // Obtener la referencia del elemento contenedor
    var nombreIntroducido = document.getElementById("nombre_intro");
    // Introducirlo en el array a continuación (push)...
    arrayDeNombres.push(nombreIntroducido.value);
    // Borramos del campo value...
    nombreIntroducido.value = "";
    genera_tabla(arrayDeNombres);
}

function genera_tabla(arrayDeNombres){

    var nuevoNombre = document.createElement("p");
    celda.appendChild(nuevoNombre);

    nuevoNombre.innerHTML = arrayDeNombres[arrayDeNombres.length - 1];
    var idProv = arrayDeNombres.length - 1;
    nuevoNombre.setAttribute("id", idProv);

}

function cogerId(event) { 
    var seleccionado = event.target;
    seleccionado.style.visibility = "hidden";
    seleccionado.remove;
}