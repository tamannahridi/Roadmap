let currentPhase = 1; // Starting phase

// Start the game when the "Start" button is clicked
function startGame() {
    // Hide the start button and display the first phase tasks
    document.getElementById('startButton').style.display = 'none';
    openPhase(currentPhase); // Open the first phase
}

// Function to open a specific phase and show its tasks
function openPhase(phase) {
    if (phase <= currentPhase) {
        // Show tasks for the selected phase
        const tasks = [
            ["Check in with manager", "Introduce yourself to team", "Ask for floor walk"],
            ["Learn about key brands", "Understand promotions", "Identify best-selling items"],
            ["Shadow a team member", "Assist customers", "Cross-sell products"],
            ["Ask for feedback", "Document key learnings", "Network with colleagues"],
            ["Fill out feedback form", "Congratulate yourself", "End of the journey"]
        ];

        const taskList = tasks[phase - 1];
        
        let taskHtml = '<ul>';
        taskList.forEach(task => {
            taskHtml += `<li><input type="checkbox"> ${task}</li>`;
        });
        taskHtml += '</ul>';

        const phaseDiv = document.createElement('div');
        phaseDiv.id = 'phase' + phase;
        phaseDiv.innerHTML = `
            <h2>Phase ${phase} Tasks</h2>
            ${taskHtml}
            <button onclick="completePhase(${phase})">Complete Phase ${phase}</button>
        `;

        document.getElementById('phaseContainer').innerHTML = '';
        document.getElementById('phaseContainer').appendChild(phaseDiv);
        document.getElementById('phaseContainer').style.display = 'block';

        // Unlock the next stop
        if (phase < 5) {
            document.querySelector(`.stop-${phase}`).classList.remove('locked');
            document.querySelector(`.stop-${phase}`).classList.add('unlocked');
        }
    }
}

// Mark phase as completed and move to the next phase
function completePhase(phase) {
    // Check if all checkboxes are ticked
    const checkboxes = document.querySelectorAll(`#phase${phase} input[type="checkbox"]`);
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);

    if (allChecked) {
        // Move to the next phase
        if (currentPhase < 5) {
            currentPhase++;
            openPhase(currentPhase); // Open the next phase
        } else {
            // Final congratulatory message
            document.getElementById('phaseContainer').innerHTML = "<h1>Congratulations! You completed the journey.</h1>";
        }
    } else {
        alert("Please complete all tasks before proceeding.");
    }
}
