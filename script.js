const pwr = document.getElementById('pwr');
const vfd = document.getElementById('vfd');
const nl = document.getElementById('needle-l');
const nr = document.getElementById('needle-r');
const led = document.querySelector('.power-led');

// L'application démarre ON par défaut (selon tes réglages précédents)
let isOn = true;
let isAnimating = false;

// Initialisation visuelle
led.classList.add('active');

// Le bouton Standby déclenche maintenant une réinitialisation complète
pwr.addEventListener('click', () => {
    // Petit effet visuel optionnel avant le reload
    pwr.style.transform = "translateY(2px)";
    
    // Réinitialise l'application (recharge la page)
    location.reload();
});

// Animation des aiguilles
function loop() {
    // Elles ne bougent que si isOn est true ET qu'une action a eu lieu
    // Note : avec location.reload(), isAnimating repassera toujours à false au départ
    if (isOn && isAnimating) {
        nl.style.transform = `rotate(${-45 + Math.random() * 90}deg)`;
        nr.style.transform = `rotate(${-45 + Math.random() * 90}deg)`;
    } else {
        nl.style.transform = `rotate(-55deg)`;
        nr.style.transform = `rotate(-55deg)`;
    }
    setTimeout(loop, 120);
}

loop();