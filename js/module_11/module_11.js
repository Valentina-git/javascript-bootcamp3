//сделать таймер
//25.12.2020, 0hours, 0minute, 0sec,
//1608847200000
//1608328800000
const refs = {
    days: document.querySelector('.days'),
    hours: document.querySelector('.hours'),
    minutes: document.querySelector('.minutes'),
    seconds: document.querySelector('.seconds'),
}
const promotion = setInterval(() => {
    let now = new Date().getTime()
    let distance = countDown - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
    
    if (distance < 0) {
        document.body.innerHTML = 'Вы профукали свое время'
        clearInterval(promotion)
    } 
}, 1000)

const countDown = new Date('dec 08, 2020 00:00:00').getTime();
