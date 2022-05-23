let contacto = document.querySelector("#contactForm");
contacto.addEventListener("submit", validarFormulario);

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