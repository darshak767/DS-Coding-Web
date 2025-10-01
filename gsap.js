// register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// small initial load animation for header/hero (no ScrollTrigger)
gsap.from(".nav-bar, .hero-heading, .hero-first", {
  y: -30,
  opacity: 0,
  duration: 0.7,
  stagger: 0.06,
  ease: "power2.out"
});

// Animate each <section> when it comes into view
gsap.utils.toArray("section").forEach(section => {
  // pick the elements inside the section you want animated
  const targets = section.querySelectorAll("h2, .sm-text, .hero-second-cards, .code-card, .trial-cards, .practice-first, .hero-second-inside");

  if (!targets.length) return; // nothing to animate in this section

  gsap.from(targets, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    stagger: 0.08,
    ease: "power2.out",
    scrollTrigger: {
      trigger: section,           // each section triggers its own animation
      start: "top 60%",           // tweak to taste (when section top hits 75% of viewport)
      toggleActions: "play none none reverse",
      markers: true,           // enable to debug start/end positions
    }
  });
});
