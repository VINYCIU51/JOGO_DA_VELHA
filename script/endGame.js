import { board } from './boardGame.js';
import { vidaP1, vidaP2 } from './lifePoints.js';

export function draw() {
    return board.every(linha => linha.every(coluna => coluna !== "")) && !lineWin();
}

export function lineWin() {
    // Linhas
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === board[i][1] && board[i][0] === board[i][2] && board[i][0] !== "") return true;
    }
    // Colunas
    for (let j = 0; j < 3; j++) {
        if (board[0][j] === board[1][j] && board[0][j] === board[2][j] && board[0][j] !== "") return true;
    }
    // Diagonais
    if (board[0][0] === board[1][1] && board[0][0] === board[2][2] && board[0][0] !== "") return true;
    if (board[0][2] === board[1][1] && board[0][2] === board[2][0] && board[0][2] !== "") return true;
    return false;
}

export function lifeWin() {
    return vidaP1 <= 0 || vidaP2 <= 0;
}