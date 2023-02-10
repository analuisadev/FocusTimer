// ES6 Modules - Default Import
import { controls } from "./controls.js" // Default Export
import { timer } from './timer.js' // Named Export

const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const temporizer = document.querySelector('.temporizer')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')

// Modulo
const controlsDependences = controls({
    btnPlay,
    btnPause,
    btnStop,
    temporizer
})

// Modulo
const timerDependences = timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controlsDependences.reset,
})

btnPlay.addEventListener('click', () => startCounter())

const startCounter = () => {
    controlsDependences.play()

    timerDependences.countDown()
}

btnPause.addEventListener('click', () => pauseCounter())

const pauseCounter = () => {
    controlsDependences.pause()

    timerDependences.holdTime()
}

btnStop.addEventListener('click', () => stopTemporizer())

const stopTemporizer = () => {
    controlsDependences.reset()

    timerDependences.resetTimer()
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