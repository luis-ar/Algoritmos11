const mostrar = document.querySelector(".mostrar");
const llenarDatos = document.querySelector(".llenar-datos");
const terminos1 = document.querySelector(".terminos1");

const FibonacciRecursivo = (n, valores = []) => {
  if (n === 1) {
    valores.push(0);
    return 0;
  }
  if (n === 2) {
    valores.push(0, 1);
    return 1;
  }
  FibonacciRecursivo(n - 1, valores);
  const resultado = valores[n - 2] + valores[n - 3];
  valores.push(resultado);
  return resultado;
};

mostrar.addEventListener("click", () => {
  const n = terminos1.value; // El número de términos de Fibonacci que deseas calcular
  const valores = [];

  FibonacciRecursivo(n, valores);
  terminos1.value = "";

  valores.forEach((valor, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML += `
                  <td>${index + 1}</td>
                  <td>${valor}</td>
                `;
    llenarDatos.appendChild(fila);
  });
});
