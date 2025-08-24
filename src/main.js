import "./style.css";
import Alpine from "alpinejs";

window.Alpine = Alpine;

Alpine.start();

// Add interactivity
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.classList.add("animate-pulse");
      setTimeout(() => {
        e.target.classList.remove("animate-pulse");
      }, 200);
    });
  });
});
