const musica = document.getElementById("musica");

const botao = document.getElementById("musicBtn");

botao.addEventListener("click", () => {

    if(musica.paused){

        musica.play();

        botao.innerHTML = "⏸ Pausar";

    } else {

        musica.pause();

        botao.innerHTML = "🎵 Música";

    }

});