document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitButton = document.getElementById('submit-button');

  form.addEventListener('submit', async function (e) {

    e.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    const formData = new FormData(form);

    try {

      const response = await fetch('https://formspree.io/f/maqkqqke', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json'}
      });

      if (response.ok) {

        status.textContent = "Message sent successfully!";
        status.style.color = '#4ade80';
        status.classList.add('visible');
        form.reset();

      } else {

        status.textContent = "Failed to send message. Please try again.";
        status.style.color = '#f87171';
        status.classList.add('visible');

      }
    
    } catch (error) {

      status.textContent = "An error occurred. Please try again.";
      status.style.color = '#f87171';
      status.classList.add('visible');

    }

    submitButton.disabled = false;
    submitButton.innerHTML = 'Send Message<svg xmlns="http://www.w3.org/2000/svg" class="inline w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round"  stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>';

  });


});