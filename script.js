document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // BOTÃO EXPLORAR
    // =========================
    const btn = document.getElementById("btn");
    const sobre = document.getElementById("sobre");

    if (btn && sobre) {
        btn.addEventListener("click", () => {
            sobre.scrollIntoView({ behavior: "smooth" });
        });
    }

    // =========================
    // HISTÓRIA INTERATIVA
    // =========================
    let atual = 1;

    window.proximoSlide = function () {
        const atualSlide = document.getElementById("slide" + atual);
        if (atualSlide) atualSlide.classList.remove("ativo");

        atual++;

        const proximoSlide = document.getElementById("slide" + atual);
        if (proximoSlide) proximoSlide.classList.add("ativo");
    };

    // =========================
    // CONTADORES
    // =========================
    let arvores = 9900000;
    let agua = 70;
    let alimentos = 300000000;

    const arvoresEl = document.getElementById("arvores");
    const aguaEl = document.getElementById("agua");
    const alimentosEl = document.getElementById("alimentos");

    function formatarNumero(n) {
        return n.toLocaleString("pt-BR");
    }

    function atualizarContadores() {
        arvores += Math.floor(Math.random() * 500);
        alimentos += Math.floor(Math.random() * 50000);

        if (arvoresEl) arvoresEl.innerText = formatarNumero(arvores);
        if (aguaEl) aguaEl.innerText = agua + "%";
        if (alimentosEl) alimentosEl.innerText = formatarNumero(alimentos);
    }

    setInterval(atualizarContadores, 2000);

    // =========================
    // SCROLL ANIMAÇÃO
    // =========================
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