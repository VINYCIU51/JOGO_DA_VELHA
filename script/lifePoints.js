export let pontuacaoPlayer1 = 0;
export let pontuacaoPlayer2 = 0;
export let vidaP1 = 100;
export let vidaP2 = 100;

export function updateScore(jogadorAtual, score1, score2) {
    if (jogadorAtual === "X") {
        score1.textContent = pontuacaoPlayer1 += 10;
    } else {
        score2.textContent = pontuacaoPlayer2 += 10;
    }
}

export function updateLife(jogadorAtual, vidaMaxima) {
    if (jogadorAtual === "X") {
        vidaP2 -= 50;
        document.querySelector(`#player2 .life-bar`).style.width = `${(vidaP2 / vidaMaxima) * 100}%`;
    } else {
        vidaP1 -= 50;
        document.querySelector(`#player1 .life-bar`).style.width = `${(vidaP1 / vidaMaxima) * 100}%`;
    }
}