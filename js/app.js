const contenedorProductos = document.getElementById('contenedor-productos')

let stockProductos =[
    {   id: 1, tipo: "Producto", cantidad: 1,  nombre: "Regulables", precio: 37000},
    {   id: 2, tipo: "Producto", cantidad: 1,  nombre: "Progresivos", precio: 25000},
    {   id: 3, tipo: "Producto", cantidad: 1,  nombre: "1/4 de Milla", precio: 30000},
    {   id: 4, tipo: "Producto", cantidad: 1,  nombre: "Amortiguadores", precio: 33000},
    {   id: 5, tipo: "Producto", cantidad: 1,  nombre: "Espirales", precio: 17000},
    {   id: 6, tipo: "Producto", cantidad: 1,  nombre: "Tren Delantero", precio: 60000},
    {   id: 7, tipo: "Producto", cantidad: 1,  nombre: "Frenos", precio: 40000},
    {   id: 8, tipo: "Servicio", cantidad: 1,  nombre: "Detailing", precio: 10000},
    {   id: 9, tipo: "Servicio", cantidad: 1,  nombre: "Lavado y Limpieza", precio: 6500},
    {   id: 10, tipo: "Servicio", cantidad: 1, nombre: "Tratamiento de Acrilicos", precio: 5000},
    {   id: 11, tipo: "Servicio", cantidad: 1, nombre: "Tratamiento de Espirales y Amortiguadores", precio: 7000},
    {   id: 12, tipo: "Servicio", cantidad: 1, nombre: "Tratamiento de Ceramicos", precio: 8500}
]

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')
const botonComprar = document.getElementById('btn-buy');

const contadorCarrito = document.getElementById('contadorCarrito')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

botonComprar.addEventListener('click', (confirmacionCompra) => {
    carrito.length = 0
    actualizarCarrito()
})

const lista = document.querySelector('#contenedor-productos')

fetch('../data/products.json')
    .then( (res) => res.json())
    .then( (data) => {
        data.forEach((producto) => {
            const div = document.createElement('div')
            div.classList.add("card", "card-group", "py-4", "card-body", "row", "gx-4", "gx-lg-5", "my-2")
            div.innerHTML = `
            <div class="my-0">
            <div class="my-1 text-center">
            <h3 class="card-title">${producto.nombre}</h3>
            <p class="card-text">${producto.tipo}<p>
            <p class="precioProducto card-text">Precio:$ ${producto.precio}</p>
            <button id="agregar${producto.id}" class="boton-agregar btn btn-primary">Agregar </button>
            </div>
            </div>
            `
            contenedorProductos.appendChild(div)

            const boton = document.getElementById(`agregar${producto.id}`)
            boton.addEventListener('click', () => {
                agregarAlCarrito(producto.id)
            })
        })
    })


const agregarAlCarrito = (prodId) => {

    //Aumenta la cantidad y no se va a repetir
    const existe = carrito.some (prod => prod.id === prodId) 

    if (existe){ 
        const prod = carrito.map (prod => {
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito()
}


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1) 
    
    actualizarCarrito()
    console.log(carrito)
}

const actualizarCarrito = () => {
    
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ("productoEnCarrito")
        div.innerHTML = `
        <p class="my-0">${prod.nombre}</p>
        <p class="my-0">${prod.tipo}</p>
        <p class="my-0">Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar btn btn-secondary my-2">Eliminar</button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

}

// function comprarBotonClicked(){
//     contenedorCarrito.innerHTML = '';
//     actualizarCarrito();
// }

// let compra2 = document.querySelector("#btnbuy")
// compra2.addEventListener("click", respuestaBuy);{
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
// }