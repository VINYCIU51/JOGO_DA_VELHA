export function predictPlay(currentPlayer) {
    const spaces = document.querySelectorAll(".space");
    spaces.forEach(space => {
        if (space.textContent === "") {
            space.setAttribute("data-hover", currentPlayer);
        } else {
            space.removeAttribute("data-hover");
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