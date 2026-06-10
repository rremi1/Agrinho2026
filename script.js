document.addEventListener("DOMContentLoaded", () => {

document.getElementById("slide1")?.classList.add("ativo");

// BOTÃO

const btn = document.getElementById("btn");
const temas = document.getElementById("temas");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    temas.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// HISTÓRIA

let atual = 1;

window.proximoSlide = function () {

const atualSlide =
document.getElementById("slide" + atual);

if (atualSlide) {
atualSlide.classList.remove("ativo");
}

atual++;

const proximo =
document.getElementById("slide" + atual);

if (proximo) {
proximo.classList.add("ativo");
}

};

// CONTADORES

let arvores = 9900000;
let agua = 70;
let alimentos = 300000000;

const arvoresEl =
document.getElementById("arvores");

const aguaEl =
document.getElementById("agua");

const alimentosEl =
document.getElementById("alimentos");

function formatar(n) {
return n.toLocaleString("pt-BR");
}

setInterval(() => {

arvores +=
Math.floor(Math.random() * 500);

alimentos +=
Math.floor(Math.random() * 50000);

if (arvoresEl)
arvoresEl.innerText =
formatar(arvores);

if (aguaEl)
aguaEl.innerText =
agua + "%";

if (alimentosEl)
alimentosEl.innerText =
formatar(alimentos);

}, 2000);

// ANIMAÇÃO NO SCROLL

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll", () => {

sections.forEach(sec => {

const topo =
sec.getBoundingClientRect().top;

if (topo < window.innerHeight - 100) {
sec.classList.add("ativo");
}

});

});

});

function voltarTopo(){

window.scrollTo({
top:0,
behavior:"smooth"
});

atual = 1;

document
.querySelectorAll(".slide")
.forEach(slide=>{
slide.classList.remove("ativo");
});

document
.getElementById("slide1")
.classList.add("ativo");

}