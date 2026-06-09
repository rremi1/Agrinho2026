document.addEventListener("DOMContentLoaded", () => {

    // BOTÃO
    const btn = document.getElementById("btn");
    const sobre = document.getElementById("sobre");

    if (btn && sobre) {
        btn.addEventListener("click", () => {
            sobre.scrollIntoView({ behavior: "smooth" });
        });
    }

    // HISTÓRIA
    let atual = 1;

    window.proximoSlide = function () {
        const atualSlide = document.getElementById("slide" + atual);
        if (atualSlide) atualSlide.classList.remove("ativo");

        atual++;

        const proximoSlide = document.getElementById("slide" + atual);
        if (proximoSlide) proximoSlide.classList.add("ativo");
    };

    // CONTADORES
    let arvores = 9900000;
    let agua = 70;
    let alimentos = 300000000;

    const arvoresEl = document.getElementById("arvores");
    const aguaEl = document.getElementById("agua");
    const alimentosEl = document.getElementById("alimentos");

    function formatar(n) {
        return n.toLocaleString("pt-BR");
    }

    setInterval(() => {
        arvores += Math.floor(Math.random() * 500);
        alimentos += Math.floor(Math.random() * 50000);

        if (arvoresEl) arvoresEl.innerText = formatar(arvores);
        if (aguaEl) aguaEl.innerText = agua + "%";
        if (alimentosEl) alimentosEl.innerText = formatar(alimentos);
    }, 2000);

    // SCROLL ANIMATION (CORRETO AGORA)
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        sections.forEach(sec => {
            const topo = sec.getBoundingClientRect().top;
            if (topo < window.innerHeight - 100) {
                sec.classList.add("ativo");
            }
        });
    });

});