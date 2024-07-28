document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const cards = document.querySelectorAll('.card');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
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
