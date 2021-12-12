def my_function():
    global R1
    if not (menu):
        radio.send_number(4)
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
    else:
        basic.show_string("R")
        while R1 == -1:
            R1 = keyboard.key_basic()
        basic.show_number(R1)
keyboard.kb_event(KeyValue.KEY4, my_function)

def my_function2():
    if not (menu):
        radio.send_number(7)
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEY7, my_function2)

def on_received_number(receivedNumber):
    radio.send_number(receivedNumber)
radio.on_received_number(on_received_number)

def my_function3():
    if not (menu):
        radio.send_number(1)
    else:
        radio.send_string("S*")
    music.play_tone(262, music.beat(BeatFraction.QUARTER))
keyboard.kb_event(KeyValue.KEY1, my_function3)

def my_function4():
    if not (menu):
        radio.send_string("-")
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEYMINUS, my_function4)

def my_function5():
    if not (menu):
        radio.send_number(5)
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEY5, my_function5)

def my_function6():
    global waiting
    if not (menu):
        radio.send_string("/")
        waiting = True
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEYDIV, my_function6)

def my_function7():
    if not (menu):
        radio.send_number(9)
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEY9, my_function7)

def my_function8():
    if not (menu):
        radio.send_number(8)
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEY8, my_function8)

def my_function9():
    if not (menu):
        radio.send_number(0)
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEY0, my_function9)

def my_function10():
    if not (menu):
        radio.send_number(6)
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEY6, my_function10)

def on_received_string(receivedString):
    radio.send_string(receivedString)
radio.on_received_string(on_received_string)

def my_function11():
    if not (menu):
        radio.send_string("*")
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEYMUL, my_function11)

def my_function12():
    if not (menu):
        radio.send_number(3)
    else:
        radio.send_string("SR")
    music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEY3, my_function12)

def my_function13():
    global menu
    if not (menu):
        menu = True
        basic.show_string("S")
    else:
        menu = False
keyboard.kb_event(KeyValue.KEYDF, my_function13)

def my_function14():
    if not (menu):
        radio.send_string("+")
        music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEYPLUS, my_function14)

def my_function15():
    if not (menu):
        radio.send_number(2)
    else:
        radio.send_string("S/")
    music.play_tone(262, music.beat(BeatFraction.EIGHTH))
keyboard.kb_event(KeyValue.KEY2, my_function15)

R1 = 0
waiting = False
menu = False
led_7 = "R"
led_9 = "V"
music.set_volume(10)
menu = False
waiting = False
keyboard.led_blank()
radio.set_group(255)
keyboard.set_brightness(2)
keyboard.set_index_color(1, 0xff0000)
keyboard.set_index_color(2, 0x00ff00)
keyboard.set_index_color(3, 0x007fff)
keyboard.set_index_color(4, keyboard.rgb(255, 0, 123))
keyboard.set_index_color(5, keyboard.rgb(149, 0, 255))
keyboard.set_index_color(6, keyboard.rgb(0, 255, 251))
keyboard.set_index_color(8, keyboard.rgb(255, 127, 0))

def on_every_interval():
    global led_7, led_9
    if led_7 == "G":
        keyboard.set_index_color(7, keyboard.rgb(255, 0, 0))
        led_7 = "R"
    elif led_7 == "R":
        keyboard.set_index_color(7, keyboard.rgb(0, 255, 0))
        led_7 = "G"
    if led_9 == "V":
        keyboard.set_index_color(9, keyboard.rgb(255, 0, 0))
        led_9 = "R"
    elif led_9 == "R":
        keyboard.set_index_color(9, keyboard.rgb(255, 127, 0))
        led_9 = "O"
    elif led_9 == "O":
        keyboard.set_index_color(9, keyboard.rgb(255, 255, 0))
        led_9 = "Y"
    elif led_9 == "Y":
        keyboard.set_index_color(9, keyboard.rgb(0, 255, 0))
        led_9 = "G"
    elif led_9 == "G":
        keyboard.set_index_color(9, keyboard.rgb(0, 0, 255))
        led_9 = "B"
    elif led_9 == "B":
        keyboard.set_index_color(9, keyboard.rgb(75, 0, 130))
        led_9 = "I"
    elif led_9 == "I":
        keyboard.set_index_color(9, keyboard.rgb(148, 0, 211))
        led_9 = "V"
loops.every_interval(1000, on_every_interval)
