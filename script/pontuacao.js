
export let pontuacaoPlayer1 = 0;
export let pontuacaoPlayer2 = 0;

export function atualizarPontuacao(jogadorAtual, score1, score2) {
    if (jogadorAtual === "X") {
        pontuacaoPlayer1 += 10;
        score1.textContent = pontuacaoPlayer1;
    } else {
        pontuacaoPlayer2 += 10;
        score2.textContent = pontuacaoPlayer2;
    }
}
