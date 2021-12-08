//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento (precio, descuento){
    const porcentaPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentaPrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPrice(){
    const precio = document.getElementById("precio");
    const descuento = document.getElementById("descuento");
    const priceValue = precio.value;
    const priceDiscount = descuento.value;

    const precioConDescuento = calcularPrecioConDescuento (priceValue, priceDiscount);
    const resultPrice = document.getElementById("precioParrado");
    resultPrice.innerText = "Precio con descuento son: $" + precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentaPrecioConDescuento,
//     precioConDescuento
// });