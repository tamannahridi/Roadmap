// Global variables
let currentPhase = 1;

// Tasks for each phase
const tasks = {
  1: ["Check in with the retail manager", "Introduce yourself to team members", "Ask for a brief floor walk"],
  2: ["Familiarize yourself with the brands", "Learn key product features", "Understand promotions and incentives"],
  3: ["Engage with customers", "Assist with cross-department pairings", "Provide fresh style suggestions"],
  4: ["Network with team members", "Seek advice on techniques", "Document key learnings"],
  5: ["Tick all checkboxes", "Submit feedback form", "Wrap up the day!"],
};

// Start the journey
function startJourney() {
  document.getElementById("coverPage").style.display = "none";
  document.getElementById("roadmap").style.display = "flex";
}

// Open phase modal
function openPhase(phase) {
  if (phase > currentPhase) return; // Locked phase
  document.getElementById("phaseTitle").textContent = `Phase ${phase}`;
  const phaseTasks = document.getElementById("phaseTasks");
  phaseTasks.innerHTML = ""; // Clear previous tasks
  tasks[phase].forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="task-${index}" onclick="checkTasks(${phase})"> ${task}`;
    phaseTasks.appendChild(li);
  });
  document.getElementById("phaseModal").style.display = "flex";
}

// Check if all tasks are completed
function checkTasks(phase) {
  const checkboxes = document.querySelectorAll("#phaseTasks input[type=checkbox]");
  const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
  document.getElementById("nextButton").style.display = allChecked ? "block" : "none";
}

// Complete the current phase
function completePhase() {
  document.getElementById("phaseModal").style.display = "none";
  const stop = document.getElementById(`phase${currentPhase}`);
  stop.classList.remove("unlocked");
  stop.classList.add("locked");

  currentPhase++;
  const nextStop = document.getElementById(`phase${currentPhase}`);
  if (nextStop) nextStop.classList.remove("locked");
  document.getElementById("roadmap").style.display = "flex";
}

// Return to roadmap
function returnToRoadmap() {
  document.getElementById("phaseModal").style.display = "none";
  document.getElementById("roadmap").style.display = "flex";
}

// Go back to the cover page
function goHome() {
  document.getElementById("congratulationsModal").style.display = "none";
  document.getElementById("roadmap").style.display = "none";
  document.getElementById("coverPage").style.display = "flex";
  currentPhase = 1;

  // Reset stops
  document.querySelectorAll(".stop").forEach((stop, index) => {
    stop.classList.remove("locked");
    stop.classList.add(index === 0 ? "unlocked" : "locked");
  });
}
