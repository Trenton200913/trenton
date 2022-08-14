 let mySprite = sprites.create(img`
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . 2 2 2 2 2 . . . . . . .
     . . . . 2 2 . 2 2 . . . . . . .
     . . . . 2 . 2 . 2 . . . . . . .
     . . . . 2 2 . 2 2 . . . . . . .
     . . . . 2 2 2 2 2 . . . . . . .
     . . . . . . 2 . . . . . . . . .
     . . . . 2 2 2 2 2 . . . . . . .
     . . . . . . 2 . . . . . . . . .
     . . . . . 2 . 2 . . . . . . . .
     . . . . 2 . . . 2 . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
     . . . . . . . . . . . . . . . .
 `, SpriteKind.Player)

 

controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level1`)
info.player1.setScore(0)
scene.cameraFollowSprite(mySprite)



info.startCountdown(100
)
mySprite.startEffect(effects.spray)
music.playMelody("", 120) 

controller.player1.isPressed(ControllerButton.A)





controller.moveSprite(mySprite)