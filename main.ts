keyboard.kbEvent(KeyValue.key4, function my_function() {
    
    if (!menu) {
        radio.sendNumber(4)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    } else {
        basic.showString("R")
        while (R1 == -1) {
            R1 = keyboard.keyBasic()
        }
        basic.showNumber(R1)
    }
    
})
keyboard.kbEvent(KeyValue.key7, function my_function2() {
    if (!menu) {
        radio.sendNumber(7)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    
})
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    radio.sendNumber(receivedNumber)
})
keyboard.kbEvent(KeyValue.key1, function my_function3() {
    if (!menu) {
        radio.sendNumber(1)
    } else {
        radio.sendString("S*")
    }
    
    music.playTone(262, music.beat(BeatFraction.Quarter))
})
keyboard.kbEvent(KeyValue.keyminus, function my_function4() {
    if (!menu) {
        radio.sendString("-")
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    
})
keyboard.kbEvent(KeyValue.key5, function my_function5() {
    if (!menu) {
        radio.sendNumber(5)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    
})
keyboard.kbEvent(KeyValue.keydiv, function my_function6() {
    
    if (!menu) {
        radio.sendString("/")
        waiting = true
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    
})
keyboard.kbEvent(KeyValue.key9, function my_function7() {
    if (!menu) {
        radio.sendNumber(9)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    
})
keyboard.kbEvent(KeyValue.key8, function my_function8() {
    if (!menu) {
        radio.sendNumber(8)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    
})
keyboard.kbEvent(KeyValue.key0, function my_function9() {
    if (!menu) {
        radio.sendNumber(0)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    
})
keyboard.kbEvent(KeyValue.key6, function my_function10() {
    if (!menu) {
        radio.sendNumber(6)
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    radio.sendString(receivedString)
})
keyboard.kbEvent(KeyValue.keymul, function my_function11() {
    if (!menu) {
        radio.sendString("*")
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    
})
keyboard.kbEvent(KeyValue.key3, function my_function12() {
    if (!menu) {
        radio.sendNumber(3)
    } else {
        radio.sendString("SR")
    }
    
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
keyboard.kbEvent(KeyValue.keydf, function my_function13() {
    
    if (!menu) {
        menu = true
        basic.showString("S")
    } else {
        menu = false
    }
    
})
keyboard.kbEvent(KeyValue.keyplus, function my_function14() {
    if (!menu) {
        radio.sendString("+")
        music.playTone(262, music.beat(BeatFraction.Eighth))
    }
    
})
keyboard.kbEvent(KeyValue.key2, function my_function15() {
    if (!menu) {
        radio.sendNumber(2)
    } else {
        radio.sendString("S/")
    }
    
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
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
loops.everyInterval(1000, function on_every_interval() {
    
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
