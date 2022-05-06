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

let comprar = document.getElementById("btnbuy")
comprar.onclick = () => {console.log("Tu compra ha sido existosa")}

let regulables = document.getElementById("regulables")
regulables.onclick = () => {console.log("Click")}

let progresivos = document.getElementById("progresivos")
progresivos.onclick = () => {console.log("Agregado Progresivos al carrito")}

let milla = document.getElementById("14milla")
milla.onclick = () => {console.log("1/4 de milla agregado al carrito")}

let amorti = document.getElementById("amorti")
amorti.addEventListener("click", respuestaClick)
function respuestaClick() {
    console.log("Agregado Amortiguadores al carrito");
}

let espirales = document.getElementById("espirales")
espirales.onclick = () => {console.log("Agregado espirales al carrito")}

let trendelantero = document.getElementById("trendelantero")
trendelantero.onclick = () => {console.log("Agregado tren delantero al carrito")}

let frenos = document.getElementById("frenos")
frenos.onclick = () => {console.log("Agregado frenos al carrito")}

let detailing = document.getElementById("detail")
detailing.onclick = () => {console.log("Agregado servicio de Detailing al carrito")}

let lavado = document.getElementById("lavado")
lavado.onclick = () => {console.log("Agregado servicio de Lavado y Limpieza al carrito")}

let acrilico = document.getElementById("acrilico")
acrilico.onclick = () => {console.log("Agregado servicio de Tratamientos de Acrilicos al carrito")}

let espiamorti = document.getElementById("espiamor")
espiamorti.onclick = () => {console.log("Agregado el servicio de Tratamiento de Espirales y Amortiguadores al carrito")}

let ceramicos = document.getElementById("ceramicos")
ceramicos.onclick = () => {console.log("Agregado servicio de Tratamiento de Ceramicos al carrito")}

let compra2 = document.getElementById("btnbuy2")
compra2.onclick = () => {console.log("Tu compra de los servicios ha sido existosa")}