export class Damage {

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
            dmgImage = [
                "/assets/images/yellow_granny_front.png",
                "/assets/images/yellow-dmg1.png",
                "/assets/images/yellow-dmg2.png",
                "/assets/images/yellow-dmg3.png",
                "/assets/images/yellow-dmg4.png",
            ];
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