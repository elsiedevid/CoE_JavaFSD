document.addEventListener("DOMContentLoaded", () => {
    function updateCountdown(targetDate) {
        const daysEl = document.getElementById("days");
        const hoursEl = document.getElementById("hours");
        const minutesEl = document.getElementById("minutes");
        const secondsEl = document.getElementById("seconds");

        function calculateTime() {
            const now = new Date().getTime();
            const target = new Date(targetDate).getTime();
            const remaining = target - now;

            if (remaining <= 0) {
                daysEl.innerHTML = "00";
                hoursEl.innerHTML = "00";
                minutesEl.innerHTML = "00";
                secondsEl.innerHTML = "00";
                return;
            }

            const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

            daysEl.innerHTML = String(days).padStart(2, "0");
            hoursEl.innerHTML = String(hours).padStart(2, "0");
            minutesEl.innerHTML = String(minutes).padStart(2, "0");
            secondsEl.innerHTML = String(seconds).padStart(2, "0");
        }

        calculateTime();
        setInterval(calculateTime, 1000);
    }

    // Set the event date for February 27, 2025
    updateCountdown("2025-02-27T00:00:00");
});
