document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // BOTÃO EXPLORAR
    // =========================
    const btn = document.getElementById("btn");
    const sobre = document.getElementById("sobre");

    if (btn && sobre) {
        btn.addEventListener("click", () => {
            sobre.scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // =========================
    // HISTÓRIA INTERATIVA
    // =========================
    let atual = 1;

    window.proximoSlide = function () {
        const atualSlide = document.getElementById("slide" + atual);
        if (atualSlide) {
            atualSlide.classList.remove("ativo");
        }

        atual++;

        const proximoSlide = document.getElementById("slide" + atual);
        if (proximoSlide) {
            proximoSlide.classList.add("ativo");
        }
    };

    // =========================
    // CONTADORES (IMPACTO)
    // =========================
    let arvores = 9900000;   // IBGE (florestas plantadas)
    let agua = 70;           // % uso agricultura
    let alimentos = 300000000; // produção agrícola

    const arvoresEl = document.getElementById("arvores");
    const aguaEl = document.getElementById("agua");
    const alimentosEl = document.getElementById("alimentos");

    function atualizarContadores() {

        arvores += Math.floor(Math.random() * 1000);
        alimentos += Math.floor(Math.random() * 50000);

        if (arvoresEl) arvoresEl.innerText = arvores.toLocaleString("pt-BR");
        if (aguaEl) aguaEl.innerText = agua + "%";
        if (alimentosEl) alimentosEl.innerText = alimentos.toLocaleString("pt-BR");

        atualizarGrafico();
    }

    setInterval(atualizarContadores, 3000);
});