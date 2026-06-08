const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const onScroll = () => {
  document.documentElement.style.setProperty('--scroll', String(window.scrollY));
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();


const hero = document.querySelector('.hero');
const heroVideo = document.querySelector('.hero-media video');
if (hero && heroVideo) {
  const activateVideo = () => hero.classList.add('has-video');
  heroVideo.addEventListener('loadeddata', activateVideo);
  heroVideo.addEventListener('canplay', activateVideo);
  heroVideo.addEventListener('playing', activateVideo);
}
