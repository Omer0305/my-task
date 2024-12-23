// Function to display a greeting based on the time of day
function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();
    
    let greetingMessage = '';
    
    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = 'Good Morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.textContent = greetingMessage;
}

// Update greeting when the page loads
window.onload = updateGreeting;
