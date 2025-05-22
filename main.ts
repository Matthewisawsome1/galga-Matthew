controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 6 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . b b b b b b . . . . . . . 
    . . . 2 . . . . . . . . . . . . 
    . . . 2 1 . . . . . . . . . . . 
    . . 2 2 2 1 1 1 1 . . . . . . . 
    5 b 2 2 2 2 2 2 2 2 2 b b b b . 
    4 b 2 2 2 9 9 9 9 2 2 2 2 . . . 
    . . 2 9 2 2 2 2 2 2 9 9 2 2 2 1 
    5 b 2 2 2 9 9 9 9 2 2 2 2 . . . 
    4 b 2 2 2 2 2 2 2 2 2 b b b b . 
    . . 2 2 2 1 1 1 1 . . . . . . . 
    . . . 2 1 . . . . . . . . . . . 
    . . . 2 . . . . . . . . . . . . 
    . . . b b b b b . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 9 1 1 1 1 . . . . . 
        . . . . . 9 . 7 . 7 . 1 . . . . 
        . . . . 1 . . f 7 f . . 1 . . . 
        . . . . 1 9 . 7 7 7 . . 1 . . . 
        . . . . 1 . . . 7 . . . 1 . . . 
        . . . . 1 . . 7 7 7 . . 1 . . . 
        . . . d b b b b b b b b b d . . 
        . . . d d d d d d d d d d d . . 
        . . . . . b d b d b d b . . . . 
        . . . . . . d d d d d . . . . . 
        . . . . . 5 . . . . . 5 . . . . 
        . . . . 4 . . . . . . . 4 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
