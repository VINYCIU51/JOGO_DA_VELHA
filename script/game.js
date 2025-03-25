import { clearBoard } from './boardGame.js';
import { referencias, adicionarListeners } from './ui.js';

const { espacos } = referencias();

export function initGame(jogar) {
    function start() {
        adicionarListeners(espacos, jogar);
    }

    function restart() {
        clearBoard(espacos);
        start();
    }

    return { start, restart };
}