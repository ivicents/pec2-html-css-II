/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

//Buscamos el boton que activara el toast
var button = document.getElementById("toastBtn");
//Le añadimos el evento para que al pinchar sobre el, lance la funcion showToast
button.addEventListener("click", showToast)
//Funcion que se ejecuta al pinchar sobre el boton de mostrar toast
function showToast() {
  //Buscamos el toast (contenido)
  var myAlert = document.getElementById('toastNotice');
  //Inicializamos el toast
  var bsAlert = new bootstrap.Toast(myAlert);
  //Mostramos el toast
  bsAlert.show();
}
