
var xmlHttp = new XMLHttpRequest();
const DIR_SERV = "http://10.1.2.10:8080/appwebprofe/SubirRecord";
var ranking;
var rankingNombres;
var rankingTiempos;


function procesarEventosRecibir(){
    
    if  (xmlHttp.readyState == 4 && xmlHttp.status == 200){
    ranking = xmlHttp.responseText; 
    ranking = JSON.parse(ranking);    
    //rankingNombres = ranking.ranking.nombre;
    //rankingTiempos = ranking.ranking.tiempo;
    //console.log(ranking);
    imprimirranking(ranking);
    } 
    else {
        ranking = "ERROR";
    }
    
}

function enviarPuntuacion(tiempo){
    xmlHttp.onreadystatechange = procesarEventosRecibir;
    var estaPuntuacion = new Puntuacion("Javi", tiempo);
    xmlHttp.open('POST', DIR_SERV, true); 
    xmlHttp.setRequestHeader('Content-Type', 'application/json');
    xmlHttp.send(JSON.stringify(estaPuntuacion));
    console.log(xmlHttp.responseText);
}

function Puntuacion(nombre, tiempo){
    this.nombre = nombre;
    this.tiempo = tiempo;
}

function imprimirranking(ranking){
    console.log(ranking);
    for (let i = 0; i < ranking.length; i++) {
        const rankingNombres = ranking[i].nombre;
        
    }
    //ranking.ranking. = JSON.stringify(ranking);
    //ranking.sort();
    
}