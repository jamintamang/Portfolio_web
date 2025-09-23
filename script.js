const prefix = "I am ";
const skills = ["Web Developer", "UI/UX Designer", "Graphic Designer"];
const typingText = document.getElementById('typing-text');

if (typingText) {
  let skillIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentSkill = skills[skillIndex];
    let displayedText = prefix + currentSkill.substring(0, charIndex);

    typingText.textContent = displayedText;

    if (!isDeleting && charIndex < currentSkill.length) {
      charIndex++;
      setTimeout(typeWriter, 80);
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
      setTimeout(typeWriter, 40);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeWriter, 1200);
      } else {
        isDeleting = false;
        skillIndex = (skillIndex + 1) % skills.length;
        setTimeout(typeWriter, 400);
      }
    }
  }
  
  typeWriter();
}

// const projects = {
//   project1: {
//     image: "/src/assets/project/project-1.jpg",
//     title: "Portfolio Website",
//     description:
//       "A personal portfolio website to showcase my skills and projects.",
//     technologies: ["HTML", "CSS", "JavaScript"],
//     GitHub: "https://github.com/username/portfolio",
//     live: "https://username.github.io/portfolio",
//   },
//   project2: {
//     title: "Weather App",
//     description:
//       "A weather application that provides real-time weather updates.",
//     technologies: ["HTML", "CSS", "JavaScript"],
//     image: "/src/assets/project/project-2.jpg",
//     GitHub: "https://github.com/username/weather-app",
//     live: "https://username.github.io/weather-app",
//   },
//   project3: {
//     title: "E-commerce Website",
//     description:
//       "An e-commerce platform with product listings and a shopping cart.",
//     technologies: ["HTML", "CSS", "JavaScript"],
//     image: "/src/assets/project/project-3.jpg",
//     GitHub: "https://github.com/username/ecommerce",
//     live: "https://username.github.io/ecommerce",
//   },
// };

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  const navLinksItems = navLinks.querySelectorAll("a");
  navLinksItems.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
}

// function createHomepageProjectCards() {
//   const projectGrid = document.querySelector(".project-grid");
  
//   if (!projectGrid) return;

//   projectGrid.innerHTML = "";

//   const homepageProjects = Object.values(projects).slice(0, 3);

//   homepageProjects.forEach((project) => {
//     const projectCard = document.createElement("div");
//     projectCard.className = "project-card";

//     projectCard.innerHTML = `
//       <img src="${project.image}" alt="${project.title}">
//       <div class="project-info">
//         <h5>${project.technologies ? project.technologies.join(", ") : ""}</h5>
//         <h3>${project.title}</h3>
//         <p>${project.description}</p>
//         <div class="project-links">
//           <a href="${project.GitHub}" target="_blank" class="btn"><i class="fa-brands fa-github"></i></a>
//           <a href="${project.live}" target="_blank" class="btn"><i class="fa-solid fa-link"></i></a>
//         </div>
//       </div>
//     `;

//     projectGrid.appendChild(projectCard);
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  createHomepageProjectCards();
  
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
