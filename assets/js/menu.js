document.querySelectorAll('.menu-toggle').forEach((button) => {
  const menu = document.getElementById(button.getAttribute('aria-controls'));
  if (!menu) return;

  button.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (!menu.classList.contains('is-open')) return;
    if (!menu.contains(event.target) && !button.contains(event.target)) {
      menu.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !menu.classList.contains('is-open')) return;
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
    button.focus();
  });
});
