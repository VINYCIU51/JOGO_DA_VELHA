import { Board } from './boardGame.js';
import { Player } from './player.js';
import { Game } from './game.js';
import { GameAnimations } from './animations/index.js';
import { startMusic } from './sound.js';

const boardgame = new Board();
const playerInstance = new Player();
const game = new Game(boardgame, playerInstance);
const animations = new GameAnimations(game);

let currentPlayer = playerInstance.currentPlayer;

// Controla todo o fluxo do que acontece no jogo
export function mainGame(line, column, space) {
    animations.predictPlay(currentPlayer);

    // Verifica se há vida para os dois jogadores
    if (game.lifeWin()) {
        boardgame.clearBoard(space);
        animations.showplayAgain();
        return;
    }

    // Verifica se o espaço é valido para jogada
    if (!boardgame.validSpace(line, column)) {
        return;
    }

    // se for, efetua a marcação
    animations.animateMark(currentPlayer, space);
    boardgame.markSpace(line, column, currentPlayer);

    // verifica se houve vitoria por sequência
    if (game.lineWin()) {
        playerInstance.updateScore();
        playerInstance.updateLife();
        animations.updateImages(playerInstance.opponent, playerInstance.life[playerInstance.opponent]);

        // Verifica se esta vitótia zerou a vida do oponente
        if (game.lifeWin()) {
            animations.showWinner(currentPlayer);
            animations.showplayAgain();
        }
        // Se não, inicia um novo round
        else {
            game.newRound();
            animations.showRound(game.round);
            animations.predictPlay(currentPlayer);
        }
    }

    // Verifica se deu empate
    else if (game.draw()) {
        game.newRound();
        animations.showRound(game.round);
        animations.predictPlay(currentPlayer);
    }
    // Se não, troca de jogador e segue o jogo
    else {
        playerInstance.switch();
        currentPlayer = playerInstance.currentPlayer;
        animations.predictPlay(currentPlayer);
    }
}

startMusic();
animations.predictPlay(currentPlayer);
game.start(mainGame);