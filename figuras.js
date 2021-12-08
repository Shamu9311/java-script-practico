//Cuadrado
//const ladoCuadrado = 5;
//const perimetroCuadrado = ladoCuadrado * 4;
//const areaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("Holaaaa")
function perimetroCuadrado (ladoCuadrado){
    return ladoCuadrado * 4;
}
function areaCuadrado(ladoCuadrado) {
    return ladoCuadrado*ladoCuadrado;
}
//Triángulo
//const ladoT1 = 6;
//const ladoT2 = 6;
//const baseT = 4;
//const alturaT = 5.5;
//const perimetroTriangulo = ladoT1 + ladoT2 + baseT;
//const areaTriangulo = (baseT * alturaT) / 2;

function perimetroTriangulo(ladoT1, ladoT2, baseT){
    return ladoT1 + ladoT2 + baseT;
}
function areaTriangulo(baseT, alturaT){
    return (baseT * alturaT) / 2;
}

function calcularAlturaIsoceles(l1, l2, base){
    if(l1 != l2){
        console.log("El lado A y el lado B deben ser iguales.");
    }else {
        if(l1 == base){
            console.log("La base y los lados deben tener dimensiones diferentes.");
        }else{
            const altura = Math.sqrt(Math.pow(l1,2) - Math.pow((base/2), 2));
            console.log(altura);
        }
    }
}

//Círculo
//const radio = 4;
//const diametro = radio * 2;
//const PI = Math.PI;
//const perimetroCirculo = diametro * PI;
//const areaCirculo = Math.pow(radio, 2) * PI;

function perimetroCirculo(radio){
    return radio * 2 * Math.PI;
}
function areaCirculo(radio){
    return Math.pow(radio, 2) *  Math.PI;
}


//Interacción con HTML
function calcularPerimetroCuadrado (){
    const input = document.getElementById("inputCuadrado");
    const value = (input.value);
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado (){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}