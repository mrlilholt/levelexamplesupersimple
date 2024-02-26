// This just allows the user to hit a different style tile to win the game.
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    game.gameOver(true)
})
// This is where we can set our levels.  You create a tile map and set the "level_NUMBER" to the number of the level (in this case starting at 0)... Each tile map is different based on each condition... This is checking the level_NUMBER and then setting the tilemap based on what number level you are on.  It also places the player on the pink starting tile
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
    } else if (level_NUMBER == 3) {
        scene.setTileMap(img`
            . . . . . . . . . . 
            3 . . . . . . . . . 
            7 7 7 . . . . . . . 
            7 7 7 7 . . . . . a 
            7 7 7 7 7 7 7 7 7 7 
            7 7 7 7 7 7 7 7 7 7 
            . . . . . 7 7 7 7 7 
            . . . . . . . . . 7 
            `)
    }
    scene.placeOnRandomTile(mySprite, 3)
}
// in short, this allows the player to hit a red tile and upon doing so, it changes the "currentlevel".  It ADDS 1 to what ever level it is on.  Since it is the current level + 1 when we call the function to change level, it will check the condition and it will go to the next level
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
scene.setTile(10, img`
    . . b b b b b b b b b b b b . . 
    . b e 4 4 4 4 4 4 4 4 4 4 e b . 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b 
    b e e 4 4 4 4 4 4 4 4 4 4 e e b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b b b b b b b d d b b b b b b b 
    c b b b b b b c c b b b b b b c 
    c c c c c c b c c b c c c c c c 
    b e e e e e c b b c e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `, true)
// this sets the currentLevel (used when the player goes to another level
// 
currentLevel = 0
// this is calling the first level in the function's condition
levelChange(0)
