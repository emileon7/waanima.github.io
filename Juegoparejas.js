document.addEventListener("DOMContentLoaded", function()  {setupGame();
// Obtén una referencia al elemento de audio
var miAudio = document.getElementById('soundmagic');
var miAudio = document.getElementById('sounderror');
// Agrega un controlador de eventos al botón

    let restartButton = document.getElementById('restartGame');
    restartButton.addEventListener('click', setupGame);
});
function setupGame() {
    let centerZone = document.getElementById('centerZone');
    let wordZone = document.getElementById('wordZone');
    
    let images = Array.from(centerZone.children);
    let words = Array.from(wordZone.children);
    
    images = shuffleArray(images);
    words = shuffleArray(words);

    // Limpiamos los contenedores
    centerZone.innerHTML = '';
    wordZone.innerHTML = '';
    
    // Insertamos las imágenes reordenadas
    images.forEach(img => centerZone.appendChild(img));

    // Radio del círculo alrededor del cual colocaremos las palabras
    let radius = Math.min(wordZone.clientWidth, wordZone.clientHeight) * 0.4;
    let cx = wordZone.clientWidth / 2;
    let cy = wordZone.clientHeight / 2;

    let angleStep = 360 / words.length;

    words.forEach((word, index) => {
        let angle = angleStep * index * (Math.PI / 180);
        let x = cx + radius * Math.cos(angle) - word.clientWidth / 2;
        let y = cy + radius * Math.sin(angle) - word.clientHeight / 2;

        word.style.left = x + 'px';
        word.style.top = y + 'px';
        wordZone.appendChild(word);
    });

    images.forEach(img => {
        img.ondragstart = function(event) {
            event.dataTransfer.setData("text/plain", img.dataset.pair);
        };
    });

    words.forEach(word => {
        word.ondragover = function(event) {
            event.preventDefault();
        };

        word.ondrop = function(event) {
            const imgPair = event.dataTransfer.getData("text/plain");
        
            if (word.dataset.pair === imgPair) {
                word.style.color = "green";
                const pairedImg = Array.from(centerZone.children).find(i => i.dataset.pair === imgPair);
                pairedImg.style.border = "2px solid green";
                soundmagic.play();
                setTimeout(() => {
                    pairedImg.remove();
                    word.remove();
                    checkGameCompletion();  // Agregar esta línea
                }, 1000);
            } else {
                word.style.color = "red";
                sounderror.playbackRate = 1.75;
                sounderror.play();
                setTimeout(() => {
                    word.style.color = "";
                    
                }, 1000);
            }
        };
    });
    
function checkGameCompletion() {
    // Si no quedan imágenes ni palabras en los contenedores, entonces el juego ha terminado
    if (!centerZone.hasChildNodes() && !wordZone.hasChildNodes()) {
        // Muestra el mensaje de felicitaciones
        var mensajeFelicidades = document.getElementById('mensaje-felicidades');
        mensajeFelicidades.style.display = 'block';

        // Agrega un controlador de eventos al botón de reinicio
        var reiniciarBoton = document.getElementById('reiniciar-juego');
        reiniciarBoton.addEventListener('click', function() {
            // Oculta el mensaje de felicitaciones
            mensajeFelicidades.style.display = 'none';
            
            // Llama a la función para reiniciar el juego
            setupGame();
        });
    }
}
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


