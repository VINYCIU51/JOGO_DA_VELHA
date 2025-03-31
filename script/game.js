import { clearBoard } from './boardGame.js';
import { resetScore } from './lifePoints.js';
import { referencias, addListeners } from './ui.js';

const { spaces } = referencias();

export function initGame(jogo) {
    function start() {
        addListeners(spaces, jogo);
    }

    function newRound() {
        clearBoard(spaces);
        start();
    }

    return { start, newRound };
}

export function newGame(jogo) {
    clearBoard(spaces);
    resetScore();
    start(jogo);
}

export function alertMensage(currentPlayer, text) {
    alert((currentPlayer === "X" ? "Player 1 " : "Player 2 ") + text);
}