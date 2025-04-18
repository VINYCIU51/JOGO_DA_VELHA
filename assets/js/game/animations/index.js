import { Images } from "./images.js";
import { Notifications } from "./notifications.js";
import { BoardAnimations } from "./board.js";

// Responsável por unir todas as classes em uma para facilitar a chamada de métodos
export class GameAnimations {
    constructor(game) {
        this._images = new Images();
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

    // Métodos de Images
    updateImages(currentPlayer, life) {
        return this._images.updateImages(currentPlayer, life);
    }

    resetImages() {
        return this._images.resetImages();
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