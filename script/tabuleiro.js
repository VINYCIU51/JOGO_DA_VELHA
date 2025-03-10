
export const tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

export function limparTabuleiro(espacos) {
    espacos.forEach(espaco => {
        espaco.textContent = "";
    });
}

export function verificarEmpate() {
    return tabuleiro.every(linha => linha.every(coluna => coluna !== "")) && !verificarVitoria();
}

export function verificarVitoria() {
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
