function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0')
    let seconds = now.getSeconds().toString().padStart(2, '0')

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

//har second clock update hogi

setInterval(updateClock, 1000);
updateClock(); //pehli dafa turant call kerna