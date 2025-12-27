// RSVP WHATSAPP
document.getElementById('rsvpForm').onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('guestName').value;
    const choice = document.getElementById('attendance').value;
    
    const status = choice === "si" ? "Confirmo mi asistencia ✅" : "No podré asistir ❌";
    const text = encodeURIComponent(`¡Hola! Soy ${name}. ${status} a la boda de Beyla y Guangyao.`);
    
    window.open(`https://wa.me/528186694938?text=${text}`, '_blank');
};

<section class="section reverse">
    <div class="section-text">
        <h2>Cuenta regresiva</h2>
        <p>Faltan...</p>

        <div id="countdown" class="countdown">
            <div><span id="days">0</span><small>Días</small></div>
            <div><span id="hours">0</span><small>Horas</small></div>
            <div><span id="minutes">0</span><small>Minutos</small></div>
            <div><span id="seconds">0</span><small>Segundos</small></div>
        </div>
    </div>

    <div class="section-img">
        <img src="foto4.jpeg" alt="Cuenta regresiva">
    </div>
</section>
