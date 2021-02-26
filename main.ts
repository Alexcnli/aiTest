/*
load dependency
"aiTest": "file:../pxt-aiTest"
*/
  
  //% color="#73216D" weight=25 icon="\uf0eb"
  namespace aiTestLight {
  
      export enum Colour {
  
          //% blockId="Off" block="Off"
          OFF = 0,
          //% blockId="Red" block="Red"
          Red,
          //% blockId="Green" block="Green"
          Green,
          //% blockId="Blue" block="Blue"
          Blue,
          //% blockId="White" block="White"
          White,
          //% blockId="Cyan" block="Cyan"
          Cyan,
          //% blockId="Pink" block="Pink"
          Pink,
          //% blockId="Green" block="Yellow"
          Yellow,
  
      }
      export enum LEDstate {
  
          //% blockId="OFF" block="Off"
          OFF = 0,
          //% blockId="ON" block="On"
          ON =1
      }
  
      //% blockId=aiTestLED1 block="LED1|pin %pin|value %value"
      //% weight=5 blockGap=8 color="#73216D"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=1
      export function aiTestLED1(pin: DigitalPin, value: LEDstate): void {
  
          pins.digitalWritePin(pin, value);
  
      }
  
      //% blockId=aiTestLED2 block="LED2|pin %pin|value %value"
      //% weight=4 blockGap=8 color="#73216D"
      //% value.min=0 value.max=255
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=2
      export function aiTestLED2(pin: AnalogPin, value: number): void {
  
          pins.analogWritePin(pin, value * 1024 / 256);
  
      }
  
      //% blockId=aiTestBreathLED block="BreathLED|pin %pin"
      //% weight=3 blockGap=8 color="#73216D"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=3
      export function aiTestBreathLED(pin: AnalogPin): void {
  
          for (let i: number = 0; i < 1023; i++) {
              pins.analogWritePin(pin, i);
              control.waitMicros(1000);
          }
          basic.pause(10);
          for (let i: number = 1023; i > 0; i--) {
              pins.analogWritePin(pin, i);
              control.waitMicros(1000);
          }
  
      }
  
      //% blockId=aiTestRGB1 block="RGB1|pinR %pin1|pinG %pin2|pinB %pin3|value1 %value1|value2 %value2|value3 %value3"
      //% weight=2 blockGap=8 color="#73216D"
      //% value1.min=0 value1.max=255 value2.min=0 value2.max=255 value3.min=0 value3.max=255
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestRGB1(pin1: AnalogPin, pin2: AnalogPin, pin3: AnalogPin, value1: number, value2: number, value3: number): void {
  
          pins.analogWritePin(pin1, value1 * 1024 / 256);
          pins.analogWritePin(pin2, value2 * 1024 / 256);
          pins.analogWritePin(pin3, value3 * 1024 / 256);
  
      }
  
      //% blockId=aiTestRGB2 block="RGB2|pinR %pin1|pinG %pin2|pinB %pin3|value %value"
      //% weight=1 blockGap=8 color="#73216D"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestRGB2(pin1: DigitalPin, pin2: DigitalPin, pin3: DigitalPin, value: Colour): void {
  
          switch (value) {
              case Colour.OFF: {
                  pins.digitalWritePin(pin1, 0);
                  pins.digitalWritePin(pin2, 0);
                  pins.digitalWritePin(pin3, 0);
                  break;
              }
              case Colour.Red: {
                  pins.digitalWritePin(pin1, 1);
                  pins.digitalWritePin(pin2, 0);
                  pins.digitalWritePin(pin3, 0);
                  break;
              }
              case Colour.Green: {
                  pins.digitalWritePin(pin1, 0);
                  pins.digitalWritePin(pin2, 1);
                  pins.digitalWritePin(pin3, 0);
                  break;
              }
              case Colour.Blue: {
                  pins.digitalWritePin(pin1, 0);
                  pins.digitalWritePin(pin2, 0);
                  pins.digitalWritePin(pin3, 1);
                  break;
              }
              case Colour.White: {
                  pins.digitalWritePin(pin1, 1);
                  pins.digitalWritePin(pin2, 1);
                  pins.digitalWritePin(pin3, 1);
                  break;
              }
              case Colour.Cyan: {
                  pins.digitalWritePin(pin1, 0);
                  pins.digitalWritePin(pin2, 1);
                  pins.digitalWritePin(pin3, 1);
                  break;
              }
              case Colour.Pink: {
                  pins.digitalWritePin(pin1, 1);
                  pins.digitalWritePin(pin2, 0);
                  pins.digitalWritePin(pin3, 1);
                  break;
              }
              case Colour.Yellow: {
                  pins.digitalWritePin(pin1, 1);
                  pins.digitalWritePin(pin2, 1);
                  pins.digitalWritePin(pin3, 0);
                  break;
              }
          }
  
      }
  
  }
  
  /********************************** snesor *********************************************/
  
  //% color="#DDA300" weight=24 icon="\uf2a2"
  namespace aiTestSensor {
  
      export enum enVoice {
          //% blockId="HaveVoice" block="Have Voice"
          HaveVoice = 0,
          //% blockId="NoVoice" block="No Voice"
          NoVoice = 1
      }
  
      export enum enIR {
          //% blockId="Detected" block="Detected"
          Detected = 0,
          //% blockId="Undetected" block="Undetected"
          Undetected = 1
      }
  
  
      //% blockId=aiTestVoiceSensor block="VoiceSensor|pin %pin|value %value"
      //% weight=100 blockGap=10 color="#DDA300"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestVoiceSensor(pin: DigitalPin, value: enVoice): boolean {
  
          pins.setPull(pin, PinPullMode.PullUp);
          if (pins.digitalReadPin(pin) == value) {
              return true;
          }
          else {
              return false;
          }
  
      }
  
      function IRsend38k() {
          for (let i: number = 0; i < 8; i++) {
              pins.digitalWritePin(DigitalPin.P9, 1);
              control.waitMicros(13);
              pins.digitalWritePin(DigitalPin.P9, 0);
              control.waitMicros(13);
          }
      }
      //% blockId=aiTestIRSensor block="IRSensor|pin %pin| |%value|Obstacles"
      //% weight=100
      //% blockGap=10
      //% color="#DDA300"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestIRSensor(pin: DigitalPin, value: enIR): boolean {
  
          pins.setPull(pin, PinPullMode.PullUp);
          if (pins.digitalReadPin(pin) == value) {
              return true;
          }
          else {
              return false;
          }
  
      }
  
      //% blockId=aiTestIRSend block="IRSend|pin %pin"
      //% weight=100 blockGap=10 color="#DDA300"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestIRSend(pin: DigitalPin): void {
  
  
          IRsend38k();
  
      }
  
      //% blockId=aiTestultrasonic block="Ultrasonic|Trigger %Trig|Echo %Echo"
      //% color="#DDA300" weight=100 blockGap=10
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestUltrasonic(Trig: DigitalPin, Echo: DigitalPin): number {
  
          // send pulse
          pins.setPull(Trig, PinPullMode.PullNone);
          pins.digitalWritePin(Trig, 0);
          control.waitMicros(2);
          pins.digitalWritePin(Trig, 1);
          control.waitMicros(10);
          pins.digitalWritePin(Trig, 0);
  
          // read pulse
          let d = pins.pulseIn(Echo, PulseValue.High, 23200);
          return d / 58;
      }
  }
  
  /********************************** movement *********************************************/
  
  //% color="#F4DFB4" weight=23 icon="\uf018"
  namespace aiTestMovement {
  
      export enum enRocker {
          //% blockId="Idle" block="Idle"
          Idle = 0,
          //% blockId="Up" block="Up"
          Up,
          //% blockId="Down" block="Down"
          Down,
          //% blockId="Left" block="Left"
          Left,
          //% blockId="Right" block="Right"
          Right,
          //% blockId="Press" block="Press"
          Press
      }
  
      export enum enTouch {
          //% blockId="Untouch" block="Untouch"
          Untouch = 0,
          //% blockId="Touch" block="Touch"
          Touch = 1
      }
      export enum enButton {
          //% blockId="Press" block="Press"
          Press = 0,
          //% blockId="Release" block="Release"
          Release = 1
      }
  
      //% blockId=aiTestTouchPad block="TouchPad|pin %pin|value %value"
      //% weight=100 blockGap=10 color="#F4DFB4"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
      export function aiTestTouchPad(pin: DigitalPin, value: enTouch): boolean {
  
          pins.setPull(pin, PinPullMode.PullUp);
          if (pins.digitalReadPin(pin) == value) {
              return true;
          }
          else {
              return false;
          }
  
      }
      //% blockId=aiTestRocker block="Rocker|X %pin1|Y %pin2|SW %pin3|value %value"
      //% weight=100
      //% blockGap=10
      //% color="#F4DFB4"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=6
      export function aiTestRocker(pin1: AnalogPin, pin2: AnalogPin, pin3: DigitalPin, value: enRocker): boolean {
  
          pins.setPull(pin3, PinPullMode.PullUp);
          let x = pins.analogReadPin(pin1);
          let y = pins.analogReadPin(pin2);
          let z = pins.digitalReadPin(pin3);
          let nowstate = enRocker.Idle;
  
          if (x < 100) // Up
          {
  
              nowstate = enRocker.Up;
  
          }
          else if (x > 700) //Down
          {
  
              nowstate = enRocker.Down;
          }
          else
          {
              if (y < 100) //Right
              {
                  nowstate = enRocker.Right;
              }
              else if (y > 700) //Left
              {
                  nowstate = enRocker.Left;
              }
          }
          if (z == 0)
              nowstate = enRocker.Press;
          if (nowstate == value)
              return true;
          else
              return false;
  
      }
  
      //% blockId=aiTestButton block="Button|pin %pin|value %value"
      //% weight=100
      //% blockGap=10
      //% color="#F4DFB4"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=5
      export function aiTestButton(pin: DigitalPin, value: enButton): boolean {
  
          pins.setPull(pin, PinPullMode.PullUp);
          if (pins.digitalReadPin(pin) == value) {
              return true;
          }
          else {
              return false;
          }
  
      }
  }
  
  /********************************** sound *********************************************/
  
  //% color="#73216D" weight=22 icon="\uf001"
  namespace aiTestSound {
      export enum Buzzer {
  
          //% blockId="Stop" block="Stop"
          Stop = 0,
          //% blockId="Beep" block="Beep"
          Beep = 1
      }
  
      //% blockId=aiTestBuzzer block="Buzzer|pin %pin|value %value"
      //% weight=100 blockGap=10 color="#73216D"
      //% value.min=0 value.max=1
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=8
      export function aiTestBuzzer(pin: DigitalPin, value: Buzzer): void {
  
          pins.setPull(pin, PinPullMode.PullNone);
          pins.digitalWritePin(pin, value);
  
      }
  
  }
  
  /*****************************************************************************************************************************************
   *    Motor *****************************************************************************************************************************
   ****************************************************************************************************************************************/
  
  //% color="#DDA300" weight=21 icon="\uf085"
  namespace aiTestMotor {
  
      //% blockId=aiTestFan block="Fan|pin %pin|speed %value"
      //% weight=100 blockGap=10 color="#DDA300"
      //% value.min=0 value.max=1023
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=9
      export function aiTestFan(pin: AnalogPin, value: number): void {
  
          pins.analogWritePin(pin, value);
  
      }
  
      //% blockId=aiTestServo block="Servo|pin %pin|value %value"
      //% weight=100 blockGap=10 color="#DDA300"
      //% value.min=0 value.max=180
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=9
      export function aiTestServo(pin: AnalogPin, value: number): void {
  
          pins.servoWritePin(pin, value);
  
      }
  
  }
  
  /********************************** car *********************************************/
  
  //% color="#F4DFB4" weight=20 icon="\uf1b9"
  namespace aiTestCar {
  
      const PCA9685ADD = 0x41
      const MODE1 = 0x00
      const MODE2 = 0x01
      const SUBADR1 = 0x02
      const SUBADR2 = 0x03
      const SUBADR3 = 0x04
  
      const LED0ONL = 0x06
      const LED0ONH = 0x07
      const LED0OFFL = 0x08
      const LED0OFFH = 0x09
  
      const ALLLEDONL = 0xFA
      const ALLLEDONH = 0xFB
      const ALLLEDOFFL = 0xFC
      const ALLLEDOFFH = 0xFD
  
      const PRESCALE = 0xFE
  
      let initialized = false
      let yahStrip: neopixel.Strip;
  
      export enum Colour {
  
          //% blockId="OFF" block="Off"
          OFF = 0,
          //% blockId="Red" block="Red"
          Red,
          //% blockId="Green" block="Green"
          Green,
          //% blockId="Blue" block="Blue"
          Blue,
          //% blockId="White" block="White"
          White,
          //% blockId="Cyan" block="Cyan"
          Cyan,
          //% blockId="Pink" block="Pink"
          Pink,
          //% blockId="Green" block="Yellow"
          Yellow,
  
      }
      export enum enMusic {
  
          dadadum = 0,
          entertainer,
          prelude,
          ode,
          nyan,
          ringtone,
          funk,
          blues,
  
          birthday,
          wedding,
          funereal,
          punchline,
          baddy,
          chase,
          bading,
          wawawawaa,
          jumpup,
          jumpdown,
          powerup,
          powerdown
      }
      export enum enPos {
  
          //% blockId="LeftState" block="LeftState"
          LeftState = 0,
          //% blockId="RightState" block="RightState"
          RightState = 1
      }
  
      export enum enLineState {
          //% blockId="White" block="White"
          White = 0,
          //% blockId="Black" block="Black"
          Black = 1
  
      }
  
      export enum enAvoidState {
          //% blockId="OBSTACLE" block="Obstacle"
          OBSTACLE = 0,
          //% blockId="NOOBSTACLE" block="No Obstacle"
          NOOBSTACLE = 1
  
      }
  
  
      export enum enServo {
  
          S1 = 1,
          S2,
          S3
      }
      export enum CarState {
          //% blockId="CarRun" block="Forward"
          CarRun = 1,
          //% blockId="CarBack" block="Backward"
          CarBack = 2,
          //% blockId="CarLeft" block="Turn Left"
          CarLeft = 3,
          //% blockId="CarRight" block="Turn Right"
          CarRight = 4,
          //% blockId="CarStop" block="Stop"
          CarStop = 5,
          //% blockId="CarSpinLeft" block="Rotate Left"
          CarSpinLeft = 6,
          //% blockId="CarSpinRight" block="Rotate Right"
          CarSpinRight = 7
      }
  
      function i2cwrite(addr: number, reg: number, value: number) {
          let buf = pins.createBuffer(2)
          buf[0] = reg
          buf[1] = value
          pins.i2cWriteBuffer(addr, buf)
      }
  
      function i2ccmd(addr: number, value: number) {
          let buf = pins.createBuffer(1)
          buf[0] = value
          pins.i2cWriteBuffer(addr, buf)
      }
  
      function i2cread(addr: number, reg: number) {
          pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
          let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
          return val;
      }
  
      function initPCA9685(): void {
          i2cwrite(PCA9685ADD, MODE1, 0x00)
          setFreq(50);
          initialized = true
      }
  
      function setFreq(freq: number): void {
          // Constrain the frequency
          let prescaleval = 25000000;
          prescaleval /= 4096;
          prescaleval /= freq;
          prescaleval -= 1;
          let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
          let oldmode = i2cread(PCA9685ADD, MODE1);
          let newmode = (oldmode & 0x7F) | 0x10; // sleep
          i2cwrite(PCA9685ADD, MODE1, newmode); // go to sleep
          i2cwrite(PCA9685ADD, PRESCALE, prescale); // set the prescaler
          i2cwrite(PCA9685ADD, MODE1, oldmode);
          control.waitMicros(5000);
          i2cwrite(PCA9685ADD, MODE1, oldmode | 0xa1);
      }
  
      function setPwm(channel: number, on: number, off: number): void {
          if (channel < 0 || channel > 15)
              return;
          if (!initialized) {
              initPCA9685();
          }
          let buf = pins.createBuffer(5);
          buf[0] = LED0ONL + 4 * channel;
          buf[1] = on & 0xff;
          buf[2] = (on >> 8) & 0xff;
          buf[3] = off & 0xff;
          buf[4] = (off >> 8) & 0xff;
          pins.i2cWriteBuffer(PCA9685ADD, buf);
      }
  
  
      function Carrun(speed: number) {
  
          speed = speed * 16; // map 350 to 4096
          if (speed >= 4096) {
              speed = 4095
          }
          if (speed <= 350) {
              speed = 350
          }
  
          setPwm(12, 0, speed);
          setPwm(13, 0, 0);
  
          setPwm(15, 0, speed);
          setPwm(14, 0, 0);
          //pins.digitalWritePin(DigitalPin.P16, 1);
         // pins.analogWritePin(AnalogPin.P1, 1023-speed); //Speed Control
  
         // pins.analogWritePin(AnalogPin.P0, speed);//Speed Control
         // pins.digitalWritePin(DigitalPin.P8, 0);
      }
  
      function Carback(speed: number) {
  
          speed = speed * 16; // map 350 to 4096
          if (speed >= 4096) {
              speed = 4095
          }
          if (speed <= 350 && speed != 0) {
              speed = 350
          }
  
          setPwm(12, 0, 0);
          setPwm(13, 0, speed);
  
          setPwm(15, 0, 0);
          setPwm(14, 0, speed);
  
          //pins.digitalWritePin(DigitalPin.P16, 0);
          //pins.analogWritePin(AnalogPin.P1, speed); //Speed Control
  
          //pins.analogWritePin(AnalogPin.P0, 1023 - speed);//Speed Control
          //pins.digitalWritePin(DigitalPin.P8, 1);
      }
  
      function Carleft(speed: number) {
  
          speed = speed * 16; // map 350 to 4096
          if (speed >= 4096) {
              speed = 4095
          }
          if (speed <= 350 && speed != 0) {
              speed = 350
          }
          setPwm(12, 0, 0);
          setPwm(13, 0, 0);
  
          setPwm(15, 0, speed);
          setPwm(14, 0, 0);
  
          //pins.analogWritePin(AnalogPin.P0, speed);
          //pins.digitalWritePin(DigitalPin.P8, 0);
  
          //pins.digitalWritePin(DigitalPin.P16, 0);
          //pins.digitalWritePin(DigitalPin.P1, 0);
      }
  
      function Carright(speed: number) {
  
          speed = speed * 16; // map 350 to 4096
          if (speed >= 4096) {
              speed = 4095
          }
          if (speed <= 350 && speed != 0) {
              speed = 350
          }
          setPwm(12, 0, speed);
          setPwm(13, 0, 0);
  
          setPwm(15, 0, 0);
          setPwm(14, 0, 0);
          //pins.digitalWritePin(DigitalPin.P0, 0);
          //pins.digitalWritePin(DigitalPin.P8, 0);
  
          //pins.digitalWritePin(DigitalPin.P16, 1);
         // pins.analogWritePin(AnalogPin.P1, 1023 - speed);
      }
  
      function Carstop() {
  
          setPwm(12, 0, 0);
          setPwm(13, 0, 0);
  
          setPwm(15, 0, 0);
          setPwm(14, 0, 0);
          //pins.digitalWritePin(DigitalPin.P0, 0);
          //pins.digitalWritePin(DigitalPin.P8, 0);
          //pins.digitalWritePin(DigitalPin.P16, 0);
          //pins.digitalWritePin(DigitalPin.P1, 0);
      }
  
      function Carspinleft(speed: number) {
  
          speed = speed * 16; // map 350 to 4096
          if (speed >= 4096) {
              speed = 4095
          }
          if (speed <= 350 && speed != 0) {
              speed = 350
          }
          setPwm(12, 0, 0);
          setPwm(13, 0, speed);
  
          setPwm(15, 0, speed);
          setPwm(14, 0, 0);
  
          //pins.analogWritePin(AnalogPin.P0, speed);
          //pins.digitalWritePin(DigitalPin.P8, 0);
  
          //pins.digitalWritePin(DigitalPin.P16, 0);
          //pins.analogWritePin(AnalogPin.P1, speed);
      }
  
      function Carspinright(speed: number) {
  
          speed = speed * 16; // map 350 to 4096
          if (speed >= 4096) {
              speed = 4095
          }
          if (speed <= 350 && speed != 0) {
              speed = 350
          }
          setPwm(12, 0, speed);
          setPwm(13, 0, 0);
  
          setPwm(15, 0, 0);
          setPwm(14, 0, speed);
          //pins.analogWritePin(AnalogPin.P0, 1023-speed);
          //pins.digitalWritePin(DigitalPin.P8, 1);
  
          //pins.digitalWritePin(DigitalPin.P16, 1);
          //pins.analogWritePin(AnalogPin.P1, 1023-speed);
  
      }
  
      /**
       * *****************************************************************
       * @param index
       */
      //% blockId=aiTestRGBCarBig2 block="RGBCarBig2|value %value"
      //% weight=101 blockGap=10 color="#73216D"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestRGBCarBig2(value: Colour): void {
  
          switch (value) {
              case Colour.OFF: {
                  setPwm(0, 0, 0);
                  setPwm(1, 0, 0);
                  setPwm(2, 0, 0);
                  break;
              }
              case Colour.Red: {
                  setPwm(0, 0, 4095);
                  setPwm(1, 0, 0);
                  setPwm(2, 0, 0);
                  break;
              }
              case Colour.Green: {
                  setPwm(0, 0, 0);
                  setPwm(1, 0, 4095);
                  setPwm(2, 0, 0);
                  break;
              }
              case Colour.Blue: {
                  setPwm(0, 0, 0);
                  setPwm(1, 0, 0);
                  setPwm(2, 0, 4095);
                  break;
              }
              case Colour.White: {
                  setPwm(0, 0, 4095);
                  setPwm(1, 0, 4095);
                  setPwm(2, 0, 4095);
                  break;
              }
              case Colour.Cyan: {
                  setPwm(0, 0, 0);
                  setPwm(1, 0, 4095);
                  setPwm(2, 0, 4095);
                  break;
              }
              case Colour.Pink: {
                  setPwm(0, 0, 4095);
                  setPwm(1, 0, 0);
                  setPwm(2, 0, 4095);
                  break;
              }
              case Colour.Yellow: {
                  setPwm(0, 0, 4095);
                  setPwm(1, 0, 4095);
                  setPwm(2, 0, 0);
                  break;
              }
          }
      }
      //% blockId=aiTestRGBCarBig block="RGBCarBig|value1 %value1|value2 %value2|value3 %value3"
      //% weight=100 blockGap=10 color="#73216D"
      //% value1.min=0 value1.max=255 value2.min=0 value2.max=255 value3.min=0 value3.max=255
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestRGBCarBig(value1: number, value2: number, value3: number): void {
  
          let R = value1 * 16;
          let G = value2 * 16;
          let B = value3 * 16;
  
          if (R > 4096)
              R = 4095;
          if (G > 4096)
              G = 4095;
          if (B > 4096)
              B = 4095;
  
          setPwm(0, 0, R);
          setPwm(1, 0, G);
          setPwm(2, 0, B);
  
      }
  
      //% blockId=aiTestRGBCarProgram block="RGBCarProgram"
      //% weight=99 blockGap=10 color="#73216D"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestRGBCarProgram(): neopixel.Strip {
  
          if (!yahStrip) {
              yahStrip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB);
          }
          return yahStrip;
      }
  
  
      //% blockId=aiTestultrasoniccar block="ultrasonic return distance(cm)"
      //% color="#F4DFB4" weight=98 blockGap=10
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestUltrasonicCar(): number {
  
          // send pulse
          pins.setPull(DigitalPin.P14, PinPullMode.PullNone);
          pins.digitalWritePin(DigitalPin.P14, 0);
          control.waitMicros(2);
          pins.digitalWritePin(DigitalPin.P14, 1);
          control.waitMicros(10);
          pins.digitalWritePin(DigitalPin.P14, 0);
  
          // read pulse
          let d = pins.pulseIn(DigitalPin.P15, PulseValue.High, 43200);
          return d / 58;
      }
  
      //% blockId=aiTestMusicCar block="MusicCar|%index"
      //% weight=97 blockGap=10 color="#F4DFB4"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
      export function aiTestMusicCar(index: enMusic): void {
          switch (index) {
              case enMusic.dadadum: music.beginMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once); break;
              case enMusic.birthday: music.beginMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once); break;
              case enMusic.entertainer: music.beginMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once); break;
              case enMusic.prelude: music.beginMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once); break;
              case enMusic.ode: music.beginMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once); break;
              case enMusic.nyan: music.beginMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once); break;
              case enMusic.ringtone: music.beginMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once); break;
              case enMusic.funk: music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once); break;
              case enMusic.blues: music.beginMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once); break;
              case enMusic.wedding: music.beginMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once); break;
              case enMusic.funereal: music.beginMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once); break;
              case enMusic.punchline: music.beginMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once); break;
              case enMusic.baddy: music.beginMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.Once); break;
              case enMusic.chase: music.beginMelody(music.builtInMelody(Melodies.Chase), MelodyOptions.Once); break;
              case enMusic.bading: music.beginMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once); break;
              case enMusic.wawawawaa: music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once); break;
              case enMusic.jumpup: music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once); break;
              case enMusic.jumpdown: music.beginMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once); break;
              case enMusic.powerup: music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once); break;
              case enMusic.powerdown: music.beginMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once); break;
          }
      }
      //% blockId=aiTestServoCar block="ServoCar|num %num|value %value"
      //% weight=96 blockGap=10 color="#F4DFB4"
      //% num.min=1 num.max=3 value.min=0 value.max=180
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=9
      export function aiTestServoCar(num: enServo, value: number): void {
  
          // 50hz: 20,000 us
          let us = (value * 1800 / 180 + 600); // 0.6 ~ 2.4
          let pwm = us * 4096 / 20000;
          setPwm(num + 2, 0, pwm);
  
      }
  
      //% blockId=aiTestAvoidSensor block="AvoidSensor|value %value"
      //% weight=95 blockGap=10 color="#F4DFB4"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
      export function aiTestAvoidSensor(value: enAvoidState): boolean {
  
          let temp: boolean = false;
          pins.digitalWritePin(DigitalPin.P9, 0);
          switch (value) {
              case enAvoidState.OBSTACLE: {
                  if (pins.analogReadPin(AnalogPin.P3) < 800) {
  
                      temp = true;
                      setPwm(8, 0, 0);
                  }
                  else {
                      temp = false;
                      setPwm(8, 0, 4095);
                  }
                  break;
              }
  
              case enAvoidState.NOOBSTACLE: {
                  if (pins.analogReadPin(AnalogPin.P3) > 800) {
  
                      temp = true;
                      setPwm(8, 0, 4095);
                  }
                  else {
                      temp = false;
                      setPwm(8, 0, 0);
                  }
                  break;
              }
          }
          pins.digitalWritePin(DigitalPin.P9, 1);
          return temp;
  
      }
      //% blockId=aiTestLineSensor block="LineSensor|direct %direct|value %value"
      //% weight=94 blockGap=10 color="#F4DFB4"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=12
      export function aiTestLineSensor(direct: enPos, value: enLineState): boolean {
  
          let temp: boolean = false;
  
          switch (direct) {
              case enPos.LeftState: {
                  if (pins.analogReadPin(AnalogPin.P2) < 500) {
                      if (value == enLineState.White) {
                          temp = true;
                      }
                      setPwm(7, 0, 4095);
                  }
                  else {
                      if (value == enLineState.Black) {
                          temp = true;
                      }
                      setPwm(7, 0, 0);
                  }
                  break;
              }
  
              case enPos.RightState: {
                  if (pins.analogReadPin(AnalogPin.P1) < 500) {
                      if (value == enLineState.White) {
                          temp = true;
                      }
                      setPwm(6, 0, 4095);
                  }
                  else {
                      if (value == enLineState.Black) {
                          temp = true;
                      }
                      setPwm(6, 0, 0);
                  }
                  break;
              }
          }
          return temp;
  
      }
      //% blockId=aiTestCarCtrl block="CarCtrl|%index"
      //% weight=93 blockGap=10 color="#F4DFB4"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
      export function aiTestCarControl(index: CarState): void {
          switch (index) {
              case CarState.CarRun: Carrun(255); break;
              case CarState.CarBack: Carback(255); break;
              case CarState.CarLeft: Carleft(255); break;
              case CarState.CarRight: Carright(255); break;
              case CarState.CarStop: Carstop(); break;
              case CarState.CarSpinLeft: Carspinleft(255); break;
              case CarState.CarSpinRight: Carspinright(255); break;
          }
      }
      //% blockId=aiTestCarCtrlSpeed block="CarCtrlSpeed|%index|speed %speed"
      //% weight=92 blockGap=10 speed.min=0 speed.max=255 color="#F4DFB4"
      //% name.fieldEditor="gridpicker" name.fieldOptions.columns=10
      export function aiTestCarSpeedControl(index: CarState, speed: number): void {
          switch (index) {
              case CarState.CarRun: Carrun(speed); break;
              case CarState.CarBack: Carback(speed); break;
              case CarState.CarLeft: Carleft(speed); break;
              case CarState.CarRight: Carright(speed); break;
              case CarState.CarStop: Carstop(); break;
              case CarState.CarSpinLeft: Carspinleft(speed); break;
              case CarState.CarSpinRight: Carspinright(speed); break;
          }
      }
  }
  
