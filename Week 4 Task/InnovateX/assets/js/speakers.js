document.addEventListener("DOMContentLoaded", function() {
    fetch("assets/data/speakers.json")
        .then(response => response.json())
        .then(data => {
            const speakersList = document.getElementById("speakers-list");

            data.forEach(speaker => {
                const speakerDiv = document.createElement("div");
                speakerDiv.classList.add("speaker-card");

                speakerDiv.innerHTML = `
                    <img src="${speaker.image}" alt="${speaker.name}">
                    <h3>${speaker.name}</h3>
                    <p><strong>Topic:</strong> ${speaker.topic}</p>
                `;

                speakersList.appendChild(speakerDiv);
            });
        })
        .catch(error => console.error("Error loading speakers:", error));
});
