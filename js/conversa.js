const sectionCelular = document.querySelector(".celular-section");

document.addEventListener("DOMContentLoaded", () => {

    const tela = document.getElementById("tela-chat");
    if (!tela || !sectionCelular) return;

    const conversas = [
        { quem: "sua", texto: "Q bonitinho" },
        { quem: "dela", texto: "Obgdoo" },
        { quem: "dela", texto: "Tudo bem?" },
        { quem: "sua", texto: "De nda" },
        { quem: "sua", texto: "Tudo bem sim" },
        { quem: "sua", texto: "E com vc?" }
    ];

    const novaConversa = [
        { quem: "sua", texto: "Quer namorar comigo?" },
        { quem: "dela", texto: "QUERO" },
        { quem: "sua", texto: "Aeeeeeee🎉🎉🎉 kkkkkkkkkkkkkkkk" },
        { quem: "sua", texto: "Oficial então" },
        { quem: "dela", texto: "Aaaaeeeeeeeeeee kkkkkkkkkkkkk" },
        { quem: "dela", texto: "Eu tô meio que sem reação ainda" },
        { quem: "sua", texto: "Eu também tô kkkkkkkkkkkk" },
        { quem: "sua", texto: "Meio inacreditável" }
    ];

    let index = 0;
    let rodando = false;
    let timeoutLoop = null;

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

    function adicionarMensagem(msg) {
        const el = document.createElement("div");
        el.classList.add("msg", msg.quem);
        el.textContent = msg.texto;
        tela.appendChild(el);
        tela.scrollTop = tela.scrollHeight;
    }

    // 🔥 efeito memória (mensagens rápidas mistas)
   function efeitoMemoria(callback) {
    let count = 0;
    const total = 18;
    const textos = ["Meu bem vc nn pode usar s", "lindaaaa", "Eu te amo", "rs", "sim"];

    const intervalo = setInterval(() => {
        if (!rodando) {
            clearInterval(intervalo);
            return;
        }

        const quem = Math.random() > 0.5 ? "sua" : "dela";
        const fake = document.createElement("div");

        fake.className = `msg blur ${quem}`;
        fake.textContent = textos[Math.floor(Math.random() * textos.length)];

        tela.appendChild(fake);
        tela.scrollTop = tela.scrollHeight;

        count++;

        if (count >= total) {
            clearInterval(intervalo);
            setTimeout(() => {
                if (!rodando) return;
                tela.innerHTML = "";
                callback();
            }, 500);
        }
    }, 60);
}


    function iniciarConversa() {
        if (!rodando || index >= conversas.length) return;

        mostrarDigitando();

        setTimeout(() => {
            if (!rodando) return;

            removerDigitando();
            const msgAtual = conversas[index];
            adicionarMensagem(msgAtual);
            index++;

            if (msgAtual.texto === "E com vc?") {
                setTimeout(() => {
                    efeitoMemoria(iniciarNovaConversa);
                }, 800);
            } else {
                setTimeout(iniciarConversa, 900);
            }
        }, 1400);
    }

    function iniciarNovaConversa() {
        let i = 0;

        function loopNova() {
            if (!rodando) return;

            if (i >= novaConversa.length) {
                timeoutLoop = setTimeout(() => {
                    if (!rodando) return;
                    tela.innerHTML = "";
                    index = 0;
                    iniciarConversa();
                }, 2500);
                return;
            }

            mostrarDigitando();
            setTimeout(() => {
                if (!rodando) return;
                removerDigitando();
                adicionarMensagem(novaConversa[i++]);
                setTimeout(loopNova, 1200);
            }, 1200);
        }

        loopNova();
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!rodando) {
                    rodando = true;
                    tela.innerHTML = "";
                    index = 0;
                    iniciarConversa();
                }
            } else {
                rodando = false;
                clearTimeout(timeoutLoop);
                tela.innerHTML = "";
                index = 0;
            }
        });
    }, { threshold: 0.4 });

    observer.observe(sectionCelular);
});
