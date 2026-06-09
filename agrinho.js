document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("btn");
    const sobre = document.getElementById("sobre");

    btn.addEventListener("click", () => {
        sobre.scrollIntoView({
            behavior: "smooth"
        });
    });

});