// schedule.js

// Define the event data structure
const events = [
    {
        name: "Tournament",
        date: "2024-12-23", // Example date
        image: "./images/tournamentevent.png"
    },
    {
        name: "Stamina Drink Event",
        date: "2024-12-23",
        image: "./images/staminaevent.png"
    },
    {
        name: "Decoration Boost Event",
        date: "2024-12-23",
        image: "./images/decorationevent.png"
    },
    {
        name: "Decoration Boost Event",
        date: "2024-12-25",
        image: "./images/decorationevent.png"
    },
    {
        name: "Stamina Drink Event",
        date: "2024-12-26",
        image: "./images/staminaevent.png"
    },
    {
        name: "Stamina Drink Event",
        date: "2024-12-24",
        image: "./images/staminaevent.png"
    },
    {
        name: "Stamina Drink Event",
        date: "2024-12-24",
        image: "./images/staminaevent.png"
    },
];

// Set your start date here
const startDate = new Date("2024-12-23");
let currentWeek = 0; // Initialize current week

// Function to display events for the current week
function displayEvents() {
    const currentDate = new Date();
    const weekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds

    // Calculate the current week index
    const currentWeekIndex = Math.floor((currentDate - startDate) / weekInMilliseconds);
    console.log("Current Week Index:", currentWeekIndex); // Debugging output

    const weekEventsContainer = document.getElementById('week-events');
    weekEventsContainer.innerHTML = ''; // Clear previous events

    // Create a map to group events by date
    const eventsByDate = {};

    // Group events by date
    events.forEach(event => {
        const eventDate = new Date(event.date).getTime();
        if (!eventsByDate[eventDate]) {
            eventsByDate[eventDate] = [];
        }
        eventsByDate[eventDate].push(event);
    });

    console.log("Events by Date:", eventsByDate); // Debugging output

    // Loop through the events for the current week
    for (let i = 0; i < 7; i++) {
        const dateToCheck = new Date(startDate.getTime() + (currentWeekIndex * 7 + i) * 24 * 60 * 60 * 1000);
        const dateKey = dateToCheck.getTime();

        console.log("Checking Date:", dateToCheck.toDateString(), "Key:", dateKey); // Debugging output

        if (eventsByDate[dateKey]) {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event-item';
            const eventCount = eventsByDate[dateKey].length;

            // Create a container for the images
            const imagesContainer = document.createElement('div');
            imagesContainer.className = 'images-container';

            // Loop through the events for that date
            eventsByDate[dateKey].forEach(event => {
                const imgDiv = document.createElement('div');
                imgDiv.className = 'image-wrapper';
                imgDiv.style.flex = `1 0 ${100 / eventCount}%`; // Share space equally
                imgDiv.innerHTML = `<img src="${event.image}" alt="${event.name}" class="event-image">`;
                imagesContainer.appendChild(imgDiv);
            });

            eventDiv.appendChild(imagesContainer);
            weekEventsContainer.appendChild(eventDiv);
        }
    }
}

// Function to change the week
function changeWeek(direction) {
    currentWeek += direction; // Update the current week
    displayEvents(); // Refresh the displayed events
}

// Call the function to display events initially
displayEvents();