let contacto = document.querySelector("#contactForm");
contacto.addEventListener("submit", validarFormulario, confirmacionFormulario);

function confirmacionFormulario(){
    Swal.fire({
        title: '¿Estas seguro de enviar tu consulta?',
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
            'Tu consulta ha sido enviada.',
            'success'
            )}
    })
}

function validarFormulario(e){
    e.preventDefault();
    console.log("Formulario Enviado");
}




const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
forms.forEach(form => {

    form.addEventListener('submit', event => {

        if (!form.checkValidity()) {
        
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
    }, false)
})