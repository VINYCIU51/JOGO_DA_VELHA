import { Board } from './boardGame.js';
import { Player } from './player.js';
import { Game } from './game.js';
import { GameAnimations } from './animations/index.js';

const boardgame = new Board();
const playerInstance = new Player();
const game = new Game(boardgame, playerInstance);
const animations = new GameAnimations(game);

let currentPlayer = playerInstance.currentPlayer;

export function mainGame(line, column, space) {
    animations.predictPlay(currentPlayer);

    if (game.lifeWin()) {
        boardgame.clearBoard(space);
        animations.showplayAgain();
        return;
    }

    if (!boardgame.validSpace(line, column)) {
        return;
    }

    animations.animateMark(currentPlayer, space);
    boardgame.markSpace(line, column, currentPlayer);

    if (game.lineWin()) {
        playerInstance.updateScore();
        playerInstance.updateLife();
        animations.updateImages(playerInstance.opponent, playerInstance.life[playerInstance.opponent]);

        if (game.lifeWin()) {
            animations.showWinner(currentPlayer);
            animations.showplayAgain();
        } else {
            game.newRound();
            animations.showRound(game.round);
            animations.predictPlay(currentPlayer);
        }
    }
    else if (game.draw()) {
        game.newRound();
        animations.showRound(game.round);
        animations.predictPlay(currentPlayer);
    }
    else {
        playerInstance.switch();
        currentPlayer = playerInstance.currentPlayer;
        animations.predictPlay(currentPlayer);
    }
}

animations.predictPlay(currentPlayer);
game.start(mainGame);