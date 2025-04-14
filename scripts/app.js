// This file contains JavaScript code that adds interactivity to the web page.

document.addEventListener('DOMContentLoaded', () => {
    const contactButton = document.getElementById('contact-button');
    const contactInfo = document.getElementById('contact-info');

    contactButton.addEventListener('click', () => {
        contactInfo.classList.toggle('visible');
    });
});