import es_Bisiesto from "./bisiesto.js";
import Mensaje from "./mesaje.js";

const anio_imput = document.querySelector("#anio");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const anio = anio_imput.value;
  const respuesta = es_Bisiesto(anio);
  div.innerHTML = Mensaje(respuesta);
});
