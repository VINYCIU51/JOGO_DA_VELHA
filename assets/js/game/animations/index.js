import { Damage } from "./damage.js";
import { Notifications } from "./notifications.js";
import { BoardAnimations } from "./board.js";

export class GameAnimations {
    constructor(game) {
        this.img = new Damage();
        this.not = new Notifications(game);
        this.mark = new BoardAnimations();
    }
}