import { Board } from './boardGame.js';
import { Player } from './player.js';
import { Game } from './game.js';
import { GameAnimations } from './animations.js';

const boardgame = new Board();
const playerInstance = new Player();
const game = new Game(boardgame, playerInstance);
const animation = new GameAnimations(game);

let currentPlayer = playerInstance.currentPlayer;

export function mainGame(line, column, space) {
    animation.predictPlay(currentPlayer);

    if (game.lifeWin()) {
        boardgame.clearBoard(space);
        animation.showWinner(currentPlayer);
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
            game.newRound();
            animation.showRound(game.round);
            animation.predictPlay(currentPlayer);
        }
    }
    else if (game.draw()) {
        game.newRound();
        animation.showRound(game.round);
        animation.predictPlay(currentPlayer);
    }
    else {
        playerInstance.switch();
        currentPlayer = playerInstance.currentPlayer;
        animation.predictPlay(currentPlayer);
    }
}

animation.predictPlay(currentPlayer);
game.start(mainGame);