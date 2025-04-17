
// Tabuleiro interno do jogo
export class Board {
    constructor() {
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
    }

    // Limpa todos os espaços do tabuleiro
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

    // Verfifica se o espaç é valido para jogar
    validSpace(line, column) {
        return this.board[line][column] === "";
    }

    // Marca o espaço no tabuleiro
    markSpace(line, column, currentPlayer) {
        this.board[line][column] = currentPlayer;
    }
}