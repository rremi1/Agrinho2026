// BOTÃO EXPLORAR

const botao = document.getElementById("explorar");

botao.addEventListener("click", () => {

    document
    .getElementById("sobre")
    .scrollIntoView({
        behavior:"smooth"
    });

    botao.textContent = "Explorando...";
});

// CONTADOR

const numero = document.getElementById("numero");

let valor = 0;

const contador = setInterval(() => {

    valor += 10;

    numero.textContent = valor;

    if(valor >= 1000){

        clearInterval(contador);

    }

}, 20);

// ANIMAÇÃO DOS CARDS

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("ativo");

        }

    });

});

cards.forEach((card) => {

    observer.observe(card);

});

// MENSAGEM DE BOAS-VINDAS

window.addEventListener("load", () => {

    console.log("Agrinho 2026 carregado com sucesso!");

});