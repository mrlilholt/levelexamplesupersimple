function levelChange (level_NUMBER: number) {
    if (level_NUMBER == 0) {
        scene.setTileMap(img`
            . . . . . . . . . . 
            . . . . . . . . . . 
            . . . . . . . . . . 
            . 3 . . . . . . . . 
            . . . . . . . . 2 . 
            7 7 7 7 7 7 7 7 7 7 
            . . . . . . . . . . 
            . . . . . . . . . . 
            `)
    } else if (level_NUMBER == 1) {
        scene.setTileMap(img`
            . . . . . . . . . . 
            . . . . . . . . 2 . 
            . . . . . . . . . . 
            . 3 . . . . . . . . 
            . . . . . . . . . . 
            7 7 7 . . . 7 7 7 7 
            . . . 7 7 7 . . . . 
            . . . . . . . . . . 
            `)
    } else if (level_NUMBER == 2) {
        scene.setTileMap(img`
            . . . . . . . . . . 
            3 . . . . . . . . . 
            7 . . . . . . . . . 
            7 7 . . . . . . . 2 
            . . 7 . . . . . . . 
            . . . 7 7 . . . . . 
            . . . . . 7 7 7 7 7 
            . . . . . . . . . 7 
            `)
    }
    scene.placeOnRandomTile(mySprite, 3)
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    currentLevel += 1
    levelChange(currentLevel)
})
let currentLevel = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 b c 5 5 d 4 c . . 
    . b b b b 5 5 5 b f d d 4 4 4 b 
    . b d 5 b 5 5 b c b 4 4 4 4 b . 
    . . b 5 5 b 5 5 5 4 4 4 4 b . . 
    . . b d 5 5 b 5 5 5 5 5 5 b . . 
    . b d b 5 5 5 d 5 5 5 5 5 5 b . 
    b d d c d 5 5 b 5 5 5 5 5 5 b . 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setVelocity(0, 50)
scene.setTile(7, img`
    d 1 d d d d d d d 1 d d d d d d 
    d 1 d d d d d d d 1 d d d d d d 
    d 1 d d d d d d d 1 d d d d d d 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    d d d d d 1 d d d d d d d 1 d d 
    d d d d d 1 d d d d d d d 1 d d 
    d d d d d 1 d d d d d d d 1 d d 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 d d d d d d d 1 d d d d d d 
    d 1 d d d d d d d 1 d d d d d d 
    d 1 d d d d d d d 1 d d d d d d 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    d d d d d 1 d d d d d d d 1 d d 
    d d d d d 1 d d d d d d d 1 d d 
    d d d d d 1 d d d d d d d 1 d d 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, true)
scene.setTile(2, img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 6 6 9 9 c c 6 9 9 9 6 6 9 6 
    6 6 6 9 9 9 9 c 6 6 9 9 9 6 6 6 
    6 6 9 9 9 9 9 9 6 6 9 9 9 9 6 6 
    6 9 9 9 6 6 6 6 9 6 9 9 c 9 9 6 
    6 9 c 6 6 6 9 9 9 6 9 c c c 9 6 
    6 9 c c c 9 6 9 9 9 6 6 6 c 9 6 
    6 9 9 c 9 9 6 9 6 6 6 6 9 9 9 6 
    6 6 9 9 9 9 6 6 9 9 9 9 9 9 6 6 
    6 6 6 9 9 9 6 6 c 9 9 9 9 6 6 6 
    6 9 6 6 9 9 9 6 c c 9 9 6 6 9 6 
    6 9 9 6 6 9 9 c c 9 9 6 6 9 9 6 
    6 9 9 9 6 6 9 9 9 9 6 6 9 9 9 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    `, true)
scene.setTile(3, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
currentLevel = 0
levelChange(0)
