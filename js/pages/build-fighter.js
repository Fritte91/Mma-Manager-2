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
        skillBar.value = 0;
        skillBar.className = 'skill-bar';
        skillBar.id = `${skill.toLowerCase().replace(' ', '-')}-bar`;

        const skillValue = document.createElement('div');
        skillValue.className = 'skill-value';
        skillValue.id = `${skill.toLowerCase().replace(' ', '-')}-value`;
        skillValue.textContent = '0';

        skillContainer.appendChild(skillName);
        skillContainer.appendChild(skillBar);
        skillContainer.appendChild(skillValue);
        container.appendChild(skillContainer);

        skillPoints[skill] = 0;

        skillBar.addEventListener('input', () => updateSkillPoints(skill));
    });
}

function updateSkillPoints(skill) {
    const bar = document.getElementById(`${skill.toLowerCase().replace(' ', '-')}-bar`);
    const value = document.getElementById(`${skill.toLowerCase().replace(' ', '-')}-value`);
    const newValue = parseInt(bar.value);

    const totalPoints = Object.values(skillPoints).reduce((a, b) => a + b, 0);
    const pointDifference = newValue - skillPoints[skill];

    if (totalPoints + pointDifference <= maxTotalPoints) {
        skillPoints[skill] = newValue;
        value.textContent = newValue;
    } else {
        const remainingPoints = maxTotalPoints - (totalPoints - skillPoints[skill]);
        skillPoints[skill] = remainingPoints;
        bar.value = remainingPoints;
        value.textContent = remainingPoints;
    }

    updateTotalPoints();
    updateFighterModel();
}

function updateTotalPoints() {
    const totalPoints = Object.values(skillPoints).reduce((a, b) => a + b, 0);
    document.getElementById('total-points').textContent = totalPoints;
}

function updateFighterModel() {
    const totalPoints = Object.values(skillPoints).reduce((a, b) => a + b, 0);
    const maxLevel = Math.floor(totalPoints / 1583.33); // 19000 / 12 ≈ 1583.33
    document.getElementById('max-level').textContent = maxLevel;

    const fighterModel = document.getElementById('fighter-model');
    const opacity = 0.3 + (totalPoints / maxTotalPoints) * 0.7;
    fighterModel.style.opacity = opacity;
}

createSkillBars();
