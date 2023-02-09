const btnPlay = document.querySelector('.play')
const btnPause = document.querySelector('.pause')
const btnStop = document.querySelector('.stop')
const temporizer = document.querySelector('.temporizer')

const btnMusicOn = document.querySelector('.sound-on')
const btnMusicOff = document.querySelector('.sound-off')

const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')

btnPlay.addEventListener('click', () => startCounter())

const startCounter = () => {
    btnPlay.classList.add('hide')
    btnPause.classList.remove('hide')

    temporizer.classList.add('hide')
    btnStop.classList.remove('hide')
}

btnPause.addEventListener('click', () => stopCounter())

const stopCounter = () => {
    btnPause.classList.add('hide')
    btnPlay.classList.remove('hide')
}

btnStop.addEventListener('click', () => stopTemporizer())

const stopTemporizer = () => {
    btnPlay.classList.remove('hide')
    btnPause.classList.add('hide')

    temporizer.classList.remove('hide')
    btnStop.classList.add('hide')
}

btnMusicOn.addEventListener('click', () => playMusic())

const playMusic = () => {
    btnMusicOn.classList.add('hide')
    btnMusicOff.classList.remove('hide')
}

btnMusicOff.addEventListener('click', () => stopMusic())

const stopMusic = () => {
    btnMusicOff.classList.add('hide')
    btnMusicOn.classList.remove('hide')
}