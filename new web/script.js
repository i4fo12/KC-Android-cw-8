const navButton = document.querySelector('.nav-button');
const navList = document.querySelector('.nav-list');

navButton.addEventListener('click', () => {
  navList.classList.toggle('open');
});

const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});