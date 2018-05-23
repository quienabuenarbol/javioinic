
/* 
1.-Crear un tipo persona que tenga los métodos altura, peso y
    nos calcule el I.M.C. numérico y nominal.
*/

function Persona(altura, peso){
    this.altura = altura;
    this.peso = peso;
}

Persona.prototype = {

    IMCnumerico : function ()
    {
        var IMCnumero = this.peso/(this.altura * this.altura);
        return IMCnumero;
    },

    IMCnominal : function ()
    {
        IMCnumero = this.IMCnumerico();
        var IMCnombre = "";
        
        if (IMCnumero < 16) {
            IMCnombre = 'desnutrido';
            
        } else if (IMCnumero >= 16 && IMCnumero < 18) {
            IMCnombre = 'delgado';
            
        } else if (IMCnumero >= 18 && IMCnumero < 25) {
            IMCnombre = 'ideal';
            
        } else if (IMCnumero >= 25 && IMCnumero < 31) {
            IMCnombre = 'sobrepeso';
        }
        else {
            IMCnombre = 'obeso';
        }
        
        return IMCnombre;
    }
}

