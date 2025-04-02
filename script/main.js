import { Board } from './boardGame.js';
import { Player } from './player.js';
import { Game } from './game.js';
import { GameAnimations } from './animations.js';

// Create all instances in one place
const boardgame = new Board();
const playerInstance = new Player();
const game = new Game(boardgame, playerInstance);
const animation = new GameAnimations(game);

let currentPlayer = playerInstance.currentPlayer;
let currentRound = 1;

export function jogar(line, column, space) {
    animation.predictPlay(currentPlayer);

    if (game.lifeWin()) {
        animation.showWinner(currentPlayer);
        animation.ShowplayAgain();
        return;
    }

    if (!boardgame.validSpace(line, column)) {
        return;
    }

    animation.animateMark(currentPlayer, space);
    boardgame.markSpace(line, column, currentPlayer);

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
    }
    else {
        playerInstance.switch();
        currentPlayer = playerInstance.currentPlayer;
        animation.predictPlay(currentPlayer);
    }
}

animation.predictPlay(currentPlayer);
game.start(jogar);