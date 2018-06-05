
/*
    - Seguimiento de un evento minuto a minuto.
    - Diagrama de casos de usos:
        - Lector.-
*/

const URL_RESULTADO = "http://10.1.2.10:8080/Marcador/ActualizarInfoPartido";

var xmlHTTP = new XMLHttpRequest();

// Función de carga inicial
window.onload = function () {
    // cargamos los departamentos obtenidos por AJAX
    actualizarInfoPartidos();
};

function actualizarInfoPartidos() {
    // Preparo la llamada
    xmlHTTP.onreadystatechange = procesarActualizacion;
    // paramentros de open (metodo a usar, servicio que se llama, esAsincrono)
    xmlHTTP.open('GET', URL_RESULTADO, true);
    //xmlHTTP.setRequestHeader('Content-Type', 'application/json');
    xmlHTTP.send(null);
}

function procesarActualizacion() {
    var estado = xmlHTTP.readyState;
    console.log("procesar evento invocado " + estado);
    // cuando estado = 4 procesamos el mensaje HTTP de respuesta
    if (estado == 4 && xmlHTTP.status==200) {
        var lstDatos = JSON.parse(xmlHTTP.responseText);
        console.log("los departamentos son " + lstDatos);
        cargarSelectDepartamentos(lstDatos); 
    }
}

function cargarSelectDepartamentos(lstDatos) {
    var imagenComentario = document.getElementById("imagen");
    imagenComentario.src = "http://10.1.2.10:8080/Marcador/" + lstDatos.fotopartido;

    var golesLocales = document.getElementById("gol_loc");
    golesLocales.innerHTML = lstDatos.marcador.goles_local;

    var golesVisitante = document.getElementById("gol_vis");
    golesVisitante.innerHTML = lstDatos.marcador.goles_visitante;
    
    var tabla = document.getElementById("tabla");
    for (i = 0; i < lstDatos.listacomentarios.length; i++) {
        
        var hilera = document.createElement("tr");
        var datoMin = document.createElement("td");        
        var datoCom = document.createElement("td");

        datoMin.innerHTML = lstDatos.listacomentarios[i].minuto;
        hilera.appendChild(datoMin);

        datoCom.innerHTML = lstDatos.listacomentarios[i].comentario;
        hilera.appendChild(datoCom);
        

        tabla.appendChild(hilera);
    }
}