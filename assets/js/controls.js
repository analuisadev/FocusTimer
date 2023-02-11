export const controls = ({
    btnPlay,
    btnPause,
    temporizer,
    btnStop
}) => {

    const play = () => {
        btnPlay.classList.add('hide')
        btnPause.classList.remove('hide')

        temporizer.classList.add('hide')
        btnStop.classList.remove('hide')
    }

    const pause = () => {
        btnPause.classList.add('hide')
        btnPlay.classList.remove('hide')
    }

    const reset = () => {
        btnPlay.classList.remove('hide')
        btnPause.classList.add('hide')
    
        temporizer.classList.remove('hide')
        btnStop.classList.add('hide')
    }

    const getMinutes = () => {
        let newMinutes = parseInt(prompt( ' Quantos minutos? ' ))

        if(!newMinutes || isNaN(newMinutes)) {
            alert('Insira as informações corretamente')
            return false
        }

        return newMinutes
    }

    return {
        reset,
        play,
        pause,
        getMinutes
    }
}