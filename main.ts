controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (randomPick == 0) {
        info.changeScoreBy(1)
    }
    generate()
})
function generate () {
    randomPick = randint(0, 1)
    if (randomPick == 0) {
        mySprite.sayText("push A")
    } else {
        mySprite.sayText("push B")
    }
}
let randomPick = 0
let mySprite: Sprite = null
game.splash("Push A or B as Directed")
mySprite = sprites.create(img`
    . . . . . . . . b b b b . . . . 
    . . . . b b b b 3 3 3 3 b . . . 
    . c c b b 1 1 3 3 3 3 3 b b . . 
    c c b 3 1 1 3 3 3 3 3 1 1 b . . 
    c b 3 3 3 3 3 3 3 3 3 1 1 b . . 
    f b b c c c c b 3 3 3 3 3 c . . 
    f b c c c d d d b b 3 3 3 3 c . 
    f b c b d d d d d d b b 3 3 b c 
    . c b d c d d d d d d b c 3 3 c 
    . c d d c d d d c d d c c c 3 f 
    . f d d d d d c d d d c c c b f 
    . f d b b b d d b f f c c c b f 
    . . c d d d d b d d b f b b f f 
    . . . c d d d b b d d f f f f . 
    . . . f f b b f b b b b . . . . 
    . . . f b b b f f . . . . . . . 
    `, SpriteKind.Player)
info.startCountdown(20)
generate()
