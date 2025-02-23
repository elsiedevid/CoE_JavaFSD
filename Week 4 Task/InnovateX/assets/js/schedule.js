document.addEventListener("DOMContentLoaded", function () {
    const viewTrackBtn = document.getElementById("viewTrackBtn");
    const trackSelect = document.getElementById("trackSelect");

    viewTrackBtn.addEventListener("click", function () {
        const selectedTrack = trackSelect.value;

        if (selectedTrack) {
            window.location.href = selectedTrack + ".html"; // Redirect to respective page
        } else {
            alert("Please select a track!");
        }
    });
});
