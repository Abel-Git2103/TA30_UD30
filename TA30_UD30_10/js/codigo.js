//ALMACENAMOS EL STRING EN LA VARIABLE $TEXTO
$texto = prompt("Introduce cadena de texto");

//CREAMOS LA FUNCION
function palindromo($texto) {
  $textoCharList = $texto.split("");
  $texto = "";

  for (let index = 0; index < $textoCharList.length; index++) {
    if ($textoCharList[index] != " ") {
      $texto += $textoCharList[index];
    }
  }

  $textoList = $texto.split("");

  console.log($textoList);
  console.log($textoList.reverse());

  for (let index = 0; index < $textoList.length; index++) {
    if ($textoList[index] != $textoList.reverse()[index]) {
      return "No es palindromo";
    }
  }

  return "Es palindromo";
}

alert(palindromo($texto));
