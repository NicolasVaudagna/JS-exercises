var days = ["monday", "tuesday", "wednesday", "thursday", "friday"]
for (let contador = 0; contador < days.length; contador++) {
    console.log(days[contador]);
}

for (let index = 0; index < days.length; index++) {
    var days1 = days[index].substring(0,1)
    days1 = days1.toUpperCase()

    var days2 = days[index].substring(1)
    alert(days1+days2)
}

var sentence = ""
for (let index = 0; index < days.length; index++) {
    sentence = sentence + days[index] 
    
}
alert(sentence)

var empty = [""]
for (let index = 0; index < 10; index++) {
    // empty = empty + 1
    empty.push(1)
}
console.log (empty)







