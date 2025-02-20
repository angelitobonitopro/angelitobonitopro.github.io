// Función para mostrar el contador
function updateCountdown() {
    const eventDate = new Date("2025-02-25T00:00:00"); // Cambiar por la fecha del cumpleaños
    const currentDate = new Date();
    const timeDifference = eventDate - currentDate;

    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerText = "¡Es el día!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Función para mostrar la ubicación
function showLocation() {
    const locationDiv = document.getElementById("location");
    locationDiv.style.display = locationDiv.style.display === "none" ? "block" : "none";
}

// Función para confirmar asistencia
function confirmAttendance() {
    const confirmationDiv = document.getElementById("confirmation");
    confirmationDiv.style.display = "block";
}

// Función para enviar un mensaje a WhatsApp
function sendWhatsApp() {
    const name = document.getElementById("name").value;
    if (name) {
        const message = `¡Hola! Soy ${name} y quiero confirmar mi asistencia al cumpleaños.`;
        const phoneNumber = "59164369208"; // Tu número de WhatsApp (incluye el código del país)
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

// Función para inicializar el mapa de Google
function initMap() {
    const location = { lat: 19.432608, lng: -99.133209 }; // Coordenadas de la ubicación (ajusta a la tuya)
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: "Mi Cumpleaños",
    });
}