const barraLateral = document.querySelector(".barraLateral");
const btn = document.querySelector(".bx");
btn.addEventListener("click", () => {
  barraLateral.classList.add("spread");
  window.addEventListener("click", (e) => {
    if (
      barraLateral.classList.contains("spread") &&
      e.target != barraLateral &&
      e.target != btn
    ) {
      barraLateral.classList.toggle("spread");
    }
  });
});
