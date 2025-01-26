// Global variables
let currentPhase = 1;

// Tasks for each phase
const tasks = {
  1: ["Task 1 for Phase 1", "Task 2 for Phase 1", "Task 3 for Phase 1"],
  2: ["Task 1 for Phase 2", "Task 2 for Phase 2", "Task 3 for Phase 2"],
  3: ["Task 1 for Phase 3", "Task 2 for Phase 3", "Task 3 for Phase 3"],
  4: ["Task 1 for Phase 4", "Task 2 for Phase 4", "Task 3 for Phase 4"],
  5: ["Task 1 for Phase 5", "Task 2 for Phase 5", "Task 3 for Phase 5"],
};

// Start the journey
function startJourney() {
  document.getElementById("coverPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
}

// Open phase tasks
function openPhase(phase) {
  if (phase > currentPhase) return; // Prevent locked phases
  document.getElementById("phaseTitle").textContent = `Phase ${phase}`;
  const phaseTasks = document.getElementById("phaseTasks");
  phaseTasks.innerHTML = ""; // Clear previous tasks
  tasks[phase].forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" id="task-${index}" onclick="checkTasks(${phase})"> ${task}`;
    phaseTasks.appendChild(li);
  });
  document.getElementById("phaseModal").classList.remove("hidden");
}

// Check if all tasks are completed
function checkTasks(phase) {
  const checkboxes = document.querySelectorAll("#phaseTasks input[type=checkbox]");
  const allChecked = Array.from(checkboxes).every((checkbox) => checkbox.checked);
  document.getElementById("nextButton").disabled = !allChecked;
}

// Complete the phase
function completePhase() {
  document.getElementById("phaseModal").classList.add("hidden");
  const phaseButton = document.getElementById(`phase${currentPhase}`);
  phaseButton.classList.remove("unlocked");
  phaseButton.classList.add("locked");

  currentPhase++;
  if (currentPhase <= 5) {
    const nextPhaseButton = document.getElementById(`phase${currentPhase}`);
    nextPhaseButton.classList.remove("locked");
    nextPhaseButton.classList.add("unlocked");
  } else {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("congratsPage").classList.remove("hidden");
  }
}

// Return to home
function returnToHome() {
  document.getElementById("phaseModal").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
}

// Go home after finishing
function goHome() {
  document.getElementById("congratsPage").classList.add("hidden");
  document.getElementById("homePage").classList.remove("hidden");
}
