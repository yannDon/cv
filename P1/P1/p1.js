const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        const cardInner = card.querySelector(".card-inner");
        if (cardInner.style.transform === "rotateY(180deg)") {
            cardInner.style.transform = "rotateY(0deg)";
            return
        }
        cardInner.style.transform = "rotateY(180deg)";
    });
});
