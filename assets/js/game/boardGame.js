export class Board {
    constructor() {
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
    }

    clearBoard(spaces) {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.board[i][j] = "";
            }
        }
        spaces.forEach(space => {
            space.removeAttribute("data-ghost-mark");
            space.innerHTML = "";
        });
    }

    validSpace(line, column) {
        return this.board[line][column] === "";
    }

    markSpace(line, column, currentPlayer) {
        this.board[line][column] = currentPlayer;
    }
}