
import { animate } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));

      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      projectCards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "block";
          animate(card, { opacity: [0, 1], scale: [0.9, 1] }, { duration: 0.4 });
        } else {
          animate(card, { opacity: 0, scale: 0.9 }, { duration: 0.3 }).then(() => {
            if (filterValue !== "all" && card.getAttribute("data-category") !== filterValue) {
               card.style.display = "none";
            }
          });
        }
      });
    });
  });
