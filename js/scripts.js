const productos =  [{   id: 1, productos: "Regulables", precio: 37000},
                    {   id: 2, productos: "Progresivos", precio: 25000},
                    {   id: 3, productos: "1/4 de Milla", precio: 30000},
                    {   id: 4, productos: "Amortiguadores", precio: 45000},
                    {   id: 5, productos: "Espirales", precio: 17000},
                    {   id: 6, productos: "Tren Delantero", precio: 60000},
                    {   id: 7, productos: "Frenos", precio: 40000}]

const servicios =  [{   id: 8, servicios: "Detailing", precio: 10000},
                    {   id: 9, servicios: "Lavado y Limpieza", precio: 6500},
                    {   id: 10, servicios: "Tratamiento de Acrilicos", precio: 5000},
                    {   id: 11, servicios: "Tratamiento de Espirales y Amortiguadores", precio: 7000},
                    {   id: 12, servicios: "Tratamiento de Ceramicos", precio: 8500}]

for (const producto of productos) {
console.log(producto.productos);
console.log(producto.precio);
}

for (const servicio of servicios)  {
    console.log(servicio.servicios);
    console.log(servicio.precio);
}

