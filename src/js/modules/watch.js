function watch({hoursSelector, minuteSelector, secondSelector}) {
    const hours = document.querySelector(hoursSelector),
          minute = document.querySelector(minuteSelector),
          second = document.querySelector(secondSelector)
    // const date = new Date().setMinutes(new Date().getMinutes() + 30);
    const date = new Date().setMinutes(new Date().getMinutes() + 30);

    function getClock() {
        const time = date - Date.parse(new Date());
        return {
            hour: 0,
            minute: Math.floor(time / (1000 * 60) % 60),
            second: Math.floor(time / 1000 % 60)
        };
    }

    function serZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function updateClock() {
        const time = getClock();
        stopTimer(time);
        let hourNum = serZero(time.hour),
            minuteNum = serZero(time.minute),
            secondNum = serZero(time.second);
        hours.textContent = hourNum;
        minute.textContent = minuteNum;
        second.textContent = secondNum;
    }

    updateClock();
    const clock = setInterval(updateClock, 1000);
    
    function stopTimer(time) {
        if (time.second === 0 && time.minute === 0 && time.hour === 0) {
            clearInterval(clock);
        }
    }
}

export default watch;