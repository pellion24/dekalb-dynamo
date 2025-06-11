const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
/*
let games = [];
//let nextGame = null;
let intervalID;

function findNextGame(schedule) {
    const now = new Date();
    for (let i = 0; i < schedule.length; i++) {

    }
}
 */
const nextGame = new Date('June 22 2025 09:00:00');

//Update Countdown
function countdown() {
    const currentTime = new Date();
    const diff = nextGame - currentTime;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000) % 60;

    console.log(s);

    days.innerHTML = d;
    hours.innerHTML = h; // h < 10 ? '0' + h : h
    minutes.innerHTML = m; //same
    seconds.innerHTML = s; //same

}

//countdown();

setInterval(countdown, 1000);