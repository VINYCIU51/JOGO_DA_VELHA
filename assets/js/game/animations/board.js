
// Responsável pelas animações relacionadas ao tabuleiro
export class BoardAnimations {

    // Função que realiza a animação de mostrar a marcação antes da jogada
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

    // Realiza a animação da marcação sendo feita
    animateMark(currentPlayer, space) {
        const mark = document.createElement('div');
        mark.textContent = currentPlayer;
        mark.classList.add('marked');
        space.appendChild(mark);

        mark.addEventListener('animationend', () => {
            mark.classList.remove('marked');
        }, { once: true });
    }
}