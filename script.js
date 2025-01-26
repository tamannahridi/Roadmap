let currentPhase = 1;

// Start the game and show the roadmap
function startGame() {
    document.getElementById('coverPage').style.display = 'none';
    document.getElementById('roadmap').style.display = 'flex';
}

// Open the phase modal with tasks
function openPhase(phase) {
    if (phase <= currentPhase) {
        const tasks = [
            ["Check in with manager", "Introduce yourself to team", "Ask for floor walk"],
            ["Learn about key brands", "Understand promotions", "Identify best-selling items"],
            ["Shadow a team member", "Assist customers", "Cross-sell products"],
            ["Ask for feedback", "Document key learnings", "Network with colleagues"],
            ["Fill out feedback form", "Congratulate yourself", "End of the journey"]
        ];

        const taskList = tasks[phase - 1];
        let taskHtml = "";
        taskList.forEach((task, index) => {
            taskHtml += `<li>
                <input type="checkbox" id="task-${phase}-${index}" onclick="checkTasks(${phase})"> ${task}
            </li>`;
        });

        document.getElementById('phaseTitle').innerText = `Phase ${phase} Tasks`;
        document.getElementById('taskList').innerHTML = `<ul>${taskHtml}</ul>`;
        document.getElementById('nextButton').disabled = true;
        document.getElementById('errorMessage').style.display = 'none';
        document.getElementById('phaseModal').style.display = 'flex';
    }
}

// Check if all tasks in the current phase are completed
function checkTasks(phase) {
    const checkboxes = document.querySelectorAll(`#taskList input[type="checkbox"]`);
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);

    // Enable the "Next" button only if all tasks are checked
    document.getElementById('nextButton').disabled = !allChecked;
}

// Close the modal and unlock the next phase
function closeModal() {
    const checkboxes = document.querySelectorAll(`#taskList input[type="checkbox"]`);
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);

    if (!allChecked) {
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    document.getElementById('phaseModal').style.display = 'none';

    // Unlock the next stop
    if (currentPhase < 5) {
        document.querySelector(`.stop-${currentPhase + 1}`).classList.remove('locked');
        document.querySelector(`.stop-${currentPhase + 1}`).classList.add('unlocked');
        currentPhase++;
    } else {
        // Show congratulations message and feedback form
        document.getElementById('roadmap').style.display = 'none';
        document.getElementById('congratulationsModal').style.display = 'flex';
    }
}

// Go back to the roadmap
function goHome() {
    document.getElementById('congratulationsModal').style.display = 'none';
    document.getElementById('coverPage').style.display = 'flex';
    currentPhase = 1;

    // Reset roadmap and modal
    const stops = document.querySelectorAll('.stop');
    stops.forEach((stop, index) => {
        stop.classList.add(index === 0 ? 'unlocked' : 'locked');
        stop.classList.remove('unlocked');
    });
}
