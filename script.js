// Handle Cover Page and Start Button
document.getElementById("startBtn").onclick = function() {
  document.getElementById("coverPage").style.display = "none";
  document.getElementById("homePage").style.display = "block";
  unlockPhase(1); // Unlock Phase 1 when starting
};

// Unlock a Phase
function unlockPhase(phase) {
  document.getElementById("phase" + phase).disabled = false;
  document.getElementById("phase" + phase).classList.remove("locked");
  document.getElementById("phase" + phase).classList.add("unlocked");
  document.getElementById("phase" + phase).style.backgroundColor = "#D4AF37"; // Harrods gold
}

// Show the Phase Tasks
function showPhase(phase) {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("phaseWindow").style.display = "block";
  const phaseTasks = getPhaseTasks(phase);
  document.getElementById("phaseTasks").innerHTML = phaseTasks;
  document.getElementById("nextBtn").disabled = true; // Disable Next button initially
  document.getElementById("currentPhase").textContent = "Phase " + phase + " Tasks"; // Update phase title
}

// Get Tasks for a Phase
function getPhaseTasks(phase) {
  const tasks = [
    ["Task 1", "Task 2", "Task 3"], // Phase 1 tasks
    ["Task 4", "Task 5", "Task 6"], // Phase 2 tasks
    ["Task 7", "Task 8", "Task 9"], // Phase 3 tasks
    ["Task 10", "Task 11", "Task 12"], // Phase 4 tasks
    ["Task 13", "Task 14", "Task 15"] // Phase 5 tasks
  ];

  const taskHtml = tasks[phase - 1].map((task, index) => {
    return `<label><input type="checkbox" id="task${phase}-${index + 1}" onchange="checkCompletion(${phase})"> ${task}</label><br>`;
  }).join("");

  return taskHtml;
}

// Check if all checkboxes are checked
function checkCompletion(phase) {
  const tasks = document.querySelectorAll(`#phaseTasks input[type="checkbox"]`);
  const allChecked = Array.from(tasks).every(task => task.checked);
  document.getElementById("nextBtn").disabled = !allChecked;
}

// Go to Home Page
function goToHomePage() {
  document.getElementById("phaseWindow").style.display = "none";
  document.getElementById("homePage").style.display = "block";
}

// Move to the Next Phase
function nextPhase() {
  const currentPhase = parseInt(document.querySelector(".phaseButton.unlocked").id.replace("phase", ""));
  unlockPhase(currentPhase + 1); // Unlock next phase
  document.getElementById("phaseWindow").style.display = "none";
  document.getElementById("homePage").style.display = "block";
}
