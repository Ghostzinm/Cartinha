// senha correta
const senhaCorreta = "1309";  // coloque a senha que você quiser

// elementos
const input = document.getElementById("senha");
const botaoVerificar = document.getElementById("verificar");
const botaoCarta = document.getElementById("botaoCarta");

botaoVerificar.addEventListener("click", () => {
    if (input.value === senhaCorreta) {
        botaoCarta.style.pointerEvents = "auto"; // libera clique
        botaoCarta.style.opacity = "1";          // deixa normal
        alert("Senha correta! ❤️ Botão liberado!");
    } else {
        alert("Senha incorreta! Tente novamente.");
    }
});
