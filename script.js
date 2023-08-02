// FORMA 1

/*Instanciamos el boton toggle, al recibir un click hará lo siguiente*/
//  _toggle.onclick = () =>{
//      _items.classList.toggle("open")
//  }

// FORMA 2
var menu = document.querySelector('.nav_toggle');

function toggleMenu (event) {
    this.classList.toggle('is-active');
    document.querySelector( ".menu" ).classList.toggle("is_active");
    event.preventDefault();
  }

  menu.addEventListener('click', toggleMenu, false);


  