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

  const saveLogBtn = document.getElementById("saveLogBtn");
  const clearLogsBtn = document.getElementById("clearLogsBtn");
  const careLogs = document.getElementById("careLogs");

  function getLogs() {
    return JSON.parse(localStorage.getItem("bonsaiLogs") || "[]");
  }

  function saveLogs(logs) {
    localStorage.setItem("bonsaiLogs", JSON.stringify(logs));
  }

  function renderLogs() {
    if (!careLogs) return;

    const logs = getLogs();

    if (logs.length === 0) {
      careLogs.innerHTML = "<p>No bonsai logs saved yet.</p>";
      return;
    }

    careLogs.innerHTML = logs
      .map(
        function (log) {
          return `
            <div class="log-entry">
              <small>${log.date}</small>
              <h3>${log.tree} — ${log.action}</h3>
              <p><strong>Species:</strong> ${log.species}</p>
              <p>${log.notes}</p>
            </div>
          `;
        }
      )
      .join("");
  }

  if (saveLogBtn) {
    saveLogBtn.addEventListener("click", function () {
      const treeName = document.getElementById("treeName");
      const speciesSelect = document.getElementById("speciesSelect");
      const careAction = document.getElementById("careAction");
      const careNotes = document.getElementById("careNotes");

      const log = {
        tree: treeName ? treeName.value || "Unnamed Tree" : "Unnamed Tree",
        species: speciesSelect ? speciesSelect.value : "Unknown",
        action: careAction ? careAction.value : "Care Update",
        notes: careNotes ? careNotes.value || "No notes added." : "No notes added.",
        date: new Date().toLocaleString()
      };

      const logs = getLogs();
      logs.unshift(log);
      saveLogs(logs);

      if (treeName) treeName.value = "";
      if (careNotes) careNotes.value = "";

      renderLogs();
    });
  }

  if (clearLogsBtn) {
    clearLogsBtn.addEventListener("click", function () {
      const confirmClear = confirm("Clear all saved bonsai logs on this device?");

      if (confirmClear) {
        localStorage.removeItem("bonsaiLogs");
        renderLogs();
      }
    });
  }

  renderLogs();

  console.log("Bonsai Sensei script loaded.");
});
            response.innerHTML =
            "Bald Cypress bonsai love water and thrive in humid environments.";
        }

        else{
            response.innerHTML =
            "AI Sensei is still training. Try asking about watering, yellow leaves, Juniper, or Bald Cypress.";
        }

    });

});
