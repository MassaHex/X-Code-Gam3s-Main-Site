document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.cursor');
  const links = document.querySelectorAll('.link');

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener('mouseenter', (e) => {
    cursor.style.opacity = `1`;
  });

  document.addEventListener('mouseleave', (e) => {
    cursor.style.opacity = `0`;
  });

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.classList.add('grow');
    });

    link.addEventListener('mouseleave', () => {
      cursor.classList.remove('grow');
    });
  });
});
