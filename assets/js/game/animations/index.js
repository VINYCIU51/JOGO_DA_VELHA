import { Damage } from "./damage.js";
import { Notifications } from "./notifications.js";
import { BoardAnimations } from "./board.js";

export class GameAnimations {
    constructor(game) {
        this._damage = new Damage();
        this._notifications = new Notifications(game);
        this._board = new BoardAnimations();
    }

    // Métodos de BoardAnimations
    predictPlay(currentPlayer) {
        return this._board.predictPlay(currentPlayer);
    }

    animateMark(currentPlayer, space) {
        return this._board.animateMark(currentPlayer, space);
    }

    // Métodos de Damage
    updateBackground(currentPlayer) {
        return this._damage.updateBackground(currentPlayer);
    }

    updateAvatar(currentPlayer, life) {
        return this._damage.updateAvatar(currentPlayer, life);
    }

    // Métodos de Notifications
    showRound(roundNumber) {
        return this._notifications.showRound(roundNumber);
    }

    showWinner(currentPlayer) {
        return this._notifications.showWinner(currentPlayer);
    }

    showplayAgain() {
        return this._notifications.showplayAgain();
    }
}