const contenedorProductos = document.getElementById('contenedor-productos')

let stockProductos =[
    {   id: 1, tipo: "producto", cantidad: 1,  nombre: "Regulables", precio: 37000},
    {   id: 2, tipo: "producto", cantidad: 1,  nombre: "Progresivos", precio: 25000},
    {   id: 3, tipo: "producto", cantidad: 1,  nombre: "1/4 de Milla", precio: 30000},
    {   id: 4, tipo: "producto", cantidad: 1,  nombre: "Amortiguadores", precio: 33000},
    {   id: 5, tipo: "producto", cantidad: 1,  nombre: "Espirales", precio: 17000},
    {   id: 6, tipo: "producto", cantidad: 1,  nombre: "Tren Delantero", precio: 60000},
    {   id: 7, tipo: "producto", cantidad: 1,  nombre: "Frenos", precio: 40000},
    {   id: 8, tipo: "servicio", cantidad: 1,  nombre: "Detailing", precio: 10000},
    {   id: 9, tipo: "servicio", cantidad: 1,  nombre: "Lavado y Limpieza", precio: 6500},
    {   id: 10, tipo: "servicio", cantidad: 1, nombre: "Tratamiento de Acrilicos", precio: 5000},
    {   id: 11, tipo: "servicio", cantidad: 1, nombre: "Tratamiento de Espirales y Amortiguadores", precio: 7000},
    {   id: 12, tipo: "servicio", cantidad: 1, nombre: "Tratamiento de Ceramicos", precio: 8500}
]

//TERCER PASO

const contenedorCarrito = document.getElementById('carrito-contenedor')
//SEXTO PASO
const botonVaciar = document.getElementById('vaciar-carrito')
//SEXTIMO PASO, MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
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
//SEXTO PASO
botonVaciar.addEventListener('click', () => {
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
// 1- PRIMER PASO

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {

    //PARA AUMENTAR LA CANTIDAD Y QUE NO SE REPITA
    const existe = carrito.some (prod => prod.id === prodId) //comprobar si el elemento ya existe en el carro

    if (existe){ //SI YA ESTÁ EN EL CARRITO, ACTUALIZAMOS LA CANTIDAD
        const prod = carrito.map (prod => { //creamos un nuevo arreglo e iteramos sobre cada curso y cuando
            // map encuentre cual es el q igual al que está agregado, le suma la cantidad
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { //EN CASO DE QUE NO ESTÉ, AGREGAMOS EL CURSO AL CARRITO
        const item = stockProductos.find((prod) => prod.id === prodId)//Trabajamos con las ID
        //Una vez obtenida la ID, lo que haremos es hacerle un push para agregarlo al carrito
        carrito.push(item)
    }
    //Va a buscar el item, agregarlo al carrito y llama a la funcion actualizarCarrito, que recorre
    //el carrito y se ve.
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
}
//agregarAlCarrito(1) //Le pasamos el ID por parametro. Tenemos que asigarle como evento esta funcion al boton
//con el id de su producto correspondiente

// 5 - QUINTO PASO
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) //Busca el elemento q yo le pase y nos devuelve su indice.

    carrito.splice(indice, 1) //Le pasamos el indice de mi elemento ITEM y borramos 
    // un elemento 
    actualizarCarrito() //LLAMAMOS A LA FUNCION QUE CREAMOS EN EL TERCER PASO. CADA VEZ Q SE 
    //MODIFICA EL CARRITO
    console.log(carrito)
}

const actualizarCarrito = () => {
    //4- CUARTO PASO
    //LOS APPENDS SE VAN ACUMULANDO CON LO QE HABIA ANTES
    contenedorCarrito.innerHTML = "" //Cada vez que yo llame a actualizarCarrito, lo primero q hago
    //es borrar el nodo. Y despues recorro el array lo actualizo de nuevo y lo rellena con la info
    //actualizado
    //3 - TERCER PASO. AGREGAR AL MODAL. Recorremos sobre el array de carrito.

    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito (el modal)
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ("productoEnCarrito")
        div.innerHTML = `
        <p class="my-0">${prod.nombre}</p>
        <p class="my-0">Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar btn btn-secondary my-2">Eliminar</button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    //SEPTIMO PASO
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    //OCTAVO PASO
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    //Por cada producto q recorro en mi carrito, al acumulador le suma la propiedad precio, con el acumulador
    //empezando en 0.

}

let compra2 = document.querySelector("#btnbuy")
compra2.addEventListener("click", respuestaBuy);{
    function respuestaBuy() {
        Swal.fire({
            title: '¿Estas seguro de comprar estos servicios?',
            text: "Si no esta seguro, click en Cancelar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, estoy seguro.'

            }).then((result) => {
            
            if (result.isConfirmed) {
                Swal.fire(
                'Hecho!',
                'Tu compra ha sido procesada',
                'success'
                )}
        })
    }
}