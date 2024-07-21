// wedding.js

// Countdown Timer
const countdownDate = new Date("July 30, 2024 09:00:00").getTime();

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-timer").innerHTML = "Passed";
    }
};

const countdownInterval = setInterval(updateCountdown, 1000);

// Wishes Form
const wishesForm = document.getElementById("wishes-form");
const wishesContainer = document.getElementById("wishes-container");

wishesForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const wishCard = document.createElement("div");
    wishCard.classList.add("wish-card");
    
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.innerHTML = `<strong>${name}</strong>`;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.innerText = message;

    wishCard.appendChild(cardHeader);
    wishCard.appendChild(cardBody);
    
    wishesContainer.appendChild(wishCard);

    wishesForm.reset();

    wishCard.addEventListener("click", () => {
        wishCard.classList.toggle("open");
    });
});
