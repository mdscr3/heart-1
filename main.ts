basic.forever(function () {
    led.setBrightness(0)
    led.setBrightness(255)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        . . . . .
        `)
    led.setBrightness(255)
    led.setBrightness(0)
})
