// RSVP WHATSAPP
document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('guestName').value;
    const choice = document.getElementById('attendance').value;
    
    const status = choice === "si" ? "Confirmo mi asistencia ✅" : "No podré asistir ❌";
    const text = encodeURIComponent(`¡Hola! Soy ${name}. ${status} a la boda de Beyla y Guangyao.`);
    
    window.open(`https://wa.me/528186694938?text=${text}`, '_blank');
};

function startTimer() {
    // Fecha de la boda
    const target = new Date("January 18, 2026 18:00:00").getTime();
    
    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const diff = target - now;

        if (diff < 0) {
            document.getElementById("timer").innerHTML = "¡HOY ES EL DÍA!";
            clearInterval(timerInterval);
            return;
        }

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `
            <div>${d}<span>días</span></div>
            <div>${h}<span>hs</span></div>
            <div>${m}<span>min</span></div>
            <div>${s}<span>seg</span></div>
        `;
    }, 1000);
}

startTimer();
