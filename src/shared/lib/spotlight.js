export function updateSpotlight(event) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  element.style.setProperty('--spotlight-x', `${x}px`);
  element.style.setProperty('--spotlight-y', `${y}px`);
  element.classList.add('is-spotlight-active');

  if (!element.dataset.spotlightBound) {
    element.dataset.spotlightBound = 'true';
    element.addEventListener('mouseleave', () => {
      element.classList.remove('is-spotlight-active');
    });
  }
}
