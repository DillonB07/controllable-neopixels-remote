keyboard.kbEvent(KeyValue.key4, function () {
    if (!(menu)) {
        radio.sendNumber(4)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    } else {
        basic.showString("R")
        while (keyboard.keyBasic() == -1) {
        	
        }
        R1 = keyboard.keyBasic()
        basic.showNumber(R1)
        while (keyboard.keyBasic() == -1) {
        	
        }
        R2 = keyboard.keyBasic()
        basic.showNumber(R2)
        while (keyboard.keyBasic() == -1) {
        	
        }
        R3 = keyboard.keyBasic()
        basic.showNumber(R3)
        R = 100 * R1 + (10 * R2 + R3)
        basic.showString("G")
        while (keyboard.keyBasic() == -1) {
        	
        }
        G1 = keyboard.keyBasic()
        basic.showNumber(G1)
        while (keyboard.keyBasic() == -1) {
        	
        }
        G2 = keyboard.keyBasic()
        basic.showNumber(G2)
        while (keyboard.keyBasic() == -1) {
        	
        }
        G3 = keyboard.keyBasic()
        basic.showNumber(G3)
        G = 100 * G1 + (10 * G2 + G3)
        basic.showString("B")
        while (keyboard.keyBasic() == -1) {
        	
        }
        B1 = keyboard.keyBasic()
        basic.showNumber(B1)
        while (keyboard.keyBasic() == -1) {
        	
        }
        B2 = keyboard.keyBasic()
        basic.showNumber(B2)
        while (keyboard.keyBasic() == -1) {
        	
        }
        B3 = keyboard.keyBasic()
        basic.showNumber(B3)
        B = 100 * B1 + (10 * B2 + B3)
        radio.sendValue("R", R)
        radio.sendValue("G", G)
        radio.sendValue("B", B)
        radio.sendValue("RGBready", 1)
        basic.showString("S")
    }
})
keyboard.kbEvent(KeyValue.key7, function () {
    if (!(menu)) {
        radio.sendNumber(7)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    radio.sendNumber(receivedNumber)
})
keyboard.kbEvent(KeyValue.key1, function () {
    if (!(menu)) {
        radio.sendNumber(1)
    } else {
        radio.sendString("S*")
    }
    music.playTone(262, music.beat(BeatFraction.Quarter))
})
keyboard.kbEvent(KeyValue.keyminus, function () {
    if (!(menu)) {
        radio.sendString("-")
    } else {
        radio.sendString("S-")
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
keyboard.kbEvent(KeyValue.key5, function () {
    if (!(menu)) {
        radio.sendNumber(5)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    } else {
        basic.showString("H")
        while (keyboard.keyBasic() == -1) {
        	
        }
        H1 = keyboard.keyBasic()
        basic.showNumber(H1)
        while (keyboard.keyBasic() == -1) {
        	
        }
        H2 = keyboard.keyBasic()
        basic.showNumber(H2)
        while (keyboard.keyBasic() == -1) {
        	
        }
        H3 = keyboard.keyBasic()
        basic.showNumber(H3)
        H = 100 * H1 + (10 * H2 + H3)
        basic.showString("S")
        while (keyboard.keyBasic() == -1) {
        	
        }
        S1 = keyboard.keyBasic()
        basic.showNumber(S1)
        while (keyboard.keyBasic() == -1) {
        	
        }
        S2 = keyboard.keyBasic()
        basic.showNumber(S2)
        while (keyboard.keyBasic() == -1) {
        	
        }
        S3 = keyboard.keyBasic()
        basic.showNumber(S3)
        S = 100 * S1 + (10 * S2 + S3)
        basic.showString("L")
        while (keyboard.keyBasic() == -1) {
        	
        }
        L1 = keyboard.keyBasic()
        basic.showNumber(L1)
        while (keyboard.keyBasic() == -1) {
        	
        }
        L2 = keyboard.keyBasic()
        basic.showNumber(L2)
        while (keyboard.keyBasic() == -1) {
        	
        }
        L3 = keyboard.keyBasic()
        basic.showNumber(L3)
        L = 100 * L1 + (10 * L2 + L3)
        radio.sendValue("H", H)
        radio.sendValue("S", S)
        radio.sendValue("L", L)
        radio.sendValue("HSLready", 1)
        basic.showString("S")
    }
})
keyboard.kbEvent(KeyValue.keydiv, function () {
    if (!(menu)) {
        radio.sendString("/")
        waiting = true
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
keyboard.kbEvent(KeyValue.key9, function () {
    if (!(menu)) {
        radio.sendNumber(9)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
keyboard.kbEvent(KeyValue.key8, function () {
    if (!(menu)) {
        radio.sendNumber(8)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
keyboard.kbEvent(KeyValue.key0, function () {
    if (!(menu)) {
        radio.sendNumber(0)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
keyboard.kbEvent(KeyValue.key6, function () {
    if (!(menu)) {
        radio.sendNumber(6)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    } else {
        radio.sendString("S6")
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
radio.onReceivedString(function (receivedString) {
    radio.sendString(receivedString)
})
keyboard.kbEvent(KeyValue.keymul, function () {
    if (!(menu)) {
        radio.sendString("*")
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
keyboard.kbEvent(KeyValue.key3, function () {
    if (!(menu)) {
        radio.sendNumber(3)
    } else {
        radio.sendString("SR")
    }
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
keyboard.kbEvent(KeyValue.keydf, function () {
    if (!(menu)) {
        menu = true
        basic.showString("S")
    } else {
        menu = false
        basic.clearScreen()
    }
})
keyboard.kbEvent(KeyValue.keyplus, function () {
    if (!(menu)) {
        radio.sendString("+")
    } else {
        radio.sendString("S+")
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
})
keyboard.kbEvent(KeyValue.key2, function () {
    if (!(menu)) {
        radio.sendNumber(2)
    } else {
        radio.sendString("S/")
    }
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
let L = 0
let L3 = 0
let L2 = 0
let L1 = 0
let S = 0
let S3 = 0
let S2 = 0
let S1 = 0
let H = 0
let H3 = 0
let H2 = 0
let H1 = 0
let B = 0
let B3 = 0
let B2 = 0
let B1 = 0
let G = 0
let G3 = 0
let G2 = 0
let G1 = 0
let R = 0
let R3 = 0
let R2 = 0
let R1 = 0
let waiting = false
let menu = false
let led_7 = "R"
let led_9 = "V"
music.setVolume(10)
menu = false
waiting = false
keyboard.ledBlank()
radio.setGroup(255)
keyboard.setBrightness(2)
keyboard.setIndexColor(1, 0xff0000)
keyboard.setIndexColor(2, 0x00ff00)
keyboard.setIndexColor(3, 0x007fff)
keyboard.setIndexColor(4, keyboard.rgb(255, 0, 123))
keyboard.setIndexColor(5, keyboard.rgb(149, 0, 255))
keyboard.setIndexColor(6, keyboard.rgb(0, 255, 251))
keyboard.setIndexColor(8, keyboard.rgb(255, 127, 0))
loops.everyInterval(1000, function () {
    if (led_7 == "G") {
        keyboard.setIndexColor(7, keyboard.rgb(255, 0, 0))
        led_7 = "R"
    } else if (led_7 == "R") {
        keyboard.setIndexColor(7, keyboard.rgb(0, 255, 0))
        led_7 = "G"
    }
    if (led_9 == "V") {
        keyboard.setIndexColor(9, keyboard.rgb(255, 0, 0))
        led_9 = "R"
    } else if (led_9 == "R") {
        keyboard.setIndexColor(9, keyboard.rgb(255, 127, 0))
        led_9 = "O"
    } else if (led_9 == "O") {
        keyboard.setIndexColor(9, keyboard.rgb(255, 255, 0))
        led_9 = "Y"
    } else if (led_9 == "Y") {
        keyboard.setIndexColor(9, keyboard.rgb(0, 255, 0))
        led_9 = "G"
    } else if (led_9 == "G") {
        keyboard.setIndexColor(9, keyboard.rgb(0, 0, 255))
        led_9 = "B"
    } else if (led_9 == "B") {
        keyboard.setIndexColor(9, keyboard.rgb(75, 0, 130))
        led_9 = "I"
    } else if (led_9 == "I") {
        keyboard.setIndexColor(9, keyboard.rgb(148, 0, 211))
        led_9 = "V"
    }
})
