let Y = 0
let X = 0
let szorzo = 3
music.setVolume(255)
basic.forever(function () {
    X = pins.analogReadPin(AnalogPin.P0)
    serial.writeValue("x", X)
    Y = pins.analogReadPin(AnalogPin.P1)
    serial.writeValue("y", Y)
    basic.pause(250)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Sine,
    220 + X * szorzo,
    220 + Y * szorzo,
    255,
    0,
    250,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
