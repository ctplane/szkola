document.addEventListener("DOMContentLoaded", () => {
    // Płynne przewijanie do sekcji
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Obsługa formularza
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Dziękujemy za wiadomość! Skontaktujemy się wkrótce.");
        this.reset();
    });
});
