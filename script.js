let bg_change = document.querySelector(".bg_changer");
let side_menu = document.querySelector(".side-menu");
let side_bar = document.querySelector(".side-bar");
let close = document.querySelector(".close");

// JS toggle for smooth sidebar
side_menu.addEventListener("click", () => side_bar.classList.add("active"));
close.addEventListener("click", () => side_bar.classList.remove("active"));

// Dark mode toggle with persistence
if (localStorage.getItem("darkMode") === "true") document.body.classList.add("dark");
bg_change.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode", document.body.classList.contains("dark"));
});

// Form submission using EmailJS
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    emailjs.sendForm("service_hkcna9h", "template_pfa9lvq", this)
        .then(response => {
            alert("✅ Thanks for reaching out! We'll reply within 24 hours.");
            this.reset();
        })
        .catch(error => {
            alert("❌ Failed to send message. Please try again.");
            console.log("Error:", error);
        });
});