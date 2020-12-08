class Promotion {
    #countDown;
    #_distance;
    constructor (countDown, {days, hours, minutes, seconds}) {
        this.#countDown = new Date(countDown).getTime()
        this.daysRef = days
        this.hoursRef = hours
        this.minutesRef = minutes
        this.secondsRef = seconds
        this._days = ''
        this._hours = ''
        this._minutes = ''
        this._seconds = ''
        this.#_distance = null;
    }
    #promotion() {
        setInterval(() => {
            let distance = this.#countDown - this.#getCurrentTime()
            this._days = Math.floor(distance / (1000 * 60 * 60 * 24));
            this._hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this._minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            this._seconds = Math.floor((distance % (1000 * 60)) / 1000);
            this.#displayData()
            this.#_distance = distance;

        }, 1000) 
    }
    #getCurrentTime() {
        return new Date().getTime()
    }
    #displayData() {
        this.daysRef.textContent = this._days;
        this.hoursRef.textContent = this._hours;
        this.minutesRef.textContent = this._minutes;
        this.secondsRef.textContent = this._seconds;

        if (this.distance < 0) {
                document.body.innerHTML = 'Вы профукали свое время'
                this.clearInterval(this.#promotion())
        } 
    }
    init() {
        return this.#promotion()
    }
}

const refs = {
    days: document.querySelector('.days'),
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),
}

const cristmasPromotion = new Promotion('dec 25, 2020 00:00:00', refs);

cristmasPromotion.init()
// console.log(cristmasPromotion.getCurrentTime()); - //Интерфейс  (приватность)

