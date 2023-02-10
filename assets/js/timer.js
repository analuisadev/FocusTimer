import { sound } from './sounds.js'

export const timer = ({
    minutesDisplay,
    secondsDisplay,
    resetControls,
}) => {

    let timerTimeOut;
    let minutes = Number(minutesDisplay.textContent)

    const updateTimerDisplay = (newMinutes, seconds) => {

        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds

        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }
    
    const resetTimer = () => {
        updateTimerDisplay(minutes, 0)
        clearTimeout(timerTimeOut)
    }
    
    const countDown = () => {
        timerTimeOut = setTimeout(function() {

            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0 

            updateTimerDisplay(minutes, 0)
    
            if( isFinished ) {
                resetControls()
                updateTimerDisplay()
                
                sound().playSoundEnd()
                return
            }
            
            if( seconds <= 0 ) {
                seconds = 60
    
                --minutes
            }
    
            updateTimerDisplay(minutes, String(seconds - 1))
    
            countDown()
        }, 1000)
    } 

    const updateMinutes = (newMinutes) => {
        minutes = newMinutes
    }

    const holdTime = () => {
        clearTimeout(timerTimeOut)
    }

    return {
        countDown,
        resetTimer,
        updateTimerDisplay,
        updateMinutes,
        holdTime
    }
}