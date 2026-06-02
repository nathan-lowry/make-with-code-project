namespace SpriteKind {
    export const Arrow = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    // stops from adding score, if array is equal or less than length zero
    if (upArrow.length <= 0) {
        return
    }
    // getting y value from Arrow
    for (let i = 0; i <= upArrow.length - 1; i++) {
        if (lowestYValue < upArrow[i].y) {
            lowestYValue = upArrow[i].y
            upArrow.removeAt(i)
        }
    }
    // scoring
    info.changeScoreBy(100 / (1 + Math.abs((80 - lowestYValue) / easynessToGetPerfect)))
    // animation
    scoreboard2.setImage(assets.image`scoreboardBackground`)
    scoreboard2.setImage(assets.image`sc2animated`)
    pause(200)
    scoreboard2.setImage(assets.image`scoreboardBackground`)
})
function sendArrow (direction: string) {
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    if (leftArrow.length <= 0) {
        return
    }
    for (let l = 0; l <= leftArrow.length - 1; l++) {
        if (lowestYValue < leftArrow[l].y) {
            lowestYValue = leftArrow[l].y
            leftArrow.removeAt(l)
        }
    }
    info.changeScoreBy(100 / (1 + Math.abs((80 - lowestYValue) / easynessToGetPerfect)))
    scoreboard1.setImage(assets.image`scoreboardBackground`)
    scoreboard1.setImage(assets.image`sc1animated`)
    pause(200)
    scoreboard1.setImage(assets.image`scoreboardBackground`)
})
function startLevelOne () {
	
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    if (rightArrow.length <= 0) {
        return
    }
    for (let k = 0; k <= rightArrow.length - 1; k++) {
        if (lowestYValue < rightArrow[k].y) {
            lowestYValue = rightArrow[k].y
            rightArrow.removeAt(k)
        }
    }
    info.changeScoreBy(100 / (1 + Math.abs((80 - lowestYValue) / easynessToGetPerfect)))
    scoreboard4.setImage(assets.image`scoreboardBackground`)
    scoreboard4.setImage(assets.image`sc4animated`)
    pause(200)
    scoreboard4.setImage(assets.image`scoreboardBackground`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    if (downArrow.length <= 0) {
        return
    }
    for (let j = 0; j <= downArrow.length - 1; j++) {
        if (lowestYValue < downArrow[j].y) {
            lowestYValue = downArrow[j].y
            downArrow.removeAt(j)
        }
    }
    info.changeScoreBy(100 / (1 + Math.abs((80 - lowestYValue) / easynessToGetPerfect)))
    scoreboard3.setImage(assets.image`scoreboardBackground`)
    scoreboard3.setImage(assets.image`sc3animated`)
    pause(200)
    scoreboard3.setImage(assets.image`scoreboardBackground`)
})
function startLevelZero () {
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
let scoreboard4: Sprite = null
let scoreboard3: Sprite = null
let scoreboard1: Sprite = null
let rightArrow: Sprite[] = []
let downArrow: Sprite[] = []
let leftArrow: Sprite[] = []
let arrowSprite: Sprite = null
let scoreboard2: Sprite = null
let upArrow: Sprite[] = []
let lowestYValue = 0
let easynessToGetPerfect = 0
let arrowList: number[] = []
arrowList = [0]
easynessToGetPerfect = 3
startGame()
startLevelZero()
