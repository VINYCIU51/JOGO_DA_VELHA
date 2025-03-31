export class GameState {
    constructor() {
        this.currentPlayer = "X";
        this.currentRound = 1;
        this.gameActive = true;
        this.board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        this.scores = { X: 0, O: 0 };
        this.lives = { X: 100, O: 100 };
    }

    switchPlayer() {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    }
}