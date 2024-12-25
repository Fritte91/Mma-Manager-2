document.addEventListener('DOMContentLoaded', () => {
    const commonList = document.getElementById('common-disciplines-list');
    const epicList = document.getElementById('epic-disciplines-list');
    const legendaryList = document.getElementById('legendary-disciplines-list');

    // Function to create discipline items
    const createDisciplineItem = (discipline, category) => {
        const item = document.createElement('div');
        item.className = 'discipline-item';
        const bonusColor = category === 'common' ? 'grey' : category === 'epic' ? 'purple' : 'orange';
        const headerColor = bonusColor; // Use the same color for the header

        // Split the bonus text into label and description
        const [bonusLabel, bonusDescription] = discipline.bonus.split(':');

        item.innerHTML = `
            <div class="discipline-header" style="color: ${headerColor};">${discipline.name}</div>
            <img src="${discipline.image}" alt="${discipline.name}" class="discipline-image">
            <div class="discipline-rating">
                ${'★'.repeat(discipline.stars)}${'☆'.repeat(5 - discipline.stars)} <!-- Star icons -->
            </div>
            <p class="discipline-description">
                <strong style="color: ${bonusColor};">${bonusLabel}:</strong> ${bonusDescription}
            </p>
            <div class="discipline-detailed-description" style="display: none;">
                <p>${discipline.detailedDescription}</p>
            </div>
        `;

        // Add click event to toggle detailed description
        item.addEventListener('click', () => {
            const detailedDescription = item.querySelector('.discipline-detailed-description');
            detailedDescription.style.display = detailedDescription.style.display === 'none' ? 'block' : 'none';
        });

        return item;
    };

    // Populate Common Disciplines
    disciplinesData.common.forEach(discipline => {
        commonList.appendChild(createDisciplineItem(discipline, 'common'));
    });

    // Populate Epic Disciplines
    disciplinesData.epic.forEach(discipline => {
        epicList.appendChild(createDisciplineItem(discipline, 'epic'));
    });

    // Populate Legendary Disciplines
    disciplinesData.legendary.forEach(discipline => {
        legendaryList.appendChild(createDisciplineItem(discipline, 'legendary'));
    });
});
