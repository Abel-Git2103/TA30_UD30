//CALCULAMOS EL FACTORIAL DE UN NUMERO ENTERO
$numero = prompt("Introduce un numero entero");
$factorial = 1;

for (let index = $numero; index >= 1; index--) {
  $factorial *= index;  
}

alert(`El factorial de ${$numero}! es = ${$factorial}`)