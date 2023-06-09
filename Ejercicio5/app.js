const ingreso = document.querySelector(".ingreso");
const mostrar = document.querySelector(".mostrar");
const llenarDatos = document.querySelector(".llenar-datos");
function enteroABinario(numero) {
  let binario = "";

  while (numero > 0) {
    binario = (numero % 2) + binario;
    numero = Math.floor(numero / 2);
  }

  if (binario === "") {
    binario = "0"; // Si el número original es 0, el binario también es 0
  }

  return binario;
}


mostrar.addEventListener("click", () => {
    const n = ingreso.value; 
  
    const resultado = enteroABinario(n);
    ingreso.value = "";
  
    
      const fila = document.createElement("tr");
      fila.innerHTML += `
                    <td>${n}</td>
                    <td>${resultado}</td>
                  `;
      llenarDatos.appendChild(fila);
  });
