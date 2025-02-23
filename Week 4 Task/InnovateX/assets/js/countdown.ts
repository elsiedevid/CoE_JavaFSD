document.addEventListener("DOMContentLoaded", () => {
    function countdown(targetDate: string): void {
        const countdownElement: HTMLElement | null = document.getElementById("countdown");

        if (!countdownElement) {
            console.error("Countdown element not found.");
            return;
        }

        const target: number = new Date(targetDate).getTime();

        setInterval(() => {
            const now: number = new Date().getTime();
            const remaining: number = target - now;

            if (remaining <= 0) {
                countdownElement.innerHTML = "The event has started!";
                return;
            }

            const days: number = Math.floor(remaining / (1000 * 60 * 60 * 24));
            const hours: number = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes: number = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds: number = Math.floor((remaining % (1000 * 60)) / 1000);

            countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }, 1000);
    }

    // Set the event date for February 27, 2025
    countdown("2025-02-27T00:00:00");
});
