import { clearBoard } from './boardGame.js';
import { referencias, addListeners } from './ui.js';

const { spaces } = referencias();

export function initGame(jogar) {
    function start() {
        addListeners(spaces, jogar);
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
