// BOTÃO IR PARA SEÇÃO

document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("sobre").scrollIntoView({
        behavior:"smooth"
    });
});

// CONTADOR

let numero = document.getElementById("numero");

let valor = 0;

setInterval(() => {

    valor += 10;

    numero.innerText = valor;

    if(valor >= 1000){
        valor = 1000;
    }

}, 20);