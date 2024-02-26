const numeroUno = +prompt('ingresa un numero mayor a 0');
const numeroDos = +prompt('ingresa otro numero mayor a 0 diferente del anterior');

const sumaNumero = numeroUno + numeroDos;
const restaNumero = numeroUno - numeroDos;
const divideNumero = numeroUno / numeroDos;
const multiplicaNumero = numeroUno * numeroDos;
const moduloNumero = numeroUno % numeroDos;


document.write(`La suma de los numeros es ${sumaNumero} <br>
                La resta de los numeros es ${restaNumero} <br>
                La division de los numeros es ${divideNumero} <br>
                La multiplicacion de los numeros es ${multiplicaNumero} <br>
                El modulo de los numeros es ${moduloNumero} <br> `)


