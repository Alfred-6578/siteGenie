/* ================================================
   siteGenie — Landing Page JS
   ================================================ */

/* ---------- Navbar scroll + mobile menu ---------- */
const navbar = document.getElementById('navbar');
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  mobileMenu.classList.toggle('active');
  document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

document.querySelectorAll('.mob-link').forEach(a => {
  a.addEventListener('click', () => {
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
const revealEls = document.querySelectorAll('.reveal');
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in-view');
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.2 });
revealEls.forEach(el => revealIO.observe(el));

/* ---------- Preview: tab switching ---------- */
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.mockup-panel');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const target = tab.dataset.tab;
    document.querySelector(`.mockup-panel[data-panel="${target}"]`).classList.add('active');
  });
});

/* ---------- Preview: 3D mouse tilt ---------- */
const mockupCard = document.getElementById('mockupCard');
window.addEventListener('mousemove', (e) => {
  if (!mockupCard) return;
  const rect = mockupCard.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const mx = e.clientX - cx;
  const my = e.clientY - cy;
  let rotateY = (mx / (rect.width / 2)) * 10;
  let rotateX = 5 - (my / (rect.height / 2)) * 10;
  rotateX = Math.max(-10, Math.min(10, rotateX));
  rotateY = Math.max(-10, Math.min(10, rotateY));
  mockupCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

/* ---------- How it works: typing preview ---------- */
const typedEl = document.getElementById('typedText');
if (typedEl) {
  const texts = ['Business: Tech Startup...', 'Industry: SaaS Platform...', 'Audience: Entrepreneurs...'];
  let tIndex = 0, cIndex = 0, currentText = '';
  setInterval(() => {
    if (cIndex < texts[tIndex].length) {
      currentText += texts[tIndex][cIndex];
      typedEl.innerHTML = currentText + '<span class="tp-cursor"></span>';
      cIndex++;
    } else {
      setTimeout(() => {
        tIndex = (tIndex + 1) % texts.length;
        cIndex = 0; currentText = '';
        typedEl.innerHTML = '<span class="tp-cursor"></span>';
      }, 2000);
    }
  }, 80);
}

/* ---------- How it works: progress bar ---------- */
const progressFill = document.getElementById('progressFill');
const progressLabel = document.getElementById('progressLabel');
if (progressFill) {
  let progress = 0;
  const progressIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        setTimeout(() => {
          const interval = setInterval(() => {
            progress += 2;
            if (progress >= 100) {
              progress = 100;
              progressLabel.textContent = '✓ Complete!';
              clearInterval(interval);
            }
            progressFill.style.width = progress + '%';
          }, 30);
        }, 1500);
        progressIO.disconnect();
      }
    });
  }, { threshold: 0.5 });
  progressIO.observe(progressFill);
}

/* ---------- How it works: icons demo toggle ---------- */
const iconEdit = document.getElementById('iconEdit');
const iconExport = document.getElementById('iconExport');
if (iconEdit && iconExport) {
  let editMode = true;
  iconEdit.classList.add('active');
  setInterval(() => {
    editMode = !editMode;
    iconEdit.classList.toggle('active', editMode);
    iconExport.classList.toggle('active', !editMode);
  }, 4000);
}

/* ---------- Testimonial carousel ---------- */
const track = document.getElementById('carouselTrack');
const dotsContainer = document.getElementById('dots');
const cards = track ? track.children : [];
let currentIndex = 0;
const perView = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;

function renderDots() {
  if (!dotsContainer) return;
  dotsContainer.innerHTML = '';
  const snaps = Math.max(1, cards.length - perView() + 1);
  for (let i = 0; i < snaps; i++) {
    const btn = document.createElement('button');
    if (i === currentIndex) btn.classList.add('active');
    btn.addEventListener('click', () => scrollTo(i));
    dotsContainer.appendChild(btn);
  }
}

function scrollTo(index) {
  const snaps = Math.max(1, cards.length - perView() + 1);
  currentIndex = ((index % snaps) + snaps) % snaps;
  const card = cards[0];
  if (!card) return;
  const cardW = card.getBoundingClientRect().width;
  const gap = 32;
  track.style.transform = `translateX(-${currentIndex * (cardW + gap)}px)`;
  [...dotsContainer.children].forEach((d, i) => d.classList.toggle('active', i === currentIndex));
}

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
if (prevBtn) prevBtn.addEventListener('click', () => scrollTo(currentIndex - 1));
if (nextBtn) nextBtn.addEventListener('click', () => scrollTo(currentIndex + 1));

if (track) {
  renderDots();
  scrollTo(0);
  window.addEventListener('resize', () => { renderDots(); scrollTo(currentIndex); });
  // Autoplay
  setInterval(() => { scrollTo(currentIndex + 1); }, 5000);
}

/* ---------- Final CTA particles ---------- */
const particleSystem = document.getElementById('particleSystem');
if (particleSystem) {
  const colors = ['rgba(255,255,255,0.6)', 'rgba(6,182,212,0.6)', 'rgba(168,85,247,0.6)'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 8 + 4;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.5 + 0.3;
    p.style.width = size + 'px';
    p.style.height = size + 'px';
    p.style.left = Math.random() * 100 + '%';
    p.style.backgroundColor = colors[Math.floor(Math.random() * 3)];
    p.style.animationDuration = `${duration}s, 2s`;
    p.style.animationDelay = `${delay}s, 0s`;
    p.style.opacity = opacity;
    particleSystem.appendChild(p);
  }
}

/* ---------- Final CTA confetti ---------- */
const ctaBtn = document.getElementById('ctaBtn');
const confettiWrap = document.getElementById('confetti');
if (ctaBtn && confettiWrap) {
  const confettiColors = ['#00D4FF', '#8759f4', '#EC4899', '#F59E0B', '#10B981', '#fff'];
  ctaBtn.addEventListener('click', () => {
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + '%';
      piece.style.width = (Math.random() * 8 + 6) + 'px';
      piece.style.height = (Math.random() * 8 + 6) + 'px';
      piece.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      piece.style.animationDelay = (Math.random() * 0.5) + 's';
      piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
      confettiWrap.appendChild(piece);
      setTimeout(() => piece.remove(), 4000);
    }
  });
}

/* ---------- Smooth scroll for in-page anchors ---------- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
