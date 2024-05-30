const myCarouselElement = document.querySelector('#carouselExample')

const carousel = new bootstrap.Carousel(myCarouselElement, {
    ride: true,
    interval: 3000,
    pause: false
})

const miVentanaEmergente = document.getElementById('exampleModal')

miVentanaEmergente.addEventListener('show.bs.modal', function(event) {
    console.log('Se esta abriendo el modulo')

    let boton = event.relatedTarget
    let mensaje = boton.getAttribute('data-titulo')
    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('exampleModalLabel').innerText = mensaje
    document.querySelector('.modal-body').innerHTML = contenido
})

miVentanaEmergente.addEventListener('shown.bs.modal', function() {
    console.log('El modulo esta abierto')
})

miVentanaEmergente.addEventListener('hide.bs.modal', function() {
    console.log('Se esta cerrando el modulo')
})

miVentanaEmergente.addEventListener('hidden.bs.modal', function() {
    console.log('El modulo esta cerrado')
})