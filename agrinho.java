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
let agua = 5000;
let alimentos = 500;

const aguaElemento = document.getElementById("agua");
const alimentosElemento = document.getElementById("alimentos");

setInterval(() => {

    agua += Math.floor(Math.random() * 50);
    alimentos += Math.floor(Math.random() * 10);

    if (aguaElemento) {
        aguaElemento.innerText = agua;
    }

    if (alimentosElemento) {
        alimentosElemento.innerText = alimentos;
    }

}, 1000);