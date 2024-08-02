document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const cards = document.querySelectorAll('.card');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      cursor.classList.add('grow');
    });

    card.addEventListener('mouseleave', () => {
      cursor.classList.remove('grow');
    });
  });
});
