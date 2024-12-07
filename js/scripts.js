
// app.js

// JavaScript for dynamic card generation on the Home Page

// Job Categories Data
const jobCategories = [
    { title: "Bank Jobs", description: "Latest government bank job openings." },
    { title: "Railway Jobs", description: "Get updates on Indian railway job vacancies." },
    { title: "SSC Jobs", description: "Latest SSC recruitment and results." },
    { title: "Teaching Jobs", description: "Apply for government teaching jobs." },
    { title: "Police Jobs", description: "Explore police department recruitment." },
    { title: "Defence Jobs", description: "Find job opportunities in the defense sector." },
];

// Important Notices Data
const notices = [
    { title: "New Exam Date", description: "The exam date for SSC has been changed to 20th January 2025." },
    { title: "Admit Card Available", description: "Download your admit card for Bank PO exam 2025." },
    { title: "Result Announced", description: "Check your result for the Railway Clerk exam." },
    { title: "Application Deadline", description: "The application deadline for Police Constable is 15th December." },
    { title: "Syllabus Update", description: "New syllabus for SSC 2025 has been released." },
    { title: "Interview Results", description: "Interview results for Teaching Jobs have been announced." },
];

// Function to render cards dynamically for Job Categories and Notices
function renderCards() {
    const categoryContainer = document.getElementById("cards-container");
    const noticeContainer = document.getElementById("notice-cards-container");

    // Rendering Job Category Cards
    jobCategories.forEach(category => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${category.title}</h3>
            <p>${category.description}</p>
        `;
        categoryContainer.appendChild(card);
    });

    // Rendering Important Notices Cards
    notices.forEach(notice => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${notice.title}</h3>
            <p>${notice.description}</p>
        `;
        noticeContainer.appendChild(card);
    });
}

// Call renderCards when the page loads
window.onload = renderCards;

// app.js

// Function to add dynamic content or interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sarkari Naukari Results website loaded successfully.");

    // Example of adding interactivity: A scroll-to-top button could be added here.
    const scrollButton = document.createElement('button');
    scrollButton.innerText = 'Back to Top';
    scrollButton.style.position = 'fixed';
    scrollButton.style.bottom = '20px';
    scrollButton.style.right = '20px';
    scrollButton.style.padding = '10px';
    scrollButton.style.backgroundColor = '#007BFF';
    scrollButton.style.color = '#fff';
    scrollButton.style.border = 'none';
    scrollButton.style.borderRadius = '5px';
    scrollButton.style.cursor = 'pointer';

    document.body.appendChild(scrollButton);

    // Scroll to top functionality
    scrollButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


// app.js

// Function to add dynamic content or interactivity
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sarkari Naukari Results website loaded successfully.");

    // Function to toggle dark/light mode
    const toggleButton = document.createElement('button');
    toggleButton.id = 'toggle-mode';
    toggleButton.innerText = 'Switch to Dark Mode';
    document.body.appendChild(toggleButton);

    // Check if dark mode preference is stored in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelector('article').classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
        toggleButton.innerText = 'Switch to Light Mode';
    }

    // Toggle Dark Mode
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        document.querySelector('article').classList.toggle('dark-mode');
        toggleButton.classList.toggle('dark-mode');

        // Save the preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleButton.innerText = 'Switch to Light Mode';
        } else {
            localStorage.setItem('theme', 'light');
            toggleButton.innerText = 'Switch to Dark Mode';
        }
    });
});
