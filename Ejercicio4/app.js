const ingreso = document.querySelector(".ingreso");
const mostrar = document.querySelector(".mostrar");
const llenarDatos = document.querySelector(".llenar-datos");

function sumarDigitosRecursivo(numero, terminos = []) {
  if (numero === 0) {
    return 0; // Caso base: si el número es 0, la suma es 0
  }

  const digito = numero % 10;
  terminos.unshift(digito); // Guardar el dígito en el arreglo de términos

  return digito + sumarDigitosRecursivo(Math.floor(numero / 10), terminos);
}

mostrar.addEventListener("click", () => {
  const n = ingreso.value;
  const conjuntos = [];
  const resultado = sumarDigitosRecursivo(n, conjuntos);
  ingreso.value = "";

  const fila1 = document.createElement("tr");
  conjuntos.forEach((valor, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML += `
                    <td>${"Termino " + (index + 1)}</td>
                    <td>${valor}</td>
                  `;
    llenarDatos.appendChild(fila);
  });
  fila1.innerHTML += `
                    <td>${"Suma de Terminos"}</td>
                    <td>${resultado}</td>
                  `;
  llenarDatos.appendChild(fila1);
});
