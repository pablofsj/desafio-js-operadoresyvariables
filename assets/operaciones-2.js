const numeroUno = +prompt('ingresa un numero');
const numeroDos = +prompt('ingresa otro numero ');
const numeroTres = +prompt('ingresa otro numero');
const numeroCuatro = +prompt('ingresa otro numero');
const numeroCinco = +prompt('ingresa un ultimo numero');


const sumaNumero = numeroUno + numeroDos + numeroTres + numeroCuatro + numeroCinco;
const promedioNumero = sumaNumero / 5;


document.write(`La suma de los numeros es ${sumaNumero} <br>
                El promedio de los numeros es ${promedioNumero} <br>`)


