import { animate, stagger, inView } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Navbar Animation (Slide down)
    animate(
        ".navbar",
        { y: [-100, 0], opacity: [0, 1] },
        { duration: 0.8, easing: "ease-out" }
    );

    // 2. Hero Section Animation
    const heroElements = document.querySelectorAll(".hero-text h1, .hero-text p, .hero-buttons");
    if (heroElements.length > 0) {
        animate(
            heroElements,
            { opacity: [0, 1], y: [30, 0] },
            { delay: stagger(0.2, { start: 0.3 }), duration: 0.8, easing: "ease-out" }
        );
    }

    const heroImg = document.querySelector(".hero-img");
    if (heroImg) {
        animate(
            heroImg,
            { opacity: [0, 1], scale: [0.8, 1] },
            { delay: 0.6, duration: 1, easing: "ease-out" }
        );
    }

    // 3. Tech Stack Scroll Animation
    inView(".stack-icons, .learning-icons", (info) => {
        animate(
            info.target.querySelectorAll("img"),
            { opacity: [0, 1], scale: [0.5, 1], y: [20, 0] },
            { delay: stagger(0.1), duration: 0.6, easing: [0.22, 1, 0.36, 1] }
        );
    });

    // 4. Projects Scroll Animation
    inView(".project-grid", (info) => {
        animate(
            info.target.querySelectorAll(".project-card"),
            { opacity: [0, 1], y: [50, 0] },
            { delay: stagger(0.15), duration: 0.8, easing: "ease-out" }
        );
    });

    // 5. General Section Fade In
    inView("section.intro, section.experience, section.education, .contact-container", (info) => {
        animate(
            info.target,
            { opacity: [0, 1], y: [30, 0] },
            { duration: 0.8, easing: "ease-out" }
        );
    });

    // 6. Smooth Page Transition (Fade Out on Link Click)
    const links = document.querySelectorAll('a[href]');
    
    // Initial global page fade-in to ensure a smooth start
    animate(document.body, { opacity: [0, 1] }, { duration: 0.5, easing: "ease-out" });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetUrl = link.getAttribute('href');
            const targetAttr = link.getAttribute('target');
            
            // Ignore external links, mailto, tel, anchors, and blank targets
            if (targetAttr === '_blank' || targetUrl.startsWith('http') || targetUrl.startsWith('mailto:') || targetUrl.startsWith('tel:') || targetUrl.startsWith('#')) {
                return;
            }

            e.preventDefault();
            
            // Fade out the body before navigating
            animate(document.body, { opacity: [1, 0] }, { duration: 0.3, easing: "ease-in" });
            
            // Navigate after animation completes
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300);
        });
    });
});
