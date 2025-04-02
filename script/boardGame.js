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
    spaces.forEach(space => {

        space.removeAttribute("data-ghost-mark");
        space.innerHTML = "";
    });
}

export function validSpace(line, column) {
    return board[line][column] === "";
}

export function markSpace(line, column, currentPlayer) {
    board[line][column] = currentPlayer;
}