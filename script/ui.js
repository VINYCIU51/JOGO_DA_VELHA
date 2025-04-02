export function referencias() {
    const scoreP1 = document.querySelector("#player1 .points");
    const scoreP2 = document.querySelector("#player2 .points");
    const lifeP1 = document.querySelector("#player1 .life-bar");
    const lifeP2 = document.querySelector("#player2 .life-bar");
    const spaces = document.querySelectorAll(".space");
    return { scoreP1, scoreP2, lifeP1, lifeP2, spaces };
}

export function addListeners(spaces, mainGame) {
    spaces.forEach((space, indice) => {
        space.removeEventListener("click", space.clickHandler);

        space.clickHandler = () => {
            const linha = Math.floor(indice / 3);
            const coluna = indice % 3;
            mainGame(linha, coluna, space);
        };

        space.addEventListener("click", space.clickHandler);
    });
}