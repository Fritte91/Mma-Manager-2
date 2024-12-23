function toggleGuide(guide) {
    const content = guide.querySelector('.guide-content');
    if (content.style.display === "block") {
        content.style.display = "none"; // Hide content
    } else {
        content.style.display = "block"; // Show content
        content.style.transition = "max-height 0.5s ease-in-out"; // Add transition
        content.style.maxHeight = content.scrollHeight + "px"; // Set max height for transition
    }
}
