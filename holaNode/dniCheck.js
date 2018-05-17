
var argv = require("process.argv");
var dniIntroducido = process.argv[2];


// Constructor tipo DNI...
function Dni (numero, letra){
    this.numero = numero;
    this.letra = letra;
}

// Así añadimos un método dinámico...
Dni.prototype =
{
    calcularLetra : function()
    {
        var letra = "";        
        SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";
        letra = SECUENCIA_DNI.charAt(this.numero%23);
        return letra;
    }
}

// Así añadimos un método estático...
Dni.esValido = function(cadena){
    var valido = false;
    if (this.charAt(this.length - 1) == this.calcularLetra() ){
        valido = true;
    }

    return valido;
}

console.log(dniIntroducido);