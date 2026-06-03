// BOTÃO IR PARA SEÇÃO

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior:"smooth"
    });
});
const socket = new WebSocket("wss://seuservidor.com");

socket.onmessage = (event) => {

    const dados = JSON.parse(event.data);

    document.getElementById("arvores").innerText = dados.arvores;
};