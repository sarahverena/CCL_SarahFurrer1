import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";


class BlockObject2 extends BaseGameObject {
    name = "Blocksi";
    blockGravityForces = true;
    containsThread = false; 

    ContainsThread = function(collidingObject){
        if(collidingObject.name == "Thread"){
            this.containsThread = true;
        }
    }

    checkBubblePop = function(player) {
        if (this.containsThread && player.physicsData.fallVelocity < 0) {
            
            this.active = false; 
            
        }
    };

    reactToCollision = function (collidingObject)   {
        this.ContainsThread(collidingObject);
        if (collidingObject.name == "Designer") {
            collidingObject.x = collidingObject.previousX;
            collidingObject.y = collidingObject.previousY;
        }
    }

    constructor (x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/blocksi.png"]);
    }
}

export {BlockObject2};