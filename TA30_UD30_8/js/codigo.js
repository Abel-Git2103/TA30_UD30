//CREAMOS LA FUNCION
$numero = prompt("Introcude un numero entero:");

function numeroDevuelto($numero) {
  if ($numero % 2 == 0) {
    return `El numero ${$numero} es par`;
  } else {
    return `El numero ${$numero} es impar`;
  }
}

alert(numeroDevuelto($numero));
