import { referencias } from "./ui.js";

const { scoreP1, scoreP2, lifeP1, lifeP2 } = referencias();

export class Player {
    constructor() {
        this._currentPlayer = "X";
        this.score = { X: 0, O: 0 };
        this.life = { X: 100, O: 100 };
    }

    get opponent() {
        return this._currentPlayer === "X" ? "O" : "X";
    }

    get currentPlayer() {
        return this._currentPlayer;
    }

    switch() {
        this._currentPlayer = this._currentPlayer === "X" ? "O" : "X";
    }

    updateScore(points = 10) {
        this.score[this._currentPlayer] += points;
        const scoreElement = this._currentPlayer === "X" ? scoreP1 : scoreP2;
        scoreElement.textContent = this.score[this._currentPlayer];
    }

    updateLife(damage = 50) {
        this.life[this.opponent] -= damage;
        const lifeElement = this.opponent === "X" ? lifeP1 : lifeP2;
        lifeElement.style.width = `${this.life[this.opponent]}%`;
    }

    reset() {
        this._currentPlayer = "X";
        this.score = { X: 0, O: 0 };
        this.life = { X: 100, O: 100 };

        // Atualiza a UI
        const { scoreP1, scoreP2, lifeP1, lifeP2 } = referencias();
        scoreP1.textContent = "0";
        scoreP2.textContent = "0";
        lifeP1.style.width = "100%";
        lifeP2.style.width = "100%";
    }
}

export const playerInstance = new Player;