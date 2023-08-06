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
let BottomPhoto = document.querySelectorAll("#imagen-main");

let BottomText = document.querySelectorAll("#texto-main");

function mainScroll(){
  let photoScroll = document.documentElement.scrollTop;

  for(let i = 0; i < BottomPhoto.length; i++){
    let longBottomPhoto = BottomPhoto[i].offsetTop;

    if(longBottomPhoto -60 < photoScroll){
      BottomPhoto[i].style.opacity = 1;
      BottomPhoto[i].classList.add("mostrarAbajo");
    }
  }

  let textScroll = document.documentElement.scrollTop;

  for(let i = 0; i < BottomText.length; i++){
    let longBottomText = BottomText[i].offsetTop;

    if(longBottomText -60 < textScroll){
      BottomText[i].style.opacity = 1;
      BottomText[i].classList.add("mostrarAbajo");
    }
  }



}
window.addEventListener("scroll", mainScroll); 


//EFECTO BOTÓN CAMBIO DE IMÁGENES Prueba 1

let img = document.querySelector(".imagen-main img");

let change = document.querySelector(".imagen-main button");

change.addEventListener("click", ()=>{
  // do{
  if(img.src.match("./assets/imgs/gym.jpg")){
    img.src = "./assets/imgs/actividadesDirigidas.jpg";
  }else if(img.src.match ("./assets/imgs/actividadesDirigidas.jpg")){
    img.src = "./assets/imgs/gym2.jpg";
  }else if(img.src.match ("./assets/imgs/gym2.jpg")){
    img.src = "./assets/imgs/crossfit.jpg";
  }else if(img.src.match  ("./assets/imgs/crossfit.jpg")){
    img.src = "./assets/imgs/natacion.jpg";
  }else if(img.src.match  ("./assets/imgs/natacion.jpg")){
    img.src = "./assets/imgs/spa.jpg";
  }else if(img.src.match  ("./assets/imgs/spa.jpg")){
    img.src = "./assets/imgs/gym.jpg";
  }
  // }while (img===(img.src="./assets/imgs/gym.jpg"))
});

//EFECTO BOTÓN CAMBIO DE IMÁGENES Prueba 2


// let img = document.querySelector(".imagen-main img");

// let change = document.querySelector(".imagen-main button");

// let imgArray = new Array;

// imgArray[0] = new Image();
// imgArray[0].src = './assets/imgs/gym.jpg';

// imgArray[1] = new Image();
// imgArray[1].src = './assets/imgs/lucha.jpg';

// imgArray[2] = new Image();
// imgArray[2].src = './assets/imgs/natacion.jpg';

// imgArray[3] = new Image();
// imgArray[3].src = './assets/imgs/pesa.png';

// change.addEventListener("click", ()=>{
//     for(let i = 0; i<imgArray.length; i++){
//       if(img.src.match(imgArray[0])){
//         img.src = imgArray[1];
//           }else if(img.src = img.src.match(imgArray[1])){
//              img.src = imgArray[2];
//           }else if(img.src = "./assets/imgs/natacion.jpg"){
//             img.src = "./assets/imgs/pesa.png";
//           }else if(img.src = "./assets/imgs/pesa.png"){
//             img.src = "./assets/imgs/gym2.jpg";
//           }else{
//             img.src = "./assets/imgs/gym3.jpg";
//           }
//     }
// });
// (function(){
//   var i = 0;
//   document.all["imgV"].srcList = []
//   document.all["imgV"].srcList[0] = "/assets/imgs/gym.jpg'"
//   document.all["imgV"].srcList[1] = "/assets/imgs/lucha.jpg"
//   document.all["imgV"].srcList[2] = "/assets/imgs/natacion.jpg"
//   document.all["imgV"].srcList[3] = "img3.png"
//   document.all["imgV"].srcList[4] = "img4.png"

//   anterior = function(imgElement){
//       if(i !== 0){
//           i--
//       }else{
//           alert("esta es la primera foto")
//           return;
//       }
//       imgElement.src = imgElement.srcList[i]
//   }
//   siguiente = function(imgElement){
//       i++
//       if(!imgElement.srcList[i]){
//           i--
//           alert("esta es la ultima foto")
//           return;
//       }
//       imgElement.src = imgElement.srcList[i]
//   }
// })()