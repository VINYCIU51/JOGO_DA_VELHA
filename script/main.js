import { markSpace, validSpace } from './boardGame.js';
import { updateLife, updateScore } from './lifePoints.js';
import { lifeWin, draw, lineWin } from './endGame.js';
import { alertMensage, initGame } from './game.js';
import { animateMark, predictPlay } from './animations.js';

let currentPlayer = "X";

export function jogar(line, column, space) {

    if (lifeWin()) {
        alertMensage(currentPlayer, "Venceu o Jogo!");
        return;
    }

    if (!validSpace(line, column)) {
        return;
    }

    animateMark(currentPlayer, space);
    markSpace(line, column, currentPlayer, space);

    if (draw()) {
        setTimeout(() => {
            alert("Empate");
            gameControls.restart();
        }, 10);
    }
    else if (lineWin()) {
        setTimeout(() => {
            updateScore(currentPlayer);
            updateLife(currentPlayer);
            if (!lifeWin()) { alertMensage(currentPlayer, "Venceu o Round!"); }
            gameControls.restart();
        }, 10);
    }
    else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        predictPlay(currentPlayer);
    }
}

predictPlay(currentPlayer);
const gameControls = initGame(jogar);
gameControls.start();