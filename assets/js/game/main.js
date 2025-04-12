import { Board } from './boardGame.js';
import { Player } from './player.js';
import { Game } from './game.js';
import { GameAnimations } from './animations/index.js';

const boardgame = new Board();
const playerInstance = new Player();
const game = new Game(boardgame, playerInstance);
const animation = new GameAnimations(game);

let currentPlayer = playerInstance.currentPlayer;

export function mainGame(line, column, space) {
    animation.mark.predictPlay(currentPlayer);


    if (game.lifeWin()) {
        boardgame.clearBoard(space);
        animation.not.ShowplayAgain();
        return;
    }

    if (!boardgame.validSpace(line, column)) {
        return;
    }

    animation.mark.animateMark(currentPlayer, space);
    boardgame.markSpace(line, column, currentPlayer);

    if (game.lineWin()) {
        playerInstance.updateScore();
        playerInstance.updateLife();
        animation.img.updateAvatar(playerInstance.opponent, playerInstance.life[playerInstance.opponent]);

        if (game.lifeWin()) {
            animation.not.showWinner(currentPlayer);
            animation.not.ShowplayAgain();
        } else {
            game.newRound();
            animation.not.showRound(game.round);
            animation.img.updateBackground(currentPlayer);
            animation.mark.predictPlay(currentPlayer);
        }
    }
    else if (game.draw()) {
        game.newRound();
        animation.not.showRound(game.round);
        animation.mark.predictPlay(currentPlayer);
    }
    else {
        playerInstance.switch();
        currentPlayer = playerInstance.currentPlayer;
        animation.mark.predictPlay(currentPlayer);
    }
}

animation.mark.predictPlay(currentPlayer);
game.start(mainGame);