const toggleButton = document.getElementById("menu-toggle");
const closeButton = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuLinks = mobileMenu.querySelectorAll("a");

toggleButton.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    document.body.classList.add("no-scroll");
});

closeButton.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    document.body.classList.remove("no-scroll");
});

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        document.body.classList.remove("no-scroll");
    });
});

const arrow = document.getElementById("arrowFlutuante");
const observada = document.getElementById("sessao-sobre");

if (arrow && observada) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                arrow.style.opacity = entry.isIntersecting ? "1" : "0";
            });
        },
        {
            threshold: 0.5,
        }
    );

    observer.observe(observada);
} else {
    console.error("Elemento não encontrado:", {
        arrow,
        observada,
    });
}

const navbar = document.getElementById("navbar");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    if (scrollY > heroHeight) {
        navbar.classList.add("hidden");
    } else {
        navbar.classList.remove("hidden");
    }
});
