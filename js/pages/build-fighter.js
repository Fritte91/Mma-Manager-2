const skills = [
    "Punches", "Elbows", "Knees", "High Kicks", "Low Kicks", "Clinchwork",
    "Takedowns", "Ground Grappling", "Submission", "Strike Def",
    "Knees Def", "Kick Def", "Takedown Def", "Submission Def"
];

const maxTotalPoints = 19000;
const maxSkillPoints = 3400;

let skillPoints = {};

function createSkillBars() {
    const container = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillContainer = document.createElement('div');
        skillContainer.className = 'skill-container';

        const skillName = document.createElement('div');
        skillName.className = 'skill-name';
        skillName.textContent = skill;

        const skillBar = document.createElement('input');
        skillBar.type = 'range';
        skillBar.min = 0;
        skillBar.max = maxSkillPoints;
        skillBar.value = 0; // Initialize to 0
        skillBar.className = 'skill-bar';
        skillBar.id = `${skill.toLowerCase().replace(' ', '-')}-bar`;

        const skillValue = document.createElement('div');
        skillValue.className = 'skill-value';
        skillValue.id = `${skill.toLowerCase().replace(' ', '-')}-value`;
        skillValue.textContent = '0'; // Initialize to 0

        const leftButton = document.createElement('button');
        leftButton.textContent = '◀';
        leftButton.className = 'arrow-button';
        leftButton.onclick = () => updateSkillPoints(skill, -1);

        const rightButton = document.createElement('button');
        rightButton.textContent = '▶';
        rightButton.className = 'arrow-button';
        rightButton.onclick = () => updateSkillPoints(skill, 1);

        // Hold to increment functionality
        let intervalId;
        let incrementSpeed = 30; // Start with a faster initial speed
        let acceleration = 6; // Increase speed every interval
        let maxSpeed = 2; // Minimum speed cap for rapid increments

        const startIncrement = (change) => {
            intervalId = setInterval(() => {
                updateSkillPoints(skill, change);
                // Decrease the interval time for faster increments
                incrementSpeed = Math.max(incrementSpeed - acceleration, maxSpeed);
                clearInterval(intervalId);
                intervalId = setInterval(() => updateSkillPoints(skill, change), incrementSpeed);
            }, incrementSpeed);
        };

        rightButton.addEventListener('mousedown', () => startIncrement(1));
        rightButton.addEventListener('mouseup', () => {
            clearInterval(intervalId);
            incrementSpeed = 50; // Reset speed
        });
        rightButton.addEventListener('mouseleave', () => clearInterval(intervalId));

        leftButton.addEventListener('mousedown', () => startIncrement(-1));
        leftButton.addEventListener('mouseup', () => {
            clearInterval(intervalId);
            incrementSpeed = 50; // Reset speed
        });
        leftButton.addEventListener('mouseleave', () => clearInterval(intervalId));

        skillContainer.appendChild(skillName);
        skillContainer.appendChild(leftButton);
        skillContainer.appendChild(skillBar);
        skillContainer.appendChild(rightButton);
        skillContainer.appendChild(skillValue);
        container.appendChild(skillContainer);

        skillPoints[skill] = 0; // Initialize skill points to 0

        // Update skill points on input change
        skillBar.addEventListener('input', () => {
            const newValue = parseInt(skillBar.value);
            const totalPointsBefore = Object.values(skillPoints).reduce((a, b) => a + b, 0);
            const pointDifference = newValue - skillPoints[skill];

            // Check if the new total exceeds the maximum allowed points
            if (totalPointsBefore + pointDifference <= maxTotalPoints) {
                skillPoints[skill] = newValue; // Directly set the skill points
                skillValue.textContent = newValue; // Update displayed value
                skillBar.value = newValue; // Update the input value attribute
                skillBar.style.setProperty('--value', (newValue / maxSkillPoints) * 100 + '%'); // Set the CSS variable
                console.log(`Skill: ${skill}, New Value: ${newValue}`); // Log new value
                updateTotalPoints(); // Update total points
                updateFighterModel(); // Update fighter model
            } else {
                console.log(`Cannot exceed max total points! Current total: ${totalPointsBefore}, Attempted total: ${totalPointsBefore + pointDifference}`);
                alert(`You cannot exceed the maximum total of ${maxTotalPoints} skill points.`);
                skillBar.value = skillPoints[skill]; // Reset to previous value
            }
        });
    });
}

function validateTotalPoints() {
    const totalPoints = Object.values(skillPoints).reduce((a, b) => a + b, 0);
    if (totalPoints > maxTotalPoints) {
        console.log(`Total points exceeded! Current total: ${totalPoints}, Max allowed: ${maxTotalPoints}`);
        // Reset all skill points to their previous values
        for (const skill in skillPoints) {
            skillPoints[skill] = 0; // Reset to 0 or any other logic you want
        }
        updateTotalPoints(); // Update the displayed total points
        updateFighterModel(); // Update the fighter model
    }
}

function updateSkillPoints(skill, change = 0) {
    const bar = document.getElementById(`${skill.toLowerCase().replace(' ', '-')}-bar`);
    const value = document.getElementById(`${skill.toLowerCase().replace(' ', '-')}-value`);
    
    // Calculate the new value
    let newValue = skillPoints[skill] + change;

    // Ensure newValue is within bounds
    if (newValue < 0) newValue = 0;
    if (newValue > maxSkillPoints) newValue = maxSkillPoints;

    // Calculate total points before the update
    const totalPointsBefore = Object.values(skillPoints).reduce((a, b) => a + b, 0);
    const pointDifference = newValue - skillPoints[skill];

    // Check if the new total exceeds the maximum allowed points
    if (totalPointsBefore + pointDifference <= maxTotalPoints) {
        skillPoints[skill] = newValue; // Update skill points
        value.textContent = newValue; // Update displayed value
        bar.value = newValue; // Update the bar value
        bar.setAttribute('value', newValue); // Update the input value attribute
    } else {
        console.log(`Cannot exceed max total points! Current total: ${totalPointsBefore}, Attempted total: ${totalPointsBefore + pointDifference}`);
        alert(`You cannot exceed the maximum total of ${maxTotalPoints} skill points.`);
    }

    // Update total points display
    updateTotalPoints();
}

function updateTotalPoints() {
    const totalPoints = Object.values(skillPoints).reduce((a, b) => a + b, 0);
    document.getElementById('total-points').textContent = totalPoints;
    console.log(`Displayed Total Points: ${totalPoints}`);
}

function updateFighterModel() {
    const totalPoints = Object.values(skillPoints).reduce((a, b) => a + b, 0);
    const maxLevel = Math.floor(totalPoints / 1583.33); // 19000 / 12 ≈ 1583.33
    document.getElementById('max-level').textContent = maxLevel;

    const fighterModel = document.getElementById('fighter-model');
    const opacity = 0.3 + (totalPoints / maxTotalPoints) * 0.7;
    fighterModel.style.opacity = opacity;
}

function getPointsForLevel(level) {
    if (level >= 12) return 3400;
    if (level >= 9) return 1900;
    // Add more levels as needed
    return 0; // Default for levels below 9
}

createSkillBars();
