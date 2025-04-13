export class Images {

    updateImages(currentPlayer, life) {
        let dmgImage;
        let granny;
        let bgImage;
        let background = document.querySelector("body");

        if (currentPlayer == "X") {
            granny = document.querySelector("#player1 .avatar");

            dmgImage = [
                "/assets/images/blue_granny_front.png",
                "/assets/images/blue-dmg1.png",
                "/assets/images/blue-dmg2.png",
                "/assets/images/blue-dmg3.png",
                "/assets/images/blue-dmg4.png",
            ];

            bgImage = [
                "/assets/images/y-punch-b.png",
                "/assets/images/y-kick-b.png",
                "/assets/images/y-cut-b.png",
            ];
        } else if (currentPlayer === "O") {
            granny = document.querySelector("#player2 .avatar");
            dmgImage = [
                "/assets/images/yellow_granny_front.png",
                "/assets/images/yellow-dmg1.png",
                "/assets/images/yellow-dmg2.png",
                "/assets/images/yellow-dmg3.png",
                "/assets/images/yellow-dmg4.png",
            ];

            bgImage = [
                "/assets/images/b-punch-y.png",
                "/assets/images/b-kick-y.png",
                "/assets/images/b-power-y.png",
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

    resetImages() {
        const granny1 = document.querySelector("#player1 .avatar");
        const granny2 = document.querySelector("#player2 .avatar");
        const background = document.querySelector("body");

        granny1.style.backgroundImage = "url(/assets/images/blue_granny_front.png)";
        granny2.style.backgroundImage = "url(/assets/images/yellow_granny_front.png)";
        background.style.backgroundImage = "url(/assets/images/yVSb-game-background.png)";
    }
}