const btnFibonacci = document.querySelector(".btnFibonacci");
const terminos1 = document.querySelector(".terminos1");
const llenarDatos = document.querySelector(".llenar-datos");

const FibonacciIterativo = (valor) => {
  let fibonacci = [0, 1];
  for (let i = 2; i < valor; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  return fibonacci;
};

btnFibonacci.addEventListener("click", () => {
  const conjuntos = FibonacciIterativo(parseInt(terminos1.value));
  terminos1.value = "";
  conjuntos.forEach((valor, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML += `
                  <td>${index + 1}</td>
                  <td>${valor}</td>
                `;
    llenarDatos.appendChild(fila);
  });
});
