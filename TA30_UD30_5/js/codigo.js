//ALMACENAMOS DATOS EN EL LAS VARIABLES $NUMERO1 Y $NUMERO2
$numero1 = 5;
$numero2 = 8;

//USAMOS CONDICIONES IF PARA QUE SE MUESTREN LOS MENSAJES DE LA FORMA CORRECTA
if ($numero1 >! $numero2) {
  console.log("numero1 no es mayor que numero2");
}

if (+$numero2) {
  console.log("numero2 es positivo");
}

if (-$numero1 || $numero1 != 0) {
  console.log("numero1 es negativo o distinto de cero");
}
if ($numero1 +1 != $numero2) {
  console.log(
    "incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
  );
}
