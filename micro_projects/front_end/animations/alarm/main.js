const clockNode = document.querySelector('.clock')
const clock = Clock(clockNode)

clock.initialize()
clock.draw()

function Clock(node) {
    const initialize = () => {
        const markers = []

        createMarkers(markers)
        draw(markers)
    }

    const createMarkers = markers => {
        const degreesPerMinute = 0.5
        const minutesPerMarker = 5
        const degreesPerHour = 30

        for (let degrees = 0; degrees < 360; degrees += degreesPerMinute * minutesPerMarker) {
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

    return {
        initialize
    }
}