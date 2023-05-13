input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    X += -1
    led.plot(X, 2)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    X += 1
    led.plot(X, 2)
})
let X = 0
X = 2
led.plot(X, 2)
