import { markSpace, validSpace } from './boardGame.js';
import { updateLife, updateScore } from './lifePoints.js';
import { lifeWin, draw, lineWin } from './endGame.js';
import { initGame } from './game.js';

let jogadorAtual = "X";

export function jogar(linha, coluna, espaco) {

    if (lifeWin()) {
        setTimeout(() => {
            alert((jogadorAtual === "X" ? "Player 1" : "Player 2") + " Venceu o jogo");
        }, 10);
        return;
    }

    if (!validSpace(linha, coluna)) {
        return;
    }

    markSpace(linha, coluna, jogadorAtual, espaco);

    if (draw()) {
        setTimeout(() => {
            alert("Empate");
            gameControls.restart();
        }, 10);
    }
    else if (lineWin()) {
        updateScore(jogadorAtual);
        setTimeout(() => {
            alert((jogadorAtual === "X" ? "Player 1" : "Player 2") + " Venceu o round");
            gameControls.restart();
            updateLife(jogadorAtual, 100);
        }, 10);
    }
    else {
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    }
}

const gameControls = initGame(jogar);
gameControls.start();