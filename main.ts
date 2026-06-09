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
        //puts sprite into array of a certain array
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
    arrowSprite.vy = 80
}
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

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    // stops from adding score, if array is equal or less than length zero
    if (upArrow.length <= 0) {
        return
    }
    let targetIndex = -1
    let targetArrow: Sprite = null
    // getting y value from Arrow, if greater than current lowestYValue
    // when it is done, it removes the closest  arrow to the cricle from the array
    for (let i = 0; i < upArrow.length; i++) {
        if (upArrow[i].y > lowestYValue) {
            lowestYValue = upArrow[i].y
            targetArrow = upArrow[i]
            targetIndex = i
        }
    }
    if (targetArrow !== null && targetIndex !== -1) {
        //inverts sprites image
        targetArrow.setImage(assets.image`upArrows-B`)
        targetArrow.startEffect(effects.rings)
        upArrow.removeAt(targetIndex)
    }
    // scoring
    //80-lowestYValue is the position of the circle - position of the arrow
    //easynessToGetPerfect is hoq much easier it is to get a smaller number(3, three times easier)
    // 1, is there to make sure that you can't get more than 100 points
    info.changeScoreBy(100 / (1 + Math.abs((80 - lowestYValue) / easynessToGetPerfect)))
    // animation
    scoreboard2.setImage(assets.image`scoreboardBackground`)
    scoreboard2.setImage(assets.image`sc2animated`)
    pause(200)
    scoreboard2.setImage(assets.image`scoreboardBackground`)
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    if (leftArrow.length <= 0) {
        return
    }
    let targetIndex = -1
    let targetArrow: Sprite = null
    for (let i = 0; i < leftArrow.length; i++) {
        if (leftArrow[i].y > lowestYValue) {
            lowestYValue = leftArrow[i].y
            targetArrow = leftArrow[i]
            targetIndex = i
        }
    }
    if (targetArrow !== null && targetIndex !== -1) {
        targetArrow.setImage(assets.image`leftArrow-B`)
        targetArrow.startEffect(effects.rings)
        leftArrow.removeAt(targetIndex)
    }
    info.changeScoreBy(100 / (1 + Math.abs((80 - lowestYValue) / easynessToGetPerfect)))
    scoreboard1.setImage(assets.image`scoreboardBackground`)
    scoreboard1.setImage(assets.image`sc1animated`)
    pause(200)
    scoreboard1.setImage(assets.image`scoreboardBackground`)
})
function startLevelOne() {
    sendArrow("left")
    pause(320)
    sendArrow("right")
    pause(320)
    sendArrow("down")
    pause(160)
    sendArrow("up")
    pause(200)
    music.play(music.createSong(assets.song`firstSong`), music.PlaybackMode.LoopingInBackground)
    pause(640)
    sendArrow("left")
    pause(1440)
    sendArrow("left")
    pause(320)
    sendArrow("right")
    pause(320)
    sendArrow("down")
    pause(160)
    sendArrow("up")
    pause(800)
    sendArrow("left")
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lowestYValue = 0
    if (rightArrow.length <= 0) {
        return
    }
    let targetIndex = -1
    let targetArrow: Sprite = null
    for (let i = 0; i < rightArrow.length; i++) {
        if (rightArrow[i].y > lowestYValue) {
            lowestYValue = rightArrow[i].y
            targetArrow = rightArrow[i]
            targetIndex = i
        }
    }
    if (targetArrow !== null && targetIndex !== -1) {
        targetArrow.setImage(assets.image`rightArrow-B`)
        targetArrow.startEffect(effects.rings)
        rightArrow.removeAt(targetIndex)
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
    let targetIndex = -1
    let targetArrow: Sprite = null
    for (let i = 0; i < downArrow.length; i++) {
        if (downArrow[i].y > lowestYValue) {
            lowestYValue = downArrow[i].y
            targetArrow = downArrow[i]
            targetIndex = i
        }
    }
    if (targetArrow !== null && targetIndex !== -1) {
        targetArrow.setImage(assets.image`downArrow-B`)
        targetArrow.startEffect(effects.rings)
        downArrow.removeAt(targetIndex)

    }
    info.changeScoreBy(100 / (1 + Math.abs((80 - lowestYValue) / easynessToGetPerfect)))
    scoreboard3.setImage(assets.image`scoreboardBackground`)
    scoreboard3.setImage(assets.image`sc3animated`)
    pause(200)
    scoreboard3.setImage(assets.image`scoreboardBackground`)
})
function startLevelZero() {
    sendArrow("left")
    pause(300)
    music.play(music.createSong(assets.song`secondSong`), music.PlaybackMode.InBackground)
    sendArrow("right")
    pause(250)
    sendArrow("left")
    pause(250)
    sendArrow("right")
    pause(250)
    sendArrow("left")
    pause(250)
    sendArrow("right")
    pause(400)
    sendArrow("left")
    pause(600)
    sendArrow("left")
    pause(400)
    sendArrow("down")
    pause(400)
    sendArrow("right")
    pause(400)
    sendArrow("left")
    pause(500)
    sendArrow("right")
    pause(500)
    sendArrow("up")
    pause(500)
    sendArrow("down")
    pause(500)
    sendArrow("down")
    pause(400)
    sendArrow("up")
    pause(400)
    sendArrow("down")
    pause(500)
    sendArrow("up")
    pause(600)
    sendArrow("up")
    pause(800)
    sendArrow("up")
    
    

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

function levelSelector() {
    let level = 0;
    while (level < 1 || level > 2) {
        level = game.askForNumber("Choose a level (1, 2):", 1)
    }

    if (level === 2) {
        startLevelZero()
    } else if (level === 1) {
        startLevelOne()
    }
}

startGame()
levelSelector()