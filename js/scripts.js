const productsandservices = new Array ("Suspension Regulable", "Suspension Fija", "Espirales Progresivos", "Tren Delantero", "1/4 de Milla")
let p = productsandservices[0];
let s = productsandservices[3];
let length = productsandservices.length;

console.log(productsandservices)

// -------------------------------------------------------------------

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    manoObra() {
        this.precio = this.precio * 1.50;
    }
}

const productos = [];
productos.push(new Producto("Regulable", "35000"));
productos.push(new Producto("Fija", "35000"));
productos.push(new Producto("Progresivos", "20000"));

for (const producto of productos)
    producto.manoObra();

console.log(productos)

// -----------------------------------------------------------------------------

const servicios =  [{ id: 1, servicios: "Lavado y Limpieza" },
                    { id: 2, servicios: "Tratamiento de ceramicos" },
                    { id: 3, servicios: "Limpieza de tapizados" }];

for (const producto of servicios) {
    console.log(producto.id);
    console.log(producto.servicios);
}

// --------------------------------------------------------------------------
