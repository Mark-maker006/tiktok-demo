export function updateSpotlight(event) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  event.currentTarget.style.setProperty('--spotlight-x', `${x}px`);
  event.currentTarget.style.setProperty('--spotlight-y', `${y}px`);
}
