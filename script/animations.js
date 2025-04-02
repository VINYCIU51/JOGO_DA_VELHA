export class GameAnimations {
    constructor(game) {
        this.game = game;
    }

    predictPlay(currentPlayer) {
        const spaces = document.querySelectorAll(".space");
        spaces.forEach(space => {
            if (space.textContent === "") {
                space.dataset.ghostMark = currentPlayer;
            } else {
                delete space.dataset.ghostMark;
            }
        });
    }

    animateMark(currentPlayer, space) {
        const mark = document.createElement('div');
        mark.textContent = currentPlayer;
        mark.classList.add('marked');
        space.appendChild(mark);

        mark.addEventListener('animationend', () => {
            mark.classList.remove('marked');
        }, { once: true });
    }

    showRound(roundNumber) {
        const notification = document.querySelector('.round-notification');
        const roundElement = document.getElementById('round-number');

        roundElement.textContent = "Round " + roundNumber;
        notification.classList.add('show');

        setTimeout(() => {
            notification.classList.remove('show');
        }, 1500);
    }

    showWinner(currentPlayer) {
        const notification = document.querySelector('.winner-notification');
        const winnerElement = document.getElementById('winner');

        winnerElement.textContent = (currentPlayer === "X" ? "Player 1" : "Player 2") + " Wins";
        notification.classList.add('show');
    }

    ShowplayAgain() {
        const button = document.getElementById('play-again-button');
        const notification = document.querySelector('.winner-notification');

        button.classList.add('show');
        button.addEventListener("click", () => {
            this.game.newGame();
            button.classList.remove('show');
            notification.classList.remove('show');
        }, { once: true });
    }
}