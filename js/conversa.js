document.addEventListener("DOMContentLoaded", () => {

    const tela = document.getElementById("tela-chat");
    if (!tela) return; // segurança total

    const conversas = [
        { quem: "sua", texto: "Q bonitinho" },
        { quem: "dela", texto: "Obgdoo" },
        { quem: "dela", texto: "Tudo bem?" },
        { quem: "sua", texto: "De nda" },
        { quem: "sua", texto: "Tudo bem sim" },
        { quem: "sua", texto: "E com vc?" }
    ];

    let index = 0;

    function mostrarDigitando() {
        const typing = document.createElement("div");
        typing.className = "typing";
        typing.id = "typing";
        typing.innerHTML = `
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        `;
        tela.appendChild(typing);
        tela.scrollTop = tela.scrollHeight;
    }

    function removerDigitando() {
        const typing = document.getElementById("typing");
        if (typing) typing.remove();
    }

    function adicionarMensagem() {
        if (index >= conversas.length) return;

        const msg = conversas[index++];
        const el = document.createElement("div");

        el.classList.add("msg", msg.quem);
        el.textContent = msg.quem === "dela"
            ? msg.texto
            : msg.texto;

        tela.appendChild(el);
        tela.scrollTop = tela.scrollHeight;
    }

    function iniciarConversa() {
        if (index >= conversas.length) return;

        mostrarDigitando();

        setTimeout(() => {
            removerDigitando();
            adicionarMensagem();
            setTimeout(iniciarConversa, 900);
        }, 1400);
    }

    iniciarConversa();
});
