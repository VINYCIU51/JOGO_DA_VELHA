export class Notifications {
    constructor(game) {
        this.game = game;
    }

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

    showWinner(currentPlayer) {
        const notification = document.querySelector('.winner-notification');
        const winnerElement = document.getElementById('winner');

        winnerElement.textContent = (currentPlayer === "X" ? "Player 1" : "Player 2") + " Wins";
        notification.classList.add('show');
    }

    showplayAgain() {
        const buttons = [
            document.getElementById('play-again-button'),
            document.getElementById("back-menu-button")];

        const notification = document.querySelector('.winner-notification');

        buttons.forEach(button => {
            button.classList.add('show');
            button.addEventListener("click", () => {
                this.game.newGame();

                buttons.forEach(btn => btn.classList.remove('show'));
                notification.classList.add("hide");

                notification.addEventListener("animationend", () => {
                    notification.classList.remove("hide");
                    notification.classList.remove("show");
                }, { once: true });
            }, { once: true });
        })
    }
}