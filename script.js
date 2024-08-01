// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Set end time to August 1, 2024, 23:59:59
    const endTime = new Date('2024-08-01T23:59:59Z').getTime();

    function updateTimer() {
        const now = new Date().getTime();
        const distance = endTime - now;

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the timer display
        document.getElementById('timer').innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Check if the countdown has ended
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('timer').innerHTML = "EXPIRED";
        }
    }

    // Initial call to display the timer immediately
    updateTimer();
    // Update the timer every second
    const interval = setInterval(updateTimer, 1000);
});