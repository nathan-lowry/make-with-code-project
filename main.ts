namespace SpriteKind {
    export const Arrow = SpriteKind.create()
}



function sendArrow (direction: string) {
    arrowSprite = sprites.create(img`
        1 
        `, SpriteKind.Arrow)
    if (direction == "left") {
        arrowSprite.setImage(assets.image`leftArrow`)
        arrowSprite.x = 20
        arrowList.push(1)
    } else if (direction == "up") {
        arrowSprite.setImage(assets.image`upArrow`)
        arrowSprite.x = 60
        arrowList.push(1)
    } else if (direction == "down") {
        arrowSprite.setImage(assets.image`downArrow`)
        arrowSprite.x = 100
        arrowList.push(1)
    } else if (direction == "right") {
        arrowSprite.setImage(assets.image`rightArrow`)
        arrowSprite.x = 140
        arrowList.push(1)
    }
    arrowSprite.y = 0
    arrowSprite.vy = 60
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function() {
    
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {

})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
  
})


function startGame () {
    // let arrow = sprites.create(assets.image`purpleArrow`, SpriteKind.Player)
    scene.setBackgroundColor(9)
    scoreboard1 = sprites.create(assets.image`scoreboardBackground`, SpriteKind.Projectile)
    scoreboard2 = sprites.create(assets.image`scoreboardBackground`, SpriteKind.Projectile)
    scoreboard3 = sprites.create(assets.image`scoreboardBackground`, SpriteKind.Projectile)
    scoreboard4 = sprites.create(assets.image`scoreboardBackground`, SpriteKind.Projectile)
    scoreboard1.setPosition(20, 80)
    scoreboard2.setPosition(60, 80)
    scoreboard3.setPosition(100, 80)
    scoreboard4.setPosition(140, 80)
    info.setScore(0)
}
function startLevelOne () {
	
}
function startLevelZero () {
    sendArrow("left")
    pause(500)
    sendArrow("down")
    pause(500)
    sendArrow("up")
    pause(500)
    sendArrow("right")
}
let arrowList = [0]
let scoreboard4: Sprite = null
let scoreboard3: Sprite = null
let scoreboard2: Sprite = null
let scoreboard1: Sprite = null
let arrowSprite: Sprite = null
startGame()
startLevelZero()
