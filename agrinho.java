function irParaSecao(id){

    // rolagem suave até a seção
    window.scrollTo({
        top: document.getElementById(id).offsetTop,
        behavior: "smooth"
    });

}



/* =========================================
   EFEITO NOS BOTÕES
========================================= */

const botoes = document.querySelectorAll(".card button");

botoes.forEach((botao) => {

    botao.addEventListener("mouseenter", () => {
        botao.style.transform = "scale(1.05)";
    });

    botao.addEventListener("mouseleave", () => {
        botao.style.transform = "scale(1)";
    });

});



/* =========================================
   EFEITO NAS IMAGENS
========================================= */

const imagens = document.querySelectorAll(".card img");

imagens.forEach((imagem) => {

    imagem.addEventListener("mouseenter", () => {
        imagem.style.transform = "translateY(-8px)";
    });

    imagem.addEventListener("mouseleave", () => {
        imagem.style.transform = "translateY(0)";
    });

});