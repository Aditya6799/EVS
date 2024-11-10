document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show response message
    const responseMessage = document.getElementById('response-message');
    responseMessage.textContent = `Thank you, ${name}! Your message has been received.`;
    responseMessage.style.color = 'green';

    // Reset form
    this.reset();
});
