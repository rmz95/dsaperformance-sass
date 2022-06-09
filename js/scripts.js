// // Variables definidas de cada producto y servicio

// const productos =  [{   id: 1, productos: "Regulables", precio: 37000},
//                     {   id: 2, productos: "Progresivos", precio: 25000},
//                     {   id: 3, productos: "1/4 de Milla", precio: 30000},
//                     {   id: 4, productos: "Amortiguadores", precio: 45000},
//                     {   id: 5, productos: "Espirales", precio: 17000},
//                     {   id: 6, productos: "Tren Delantero", precio: 60000},
//                     {   id: 7, productos: "Frenos", precio: 40000}]

// const servicios =  [{   id: 8, servicios: "Detailing", precio: 10000},
//                     {   id: 9, servicios: "Lavado y Limpieza", precio: 6500},
//                     {   id: 10, servicios: "Tratamiento de Acrilicos", precio: 5000},
//                     {   id: 11, servicios: "Tratamiento de Espirales y Amortiguadores", precio: 7000},
//                     {   id: 12, servicios: "Tratamiento de Ceramicos", precio: 8500}]

// // for (const producto of productos) {
// // console.log(producto.productos);
// // console.log(producto.precio);
// // }

// // for (const servicio of servicios)  {
// //     console.log(servicio.servicios);
// //     console.log(servicio.precio);
// // }

// // ID's de cada producto, servicio y boton Comprar 

// let comprar = document.getElementById("btnbuy")
// comprar.addEventListener("click", respuestaBuy)
//     function respuestaBuy() {
//         Swal.fire({
//             title: '¿Estas seguro de comprar estos productos?',
//             text: "Si no esta seguro, click en Cancelar",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Si, estoy seguro.'
//             }).then((result) => {
//             if (result.isConfirmed) {
//                 Swal.fire(
//                 'Hecho!',
//                 'Tu compra ha sido procesada',
//                 'success'
//                 )
//             }
//         })
//     }

// let regulables = document.getElementById("regulables")
// regulables.onclick = () => {console.log("Agregado Regulables al carrito")}

// let progresivos = document.getElementById("progresivos")
// progresivos.onclick = () => {console.log("Agregado Progresivos al carrito")}

// let milla = document.getElementById("14milla")
// milla.onclick = () => {console.log("1/4 de milla agregado al carrito")}

// let amorti = document.getElementById("amorti")
// amorti.addEventListener("click", respuestaClick)
//     function respuestaClick() {
//         console.log("Agregado Amortiguadores al carrito");
// }


// let espirales = document.getElementById("espirales")
// espirales.onclick = () => {console.log("Agregado espirales al carrito")}

// let trendelantero = document.getElementById("trendelantero")
// trendelantero.onclick = () => {console.log("Agregado tren delantero al carrito")}

// let frenos = document.getElementById("frenos")
// frenos.onclick = () => {console.log("Agregado frenos al carrito")}

// let detailing = document.getElementById("detail")
// detailing.onclick = () => {console.log("Agregado servicio de Detailing al carrito")}

// let lavado = document.getElementById("lavado")
// lavado.onclick = () => {console.log("Agregado servicio de Lavado y Limpieza al carrito")}

// let acrilico = document.getElementById("acrilico")
// acrilico.onclick = () => {console.log("Agregado servicio de Tratamientos de Acrilicos al carrito")}

// let espiamorti = document.getElementById("espiamor")
// espiamorti.onclick = () => {console.log("Agregado el servicio de Tratamiento de Espirales y Amortiguadores al carrito")}

// let ceramicos = document.getElementById("ceramicos")
// ceramicos.onclick = () => {console.log("Agregado servicio de Tratamiento de Ceramicos al carrito")}

// let compra2 = document.getElementById("btnbuy2")
// compra2.addEventListener("click", respuestaBuy)
//     function respuestaBuy() {
//         Swal.fire({
//             title: '¿Estas seguro de comprar estos servicios?',
//             text: "Si no esta seguro, click en Cancelar",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Si, estoy seguro.'

//             }).then((result) => {
            
//             if (result.isConfirmed) {
//                 Swal.fire(
//                 'Hecho!',
//                 'Tu compra ha sido procesada',
//                 'success'
//                 )}
//         })
//     }

// let checks = document.querySelectorAll('.valores')

//     for (let check of checks){
//         check.addEventListener("click", (evt)=>{
//             if(evt.currentTarget.getAttribute("checked")){
//                 console.log("poner el check")
//             }else {
//                 console.log("sacar check")
//             }
//         })
//     }



// // Local Storage y JSON

// const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};

// for (const producto of productos){
//     guardarLocal("listaProductos", JSON.stringify(productos));
// }

// for (const servicio of servicios){
//     guardarLocal("listaServicios", JSON.stringify(servicios))
// }

// // const carrito = JSON.parse(localStorage.getItem('carrito')) || []


// // Fetch y data.JSON

// fetch("../data/products.json")
//     .then((res) => {
//         console.log(res)
//         return res.json()
//     })
//     .then((respuesta)=>{
//         console.log(respuesta)
//     })

// const btnComprar = document.querySelector('.btnbuy');
// btnComprar.addEventListener('click', () => console.log("click"));


// let total = document.getElementsByClassName('.total');
// let checks = document.querySelectorAll('.valores');

// for (let check of checks){
//     check.addEventListener("click", (evt)=>{
//         if(evt.currentTarget.getAttribute("checked")){
//             console.log("poner check")
//         }   
//         else {
//             console.log("sacar check")
//         }
//     })
// }