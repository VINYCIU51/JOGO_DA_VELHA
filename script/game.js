import { referencias, addListeners } from './ui.js';

export class Game {
    constructor(boardInstance, playerInstance) {
        this.boardgame = boardInstance;
        this.playerInstance = playerInstance;
        this.spaces = referencias().spaces;
    }

    start(jogar) {
        addListeners(this.spaces, jogar);
    }

    newRound(jogar) {
        this.boardgame.clearBoard(this.spaces);
        this.start(jogar);
    }

    newGame(jogar) {
        this.boardgame.clearBoard(this.spaces);
        this.playerInstance.reset();
        this.start(jogar);
    }

    draw() {
        return this.boardgame.board.every(linha => linha.every(coluna => coluna !== "")) && !this.lineWin();
    }

    lineWin() {
        const board = this.boardgame.board;
        // Linhas
        for (let i = 0; i < 3; i++) {
            if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== "") return true;
        }
        // Colunas
        for (let j = 0; j < 3; j++) {
            if (board[0][j] === board[1][j] && board[0][j] === board[2][j] && board[0][j] !== "") return true;
        }
        // Diagonais
        if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== "") return true;
        if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== "") return true;
        return false;
    }

    lifeWin() {
        return this.playerInstance.life.X <= 0 || this.playerInstance.life.O <= 0;
    }
}