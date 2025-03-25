import { clearBoard } from './boardGame.js';
import { referencias, addListeners } from './ui.js';

const { spaces } = referencias();

export function initGame(jogar) {
    function start() {
        addListeners(spaces, jogar);
    }

    function restart() {
        clearBoard(spaces);
        start();
    }

    return { start, restart };
}

export function alertMensage(currentPlayer, text) {
    alert((currentPlayer === "X" ? "Player 1 " : "Player 2 ") + text);
}