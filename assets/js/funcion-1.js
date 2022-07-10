//Transforma esta declaración de función a una función de expresión. El ejercicio debe quedar en un archivo nombrado `1 funcion.js`

// declaración de función
function sumar(a, b, c) {
    return a+b+c
}

// función de expresión
const sumarTotal = function(a, b, c) {
    return a+b+c
}

console.log(sumarTotal(10,3,3));
