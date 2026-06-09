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

    // =========================
    // GRÁFICO (CHART.JS)
    // =========================
    const ctx = document.getElementById("graficoImpacto");

    let grafico;

    if (ctx) {
        grafico = new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Florestas (ha)", "Uso da água (%)", "Produção agrícola (t)"],
                datasets: [{
                    label: "Dados IBGE aproximados",
                    data: [9900000, 70, 300000000],
                    backgroundColor: [
                        "#22c55e",
                        "#38bdf8",
                        "#fbbf24"
                    ]
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        labels: {
                            color: "#fff"
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: { color: "#fff" }
                    },
                    y: {
                        ticks: { color: "#fff" }
                    }
                }
            }
        });
    }

    function atualizarGrafico() {
        if (!grafico) return;

        grafico.data.datasets[0].data = [
            arvores,
            agua,
            alimentos
        ];

        grafico.update();
    }

});