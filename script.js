function planTrip() {
    let destination = document.getElementById("destination").value;
    let daysInput = document.getElementById("days").value;
    let days = Number(daysInput);

    const destinations = {
        istanbul: "istanbul.html",
        paris: "paris.html",
        rome: "rome.html",
        barcelona: "barcelona.html",
        bangkok: "bangkok.html",
        santorini: "santorini.html",
        bali: "bali.html",
        hawaii: "hawaii.html",
        tokyo: "tokyo.html"
    };

    if (
        destination === "" ||
        daysInput === "" ||
        days < 1 ||
        days > 365 ||
        !Number.isInteger(days)
    ) {
        document.getElementById("result").innerText =
            "Please enter a valid destination and number of days.";
        return;
    }

    if (!destinations[destination]) {
        document.getElementById("result").innerText =
            "Destination not found.";
        return;
    }

    window.location.href =
        destinations[destination] + "?days=" + days;
}

const heroImages = [
    "https://images.squarespace-cdn.com/content/v1/5ecb60191a267019b824fb8a/540abac5-f959-4293-8ea6-eade0bd8686f/shutterstock_jikkokubune.jpg",
    "https://images8.alphacoders.com/362/362810.jpg",
    "https://hoshinoresorts.com/wpadmin2022/wp-content/uploads/2026/08/24b4917ebfb8faa5b8369dbf9e96233b-1200x800.jpg",
    "https://samantha-brown.com/wp-content/uploads/2022/11/cozy-winter-lodges.jpg",
    "https://images5.alphacoders.com/675/675973.jpg"
];

let currentImage = 0;

function changeHeroBackground() {
    const hero = document.querySelector(".hero");

    currentImage = (currentImage + 1) % heroImages.length;

    hero.style.background = `
        linear-gradient(
            90deg,
            rgba(16, 31, 43, 0.72),
            rgba(16, 31, 43, 0.05)
        ),
        url("${heroImages[currentImage]}") center/cover no-repeat
    `;
}

setInterval(changeHeroBackground, 5000);

// Destination Slider

let sliderIndex = 0;

function moveSlider(direction) {

    const grid = document.getElementById("destinationGrid");
    const cards = grid.querySelectorAll(".destination-card");

    const visibleCards = window.innerWidth <= 768 ? 1 : 3;
    const maxIndex = cards.length - visibleCards;

    sliderIndex += direction;

    if (sliderIndex < 0) {
        sliderIndex = maxIndex;
    }

    if (sliderIndex > maxIndex) {
        sliderIndex = 0;
    }

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(grid).gap);

    grid.scrollTo({
        left: sliderIndex * (cardWidth + gap),
        behavior: "smooth"
    });
}