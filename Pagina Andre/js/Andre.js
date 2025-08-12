const botonInicio = document.getElementById("link_inicio")
const botonConoceme = document.getElementById("link_conoceme")
const sectionInicio = document.getElementById("intro")
const sectionConoceme = document.getElementById("conoceme")
let currentURL = window.location.href;

window.addEventListener("", function() {
    currentURL = window.location.href;
});

function cambiarSeccion() {
    if(event.target.id === "link_inicio" ) {
        sectionInicio.classList.remove("salida-izq")
        sectionConoceme.classList.remove("entrada-der")
        sectionInicio.classList.add("entrada-izq")
        sectionConoceme.classList.add("salida-der")
    }else if(event.target.id === "link_conoceme" ) {
        sectionConoceme.classList.remove("salida-der")
        sectionInicio.classList.remove("entrada-izq")
        sectionConoceme.classList.add("entrada-der")
        sectionInicio.classList.add("salida-izq")
    }
};


