input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    nave.move(-1)
})
input.onGesture(Gesture.Shake, function () {
    game.pause()
})
input.onButtonPressed(Button.AB, function () {
    disparo = game.createSprite(nave.get(LedSpriteProperty.X), nave.get(LedSpriteProperty.Y))
    for (let index = 0; index < 5; index++) {
        disparo.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    nave.move(1)
})
let disparo: game.LedSprite = null
let nave: game.LedSprite = null
nave = game.createSprite(2, 4)
let enemigo1 = game.createSprite(2, 0)
disparo = game.createSprite(2, 0)
enemigo1.delete()
disparo.delete()
game.setScore(0)
basic.forever(function () {
    if (disparo.get(LedSpriteProperty.Y) == 0) {
        disparo.delete()
    }
})
basic.forever(function () {
    basic.pause(100)
    enemigo1 = game.createSprite(randint(0, 10), 0)
})
