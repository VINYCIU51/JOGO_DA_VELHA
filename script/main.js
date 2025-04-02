import { markSpace, validSpace } from './boardGame.js';
import { playerInstance } from './player.js';
import { Game } from './game.js';
import { GameAnimations } from './animations.js';

const animation = new GameAnimations();
const game = new Game();

let currentPlayer = playerInstance.currentPlayer;
let currentRound = 1;

export function jogar(line, column, space) {
    animation.predictPlay(currentPlayer);

    if (game.lifeWin()) {
        animation.showWinner(currentPlayer);
        animation.ShowplayAgain();
        return;
    }

    if (!validSpace(line, column)) {
        return;
    }

    animation.animateMark(currentPlayer, space);
    markSpace(line, column, currentPlayer);

    if (game.lineWin()) {
        playerInstance.updateScore();
        playerInstance.updateLife();

        if (game.lifeWin()) {
            animation.showWinner(currentPlayer);
            animation.ShowplayAgain();
        } else {
            currentRound++;
            game.newRound(jogar);
            animation.showRound(currentRound);
            animation.predictPlay(currentPlayer);
        }
    }
    else if (game.draw()) {
        currentRound++;
        game.newRound(jogar);
        animation.showRound(currentRound);
        animation.predictPlay(currentPlayer);
        // Não troca o jogador, mantém o mesmo para o novo round
    }
    else {
        playerInstance.switch();
        currentPlayer = playerInstance.currentPlayer;
        animation.predictPlay(currentPlayer);
    }
}

animation.predictPlay(currentPlayer);
game.start(jogar);