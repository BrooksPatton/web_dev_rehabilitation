const body = document.querySelector('body');
const handleSwipe = HandleSwipe();
const sidebar = document.querySelector('.sidebar');

body.addEventListener('touchstart', touchStartEvent => {
    handleSwipe.setTouchStart(touchStartEvent);
});

body.addEventListener('touchend', touchEndEvent => {
    handleSwipe.setTouchEnd(touchEndEvent);

    if (handleSwipe.isSwipeRight()) {
        sidebar.style.left = 0;
    } else {
        sidebar.style.left = '-89vw';
    }
});

function HandleSwipe() {
    let touchStart = {
        x: null,
        y: null
    };
    let touchEnd = {
        x: null,
        y: null
    };

    function setTouchStart(touchEvent) {
        touchStart.x = touchEvent.changedTouches[0].pageX;
        touchStart.y = touchEvent.changedTouches[0].pageY;
    }

    function setTouchEnd(touchEvent) {
        touchEnd.x = touchEvent.changedTouches[0].pageX;
        touchEnd.y = touchEvent.changedTouches[0].pageY;
    }

    function logTouchStart() {
        console.dir(touchStart);
    }

    function logTouchEnd() {
        console.dir(touchEnd);
    }

    function isSwipeRight() {
        return touchStart.x < touchEnd.x;
    }

    return {
        setTouchStart,
        setTouchEnd,
        logTouchStart,
        logTouchEnd,
        isSwipeRight
    };
}