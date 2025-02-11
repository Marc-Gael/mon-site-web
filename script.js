document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Stopper l'observation après apparition
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Effet de rebond amélioré sur le bouton
    document.getElementById("btn-message").addEventListener("click", () => {
        alert("Merci d'avoir visité ma page !");
    });
});