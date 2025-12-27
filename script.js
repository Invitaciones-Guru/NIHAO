// RSVP WHATSAPP
document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('guestName').value;
    const choice = document.getElementById('attendance').value;
    
    const status = choice === "si" ? "Confirmo mi asistencia ✅" : "No podré asistir ❌";
    const text = encodeURIComponent(`¡Hola! Soy ${name}. ${status} a la boda de Beyla y Guangyao.`);
    
    window.open(`https://wa.me/528186694938?text=${text}`, '_blank');
};

const eventDate = new Date("2026-01-18T18:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "<h3>¡Hoy es el gran día!</h3>";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
