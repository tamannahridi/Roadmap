// Unlock Phase 1 when Start button is clicked
document.querySelector("#startBtn").addEventListener("click", function() {
  // Hide cover page
  document.getElementById("coverPage").style.display = "none";

  // Show home page
  document.getElementById("homePage").style.display = "block";

  // Unlock Phase 1 button
  document.getElementById("phase1").classList.remove("locked");
  document.getElementById("phase1").classList.add("unlocked");
  document.getElementById("phase1").disabled = false; // Enable button

  // Change color to Harrods Gold
  document.getElementById("phase1").style.backgroundColor = "#9b8b56";  // Harrods Gold
});

// Show Phase tasks window when clicking on a Phase button
function showPhase(phase) {
  // Hide Home Page
  document.getElementById("homePage").style.display = "none";

  // Show Phase window
  document.getElementById("phaseWindow").style.display = "block";

  // Set the phase tasks dynamically based on the phase number
  let tasksContent = '';
  if (phase === 1) {
    tasksContent = `
      <h3>Phase 1 Tasks</h3>
      <form id="tasksForm">
        <input type="checkbox" id="task1"> Task 1<br>
        <input type="checkbox" id="task2"> Task 2<br>
        <input type="checkbox" id="task3"> Task 3<br>
        <input type="checkbox" id="task4"> Task 4<br>
      </form>
    `;
  } else if (phase === 2) {
    tasksContent = `
      <h3>Phase 2 Tasks</h3>
      <form id="tasksForm">
        <input type="checkbox" id="task1"> Task 1<br>
        <input type="checkbox" id="task2"> Task 2<br>
        <input type="checkbox" id="task3"> Task 3<br>
        <input type="checkbox" id="task4"> Task 4<br>
      </form>
    `;
  } else if (phase === 3) {
    tasksContent = `
      <h3>Phase 3 Tasks</h3>
      <form id="tasksForm">
        <input type="checkbox" id="task1"> Task 1<br>
        <input type="checkbox" id="task2"> Task 2<br>
        <input type="checkbox" id="task3"> Task 3<br>
        <input type="checkbox" id="task4"> Task 4<br>
      </form>
    `;
  } else if (phase === 4) {
    tasksContent = `
      <h3>Phase 4 Tasks</h3>
      <form id="tasksForm">
        <input type="checkbox" id="task1"> Task 1<br>
        <input type="checkbox" id="task2"> Task 2<br>
        <input type="checkbox" id="task3"> Task 3<br>
        <input type="checkbox" id="task4"> Task 4<br>
      </form>
    `;
  } else if (phase === 5) {
    tasksContent = `
      <h3>Phase 5 Tasks</h3>
      <form id="tasksForm">
        <input type="checkbox" id="task1"> Task 1<br>
        <input type="checkbox" id="task2"> Task 2<br>
        <input type="checkbox" id="task3"> Task 3<br>
        <input type="checkbox" id="task4"> Task 4<br>
      </form>
    `;
  }

  // Insert the dynamic tasks content into the phase window
  document.getElementById("phaseTasks").innerHTML = tasksContent;

  // Enable or disable the Next button based on checkbox completion
  document.getElementById("nextBtn").disabled = true;

  // Attach event listener to checkbox changes
  let checkboxes = document.querySelectorAll("#tasksForm input");
  checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener("change", function() {
      let allChecked = Array.from(checkboxes).every(function(box) {
        return box.checked;
      });
      document.getElementById("nextBtn").disabled = !allChecked;
    });
  });
}

// Go to Home Page
function goToHomePage() {
  document.getElementById("homePage").style.display = "block";
  document.getElementById("phaseWindow").style.display = "none";
}

// Proceed to the next Phase and unlock the next button
function nextPhase() {
  let phaseId = parseInt(document.getElementById("phaseTasks").querySelector("h3").innerText.split(' ')[1]);

  // Unlock the next phase button
  if (phaseId < 5) {
    let nextPhase = phaseId + 1;
    let nextButton = document.getElementById(`phase${nextPhase}`);
    nextButton.classList.remove("locked");
    nextButton.classList.add("unlocked");
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#9b8b56"; // Harrods Gold
  }

  // If Phase 5 is completed, show the Congratulations page
  if (phaseId === 5) {
    document.getElementById("congratulationsPage").style.display = "block";
    document.getElementById("phaseWindow").style.display = "none";
  } else {
    document.getElementById("homePage").style.display = "block";
    document.getElementById("phaseWindow").style.display = "none";
  }
}
