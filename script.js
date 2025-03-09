const score = document.querySelector(".score");
const espacos = document.querySelectorAll(".espaco")

let jogadorAtual = "X";

espacos.forEach(espaco => {
    espaco.addEventListener("click", () => {
        if (espaco.textContent === "") {
            espaco.textContent = jogadorAtual;

            jogadorAtual = jogadorAtual === "X" ? "O" : "X";

        }
    })

});
