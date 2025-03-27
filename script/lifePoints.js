import { referencias } from './ui.js';

export let vidaP1 = 100;
export let vidaP2 = 100;

const { score1, score2 } = referencias();

export function updateScore(currentPlayer) {
    const playerScore = currentPlayer === "X" ? score1 : score2;
    const currentScore = parseInt(playerScore.textContent) || 0;
    playerScore.textContent = currentScore + 10;
}

export function updateLife(currentPlayer) {
    if (currentPlayer === "X") {
        vidaP2 -= 50;
        document.querySelector(`#player2 .life-bar`).style.width = `${(vidaP2 / 100) * 100}%`;
    } else {
        vidaP1 -= 50;
        document.querySelector(`#player1 .life-bar`).style.width = `${(vidaP1 / 100) * 100}%`;
    }
}

export function resetScore() {
    score1.textContent = "0";
    score2.textContent = "0";
}