export const board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

export function clearBoard(spaces) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            board[i][j] = "";
        }
    }
    spaces.forEach(space => { space.textContent = ""; });
}

export function validSpace(line, column) {
    return board[line][column] === "";
}

export function markSpace(line, column, currentPlayer, space) {
    board[line][column] = currentPlayer;
    space.innerHTML = `<div class="marked">${currentPlayer}</div>`;
    space.firstElementChild.addEventListener('animationend', (e) => {
        e.target.classList.remove('marked');
    }, { once: true });
}