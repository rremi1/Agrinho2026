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

const socket = new WebSocket("wss://seuservidor.com");

socket.onmessage = (event) => {

    const dados = JSON.parse(event.data);

    document.getElementById("arvores").innerText = dados.arvores;
};