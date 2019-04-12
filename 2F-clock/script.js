let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

// console.log(time);

setInterval(() => {
    calcTime();
},500);

function calcTime() {
    let time = new Date();
    h = time.getHours() % 12;
    m = time.getMinutes();
    s = time.getSeconds();
    renderTime(h, m, s);
}

function renderTime(h, m, s) {
    console.log(h, m, s);
    hour.style.transform = `rotate(${270 + (h * 30) + (m / 60 *30)}deg)`;
    minute.style.transform = `rotate(${180 + (m * 6)}deg)`;
    second.style.transform = `rotate(${180 + (s * 6)}deg)`;
}