// Faça um programa para ler o número total de eleitores
// de um município, o número de votos brancos, nulos e
// válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

function calcularVotos() {
  const eleitores = Number(document.getElementById("total-eleitores").value);

  const votos_validos = Number(document.getElementById("votos-validos").value);
  const votos_brancos = Number(document.getElementById("votos-brancos").value);
  const votos_nulos = Number(document.getElementById("votos-nulos").value);

  const total_votos_validos = (votos_validos / eleitores) * 100;
  const total_votos_brancos = (votos_brancos / eleitores) * 100;
  const total_votos_nulos = (votos_nulos / eleitores) * 100;

  alert(`Os votos válidos são ${total_votos_validos} %.
  Os votos brancos são ${total_votos_brancos} %.
  Os votos nulos são ${total_votos_nulos} %.`);
}
