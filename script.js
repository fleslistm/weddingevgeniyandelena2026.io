// Анимация появления секций при скролле
const sections = document.querySelectorAll('section');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < triggerBottom) sec.classList.add('visible');
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Обработка формы RSVP
const form = document.getElementById('rsvp-form');
const thanks = document.querySelector('.thanks');

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  thanks.style.display = 'block';
  setTimeout(() => thanks.style.display = 'none', 4000);
});

