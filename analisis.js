//Funciones Helpers
function esPar (n){
    return (n % 2 === 0);
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

function medianaSalario (lista){
    const mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];
        const mediana = calcularMedia([personaMitad1, personaMitad2]);
        return mediana;
    }else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}





const salarioCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salarioColSorted = salarioCol.sort(
    function(a, b){
        return a - b;
    }
);

const medianaGeneral = medianaSalario(salarioColSorted);


const spliceStart = (salarioColSorted.length * 90) / 100;
const spliceCount = salarioColSorted.length - spliceStart;

const salarioColTop10 = salarioColSorted.splice(spliceStart, spliceCount);

const medianaTop10Col = medianaSalario(salarioColTop10);

console.log({medianaGeneral, medianaTop10Col});