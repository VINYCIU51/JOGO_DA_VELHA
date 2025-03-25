export function referencias() {
    const score1 = document.querySelector("#player1 .points");
    const score2 = document.querySelector("#player2 .points");
    const life1 = document.querySelector("#player1 .life");
    const life2 = document.querySelector("#player2 .life");
    const espacos = document.querySelectorAll(".espaco");
    return { score1, score2, espacos };
}

export function addListeners(espacos, jogar) {
    espacos.forEach((espaco, indice) => {
        espaco.addEventListener("click", () => {
            const linha = Math.floor(indice / 3);
            const coluna = indice % 3;
            jogar(linha, coluna, espaco);
        });
    });
}