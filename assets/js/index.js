import { controls } from "./controls.js"
import { timer } from './timer.js'
import { sound }  from './sounds.js'
import { 
    btnPlay,
    btnPause,
    btnStop,
    temporizer,
    btnSoundOn,
    btnSoundOff,
    minutesDisplay,
    secondsDisplay
} from './elements.js'

const controlsDependences = controls({
    btnPlay,
    btnPause,
    btnStop,
    temporizer
})

const timerDependences = timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controlsDependences.reset,
})

const musicPlay = sound()

btnPlay.addEventListener('click', () => startCounter())

const startCounter = () => {
    controlsDependences.play()

    timerDependences.countDown()
    musicPlay.pressButton()
}

btnPause.addEventListener('click', () => pauseCounter())

const pauseCounter = () => {
    controlsDependences.pause()

    timerDependences.holdTime()
    musicPlay.pressButton()
}

btnStop.addEventListener('click', () => stopTemporizer())

const stopTemporizer = () => {
    controlsDependences.reset()

    timerDependences.resetTimer()
    musicPlay.pressButton()
}

temporizer.addEventListener('click', () => howManyMinutes())

const howManyMinutes = () => {
    let newMinutes = controlsDependences.getMinutes()

    if(!newMinutes) {
        timerDependences.resetTimer()
        return
    }

    timerDependences.updateTimerDisplay(newMinutes, 0)
    timerDependences.updateMinutes(newMinutes)
}

btnSoundOn.addEventListener('click', () => playSound())

const playSound = () => {
    btnSoundOn.classList.add('hide')
    btnSoundOff.classList.remove('hide')
 
    musicPlay.bgAudio.play()
}

btnSoundOff.addEventListener('click', () => stopSound())

const stopSound = () => {
    btnSoundOn.classList.remove('hide')
    btnSoundOff.classList.add('hide')

    musicPlay.bgAudio.pause()
}