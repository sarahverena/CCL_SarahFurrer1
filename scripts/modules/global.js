const global = {};

function resetGlobals() {
    
    global.canvas = document.querySelector("#canvas");
    global.ctx = canvas.getContext("2d");
    global.deltaTime = 0;
    global.allGameObjects = [];
    global.playerObject = {};
    global.backgroundShift = 0;
    global.backgroundMaxShift = -1000;
    global.gravityForce = 9.8;
    global.pixelToMeter = 100;
    global.leftMoveTrigger;
    global.rightMoveTrigger;
    global.gameRunning = true;
    global.currentItems = 0;
}
global.currentLevel = 0; 
global.prevTotalRunningTime = 0;


global.getCanvasBounds = function () {
    let bounds =  {
        "left": 0,
        "right": this.canvas.width,
        "top": 0, 
        "bottom": this.canvas.height
    }

    return bounds;
}

global.checkCollisionWithAnyOther = function (givenObject) {
    for (let i = givenObject.index; i < global.allGameObjects.length; i++) {
        let otherObject = global.allGameObjects[i];
        if (otherObject.active == true) {
            let collisionHappened = this.detectBoxCollision(givenObject, otherObject);
            if (collisionHappened) {
                if (givenObject.name == "Weapon" && givenObject.active) {
                   
                }
                if (givenObject.name == "Weapon") {
                    
                }
                givenObject.reactToCollision(otherObject);
                otherObject.reactToCollision(givenObject);
            }
        }
    }
}


global.detectBoxCollision = function (gameObject1, gameObject2) {
    let box1 = gameObject1.getBoxBounds();
    let box2 = gameObject2.getBoxBounds();
    if (gameObject1.name == "Weapon") {
       
    }
    if (gameObject1 != gameObject2) {
        if (box1.top <= box2.bottom && 
            box1.left <= box2.right && 
            box1.bottom >= box2.top &&
            box1.right >= box2.left)
        {
            return true;
        }
    }
    return false;
}


export { global, resetGlobals }