var random = (Math.random())
console.log(random)

if (random<0.5) {
    console.log("Lower than 0.5")
}
else {
    console.log("Greater than 0.5")
}


var age = Math.floor(Math.random()*101)
console.log(age)

if (age<2) {
    console.log("Bebe")
}
else if (age<12) {
    console.log("Nino")
}
else if (age<19) {
    console.log("Adolescente")
}
else if (age<30) {
    console.log("Joven")
}
else if (age<60) {
    console.log("Adulto")
}
else if (age<15) {
    console.log("Adulto Mayor")
}
else {
    console.log("Anciano")
}