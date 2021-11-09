input.onButtonPressed(Button.A, function () {
    Parking_spaces += -1
    music.playMelody("C C5 - - - - - - ", 500)
})
input.onButtonPressed(Button.B, function () {
    Parking_spaces += 1
    music.playMelody("C5 C - - - - - - ", 500)
})
let Parking_spaces = 20
music.playMelody("C D E F G A B C5 ", 500)
basic.showString("Car Park Empty!")
basic.forever(function () {
    basic.showNumber(Parking_spaces)
    if (Parking_spaces > 0) {
        basic.showString("Spaces Left")
    } else {
        music.playMelody("C5 B A G F E D C ", 500)
        basic.showString("Car Park Full!")
    }
})
