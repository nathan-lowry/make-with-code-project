@namespace
class SpriteKind:
    Arrow = SpriteKind.create()
def sendArrow(direction: str):
    global arrowSprite
    arrowSprite = sprites.create(img("""
        1
        """), SpriteKind.Arrow)
    if direction == "left":
        arrowSprite.set_image(assets.image("""
            leftArrow
            """))
        arrowSprite.x = 20
        # puts sprite into array of a certain array
        leftArrow.append(arrowSprite)
    elif direction == "up":
        arrowSprite.set_image(assets.image("""
            upArrow
            """))
        arrowSprite.x = 60
        upArrow.append(arrowSprite)
    elif direction == "down":
        arrowSprite.set_image(assets.image("""
            downArrow
            """))
        arrowSprite.x = 100
        downArrow.append(arrowSprite)
    elif direction == "right":
        arrowSprite.set_image(assets.image("""
            rightArrow
            """))
        arrowSprite.x = 140
        rightArrow.append(arrowSprite)
    arrowSprite.y = 0
    arrowSprite.vy = 80
def startGame():
    global scoreboard1, scoreboard2, scoreboard3, scoreboard4
    # let arrow = sprites.create(assets.image`purpleArrow`, SpriteKind.Player)
    scene.set_background_color(9)
    scoreboard1 = sprites.create(assets.image("""
            scoreboardBackground
            """),
        SpriteKind.projectile)
    scoreboard2 = sprites.create(assets.image("""
            scoreboardBackground
            """),
        SpriteKind.projectile)
    scoreboard3 = sprites.create(assets.image("""
            scoreboardBackground
            """),
        SpriteKind.projectile)
    scoreboard4 = sprites.create(assets.image("""
            scoreboardBackground
            """),
        SpriteKind.projectile)
    scoreboard1.set_position(20, 80)
    scoreboard2.set_position(60, 80)
    scoreboard3.set_position(100, 80)
    scoreboard4.set_position(140, 80)
    info.set_score(0)

def on_up_pressed():
    global lowestYValue
    lowestYValue = 0
    # stops from adding score, if array is equal or less than length zero
    if len(upArrow) <= 0:
        return
    # getting y value from Arrow, if greater than current lowestYValue
    # when it is done, it removes the closest  arrow to the cricle from the array
    for i in range(len(upArrow)):
        if lowestYValue < upArrow[i].y:
            lowestYValue = upArrow[i].y
            # inverts sprites image
            upArrow[i].set_image(assets.image("""
                upArrow-B
                """))
        if i == len(upArrow) - 1:
            upArrow.remove_at(i)
    # scoring
    # 80-lowestYValue is the position of the circle - position of the arrow
    # easynessToGetPerfect is hoq much easier it is to get a smaller number(3, three times easier)
    # 1, is there to make sure that you can't get more than 100 points
    info.change_score_by(100 / (1 + abs((80 - lowestYValue) / easynessToGetPerfect)))
    # animation
    scoreboard2.set_image(assets.image("""
        scoreboardBackground
        """))
    scoreboard2.set_image(assets.image("""
        sc2animated
        """))
    pause(200)
    scoreboard2.set_image(assets.image("""
        scoreboardBackground
        """))
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    global lowestYValue
    lowestYValue = 0
    if len(leftArrow) <= 0:
        return
    for j in range(len(leftArrow)):
        if lowestYValue < leftArrow[j].y:
            lowestYValue = leftArrow[j].y
            leftArrow[j].set_image(assets.image("""
                leftArrow-B
                """))
        if j == len(leftArrow) - 1:
            leftArrow.remove_at(j)
    info.change_score_by(100 / (1 + abs((80 - lowestYValue) / easynessToGetPerfect)))
    scoreboard1.set_image(assets.image("""
        scoreboardBackground
        """))
    scoreboard1.set_image(assets.image("""
        sc1animated
        """))
    pause(200)
    scoreboard1.set_image(assets.image("""
        scoreboardBackground
        """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def startLevelOne():
    sendArrow("left")
    pause(160)
    pause(160)
    sendArrow("right")
    pause(160)
    pause(170)
    sendArrow("down")
    pause(170)
    sendArrow("up")
    pause(180)
    music.play(music.create_song(assets.song("""
            firstSong
            """)),
        music.PlaybackMode.LOOPING_IN_BACKGROUND)
    sendArrow("up")

def on_right_pressed():
    global lowestYValue
    lowestYValue = 0
    if len(rightArrow) <= 0:
        return
    for k in range(len(rightArrow)):
        if lowestYValue < rightArrow[k].y:
            lowestYValue = rightArrow[k].y
            rightArrow[k].set_image(assets.image("""
                rightArrow-B
                """))
        if k == len(rightArrow) - 1:
            rightArrow.remove_at(k)
    info.change_score_by(100 / (1 + abs((80 - lowestYValue) / easynessToGetPerfect)))
    scoreboard4.set_image(assets.image("""
        scoreboardBackground
        """))
    scoreboard4.set_image(assets.image("""
        sc4animated
        """))
    pause(200)
    scoreboard4.set_image(assets.image("""
        scoreboardBackground
        """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    global lowestYValue
    lowestYValue = 0
    if len(downArrow) <= 0:
        return
    for l in range(len(downArrow)):
        if lowestYValue < downArrow[l].y:
            lowestYValue = downArrow[l].y
            downArrow[l].set_image(assets.image("""
                downArrow-B
                """))
        if l == len(downArrow) - 1:
            downArrow.remove_at(l)
    info.change_score_by(100 / (1 + abs((80 - lowestYValue) / easynessToGetPerfect)))
    scoreboard3.set_image(assets.image("""
        scoreboardBackground
        """))
    scoreboard3.set_image(assets.image("""
        sc3animated
        """))
    pause(200)
    scoreboard3.set_image(assets.image("""
        scoreboardBackground
        """))
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def startLevelZero():
    pass
scoreboard4: Sprite = None
scoreboard3: Sprite = None
scoreboard1: Sprite = None
rightArrow: List[Sprite] = []
downArrow: List[Sprite] = []
leftArrow: List[Sprite] = []
arrowSprite: Sprite = None
scoreboard2: Sprite = None
upArrow: List[Sprite] = []
lowestYValue = 0
easynessToGetPerfect = 0
arrowList: List[number] = []
arrowList = [0]
easynessToGetPerfect = 3
startGame()
startLevelZero()
# startLevelZero()
startLevelOne()