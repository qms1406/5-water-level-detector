basic.forever(function () {
    if (pins.analogReadPin(AnalogReadWritePin.P1) == 500) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.InBackground)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(10000)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(10000)
    }
})
