input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Skull)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    soundExpression.giggle.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
