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
});
