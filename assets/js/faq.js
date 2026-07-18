document.querySelectorAll('[data-accordion] details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    item.closest('[data-accordion]').querySelectorAll('details[open]').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
