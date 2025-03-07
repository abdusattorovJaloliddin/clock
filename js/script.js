function hours() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.getElementById("hours").textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(hours, 1000);
hours();