

function toggleList() {
    var characterList = document.getElementById("characterList");
    characterList.style.display = (characterList.style.display === 'none') ? 'block' : 'none';
}

/*-----------------------------------------*/

var sonidos = ["Sonido0.mp3", "Sonido1.mp3", "Sonido2.mp3", "Sonido3.mp3", "Sonido4.mp3","Sonido5.mp3"];
var sonidoActivo = false;
var animacionActiva = false;

function mostrarReloj() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    // Añadimos un cero delante si es necesario para mantener el formato HH:MM:SS
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    var tiempo = hora + ":" + minutos + ":" + segundos;

    document.getElementById("reloj").innerHTML = tiempo;

    setTimeout(mostrarReloj, 1000);
}

function reproducirSonido() {
    var reproductor = document.getElementById("sonido");

    // Obtener un índice aleatorio para seleccionar un sonido
    var indiceAleatorio = Math.floor(Math.random() * sonidos.length);

    // Establecer la fuente de audio con el sonido aleatorio
    reproductor.src = sonidos[indiceAleatorio];

    // Reproducir el sonido
    reproductor.play();

    // Establecer las banderas
    sonidoActivo = true;
    animacionActiva = true;

    // Iniciar la animación
    document.querySelector(".boton_4").classList.add("moviendo");

    // Iniciar la animación del reloj
    moverReloj();
}

function alternarAnimacion() {
    if (sonidoActivo) {
        var reproductor = document.getElementById("sonido");
        reproductor.pause();

        // Reiniciar las banderas
        sonidoActivo = false;
        animacionActiva = false;

        // Detener la animación
        document.querySelector(".boton_4").classList.remove("moviendo");
    } else {
        reproducirSonido();
    }
}

function sonidoTerminado() {
    // Reiniciar las banderas
    sonidoActivo = false;
    animacionActiva = false;

    // Detener la animación
    document.querySelector(".boton_4").classList.remove("moviendo");
}

function moverReloj() {
    var reloj = document.getElementById("reloj");

    function animar() {
        if (animacionActiva) {
            reloj.style.transform = "rotate(" + (parseInt(reloj.style.transform.replace("rotate(", "").replace("deg)", "")) + 1) + "deg)";
            requestAnimationFrame(animar);
        }
    }

    animar();
}

mostrarReloj();

/*---------------------------------------------*/

function reproducirSonidos() {
    var sonidoBoton = document.getElementById("sonidoBoton");
    sonidoBoton.currentTime = 0; // Reinicia la reproducción al inicio
    sonidoBoton.play();
}

/*-------------------------------------------------*/

