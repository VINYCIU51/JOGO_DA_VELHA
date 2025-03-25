export function referencias() {
    const score1 = document.querySelector("#player1 .points");
    const score2 = document.querySelector("#player2 .points");
    const spaces = document.querySelectorAll(".space");
    return { score1, score2, spaces };
}

export function addListeners(spaces, jogar) {
    spaces.forEach((space, indice) => {
        space.addEventListener("click", () => {
            const linha = Math.floor(indice / 3);
            const coluna = indice % 3;
            jogar(linha, coluna, space);
        });
    });
}