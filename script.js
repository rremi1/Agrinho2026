const dadosIBGE = {
    arvores: 9900000,
    agua: 70,
    alimentos: 300000000
};


function atualizar() {

    arvores += Math.floor(Math.random() * 10);
    agua += Math.floor(Math.random() * 50);
    alimentos += Math.floor(Math.random() * 5);

    document.getElementById("arvores").innerText = arvores;
    document.getElementById("agua").innerText = agua;
    document.getElementById("alimentos").innerText = alimentos;

    atualizarGrafico();
}

setInterval(atualizar, 2000);
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

const ctx = document.getElementById('graficoImpacto');

const grafico = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Árvores', 'Água', 'Alimentos'],
        datasets: [{
            data: [1200, 5000, 800],
            backgroundColor: [
                '#22c55e',
                '#38bdf8',
                '#fbbf24'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#fff'
                }
            }
        }
    }
});

function atualizarGrafico() {
    grafico.data.datasets[0].data = [arvores, agua, alimentos];
    grafico.update();
}