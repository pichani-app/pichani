document.querySelectorAll('.footer-signup').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = form.parentElement.querySelector('.footer-note');
    message.textContent = form.elements.email.checkValidity() ? 'Thanks for subscribing to our monthly newsletter.' : 'Please enter a valid email address.';
  });
});
