import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";


class Floor extends BaseGameObject {
    name = "Floor";
    blockGravityForces = true;



    draw = function () {
        /*global.ctx.fillRect(this.x, this.y, this.width, this.height);*/
    }

    constructor(x, y, width, height) {
        super(x, y, width, height);
    }
}

export { Floor };