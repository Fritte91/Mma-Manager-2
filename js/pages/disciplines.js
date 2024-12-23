document.addEventListener('DOMContentLoaded', () => {
    const commonList = document.getElementById('common-disciplines-list');
    const epicList = document.getElementById('epic-disciplines-list');
    const legendaryList = document.getElementById('legendary-disciplines-list');

    // Function to create discipline items
    const createDisciplineItem = (discipline) => {
        const item = document.createElement('div');
        item.className = 'discipline-item';
        item.innerHTML = `
            <img src="${discipline.image}" alt="${discipline.name}" class="discipline-image">
            <h4>${discipline.name}</h4>
            <p class="discipline-description">${discipline.description}</p>
        `;
        return item;
    };

    // Populate Common Disciplines
    disciplinesData.common.forEach(discipline => {
        commonList.appendChild(createDisciplineItem(discipline));
    });

    // Populate Epic Disciplines
    disciplinesData.epic.forEach(discipline => {
        epicList.appendChild(createDisciplineItem(discipline));
    });

    // Populate Legendary Disciplines
    disciplinesData.legendary.forEach(discipline => {
        legendaryList.appendChild(createDisciplineItem(discipline));
    });
});
