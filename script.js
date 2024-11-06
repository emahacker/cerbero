let socialTime = 0;
let webTime = 0;
let socialInterval, webInterval;

function startStopSocial() {
    if (socialInterval) {
        clearInterval(socialInterval);
        socialInterval = null;
    } else {
        socialInterval = setInterval(() => {
            socialTime++;
            document.getElementById("social-time").innerText = formatTime(socialTime);
        }, 1000);
    }
}

function startStopWeb() {
    if (webInterval) {
        clearInterval(webInterval);
        webInterval = null;
    } else {
        webInterval = setInterval(() => {
            webTime++;
            document.getElementById("web-time").innerText = formatTime(webTime);
        }, 1000);
    }
}

function formatTime(seconds) {
    const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
}

function generateReport() {
    const report = `Tempo sui Social: ${formatTime(socialTime)}\nTempo sul Web: ${formatTime(webTime)}`;
    alert(report);
}

function sendEmail() {
    const subject = "Report del Tempo Trascorso";
    const body = `Tempo sui Social: ${formatTime(socialTime)}%0ATempo sul Web: ${formatTime(webTime)}`;
    window.location.href = `mailto:emanuele.zuffranieri@gmail.com?subject=${subject}&body=${body}`;
}
