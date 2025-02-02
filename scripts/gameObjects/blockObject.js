import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";


class BlockObject extends BaseGameObject {
    name = "Bubble";
    blockGravityForces = true;
    containsThread = false;

    ContainsThread = function (collidingObject) {
        if (collidingObject.name == "Thread") {
            this.containsThread = true;
        }
    }

    checkObjectPop = function (player) {
        if (this.containsThread && player.physicsData.fallVelocity < 0) {

            this.active = false;

        }
    };

    reactToCollision = function (collidingObject) {
        this.ContainsThread(collidingObject);
        if (collidingObject.name == "Designer") {
            collidingObject.x = collidingObject.previousX;
            collidingObject.y = collidingObject.previousY;
        }
    }

    getBoxBounds = function () {
        let bounds = {
            left: this.x + 5,
            right: this.x + this.width - 28,
            top: this.y,
            bottom: this.y + this.height
        }
        return bounds;
    };

    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/bubble rund.png"]);
    }
}

export { BlockObject };