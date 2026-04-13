function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Mengirim...';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = '✓ Pesan Terkirim!';
    btn.style.background = '#4a7c3c';
    setTimeout(() => {
      btn.textContent = 'Kirim Pesan →';
      btn.style.background = '';
      btn.disabled = false;
      e.target.reset();
    }, 3000);
  }, 1200);
}

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Navbar shrink on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.padding = window.scrollY > 60 ? '12px 60px' : '20px 60px';
});