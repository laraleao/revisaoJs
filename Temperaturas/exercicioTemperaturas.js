// Programar a conversão de temperatura digitada
// pelo usuário em graus Celsius para Fahrenheit.
// Mostrar o resultado.

// Celsius para Fahrenheit = número * 1,8 + 32
function calcularTemperatura() {
  let temperatura = parseFloat(document.getElementById("temp-celsius").value);
  temperatura = temperatura * 1.8 + 32;
  alert(`A temperatura em Fahrenheit é ${temperatura}!`);
}
