scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile12`, function (sprite, location) {
    score += -1
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    score += 1
    tiles.setTileAt(location, assets.tile`transparency16`)
})
let score = 0
tiles.setCurrentTilemap(tilemap`level1`)
let sprite = sprites.create(img`
    . 6 6 6 6 6 6 . . . . . . . . . 
    9 9 9 f 9 9 6 6 6 . . . . . . . 
    9 9 9 9 9 9 9 9 6 6 . . . . . . 
    9 f 9 9 f f 9 9 9 6 6 6 . . . . 
    . 9 9 9 f 9 9 9 9 9 9 6 . . . . 
    . 9 9 9 9 9 9 9 9 9 9 9 6 . . . 
    . 1 2 2 2 1 1 1 1 1 1 1 1 1 . . 
    . 1 1 2 1 1 2 1 2 1 1 2 1 2 . . 
    . 1 1 1 1 1 2 2 2 1 1 2 2 2 . . 
    . 1 1 1 1 1 1 2 1 1 1 1 2 1 . . 
    . 2 1 2 1 1 1 1 1 1 1 1 1 1 . . 
    . 2 2 2 1 1 1 . 1 2 1 2 1 1 1 . 
    . 1 2 1 1 1 . . . 2 2 2 1 1 1 . 
    . 1 1 1 1 1 . . . 1 2 1 1 2 1 . 
    . . 9 9 6 . . . . . 9 9 6 2 2 . 
    . . 9 9 9 6 . . . . . 9 9 6 9 . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(sprite, sprites.dungeon.doorOpenNorth)
scene.cameraFollowSprite(sprite)
controller.moveSprite(sprite)
