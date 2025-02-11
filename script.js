document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-in");

    // Observer pour détecter quand une section entre dans le champ de vision
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Bouton interactif
    document.getElementById("btn-message").addEventListener("click", () => {
        alert("Merci d'avoir visité ma page !");
    });
});