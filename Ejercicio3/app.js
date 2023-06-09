const ingreso = document.querySelector(".ingreso");
const mostrar = document.querySelector(".mostrar");
const llenarDatos = document.querySelector(".llenar-datos");

const SumarTerminos = (numero, valores = []) => {
  let total = 0;
  while (numero > 0) {
    let valor = numero % 10;
    valores.unshift(valor);
    total += valor;
    numero = Math.floor(numero / 10);
  }
  return { total, valores };
};

mostrar.addEventListener("click", () => {
  const n = ingreso.value;
  const conjuntos = [];
  const { total, valores } = SumarTerminos(n, conjuntos);
  ingreso.value = "";

  const fila1 = document.createElement("tr");
  valores.forEach((valor, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML += `
                  <td>${"Termino " + (index + 1)}</td>
                  <td>${valor}</td>
                `;
    llenarDatos.appendChild(fila);
  });
  fila1.innerHTML += `
                  <td>${"Suma de Terminos"}</td>
                  <td>${total}</td>
                `;
  llenarDatos.appendChild(fila1);
});
