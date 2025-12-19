
// Responsável por atualizar as imagens para representar a batalha
export class Images {

    // Atualiza tanto a imagem de fundo quanto a do avatar, de acordo com quem ganhou o round
    updateImages(currentPlayer, life) {
        let dmgImage;
        let granny;
        let bgImage;
        let background = document.querySelector("body");

        if (currentPlayer == "X") {
            granny = document.querySelector("#player1 .avatar");

            dmgImage = [
                "../assets/images/blue_granny_front.webp",
                "../assets/images/blue-dmg1.webp",
                "../assets/images/blue-dmg2.webp",
                "../assets/images/blue-dmg3.webp",
                "../assets/images/blue-dmg4.webp",
            ];

            bgImage = [
                "../assets/images/y-punch-b.webp",
                "../assets/images/y-kick-b.webp",
                "../assets/images/y-cut-b.webp",
            ];
        } else if (currentPlayer === "O") {
            granny = document.querySelector("#player2 .avatar");
            dmgImage = [
                "../assets/images/yellow_granny_front.webp",
                "../assets/images/yellow-dmg1.webp",
                "../assets/images/yellow-dmg2.webp",
                "../assets/images/yellow-dmg3.webp",
                "../assets/images/yellow-dmg4.webp",
            ];

            bgImage = [
                "../assets/images/b-punch-y.webp",
                "../assets/images/b-kick-y.webp",
                "../assets/images/b-power-y.webp",
            ];
        }


        let dmgState = 0;

        if (life > 80) dmgState = 0;
        else if (life > 60) dmgState = 1;
        else if (life > 40) dmgState = 2;
        else if (life > 20) dmgState = 3;
        else dmgState = 4;

        granny.style.backgroundImage = `url('${dmgImage[dmgState]}')`;

        const bgState = Math.floor(Math.random() * (2 - 0 + 1) + 0);
        background.style.backgroundImage = `url('${bgImage[bgState]}')`
    }

    // Altera todas as imagens para as padrões, sem danos
    resetImages() {
        const granny1 = document.querySelector("#player1 .avatar");
        const granny2 = document.querySelector("#player2 .avatar");
        const background = document.querySelector("body");

        granny1.style.backgroundImage = "url(../assets/images/blue_granny_front.webp)";
        granny2.style.backgroundImage = "url(../assets/images/yellow_granny_front.webp)";
        background.style.backgroundImage = "url(../assets/images/yVSb-game-background.webp)";
    }
}