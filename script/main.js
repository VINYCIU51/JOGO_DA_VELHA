import { tabuleiro, limparTabuleiro, verificarEmpate, verificarVitoria } from './tabuleiro.js';
import { atualizarLife, atualizarPontuacao } from './pontuacao.js';
import { referencias, adicionarListeners } from './ui.js';

const { score1, score2, espacos } = referencias();

let jogadorAtual = "X";

function jogar(linha, coluna, espaco) {
    if (tabuleiro[linha][coluna] !== "") {
        return;
    }

    tabuleiro[linha][coluna] = jogadorAtual;
    espaco.textContent = jogadorAtual;

    if (verificarEmpate()) {
        setTimeout(() => {
            alert("Empate");
            reiniciarJogo(espacos);
        });
    }
    else if (verificarVitoria()) {
        atualizarPontuacao(jogadorAtual, score1, score2);
        setTimeout(() => {
            alert((jogadorAtual === "X" ? "Player 1" : "Player 2") + " Venceu");
            reiniciarJogo(espacos);
            atualizarLife(jogadorAtual, 100);
        }, 10);
    } else {
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    }
}

function reiniciarJogo(espacos) {
    limparTabuleiro(espacos);
    iniciarJogo();
}

function iniciarJogo() {
    adicionarListeners(espacos, jogar);
}


iniciarJogo();


