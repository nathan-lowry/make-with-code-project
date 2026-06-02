namespace SpriteKind {
    export const Arrow = SpriteKind.create()
}
function sendArrow(direction: string) {
    arrowSprite = sprites.create(img`
        1 
        `, SpriteKind.Arrow)
    if (direction == "left") {
        arrowSprite.setImage(assets.image`leftArrow`)
        arrowSprite.x = 20
        leftArrow.push(arrowSprite)
    } else if (direction == "up") {
        arrowSprite.setImage(assets.image`upArrow`)
        arrowSprite.x = 60
        upArrow.push(arrowSprite)
    } else if (direction == "down") {
        arrowSprite.setImage(assets.image`downArrow`)
        arrowSprite.x = 100
        downArrow.push(arrowSprite)
    } else if (direction == "right") {
        arrowSprite.setImage(assets.image`rightArrow`)
        arrowSprite.x = 140
        rightArrow.push(arrowSprite)
    }
    arrowSprite.y = 0
    arrowSprite.vy = 60
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    for (let i = 0; i < upArrow.length; i++) {
        if (lowestYValue < upArrow[i].y) {
            lowestYValue = upArrow[i].y
        }
    }
    info.changeScoreBy(100 / (1 + Math.abs(((80 - lowestYValue)) / easynessToGetPerfect)))
})

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    for (let i = 0; i < downArrow.length; i++) {
        if (lowestYValue < downArrow[i].y) {
            lowestYValue = downArrow[i].y
        }
    }
    info.changeScoreBy(100 / (1 + Math.abs(((80 - lowestYValue)) / easynessToGetPerfect)))
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    for (let i = 0; i < rightArrow.length; i++) {
        if (lowestYValue < rightArrow[i].y) {
            lowestYValue = rightArrow[i].y
        }
    }
    info.changeScoreBy(100 / (1 + Math.abs(((80 - lowestYValue)) / easynessToGetPerfect)))
})



controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    for (let i = 0; i < leftArrow.length; i++) {
        if (lowestYValue < leftArrow[i].y) {
            lowestYValue = leftArrow[i].y
        }
    }
    info.changeScoreBy(100 / (1 + Math.abs(((80 - lowestYValue)) / easynessToGetPerfect)))
})


function startGame() {
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
function startLevelOne() {

}
function startLevelZero() {
    arrowList.removeAt(0)
    leftArrow.removeAt(0)
    upArrow.removeAt(0)
    downArrow.removeAt(0)
    rightArrow.removeAt(0)
    sendArrow("left")
    pause(750)
    sendArrow("down")
    pause(750)
    sendArrow("up")
    pause(750)
    sendArrow("right")
}
let leftArrow: Sprite[] = []
let upArrow: Sprite[] = []
let downArrow: Sprite[] = []
let rightArrow: Sprite[] = []
let arrowList = [0]
let lowestYValue: number = 0
let easynessToGetPerfect = 13
let scoreboard4: Sprite = null
let scoreboard3: Sprite = null
let scoreboard2: Sprite = null
let scoreboard1: Sprite = null
let arrowSprite: Sprite = null
startGame()
startLevelZero()
