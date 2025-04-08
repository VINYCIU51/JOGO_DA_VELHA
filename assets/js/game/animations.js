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

    ShowplayAgain() {
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

                this.predictPlay(this.game.playerInstance.currentPlayer);
            }, { once: true });
        })
    }

    updateBackground(currentPlayer) {
        const bg = document.querySelector("body");
        if (currentPlayer === "O") {
            bg.style.backgroundImage = `url('/assets/images/y-punch-b.png')`;
        }

    }

    updateAvatar(currentPlayer, life) {
        let dmgImage;
        let granny;

        if (currentPlayer == "X") {
            granny = document.querySelector("#player1 .avatar");
            dmgImage = [
                "/assets/images/blue_granny_front.png",
                "/assets/images/blue-dmg1.png",
                "/assets/images/blue-dmg2.png",
                "/assets/images/blue-dmg3.png",
                "/assets/images/blue-dmg4.png",
            ];
        } else if (currentPlayer === "O") {
            granny = document.querySelector("#player2 .avatar");
        }


        let dmgState = 0;

        if (life > 80) dmgState = 0;
        else if (life > 60) dmgState = 1;
        else if (life > 40) dmgState = 2;
        else if (life > 20) dmgState = 3;
        else dmgState = 4;

        granny.style.backgroundImage = `url('${dmgImage[dmgState]}')`;
    }
}