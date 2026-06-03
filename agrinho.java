// BOTÃO IR PARA SEÇÃO

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior:"smooth"
    });
});
fetch("https://api.exemplo.com/dados")
const socket = new WebSocket("wss://seuservidor.com");

socket.onmessage = (event) => {

    const dados = JSON.parse(event.data);

    document.getElementById("arvores").innerText = dados.arvores;
};