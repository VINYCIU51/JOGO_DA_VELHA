export let pontuacaoPlayer1 = 0;
export let pontuacaoPlayer2 = 0;
export let vidaP1 = 100;
export let vidaP2 = 100;

export function atualizarPontuacao(jogadorAtual, score1, score2) {
    if (jogadorAtual === "X") {
        pontuacaoPlayer1 += 10;
        score1.textContent = pontuacaoPlayer1;
    } else {
        pontuacaoPlayer2 += 10;
        score2.textContent = pontuacaoPlayer2;
    }
}

export function atualizarLife(jogadorAtual, vidaMaxima) {
    if (jogadorAtual === "X") {
        vidaP2 -= 20;
        const porcentagemVida = (vidaP2 / vidaMaxima) * 100;
        const barraVida = document.querySelector(`#player2 .life-bar`);
        barraVida.style.width = `${porcentagemVida}%`;
    } else {
        vidaP1 -= 20;
        const porcentagemVida = (vidaP1 / vidaMaxima) * 100;
        const barraVida = document.querySelector(`#player1 .life-bar`);
        barraVida.style.width = `${porcentagemVida}%`;
    }
}

export function vitoriaPorLife(jogadorAtual) {
    if (jogadorAtual === "X") {
        if (vidaP2 <= 0) {
            return true;
        }
    } else {
        if (vidaP1 <= 0) {
            return true;
        }
    }

    return false;
}