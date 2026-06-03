// BOTÃO IR PARA SEÇÃO

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior:"smooth"
    });
});
function contar(id, valorFinal, velocidade){

    const el = document.getElementById(id);

    if(!el) return;

    let valor = 0;

    const intervalo = setInterval(() => {

        valor += 10;
        el.innerText = valor;

        if(valor >= valorFinal){
            el.innerText = valorFinal;
            clearInterval(intervalo);
        }

    }, velocidade);
}

// inicia os contadores
contar("arvores", 1000, 20);
contar("agua", 5000, 10);
contar("alimentos", 2000, 15);
async function atualizarDados(){

    const resposta = await fetch("https://api.exemplo.com/impacto");
    const dados = await resposta.json();

    document.getElementById("arvores").innerText = dados.arvores;
    document.getElementById("agua").innerText = dados.agua;
    document.getElementById("alimentos").innerText = dados.alimentos;
}

setInterval(atualizarDados, 5000);