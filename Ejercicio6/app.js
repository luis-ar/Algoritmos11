const ingreso = document.querySelector(".ingreso");
const mostrar = document.querySelector(".mostrar");
const llenarDatos = document.querySelector(".llenar-datos");

function enteroABinarioRecursivo(numero) {
  if (numero <= 1) {
    return numero.toString(); // Caso base: si el número es 0 o 1, devuelve el número como cadena
  }

  const resto = numero % 2;
  const cociente = Math.floor(numero / 2);

  const binarioResto = enteroABinarioRecursivo(cociente); // Llamada recursiva

  return binarioResto + resto.toString();
}
mostrar.addEventListener("click", () => {
  const n = ingreso.value;

  const resultado = enteroABinarioRecursivo(n);
  ingreso.value = "";

  const fila = document.createElement("tr");
  fila.innerHTML += `
                    <td>${n}</td>
                    <td>${resultado}</td>
                  `;
  llenarDatos.appendChild(fila);
});
