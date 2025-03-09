const score = document.querySelector(".score");
const espacos = document.querySelectorAll(".espaco")

const tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

let jogadorAtual = "X";

function limparTabuleiro() {
    espacos.forEach(espaco => {
        espaco.textContent = "";
    })
}

function jogar(linha, coluna, espaco) {

    if (tabuleiro[linha][coluna] !== "") {
        return;
    }

    tabuleiro[linha][coluna] = jogadorAtual;
    espaco.textContent = jogadorAtual;

    if (verificarVioria()) {
        setTimeout(() => {
            alert(jogadorAtual + " venceu!");
            limparTabuleiro();
        }, 10);
    }
    else {
        jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    }

}

function verificarVioria() {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][0] === tabuleiro[i][2] && tabuleiro[i][0] !== "") {
            return true;
        }

        if (tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[0][i] === tabuleiro[2][i] && tabuleiro[0][i] !== "") {
            return true;
        }
    }

    if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[0][0] === tabuleiro[2][2] && tabuleiro[0][0] !== "") {
        return true;
    }
    if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[0][2] === tabuleiro[2][0] && tabuleiro[0][2] !== "") {
        return true;
    }

    return false;
}


function iniciarJogo() {
    espacos.forEach((espaco, indice) => {
        espaco.addEventListener("click", () => {
            const linha = Math.floor(indice / 3);
            const coluna = indice % 3;

            jogar(linha, coluna, espaco);
        })
    })
}


iniciarJogo();