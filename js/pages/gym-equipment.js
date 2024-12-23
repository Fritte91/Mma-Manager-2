// Function to add scroll animations
window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.equipment-item');
    const triggerBottom = window.innerHeight / 5 * 4;

    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add('show'); // Add class to trigger animation
        } else {
            item.classList.remove('show');
        }
    });
});

// Populate Gym Trainers
coachesData.gymTrainers.forEach(trainer => {
    const trainerRow = document.createElement('div');
    trainerRow.className = 'trainer-item';
    trainerRow.innerHTML = `
        <div class="trainer-stat" style="width: 80px;">
            <img src="../images/stars1.png" alt="Stars" style="width: 15px; height: 15px; vertical-align: middle;">
        </div>
        <div class="trainer-name" style="width: 100px;">${trainer.name}</div>
        <div class="trainer-stat" style="width: 80px;">${trainer.agility}</div>
        <div class="trainer-stat" style="width: 80px;">${trainer.condition}</div>
        <div class="trainer-stat" style="width: 80px;">${trainer.strength}</div>
    `;
    trainersBody.appendChild(trainerRow);
});

