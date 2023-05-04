function descuentoProducto(precio, descuento){
    return (precio * (100 - descuento))/100;
}

function calcularDescuento(){
    const inputPrecio = document.getElementById('precio');
    const precio = inputPrecio.value;

    const inputDescuento = document.getElementById('descuento');
    const descuento = inputDescuento.value;
    
    const descuentoTotal = descuentoProducto(precio, descuento);
    document.getElementById('resultadoPrecioConDescuento').innerHTML = "Precio con el descuento: "+descuentoTotal+" $" ;
    document.getElementById('resultadoDescuento').innerHTML = "Descuento fue de: "+(precio-descuentoTotal)+" $";
}

const coupons = [
    "cupon1",
    "cupon2",
    "cupon3",
];

