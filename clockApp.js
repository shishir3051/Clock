const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const progress = document.getElementById("progress");
document.getElementById("ampm").textContent = ampm;

function showCurrentTime() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    const ampm = hr >= 12 ? "PM" : "AM";

    hr = hr % 12;
    hr = hr ? hr : 12;

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;
    document.getElementById("ampm").textContent = ampm;

    progress.style.width = (sec / 60) * 100 + "%";
}
setInterval(showCurrentTime, 1000);
