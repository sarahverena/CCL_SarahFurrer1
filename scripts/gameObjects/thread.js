import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";

class Thread extends BaseGameObject {
    name = "Thread";
    xVelocity = 0;
    yVelocity = 0;
    useGravityForces = false;

    reactToCollision = function (collidingObject) {
        if (collidingObject.name == "Designer") {
            this.active = false;
        }
    }


    getBoxBounds = function () {
        let bounds = {
            left: this.x + 18,
            right: this.x + this.width - 22,
            top: this.y + 14,
            bottom: this.y + this.height - 3
        }
        return bounds;
    }

    update = function () {
        this.x += this.xVelocity * global.deltaTime;
        this.y += this.yVelocity * global.deltaTime;

    }

    /* draw = function () {
         global.ctx.fillStyle = "#000000";
         global.ctx.fillRect(this.x, this.y, this.width, this.height);
     }*/

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImagesFromSpritesheet("./images/threadanim.png", 3, 1, 3);
        this.switchCurrentSprites(0, 2);
    }

}

export { Thread }