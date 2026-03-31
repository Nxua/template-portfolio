// Mobile nav
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.cssText = open ? '' : 'display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:rgba(242,240,235,.98);padding:1rem 5%;gap:1.25rem;border-bottom:1px solid #e0ddd6;';
  });
}

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; } });
}, { threshold: 0.1 });

document.querySelectorAll('.work-card, .srv-row, .skill-pill').forEach(el => {
  el.style.opacity = '0'; el.style.transform = 'translateY(20px)'; el.style.transition = 'opacity .5s ease, transform .5s ease';
  observer.observe(el);
});

// Service rows hover
document.querySelectorAll('.srv-row').forEach(row => {
  row.style.transition = 'padding .2s ease';
});
