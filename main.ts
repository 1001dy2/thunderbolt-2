let y = 0
let z = 0
let x = 2
let dx = 1
basic.forever(function () {
    basic.clearScreen()
    z = 0
    y = 0
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x - dx * 0, y, 255)
        led.plotBrightness(x - dx * 1, y, 100)
        led.plotBrightness(x - dx * 2, y, 50)
        led.plotBrightness(x - dx * 3, y, 25)
        led.plotBrightness(x - dx * 4, y, 13)
        y += 1
    }
    basic.pause(100)
})
