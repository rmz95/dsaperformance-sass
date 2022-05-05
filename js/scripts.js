const productos =  [{   id: 1, productos: "Regulables"},
                    {   id: 2, productos: "Progresivos"},
                    {   id: 3, productos: "1/4 de Milla"},
                    {   id: 4, productos: "Amortiguadores"},
                    {   id: 5, productos: "Espirales"},
                    {   id: 6, productos: "Tren Delantero"},
                    {   id: 7, productos: "Frenos"}]

const servicios =  [{   id: 8, servicios: "Detailing"},
                    {   id: 9, servicios: "Lavado y Limpieza"},
                    {   id: 10, servicios: "Tratamiento de Acrilicos"},
                    {   id: 11, servicios: "Tratamiento de Espirales y Amortiguadores"},
                    {   id: 12, servicios: "Tratamiento de Ceramicos"}]

for (const producto of productos) {
console.log(producto.id);
console.log(producto.productos);
}

for (const servicio of servicios)  {
    console.log(servicio.id);
    console.log(servicio.servicios);
}