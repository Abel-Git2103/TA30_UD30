//ALMACENAMOS EL STRING EN LA VARIABLE $TEXTO
$texto = prompt("Introduce cadena de texto");

//CREAMOS LA FUNCION
function compruebaCaracteres($texto) {
  if ($texto == $texto.toUpperCase()) {
    return "La cadena de texto solo tiene mayúsculas";
  } else if ($texto == $texto.toLowerCase()) {
    return "La cadena de texto solo tiene minúsculas";
  } else {
    return "La cadena de texto tiene mayúsculas y minúsculas";
  }
}
alert(compruebaCaracteres($texto));
