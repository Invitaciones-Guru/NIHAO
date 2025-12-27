// RSVP WHATSAPP
document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('guestName').value;
    const choice = document.getElementById('attendance').value;
    
    const status = choice === "si" ? "Confirmo mi asistencia ✅" : "No podré asistir ❌";
    const text = encodeURIComponent(`¡Hola! Soy ${name}. ${status} a la boda de Beyla y Guangyao.`);
    
    window.open(`https://wa.me/528186694938?text=${text}`, '_blank');
};

// Intento de Autoplay al primer toque (si tienes audio)
window.addEventListener('click', function() {
    const audio = document.getElementById('weddingMusic');
    if (audio && audio.paused) {
        audio.play();
    }
}, { once: true });

window.addEventListener('scroll', function() {
    const audio = document.getElementById('weddingMusic');
    if (audio && audio.paused) {
        audio.play();
    }
}, { once: true });
