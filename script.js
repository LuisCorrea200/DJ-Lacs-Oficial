document.addEventListener("DOMContentLoaded", function() {
    const elementos = document.querySelectorAll(".reveal");
    

    function mostrarElementos() {
        elementos.forEach(el => {
            let posicion = el.getBoundingClientRect().top;
            let alturaPantalla = window.innerHeight;
            if (posicion < alturaPantalla - 100) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", mostrarElementos);
    mostrarElementos(); // Para activar elementos visibles al cargar
});

document.getElementById("botonReserva").addEventListener("click", function() {
    let telefono = "+51914351007"; // Reemplaza con tu número de WhatsApp
    let mensaje = "¡Hola! Quisiera reservar un evento con DJ Lacs - Peru.";
    let url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
});


// Fondo animado
const canvas = document.getElementById("fondoAnimado");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }

    draw() {
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

init();
animate();

// Slider de imágenes
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    index = (i + slides.length) % slides.length;
    document.querySelector(".slider").style.transform = `translateX(${-index * 100}%)`;
}

document.getElementById("prev").addEventListener("click", () => showSlide(index - 1));
document.getElementById("next").addEventListener("click", () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 3000); // Cambio automático cada 3 segundos

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("enviarReserva").addEventListener("click", function() {
        let nombre = document.getElementById("nombre").value.trim();
        let fecha = document.getElementById("fecha").value;
        let tipoEvento = document.getElementById("tipoEvento").value.trim();

        if (nombre === "" || fecha === "" || tipoEvento === "") {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }

        // Limpiar los campos después de enviar
        document.getElementById("nombre").value = "";
        document.getElementById("fecha").value = "";
        document.getElementById("tipoEvento").value = "";
    });
});


// Eliminacion de alerta//

document.addEventListener("DOMContentLoaded", function() {
    let modal = document.getElementById("modalReserva");
    let closeButton = document.querySelector(".close");
    let cerrarModalBtn = document.getElementById("cerrarModal");
    let enviarReservaBtn = document.getElementById("enviarReserva");

    enviarReservaBtn.addEventListener("click", function() {
        // Eliminar alert()
        // alert("🎉 ¡Reserva exitosa! 🎉");  <-- ¡ELIMINA O COMENTA ESTA LÍNEA!

        // Simulación de reserva
        document.getElementById("reservaNombre").textContent = "Luis";
        document.getElementById("reservaFecha").textContent = "2025-02-13";
        document.getElementById("reservaTipo").textContent = "Cumpleaños";

        // Mostrar el modal
        modal.style.display = "block";
    });

    // Cerrar el modal al hacer clic en la "X"
    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic en el botón de aceptar
    cerrarModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
