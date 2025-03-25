import { clearBoard } from './boardGame.js';
import { referencias, addListeners } from './ui.js';

const { espacos } = referencias();

export function initGame(jogar) {
    function start() {
        addListeners(espacos, jogar);
    }

    function restart() {
        clearBoard(espacos);
        start();
    }

    return { start, restart };
}