// Home Page Interaction
document.getElementById('clickMe').addEventListener('click', function() {
    document.getElementById('output').textContent = 'You clicked the button!';
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you for your message!';
    document.getElementById('contactForm').reset();
});