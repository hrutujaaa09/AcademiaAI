document.addEventListener("DOMContentLoaded", function() {
    const subjectCards = document.querySelectorAll(".subject-card");

    subjectCards.forEach(card => {
        card.addEventListener("click", function() {
            const link = card.querySelector("a").getAttribute("href");
            window.location.href = link; // Go to the subject page
        });
    });
});
