// Faça um programa para ler o salário anual de um
// funcionário e o piso salarial mensal de sua
// categoria. Mostrar salário mensal do funcionário
// e dizer se está abaixo ou acima do piso salarial mensal.

function calcularSalario() {
  const salario_anual = document.getElementById("salario-anual").value;
  const piso_mensal = document.getElementById("piso-mensal").value;

  let salario_mensal = salario_anual / 12;

  if (salario_mensal > piso_mensal) {
    alert("Acima do piso");
  } else {
    alert("Abaixo do piso");
  }
}
