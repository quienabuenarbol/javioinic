
/*
var miCadena = new String("vale y dale 50");

console.log(miCadena);
console.log(miCadena.toString());
console.log(miCadena.toUpperCase());
console.log(miCadena.valueOf());
*/

function Dni (numero1){
    this.numero = numero1;
}

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
// Definiendo un método estático...
Dni.esValido = function(cadena){
    var valido = false;
    if (this.charAt(this.length - 1) == this.calcularLetra() ){
        valido = true;
    }

    return valido;
}

var dni = new Dni (350);

console.log(dni.numero);
//console.log("proto dni");
console.log(dni.__proto__);
console.log(valido);