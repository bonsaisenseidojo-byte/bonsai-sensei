document.addEventListener("DOMContentLoaded", function () {
  const dojoBtn = document.getElementById("dojoBtn");
  const trainBtn = document.getElementById("trainBtn");

  if (dojoBtn) {
    dojoBtn.addEventListener("click", function () {
      const speciesSection = document.getElementById("species");
      if (speciesSection) {
        speciesSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  if (trainBtn) {
    trainBtn.addEventListener("click", function () {
      const trackerSection = document.getElementById("tracker");
      if (trackerSection) {
        trackerSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  const askBtn = document.getElementById("askBtn");

  if (askBtn) {
    askBtn.addEventListener("click", function () {
      const questionBox = document.getElementById("question");
      const responseBox = document.getElementById("response");

      if (!questionBox || !responseBox) return;

      const question = questionBox.value.toLowerCase();

      let answer =
        "Start by checking sunlight, watering, drainage, soil moisture, pests, and recent weather changes.";

      if (question.includes("yellow")) {
        answer =
          "Yellow leaves can come from overwatering, poor drainage, low light, nutrient issues, or seasonal change. First check if the soil is staying wet too long.";
      } else if (question.includes("brown") || question.includes("dry")) {
        answer =
          "Brown or dry foliage can come from underwatering, heat stress, root damage, or too much afternoon sun. Check soil moisture and recent heat exposure.";
      } else if (question.includes("juniper")) {
        answer =
          "Junipers need outdoor full sun and good airflow. They should not be kept indoors long term.";
      } else if (question.includes("bald cypress")) {
        answer =
          "Bald Cypress loves full sun and consistent moisture. It is excellent for Louisiana and humid Gulf Coast conditions.";
      } else if (question.includes("prune") || question.includes("cut")) {
        answer =
          "Before pruning, choose the front, trunk line, and main branches. Remove crossing, downward, weak, or cluttered growth first. Do not remove too much at once.";
      } else if (question.includes("repot")) {
        answer =
          "Many temperate bonsai are repotted near bud swell in late winter or early spring. Tropical bonsai are usually safer when actively growing.";
      } else if (question.includes("water")) {
        answer =
          "Water thoroughly until water drains from the bottom. Do not water only by schedule; check soil moisture, pot size, tree species, sun, and weather.";
      }

      responseBox.textContent = answer;
    });
  }
function saveBonsaiLog() {
  const treeName = document.getElementById("treeName").value || "Unnamed Tree";
  const careAction = document.getElementById("careAction").value;
  const careNotes = document.getElementById("careNotes").value || "No notes added.";
  const date = new Date().toLocaleString();

  const log = {
    treeName,
    careAction,
    careNotes,
    date
  };

  let logs = JSON.parse(localStorage.getItem("bonsaiLogs")) || [];

  logs.unshift(log);

  localStorage.setItem("bonsaiLogs", JSON.stringify(logs));

  document.getElementById("treeName").value = "";
  document.getElementById("careNotes").value = "";

  displayBonsaiLogs();
}

function displayBonsaiLogs() {
  const savedLogs = document.getElementById("savedLogs");

  if (!savedLogs) return;

  let logs = JSON.parse(localStorage.getItem("bonsaiLogs")) || [];

  if (logs.length === 0) {
    savedLogs.innerHTML = "<p>No bonsai logs saved yet.</p>";
    return;
  }

  savedLogs.innerHTML = logs.map(log => `
    <div class="log-entry">
      <small>${log.date}</small>
      <h3>${log.treeName}</h3>
      <p><strong>Action:</strong> ${log.careAction}</p>
      <p>${log.careNotes}</p>
    </div>
  `).join("");
}

displayBonsaiLogs();
