import {
    btnPlay,
    btnPause,
    btnStop,
    temporizer,
    btnSoundOn,
    btnSoundOff
} from './elements.js'


export const events = ({controlsDependences, timerDependences, musicPlay}) => {
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
    
    btnSoundOn.addEventListener('click', () => stopSound())
    
    const stopSound = () => {
        btnSoundOn.classList.add('hide')
        btnSoundOff.classList.remove('hide')
     
        musicPlay.bgAudio.pause()
    }
    
    btnSoundOff.addEventListener('click', () => playSound())
    
    const playSound = () => {
        btnSoundOn.classList.remove('hide')
        btnSoundOff.classList.add('hide')
        
        musicPlay.bgAudio.play()
    }
}
