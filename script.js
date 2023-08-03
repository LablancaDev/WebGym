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
  