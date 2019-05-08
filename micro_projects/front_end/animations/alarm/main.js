const clockNode = document.querySelector('.clock')
const secondsHandNode = document.querySelector('.seconds-hand')
const minuteHandNode = document.querySelector('.minute-hand')
const hourHandNode = document.querySelector('.hour-hand')
const clock = Clock(clockNode, secondsHandNode, minuteHandNode, hourHandNode)

clock.initialize()

function Clock(node, secondsHandNode, minuteHandNode, hourHandNode) {
    const initialize = () => {
        const markers = []
        const date = new Date()

        createMarkers(markers)
        draw(markers)
        setSecondsHand(date.getSeconds())
        setMinuteHand(date.getMinutes())
        setHourHand(date.getHours())
    }

    const createMarkers = markers => {
        const degreesPerMinute = 6
        const degreesPerHour = 30

        for (let degrees = 0; degrees < 360; degrees += degreesPerMinute) {
            const marker = document.createElement('div')
            const markerMark = document.createElement('div')
            const markerSpacer = document.createElement('div')

            marker.className = 'hour-marker'
            marker.style.transform = `rotate(${degrees}deg)`
            markerMark.className = degrees % degreesPerHour === 0 ? 'hour-marker-mark' : 'minute-marker-mark'
            markerSpacer.className = 'hour-marker-spacer'
            marker.append(markerMark, markerSpacer)

            markers.push(marker)
        }
    }

    const draw = markers => {
        markers.forEach(marker => node.append(marker))
    }

    const setSecondsHand = currentTimeInSeconds => {
        const degreesPerSecond = 6

        secondsHandNode.setAttribute('style', `transform: rotate(${currentTimeInSeconds * degreesPerSecond}deg) translateY(calc(750px / 4 * -1 + 36px));`);
    }

    const setMinuteHand = currentTimeInMinutes => {
        const degreesPerMinute = 6

        minuteHandNode.setAttribute('style', `transform: rotate(${currentTimeInMinutes * degreesPerMinute}deg) translateY(calc(750px / 4 * -1 + 36px));`)
    }

    const setHourHand = currentTimeInHours => {
        const degreesPerHour = 0.5

        hourHandNode.setAttribute('style', `transform: rotate(${currentTimeInHours * degreesPerHour}deg) translateY(calc(750px / 4 * -1 + 36px));`)
    }

    return {
        initialize
    }
}