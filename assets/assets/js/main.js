// Scroll reveal
const sections = document.querySelectorAll('.reveal');
const reveal = () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 120) {
      sec.classList.add('active');
    }
  });
};
window.addEventListener('scroll', reveal);
// Counters
const counters = document.querySelectorAll('.counter');
let started = false;
const startCounters = () => {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let value = 0;
    const step = target / 120;
    const update = () => {
      value += step;
      if (value < target) {
        counter.textContent = Math.floor(value);
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    };
    update();
  });
};
window.addEventListener('scroll', () => {
  const impact = document.getElementById('impact');
  if (impact && impact.getBoundingClientRect().top < window.innerHeight && !started) {
    startCounters();
    started = true;
  }
});
