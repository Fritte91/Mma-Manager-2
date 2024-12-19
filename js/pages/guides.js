function toggleGuide(guide) {
    const content = guide.querySelector('.guide-content');
    if (content.style.display === "block") {
        content.style.display = "none"; // Hide content
    } else {
        content.style.display = "block"; // Show content
    }
}
