// variable globales
const divRojo = document.getElementById("divRojo")
const divVerde = document.getElementById("divVerde")
const divAmarillo = document.getElementById("divAmarillo")
const divAzul = document.getElementById("divAzul")
const divResult = document.getElementById("divResult")

// Camabiar color con letras del teclado evento keydown
document.addEventListener('keydown', function (event) { 
    if (event.key === 'a') {
        divRojo.style.backgroundColor = 'red'
        /* Cambiar a color 1 */
    } else if (event.key === 's') {
        divVerde.style.backgroundColor = 'green'
        /* Cambiar a color 2 */
    } else if (event.key === 'd') {
        divAmarillo.style.backgroundColor = 'yellow'
    } else if (event.key === 'f') {
        divAzul.style.backgroundColor = 'blue'
    } 
})


// cambiar color al hacer click en el div
divRojo.addEventListener('click', function() {
    divRojo.style.backgroundColor = 'red'
    divResult.style.backgroundColor = 'red'
})

divVerde.addEventListener('click', function() {
    divVerde.style.backgroundColor = 'green'
    divResult.style.backgroundColor = 'green'
})

divAmarillo.addEventListener('click', function() {
    divAmarillo.style.backgroundColor = 'yellow'
    divResult.style.backgroundColor = 'yellow'
})

divAzul.addEventListener('click', function() {
    divAzul.style.backgroundColor = 'blue'
    divResult.style.backgroundColor = 'blue'
})