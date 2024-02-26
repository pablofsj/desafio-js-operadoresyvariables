const tempCelsius = +prompt('ingresa el numero de temperatura actual en grados celsius');


const tempKelvin = tempCelsius + 273.15
const tempFahrenheit =  (tempCelsius * 9/5) + 32

document.write(`La temperatura ingresada equivale a ${tempKelvin} grados Kelvin <br>
                La temperatura ingresada equivale a ${tempFahrenheit} grados Farenheit <br>`)


