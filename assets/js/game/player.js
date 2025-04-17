import { referencias } from "./ui.js";

const { scoreP1, scoreP2, lifeP1, lifeP2 } = referencias();

// Controla o estado do jogador
export class Player {
    constructor() {
        this._currentPlayer = "X";
        this.score = { X: 0, O: 0 };
        this.life = { X: 100, O: 100 };
    }

    // Retorna o oponente atual
    get opponent() {
        return this._currentPlayer === "X" ? "O" : "X";
    }

    // Retorna o jogador atual
    get currentPlayer() {
        return this._currentPlayer;
    }

    // Troca o turno do jogador
    switch() {
        this._currentPlayer = this._currentPlayer === "X" ? "O" : "X";
    }

    // Atualiza os pontos
    updateScore(points = 10) {
        this.score[this._currentPlayer] += points;
        const scoreElement = this._currentPlayer === "X" ? scoreP1 : scoreP2;
        scoreElement.textContent = this.score[this._currentPlayer];
    }

    // Atualiza a vida
    updateLife(damage = 40) {
        this.life[this.opponent] = Math.max(0, this.life[this.opponent] - damage);
        const lifeElement = this.opponent === "X" ? lifeP1 : lifeP2;
        lifeElement.style.width = `${this.life[this.opponent]}%`;

    }

    // Reseta todos os atributos para o estado inicial
    reset() {
        this.score = { X: 0, O: 0 };
        this.life = { X: 100, O: 100 };

        scoreP1.textContent = "0";
        scoreP2.textContent = "0";
        lifeP1.style.width = "100%";
        lifeP2.style.width = "100%";
    }
}