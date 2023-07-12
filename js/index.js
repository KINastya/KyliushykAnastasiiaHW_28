const emojis = ["😃", "😄", "😊", "😍", "🥰"];
const counters = [0, 0, 0, 0, 0];

function updateResults() {
    const resultsDiv = document.getElementById("votingResults");
    resultsDiv.innerHTML = "";

    for (let i = 0; i < emojis.length; i++) {
        const emojiDiv = document.createElement("div");
        emojiDiv.classList.add("emoji");
        emojiDiv.textContent = emojis[i];
        emojiDiv.setAttribute("data-index", i);
        emojiDiv.addEventListener("click", incrementCounter);
        resultsDiv.appendChild(emojiDiv);

        const counterDiv = document.createElement("div");
        counterDiv.classList.add("counter");
        counterDiv.textContent = counters[i];
        resultsDiv.appendChild(counterDiv);
    }
}

function incrementCounter(event) {
  const index = parseInt(event.target.getAttribute("data-index"));
  counters[index]++;
  updateResults();
}

updateResults();