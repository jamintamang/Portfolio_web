import { animate, stagger, inView } from "https://cdn.skypack.dev/motion";

const projects = {
  project1: {
    image: "../assets/project/project-1.jpg",
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/username/portfolio",
    live: "https://username.github.io/portfolio",
  },
  project2: {
    image: "../assets/project/project-2.jpg",
    title: "Weather App",
    description: "A weather application that provides real-time weather updates.",
    technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
    github: "https://github.com/username/weather-app",
    live: "https://github.com/username/weather-app",
  },
  project3: {
    image: "../assets/project/project-3.jpg",
    title: "E-commerce Website",
    description: "An e-commerce platform with product listings and a shopping cart.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/username/ecommerce",
    live: "https://github.com/username/ecommerce",
  },
  project4: {
    image: "../assets/project/project-4.jpg",
    title: "Blog Platform",
    description: "A blogging platform where users can create and share posts.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://github.com/username/blog-platform",
    live: "https://github.com/username/blog-platform",
  },
  project5: {
    image: "../assets/project/project-5.jpg",
    title: "Task Manager",
    description: "A task management application to help users organize their tasks.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: "https://github.com/username/task-manager",
    live: "https://github.com/username/task-manager",
  },
  project6: {
    image: "../assets/project/project-6.jpg",
    title: "Chat Application",
    description: "A real-time chat application for users to communicate.",
    technologies: ["HTML", "CSS", "JavaScript", "WebSockets"],
    github: "https://github.com/username/chat-app",
    live: "https://github.com/username/chat-app",
  },
};

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(link => {
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

function createProjectCards() {
  const grid = document.querySelector(".project-grid");
  if (!grid) return;

  grid.innerHTML = "";

  Object.values(projects).forEach((project) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy" />
        <div class="card-overlay"></div>
      </div>
      <div class="card-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-stack">
          <strong>Tech stack:</strong> 
          <div class="tech-tags">${project.technologies
            .map((tech) => `<span class="tech-tag">${tech}</span>`)
            .join("")}</div>
        </div>
        <div class="card-links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="github-link">
            <i class="fab fa-github"></i> Code
          </a>
          <a href="${project.live}" target="_blank" rel="noopener noreferrer" class="live-link">
            <i class="fas fa-external-link-alt"></i> Live Demo
          </a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });

  inView(".card", ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], y: [50, 0] },
      { duration: 0.6, delay: stagger(0.1) }
    );
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createProjectCards();

  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
