export const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

export function clearBoard(espacos) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = "";
        }
    }
    espacos.forEach(espaco => { espaco.textContent = ""; });
}

export function validSpace(line, column) {
    return board[line][column] === "";
}

export function markSpace(line, column, currentPlayer, espaco) { // Adicione `espaco` como parâmetro
    board[line][column] = currentPlayer; // Atualiza o tabuleiro lógico

    // Manipulação do DOM (agora dentro de markSpace)
    espaco.innerHTML = `<div class="marcado">${currentPlayer}</div>`;
    espaco.firstElementChild.addEventListener('animationend', (e) => {
        e.target.classList.remove('marcado');
    }, { once: true });
}