var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
 "Septiembre", "Octubre", "Noviembre", "Diciembre"]
 console.log (months[5], months[11])


console.log (months.sort())

months.unshift(1)
months.push(2)
console.log(months)

months.shift(1)
months.pop(2)
console.log(months)

months.reverse()
console.log(months)

console.log(months.join("-"))


// Creo una variable nueva con los meses ordenados porque estaban en orden alfabetico
var months1 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
"Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log(months1.slice(4,11))
