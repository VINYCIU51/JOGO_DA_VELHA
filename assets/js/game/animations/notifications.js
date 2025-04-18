import { Images } from "./images.js";

// Responsável por mostrar as notificações ao longo da partida
export class Notifications {
    constructor(game) {
        this.game = game;
        this.images = new Images;
    }

    // Exibe o round atual
    showRound(roundNumber) {
        const notification = document.querySelector(".round-notification");
        const roundElement = document.getElementById("round-number");

        roundElement.textContent = "Round " + roundNumber;
        notification.classList.add("show");

        setTimeout(() => {
            notification.classList.add("hide");

            notification.addEventListener("animationend", () => {
                notification.classList.remove("hide");
                notification.classList.remove("show");
            }, { once: true });
        }, 1500);
    }

    // Exibe quem venceu a partida
    showWinner(currentPlayer) {
        const notification = document.querySelector('.winner-notification');
        const winnerElement = document.getElementById('winner');

        winnerElement.textContent = (currentPlayer === "X" ? "Player 1" : "Player 2") + " Wins";
        notification.classList.add('show');
    }

    // Exibe o botão para jogar novamente ou voltar ao menu
    showplayAgain() {
        const buttonContainer = document.querySelector('.button-container');
        const buttons = buttonContainer.querySelectorAll('button');
        const notification = document.querySelector('.winner-notification');

        // Mostra os botões
        buttonContainer.classList.add('show');

        // Ao clicar, retira as animações
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                this.game.newGame();
                this.images.resetImages();

                buttonContainer.classList.remove('show');
                notification.classList.add("hide");

                notification.addEventListener("animationend", () => {
                    notification.classList.remove("hide");
                    notification.classList.remove("show");
                }, { once: true });
            }, { once: true });
        });
    }
}