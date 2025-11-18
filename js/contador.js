// Defina aqui a data inicial
const dataInicial = new Date("2025-09-13T00:00:00");

function atualizarContador() {
    const agora = new Date();
    let diff = agora - dataInicial; // milissegundos totais

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= dias * (1000 * 60 * 60 * 24);

    const horas = Math.floor(diff / (1000 * 60 * 60));
    diff -= horas * (1000 * 60 * 60);

    const minutos = Math.floor(diff / (1000 * 60));
    diff -= minutos * (1000 * 60);

    const segundos = Math.floor(diff / 1000);
    diff -= segundos * 1000;


    document.getElementById("resultado").textContent =
        `${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos`;
}

atualizarContador();
setInterval(atualizarContador, 1); // Atualiza a cada milissegundo
