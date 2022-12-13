const LanguageCounters = document.querySelectorAll(
  '.language__item-wrapper .progress-value'
);
const LanguageCountersSection = document.querySelector('.languages');
let started = false;

// counting function
const count = (el) => {
  const goal = el.dataset.goal;
  let x = 0;
  const count = setInterval(() => {
    x++;
    el.style.width = x + '%';
    // to stop counting
    if (x == parseInt(goal)) {
      clearInterval(count);
    }
  }, 2000 / parseInt(goal));
};

window.onscroll = () => {
  if (
    parseInt(window.scrollY) >=
    parseInt(LanguageCountersSection.offsetTop - 850)
  ) {
    if (!started) {
      LanguageCounters.forEach((el) => count(el));
      started = true;
    }
  }
};
