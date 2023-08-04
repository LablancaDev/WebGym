/* MENU HAMBURGUESA*/
/*Ocultar y mostrar el menú nav*/

let navegador = document.querySelector("#menu");

let abrir = document.querySelector("#abrir");

let cerrar = document.querySelector("#cerrar");

/*Creamos evento para que al darle click al botón abrir, se muestra la nav-bar*/
abrir.addEventListener("click", () =>{
  menu.classList.add("visible")//añadimos la clase visible a la clase nav
  console.log(abrir);
});


/*Creamos evento para que al darle click al botón cerrar, se cierre la nav-bar*/
cerrar.addEventListener("click", () =>{
  menu.classList.remove("visible");//le quitamos la clase visible a nav
});


/*EVENTO TEXTOS HEADER*/

window.onload = cargaFunciones;

function cargaFunciones(){
  titleUp();
  textoUp();
}

function titleUp(){
  let title = document.querySelector(".contenido-header h1");
  title.style.opacity = 1;
  title.classList.add("efectTitle");
}
function textoUp(){
  let textBottom = document.querySelector(".contenido-header h2");
  textBottom.style.opacity = 1;
  textBottom.classList.add("efectText");
}


//ANIMACIÓN SCROLL DESDE ABAJO IMÁGEN Y TEXTO
let BottomPhoto = document.querySelectorAll(".imagen-main img");

let BottomText = document.querySelectorAll(".texto-main");

function mainScroll(){
  let photoScroll = document.documentElement.scrollTop;

  for(let i = 0; i < BottomPhoto.length; i++){
    let longBottomPhoto = BottomPhoto[i].offsetTop;

    if(longBottomPhoto -100 < photoScroll){
      BottomPhoto[i].style.opacity = 1;
      BottomPhoto[i].classList.add("mostrarAbajo");
    }
  }

  let textScroll = document.documentElement.scrollTop;

  for(let i = 0; i < BottomText.length; i++){
    let longBottomText = BottomText[i].offsetTop;

    if(longBottomText -100 < textScroll){
      BottomText[i].style.opacity = 1;
      BottomText[i].classList.add("mostrarAbajo");
    }
  }



}
window.addEventListener("scroll", mainScroll); 