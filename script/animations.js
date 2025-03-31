export function predictPlay(currentPlayer) {
    const spaces = document.querySelectorAll(".space");
    spaces.forEach(space => {
        if (space.textContent === "") {
            space.dataset.ghostMark = currentPlayer;
        } else {
            delete space.dataset.ghostMark;
        }
    });
}

export function animateMark(currentPlayer, space) {
    const mark = document.createElement('div');
    mark.textContent = currentPlayer;
    mark.classList.add('marked');
    space.appendChild(mark);

    mark.addEventListener('animationend', () => {
        mark.classList.remove('marked');
    }, { once: true });
}

export function showRound(roundNumber) {
    const notification = document.querySelector('.round-notification');
    const roundElement = document.getElementById('round-number');

    roundElement.textContent = "Round " + roundNumber;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 1500);
}

export function showWinner(currentPlayer) {
    const notification = document.querySelector('.winner-notification');
    const winnerElement = document.getElementById('winner');

    winnerElement.textContent = (currentPlayer === "X" ? "Player 1" : "Player 2") + " Wins";
    notification.classList.add('show');

}

export function ShowplayAgain() {
    const button = document.getElementById('play-again-button');
    button.classList.add('show');
    button.addEventListener("click", () => {
        button.classList.remove('show');
        newGame();
    }, { once: true });
}