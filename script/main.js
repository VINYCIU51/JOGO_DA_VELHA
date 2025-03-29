import { markSpace, validSpace } from './boardGame.js';
import { updateLife, updateScore } from './lifePoints.js';
import { lifeWin, draw, lineWin } from './endGame.js';
import { alertMensage, initGame } from './game.js';
import { animateMark, nextRound, predictPlay, showWinner } from './animations.js';

let currentPlayer = "X";
let currentRound = 1;

export function jogar(line, column, space) {
    predictPlay(currentPlayer);

    if (lifeWin()) {
        showWinner(currentPlayer);
        return;
    }

    if (!validSpace(line, column)) {
        return;
    }

    animateMark(currentPlayer, space);
    markSpace(line, column, currentPlayer, space);

    if (draw()) {
        currentRound += 1;
        nextRound(currentRound);
        gameControls.restart();
        predictPlay(currentPlayer);

    }
    else if (lineWin()) {
        updateScore(currentPlayer);
        updateLife(currentPlayer);

        if (!lifeWin()) {
            currentRound += 1;
            nextRound(currentRound);
        }

        gameControls.restart();
        predictPlay(currentPlayer);

    }
    else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        predictPlay(currentPlayer);
    }
}

predictPlay(currentPlayer);
const gameControls = initGame(jogar);
gameControls.start();