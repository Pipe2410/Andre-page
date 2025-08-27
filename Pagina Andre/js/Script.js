const botonInicio = document.getElementById("link_inicio")
const botonServicios = document.getElementById("link_orientaciones")
const botonConoceme = document.getElementById("link_conoceme")
const sectionInicio = document.getElementById("intro")
const sectionServicios = document.getElementById("servicios")
const sectionConoceme = document.getElementById("conoceme")
const menuButton = document.querySelector('#boton_plegable');
const navList = document.querySelector('#botones');
let lastSection =botonInicio;
let currentURL = window.location.href;
let anchoSeccionInicio = sectionInicio.offsetWidth;
let altoSeccionInicio = sectionInicio.offsetHeight;
let anchoSeccionServicios = sectionServicios.offsetWidth;
let altoSeccionServicios = sectionServicios.offsetHeight;
let anchoSeccionConoceme = sectionConoceme.offsetWidth;
let altoSeccionConoceme = sectionConoceme.offsetHeight;

function cambiarSeccion() {
  let click = event.target.id
  let nuevaSeccion = document.getElementById(click);
  let anchoSeccion = 0;
  let altoSeccion = 0;
  
  if (nuevaSeccion==botonInicio){
    if (lastSection==botonInicio){
      lastSection=botonInicio
    }else{
      console.log(lastSection)
      lastSection.classList.add("desactivar-animacion");
      lastSection.classList.remove("animacion-activo",);

    }   
   
  } else   if (nuevaSeccion==botonServicios){
    if (lastSection==botonInicio){
      sectionServicios.classList.add("animacion-activo");
      sectionInicio.classList.add("ocultar");
      sectionConoceme.classList.add("ocultar");
      lastSection=sectionServicios;
    }else{
      lastSection.classList.add("desactivar-animacion");
      sectionServicios.classList.add("animacion-activo");
      lastSection.classList.add("desactivar-animacion");
      sectionInicio.classList.add("ocultar");
      sectionConoceme.classList.add("ocultar");
      lastSection=sectionServicios;
    }
  } else   if (nuevaSeccion==botonConoceme){
    if (lastSection==botonInicio){
      anchoSeccion = anchoSeccionServicios;
      altoSeccion = altoSeccionServicios;
      sectionConoceme.classList.add("animacion-activo");
      sectionInicio.classList.add("ocultar");
      sectionServicios.classList.add("ocultar");
  
    }else{
      lastSection.classList.add("desactivar-animacion");
      anchoSeccion = anchoSeccionServicios;
      altoSeccion = altoSeccionServicios;
      sectionConoceme.classList.add("animacion-activo");
      lastSection.classList.add("desactivar-animacion");
      sectionInicio.classList.add("ocultar");
      sectionServicios.classList.add("ocultar");
      lastSection=botonServicios;
    }
  } 
}

menuButton.addEventListener('click', () => {
  navList.classList.toggle('activo');
});



