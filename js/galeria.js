const varais = document.querySelectorAll('.varal');

varais.forEach(varal => {
    const fotos = varal.querySelectorAll('.foto-inner img');
    let index = 0;

    function trocarFoto() {
        fotos[index].classList.remove('ativa');
        index = (index + 1) % fotos.length;
        fotos[index].classList.add('ativa');

        // tempo aleatório entre 3s e 6s
        const tempo = Math.random() * (5000 - 1000) + 3000;

        setTimeout(trocarFoto, tempo);
    }

    // tempo inicial diferente pra cada polaroid
    const inicio = Math.random() * 2000 + 1000;
    setTimeout(trocarFoto, inicio);
});
