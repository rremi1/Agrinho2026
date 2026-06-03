// BOTÃO IR PARA SEÇÃO

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior:"smooth"
    });
});
let arvores = 1000;

setInterval(() => {
    arvores += Math.floor(Math.random() * 20);
    document.getElementById("arvores").innerText = arvores;
}, 1000);