function descuentoProducto(precio, descuento, cupon){

    resultadoDescuento = (precio * (100 - descuento))/100;
    resultadoDescuentoYCupon1 = (resultadoDescuento * (100 - 15))/100;
    resultadoDescuentoYCupon2 = (resultadoDescuento * (100 - 30))/100;

    if(cupon == "cupon1"){
        return resultadoDescuentoYCupon1;
    }else if(cupon == "cupon2"){
        return resultadoDescuentoYCupon2;
    }else{
        return resultadoDescuento;
    }
 
}

function calcularDescuento(){
    const inputPrecio = document.getElementById('precio');
    const precio = inputPrecio.value;

    const inputDescuento = document.getElementById('descuento');
    const descuento = inputDescuento.value;

    const inputCupon = document.getElementById('cupon');
    const cupon = inputCupon.value;
    
    const descuentoTotal = descuentoProducto(precio, descuento, cupon);
    document.getElementById('resultadoPrecioConDescuento').innerHTML = "Precio con el descuento: "+descuentoTotal+" $" ;
    document.getElementById('resultadoDescuento').innerHTML = "Descuento fue de: "+(precio-descuentoTotal)+" $";
}

const coupons = [
    "cupon1",
    "cupon2",
    "cupon3",
];

