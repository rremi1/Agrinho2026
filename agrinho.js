document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btn");
    const sobre = document.getElementById("sobre");

    btn.addEventListener("click", () => {
        sobre.scrollIntoView({
            behavior: "smooth"
        });
    });

});
function animarNumero(id, final, velocidade) {
    let el = document.getElementById(id);
    let atual = 0;

    let intervalo = setInterval(() => {
        atual += Math.ceil(final / 50);
        if (atual >= final) {
            atual = final;
            clearInterval(intervalo);
        }
        el.innerText = atual;
    }, velocidade);
}

animarNumero("arvores", 1250, 30);
animarNumero("agua", 5400, 30);
animarNumero("alimentos", 820);