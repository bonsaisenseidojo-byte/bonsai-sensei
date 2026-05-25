
document.addEventListener("DOMContentLoaded", () => {
  const dojoBtn = document.querySelector("#dojoBtn") || document.querySelector(".btn-primary");
  const trainBtn = document.querySelector("#trainBtn") || document.querySelector(".btn-secondary");

  if (dojoBtn) dojoBtn.addEventListener("click", () => {
    const target = document.querySelector("#species");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });

  if (trainBtn) trainBtn.addEventListener("click", () => {
    const target = document.querySelector("#tracker");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });

  const logsBox = document.querySelector("#careLogs");
  const saveBtn = document.querySelector("#saveLogBtn");
  const clearBtn = document.querySelector("#clearLogsBtn");

  function getLogs() {
    return JSON.parse(localStorage.getItem("bonsaiLogs") || "[]");
  }

  function saveLogs(logs) {
    localStorage.setItem("bonsaiLogs", JSON.stringify(logs));
  }

  function renderLogs() {
    if (!logsBox) return;
    const logs = getLogs();

    if (!logs.length) {
      logsBox.innerHTML = "<p>No bonsai logs saved yet.</p>";
      return;
    }

    logsBox.innerHTML = logs.map(log => `
      <div class="log-entry">
        <small>${log.date}</small>
        <h3>${log.tree || "Unnamed Tree"} — ${log.action}</h3>
        <p><strong>Species:</strong> ${log.species}</p>
        <p>${log.notes || "No notes added."}</p>
      </div>
    `).join("");
  }

  if (saveBtn) saveBtn.addEventListener("click", () => {
    const log = {
      tree: document.querySelector("#treeName")?.value || "Unnamed Tree",
      species: document.querySelector("#speciesSelect")?.value || "Unknown",
      action: document.querySelector("#careAction")?.value || "Care Update",
      notes: document.querySelector("#careNotes")?.value || "",
      date: new Date().toLocaleString()
    };

    const logs = getLogs();
    logs.unshift(log);
    saveLogs(logs);

    if (document.querySelector("#treeName")) document.querySelector("#treeName").value = "";
    if (document.querySelector("#careNotes")) document.querySelector("#careNotes").value = "";

    renderLogs();
  });

  if (clearBtn) clearBtn.addEventListener("click", () => {
    if (confirm("Clear all saved bonsai logs on this device?")) {
      localStorage.removeItem("bonsaiLogs");
      renderLogs();
    }
  });

  renderLogs();

  const askBtn = document.querySelector("#askBtn");
  if (askBtn) askBtn.addEventListener("click", () => {
    const question = (document.querySelector("#question")?.value || "").toLowerCase();
    const response = document.querySelector("#response");
    if (!response) return;

    let answer = "Start by checking sunlight, watering, drainage, soil moisture, pests, and recent weather changes.";

    if (question.includes("yellow")) {
      answer = "Yellow leaves can come from overwatering, poor drainage, low light, nutrient issues, or normal seasonal change. First check if the soil is staying wet too long.";
    } else if (question.includes("brown") || question.includes("dry")) {
      answer = "Brown or dry foliage can come from underwatering, heat stress, root damage, or too much afternoon sun. Check soil moisture and recent heat exposure.";
    } else if (question.includes("juniper")) {
      answer = "Junipers need outdoor full sun and good airflow. They should not be kept indoors long term.";
    } else if (question.includes("bald cypress")) {
      answer = "Bald Cypress loves full sun and consistent moisture. It is excellent for Louisiana and humid Gulf Coast conditions.";
    } else if (question.includes("prune") || question.includes("cut")) {
      answer = "Before pruning, choose the front, trunk line, and main branches. Remove crossing, downward, weak, or cluttered growth first. Do not remove too much at once.";
    } else if (question.includes("repot")) {
      answer = "Repotting depends on species. Many temperate bonsai are repotted near bud swell in late winter or early spring. Tropical bonsai are usually safer when actively growing.";
    } else if (question.includes("water")) {
      answer = "Water thoroughly until water drains from the bottom. Do not water only by schedule; check soil moisture, pot size, tree species, sun, and weather.";
    }

    response.textContent = answer;
  });

  console.log("Bonsai Sensei interactive upgrade loaded.");
});

        else if(question.includes("dropping")){
            response.innerHTML =
            "Leaf drop may be caused by stress, improper watering, or sudden environmental change.";
        }

        else if(question.includes("juniper")){
            response.innerHTML =
            "Junipers need outdoor sunlight and should not stay indoors long term.";
        }

        else if(question.includes("bald cypress")){
            response.innerHTML =
            "Bald Cypress bonsai love water and thrive in humid environments.";
        }

        else{
            response.innerHTML =
            "AI Sensei is still training. Try asking about watering, yellow leaves, Juniper, or Bald Cypress.";
        }

    });

});
