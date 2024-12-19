// Function to display talents
function displayTalents() {
    const commonList = document.getElementById('common-talents-list');
    const rareList = document.getElementById('rare-talents-list');
    const epicList = document.getElementById('epic-talents-list');

    // Common Talents
    talentsData.commonTalents.forEach(talent => {
        commonList.innerHTML += `
            <div class="talent-item">
                <img src="${talent.image}" alt="${talent.name}">
                <div class="talent-description">
                    <strong>${talent.name}:</strong> ${talent.description}
                </div>
            </div>
        `;
    });

    // Rare Talents
    talentsData.rareTalents.forEach(talent => {
        rareList.innerHTML += `
            <div class="talent-item">
                <img src="${talent.image}" alt="${talent.name}">
                <div class="talent-description">
                    <strong>${talent.name}:</strong> ${talent.description}
                </div>
            </div>
        `;
    });

    // Epic Talents
    talentsData.epicTalents.forEach(talent => {
        epicList.innerHTML += `
            <div class="talent-item">
                <img src="${talent.image}" alt="${talent.name}">
                <div class="talent-description">
                    <strong>${talent.name}:</strong> ${talent.description}
                </div>
            </div>
        `;
    });
}

// Call the function to display talents
displayTalents();
