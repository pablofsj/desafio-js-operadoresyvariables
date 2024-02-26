const diasUsuario = +prompt('ingresa un numero de dias')

const diasEnAño = 365
const diasEnSemana = 7

const totalAños = Math.floor(diasUsuario / diasEnAño)
const totalSemanas = Math.floor((diasUsuario % diasEnAño)/ diasEnSemana)
const totalDias = Math.floor((diasUsuario % diasEnAño)% diasEnSemana)

document.write(`El numero de dias ingresado equivale a ${totalAños} años, ${totalSemanas} semanas y ${totalDias} dias <br>`)


