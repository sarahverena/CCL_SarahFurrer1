import { BaseGameObject } from "./baseGameObject.js";
import { global } from "../modules/global.js";
import { displayGameOverScreen, displayWinScreen, setupGame1 } from "../modules/main.js";
import { djMusic } from "../modules/sound.js";


class Portal extends BaseGameObject {
    blockGravityForces = false;

    reactToCollision = function (collidingObject)   {
       /* if (collidingObject.name == "Designer") {
            displayGameOverScreen();
        }*/
		if(collidingObject.name == "Designer" && global.currentItems >= 4){
	        global.currentLevel++;
            djMusic.play();
            if(global.currentLevel == 1){
                setupGame1();
            }
            else if(global.currentLevel == 2){
                displayWinScreen();
            
            }
        }
    }

    getBoxBounds = function () {
        let bounds = {
            left: this.x +105,
            right: this.x + this.width - 22,
            top: this.y + 80,
            bottom: this.y + this.height - 3
        }
        return bounds;
    }

    constructor (x, y, width, height) {
        super(x, y, width, height);
        this.loadImages(["./images/portal2.png"]);
    }
}

export {Portal};