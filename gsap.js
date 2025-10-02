// GSAP Animations
gsap.from(".nav-bar, .hero-heading, .hero-first", {
    y: -30,
    opacity: 0,
    duration: 0.7,
    stagger: 0.06,
    ease: "power2.out"
});

// Batch animations for all sections
gsap.utils.toArray("section").forEach(section => {
    const targets = section.querySelectorAll("h2, .sm-text, .hero-second-cards, .code-card, .trial-cards");
    if (targets.length) {
        gsap.from(targets, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 60%",
                toggleActions: "play none none reverse"
            }
        });
    }
});