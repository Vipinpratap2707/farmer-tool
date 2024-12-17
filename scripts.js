// Function to display rental tool details in the contact section
function showDetails(tool) {
    const toolSelect = document.getElementById('tool');
    toolSelect.value = tool;  // Set the selected tool in the form
}

// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page refresh on form submit

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tool = document.getElementById('tool').value;

    // Simulate form submission success
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.innerHTML = `<p>Thank you, ${name}! We have received your request to rent the ${tool}. We will contact you shortly at ${email}.</p>`;
    responseMessage.style.color = 'green';

    // Reset form
    document.getElementById('contactForm').reset();
});
