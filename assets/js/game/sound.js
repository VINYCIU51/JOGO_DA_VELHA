export function startMusic() {
    window.document.addEventListener("DOMContentLoaded", () => {
        const music = document.getElementById("bgMusic");

        music.volume = 0.3;

        document.body.addEventListener("click", () => {
            music.play();
        }, { once: true });
    })


}