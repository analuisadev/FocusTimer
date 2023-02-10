import { controls } from "./controls.js"
import { timer } from './timer.js'
import { sound }  from './sounds.js'
import { events } from './events.js'
import { 
    btnPlay,
    btnPause,
    btnStop,
    temporizer,
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

events({controlsDependences, timerDependences, musicPlay})