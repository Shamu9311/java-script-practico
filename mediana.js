const lista = [100,200,500,400000000,800,300,10];
lista.sort(comparar);
const mitadLista = parseInt(lista.length / 2);

function esPar(n){
    if(n % 2 === 0){
        return true;
    }else{
        return false;
    }
}
function calcularMedia(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
}
function comparar(a, b){
    return a - b;
}

let mediana;
if(esPar(lista.length)){
    const e1 = lista[mitadLista - 1];
    const e2 = lista[mitadLista];
    mediana = calcularMedia([e1, e2]);
}else{
    mediana = lista[mitadLista];
}