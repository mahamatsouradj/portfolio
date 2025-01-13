// Select the menu toggle button and the navigation links container
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Add an event listener for the menu toggle button
menuToggle.addEventListener('click', function() {
    // Toggle the 'active' class to show or hide the menu
    navLinks.classList.toggle('active');
});
