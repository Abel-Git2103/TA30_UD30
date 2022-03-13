//ALMACENAMOS DATOS EN EL ARRAY $VALORES
$valores = [true, 5, false, "hola", "adios", 2];

//CALCULA EL STRING CON LONGITUD MAS LARGA Y LO MUESTRA POR CONSOLA
var max = 0;
var maxString;

$valores.forEach(function (val) {
  if (typeof val == "string" && val.length > max) {
    max = val.length;
    maxString = val;
  }
});

console.log(maxString);

//DETERMINAMOS LOS OPERADORES QUE NOS DEVUELVEN TRUE 1 Y FALSE 0
$true = $valores[0] + $valores[2];
console.log($true);

$false = $valores[0] * $valores[2];
console.log($false);

//DETERMINAMOS EL RESULTADO DE LAS CINCO OPERACIONES MATEMÁTICAS
$resultado = $valores[1] + $valores[5];
console.log($resultado);
$resultado = $valores[1] - $valores[5];
console.log($resultado);
$resultado = $valores[1] * $valores[5];
console.log($resultado);
$resultado = $valores[1] / $valores[5];
console.log($resultado);
$resultado = $valores[1] % $valores[5];
console.log($resultado);
