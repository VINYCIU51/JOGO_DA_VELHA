import { markSpace, validSpace } from './boardGame.js';
import { updateLife, updateScore } from './lifePoints.js';
import { lifeWin, draw, lineWin } from './endGame.js';
import { initGame } from './game.js';

let currentPlayer = "X";

export function jogar(line, column, space) {

    if (lifeWin()) {
        setTimeout(() => {
            alert((currentPlayer === "X" ? "Player 1" : "Player 2") + " Venceu o jogo");
        }, 10);
        return;
    }

    if (!validSpace(line, column)) {
        return;
    }

    markSpace(line, column, currentPlayer, space);

    if (draw()) {
        setTimeout(() => {
            alert("Empate");
            gameControls.restart();
        }, 10);
    }
    else if (lineWin()) {
        updateScore(currentPlayer);
        setTimeout(() => {
            alert((currentPlayer === "X" ? "Player 1" : "Player 2") + " Venceu o round");
            gameControls.restart();
            updateLife(currentPlayer, 100);
        }, 10);
    }
    else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

const gameControls = initGame(jogar);
gameControls.start();