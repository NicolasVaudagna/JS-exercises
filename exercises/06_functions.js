function suma (a, b) {
    return a + b;
}
var resultado = suma(10, 15)
console.log(resultado)

function suma2 (a, b) {
    if (typeof (a) === "number" && typeof (b) === "number"){
        return a + b
    }
    else {
        return NaN
    }
}

function validador (a){
    return Number.isInteger(a)
}
console.log(validador(10))

function suma3 (a, b) {
    if (typeof (a) === "number" && typeof (b) === "number"){
        if (!validador(a) || !validador(b)){
            alert("ERROR")
            a = Math.round(a) 
            b = Math.round(b)
        }
        return a + b
    }
    else {
        return NaN
    }
}
console.log(suma3(10.3, 4))

function validador2 (a) {
    if (typeof (a) === "number"){
        if (!validador(a)){
            alert("error")
        }
        return Math.round(a)
    }
    return NaN
}

function suma4 (a, b){
    return validador2(a) + validador2(b)
}

console.log (suma4 (10, "hola"))
