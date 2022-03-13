//ALMACENAMOS DATOS EN EL LA VARIABLE
$letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "N",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T",
];

//PEDIMOS CON POPUP LA NUMERACION DEL DNI E INICIALIZAMOS LA VARIABLE LETRA
$numeracion = prompt("Introduzca su numero del DNI:");
$letra = prompt("Introduzca su letra del DNI:");

//COMPROBAMOS SI ESTA DENTRO DEL RANGO LA NUMERACION
if ($numeracion < 0 || $numeracion > 99999999) {
  alert("El número proporcionado no es válido");
}

//CALCULAMOS LA LETRA DEL DNI Y COMPROBAMOS QUE ES VÁLIDA LA QUE INDICA EL USUARIO
$letracalculada = $letras[$numeracion % 23];

if ($letra == $letracalculada) {
  alert("LA LETRA INDICADA ES CORRECTA");
  alert(`EL DNI ${$numeracion}${$letracalculada} ES CORRECTO`);
} else {
  $letra != $letracalculada;
  alert("LA LETRA INDICADA NO ES CORRECTA");
  alert(`EL DNI ${$numeracion}${$letra} ES INCORRECTO`);
}
