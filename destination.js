// Food Slider

let foodIndex = 0;

function moveFood(direction) {

    const track = document.getElementById("foodTrack");

    const cards = track.querySelectorAll(".food-card");

    const visibleCards = window.innerWidth <= 768 ? 1 : 2;

    const maxIndex = cards.length - visibleCards;

    foodIndex += direction;

    if (foodIndex < 0) {
        foodIndex = maxIndex;
    }

    if (foodIndex > maxIndex) {
        foodIndex = 0;
    }

    const cardWidth = cards[0].getBoundingClientRect().width;

    const gap = parseFloat(getComputedStyle(track).gap);

    track.scrollTo({
        left: foodIndex * (cardWidth + gap),
        behavior: "smooth"
    });

}