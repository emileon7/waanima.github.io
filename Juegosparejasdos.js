let isDragging = false;
let currentImg = null;
let offsetX, offsetY; // para mantener el punto donde se presionó el cursor respecto al borde de la imagen

// Función para iniciar el arrastre
function startDrag(event) {
    isDragging = true;
    currentImg = event.target;
    offsetX = event.clientX - currentImg.getBoundingClientRect().left;
    offsetY = event.clientY - currentImg.getBoundingClientRect().top;
}

// Función para terminar el arrastre
function stopDrag() {
    isDragging = false;
    currentImg = null;
}

// Función para realizar el arrastre
function doDrag(event) {
    if (isDragging && currentImg) {
        currentImg.style.left = (event.clientX - offsetX) + 'px';
        currentImg.style.top = (event.clientY - offsetY) + 'px';
    }
}

// Añadir los event listeners a cada imagen
let images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('mousedown', startDrag);
    img.addEventListener('mouseup', stopDrag);
    img.addEventListener('mousemove', doDrag);
});

// Asegurarse de que si el mouse sale de la imagen, se detenga el arrastre
document.addEventListener('mouseup', stopDrag);
