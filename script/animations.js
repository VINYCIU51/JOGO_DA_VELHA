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
    space.innerHTML = '';

    const mark = document.createElement('div');
    mark.textContent = currentPlayer;
    mark.classList.add('marked');
    space.appendChild(mark);

    mark.addEventListener('animationend', () => {
        mark.classList.remove('marked');
    }, { once: true });
}